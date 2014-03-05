package me.shadaj.collidium

import scala.scalajs.js
import scala.scalajs.js._
import scala.scalajs.js.Any._
import scala.annotation.tailrec
import org.scalajs.dom.HTMLAudioElement
import org.scalajs.dom.MouseEvent
import org.scalajs.dom.HTMLElement
import org.scalajs.dom.HTMLCanvasElement
import org.scalajs.dom.CanvasRenderingContext2D
import org.scalajs.dom
import org.scalajs.dom.extensions._
import org.scalajs.dom.HTMLSelectElement
import example.cp.Implicits._

object Main {
  val boardsArray: scala.Array[Dynamic] = Dynamic.global.levels.asInstanceOf[js.Array[Dynamic]]
  val boards = boardsArray.map { d =>
    () => BoardLoader.jsonToBoard(d)
  }
  
  var sandboxMode = false

  var board = boards.head()

  var pullingRubber = false

  var curObstacle: Option[Line] = None

  var drawingLine = false

  val canvasElem = dom.document.getElementById("canvas").cast[HTMLCanvasElement]
  val canvas = canvasElem.getContext("2d").cast[CanvasRenderingContext2D]

  val youwonMusic = dom.document.getElementById("youWonAudio").cast[HTMLAudioElement]
  val backgroundMusic = dom.document.getElementById("backgroundAudio").cast[HTMLAudioElement]

  val TICK_INTERVAL = 5
  val SCREEN_SIZE = 500

  val FORCE_SCALE = 40
  
  var currentIndex = 0

  def main(): Unit = {
    val tick = () => {
      board.paint(canvas)
      board.update
    }
    
    canvasElem.onmousedown = onMouseDown
    canvasElem.onmouseup = onMouseUp
    canvasElem.onmousemove = onMouseMove
    dom.setInterval(tick, TICK_INTERVAL)
  }

  def levelJump(): Unit = {
    backgroundMusic.pause
    backgroundMusic.currentTime = 0
    youwonMusic.pause
    youwonMusic.currentTime = 0
    val levelChooser = dom.document.getElementById("levelChooser").cast[HTMLSelectElement]
    val level = levelChooser.value.toString
    currentIndex = boards.indexWhere(_().name == level)
    val newBoard = boards(currentIndex)()
    sandboxMode = newBoard.name == "Sandbox"
    board = newBoard
  }

  def nextLevel: Unit = {
    if (currentIndex + 1 < boards.length) {
      backgroundMusic.pause
      backgroundMusic.currentTime = 0
      youwonMusic.pause
      youwonMusic.currentTime = 0
      currentIndex += 1
      val newBoard = boards(currentIndex)()
      sandboxMode = newBoard.name == "Sandbox"
      board = newBoard
      dom.document.getElementById("levelChooser").cast[HTMLSelectElement].selectedIndex = currentIndex
    } else {
      backgroundMusic.pause
      backgroundMusic.currentTime = 0
      youwonMusic.pause
      youwonMusic.currentTime = 0
      board = boards(currentIndex)()
    }
  }

  def location(event: MouseEvent): (Number, Number) = {
    (event.clientX - canvasElem.offsetLeft + dom.document.body.scrollLeft, event.clientY - canvasElem.offsetTop + dom.document.body.scrollTop)
  }

  val onMouseDown: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    board.onMouseDown(x, y)

    false
  }

  val onMouseMove: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    board.onMouseMove(x, y)

    false
  }

  val onMouseUp: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    board.onMouseUp(x, y)

    false
  }
}