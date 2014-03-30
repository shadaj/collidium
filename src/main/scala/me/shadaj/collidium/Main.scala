package me.shadaj.collidium

import scala.scalajs.js
import scala.scalajs.js.Any.fromBoolean
import scala.scalajs.js.Any.fromFunction1
import scala.scalajs.js.Any.fromInt
import scala.scalajs.js.Any.fromString
import scala.scalajs.js.Any.toArray
import scala.scalajs.js.Boolean
import scala.scalajs.js.Dynamic
import scala.scalajs.js.Number
import scala.scalajs.js.Number.toDouble
import org.scalajs.dom
import org.scalajs.dom.CanvasRenderingContext2D
import org.scalajs.dom.HTMLAudioElement
import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.HTMLSelectElement
import org.scalajs.dom.MouseEvent
import org.scalajs.dom.extensions.Castable
import org.scalajs.dom.Event
import scala.scalajs.js.annotation.JSExport

@JSExport
object Main {
  val boardsArray: scala.Array[Dynamic] = Dynamic.global.levels.asInstanceOf[js.Array[Dynamic]]
  val boards = boardsArray.map { d =>
    () => BoardLoader.jsonToBoard(d)
  }

  var board = boards.head()

  val canvasElem = dom.document.getElementById("canvas").cast[HTMLCanvasElement]
  val canvas = canvasElem.getContext("2d").cast[CanvasRenderingContext2D]

  val backgroundMusic = dom.document.getElementById("backgroundAudio").cast[HTMLAudioElement]

  var currentIndex = 0
  
  @JSExport
  def main(): Unit = {
    canvasElem.onmousedown = onMouseDown
    canvasElem.onmouseup = onMouseUp
    canvasElem.onmousemove = onMouseMove
    
    canvasElem.addEventListener("touchstart", (event: Event) => onMouseDown(event.cast[MouseEvent]))
    canvasElem.addEventListener("touchmove", (event: Event) => onMouseMove(event.cast[MouseEvent]))
    canvasElem.addEventListener("touchend", (event: Event) => onMouseUp(event.cast[MouseEvent]))
  }

  @JSExport
  def levelJump(): Unit = {
    board.world.destroy()
    backgroundMusic.pause
    backgroundMusic.currentTime = 0
    val levelChooser = dom.document.getElementById("levelChooser").cast[HTMLSelectElement]
    val level = levelChooser.value.toString
    currentIndex = boards.indexWhere(_().name == level)
    val newBoard = boards(currentIndex)()
    board = newBoard
  }

  def nextLevel: Unit = {
    board.world.destroy()
    if (currentIndex + 1 < boards.length) {
      backgroundMusic.pause
      backgroundMusic.currentTime = 0
      currentIndex += 1
      val newBoard = boards(currentIndex)()
      board = newBoard
      dom.document.getElementById("levelChooser").cast[HTMLSelectElement].selectedIndex = currentIndex
    } else {
      backgroundMusic.pause
      backgroundMusic.currentTime = 0
      board = boards(currentIndex)()
    }
  }

  def location(event: MouseEvent): (Number, Number) = {
    (event.clientX - canvasElem.offsetLeft + dom.document.body.scrollLeft, event.clientY - canvasElem.offsetTop + dom.document.body.scrollTop)
  }

  val onMouseDown: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    event.preventDefault()
    board.onMouseDown(x, y)

    false
  }

  val onMouseMove: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    event.preventDefault()
    board.onMouseMove(x, y)

    false
  }

  val onMouseUp: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    event.preventDefault()
    board.onMouseUp(x, y)

    false
  }
}