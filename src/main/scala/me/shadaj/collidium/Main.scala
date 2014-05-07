package me.shadaj.collidium

import scala.scalajs.js
import scala.scalajs.js.Any._
import scala.scalajs.js.Dynamic
import scala.scalajs.js.annotation.JSExport

import org.scalajs.dom
import org.scalajs.dom._
import org.scalajs.dom.extensions.Castable

@JSExport
object Main {
  val boardsArray: scala.Array[Dynamic] = Dynamic.global.levels.asInstanceOf[js.Array[Dynamic]]
  val boards = boardsArray.map { d =>
    val optionNode = dom.document.createElement("option").cast[HTMLOptionElement]
    optionNode.innerHTML = d.name.toString
    optionNode.value = d.name.toString
    dom.document.getElementById("levelChooser").cast[HTMLSelectElement].appendChild(optionNode)
    (d.name.toString, () => BoardLoader.jsonToBoard(d))
  }

  var board = boards.head._2()

  val canvasElem = dom.document.getElementById("canvas").cast[HTMLCanvasElement]
  val canvas = canvasElem.getContext("2d").cast[CanvasRenderingContext2D]

  val backgroundMusic = dom.document.getElementById("backgroundAudio").cast[HTMLAudioElement]
  val hitMusic = dom.document.getElementById("hitAudio").cast[HTMLAudioElement]
  val winMusic = dom.document.getElementById("winAudio").cast[HTMLAudioElement]

  var currentIndex = 0

  @JSExport
  def start(): Unit = {
    canvasElem.onmousedown = onMouseDown
    canvasElem.onmouseup = onMouseUp
    canvasElem.onmousemove = onMouseMove
  }

  @JSExport
  def rocket(): Unit = {
    board.rocket()
  }

  @JSExport
  def levelJump(): Unit = {
    board.world.destroy()
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    val levelChooser = dom.document.getElementById("levelChooser").cast[HTMLSelectElement]
    val level = levelChooser.value.toString
    currentIndex = boards.indexWhere(_._1 == level)
    val newBoard = boards(currentIndex)._2()
    board = newBoard
  }

  def nextLevel(): Unit = {
    board.world.destroy()
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    if (currentIndex + 1 < boards.length) {
      currentIndex += 1
      val newBoard = boards(currentIndex)._2()
      board = newBoard
      dom.document.getElementById("levelChooser").cast[HTMLSelectElement].selectedIndex = currentIndex
    } else {
      board = boards(currentIndex)._2()
    }
  }

  @JSExport
  def reset(): Unit = {
    board.world.destroy()
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    val newBoard = boards(currentIndex)._2()
    board = newBoard
  }

  def location(event: MouseEvent): (Double, Double) = {
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