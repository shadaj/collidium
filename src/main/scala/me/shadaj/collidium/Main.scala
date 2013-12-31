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

  val TICK_INTERVAL = 10
  val SCREEN_SIZE = 500

  

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
    val xDiff = board.ball.location.x - x
    val yDiff = board.ball.location.y - y
    if (!board.started) {
      if ((xDiff * xDiff) + (yDiff * yDiff) <= (board.ball.diameter * board.ball.diameter)) {
        board.slingOption = Option(new Sling(new Point(x, y), new Point(x, y), "white"))
        board.ball.worldBody.get.GetPosition.set_x(x)
        board.ball.worldBody.get.GetPosition.set_y(SCREEN_SIZE - y)
      } else if (sandboxMode) {
        curObstacle = Option(new Line(new Point(x, y), new Point(x, y), "white"))
        drawingLine = true
      }
    }

    false
  }

  val onMouseMove: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    if (board.slingOption.isDefined && !board.started) {
      val fittedX = {
        if (x < (board.slingOption.get.start.x - board.maximumStretch)) {
          board.slingOption.get.start.x - board.maximumStretch
        } else if (x > (board.slingOption.get.start.x + board.maximumStretch)) {
          board.slingOption.get.start.x + board.maximumStretch
        } else {
          x.toDouble
        }
      }

      val fittedY = {
        if (y < (board.slingOption.get.start.y - board.maximumStretch)) {
          board.slingOption.get.start.y - board.maximumStretch
        } else if (y > (board.slingOption.get.start.y + board.maximumStretch)) {
          board.slingOption.get.start.y + board.maximumStretch
        } else {
          y.toDouble
        }
      }

      board.ball.worldBody.get.GetPosition.set_x(fittedX)
      board.ball.worldBody.get.GetPosition.set_y(SCREEN_SIZE - fittedY)

      board.slingOption = Option(new Sling(board.slingOption.get.start, new Point(fittedX, fittedY), "white"))
      board.slingOption.get.draw(canvas)
    } else if (drawingLine && curObstacle.isDefined) {
      curObstacle = Option(new Line(curObstacle.get.start, new Point(x, y), "white"))
      curObstacle.get.draw(canvas)
    }

    false
  }

  val onMouseUp: MouseEvent => Boolean = (event: MouseEvent) => {
    val (x, y) = location(event)
    if (board.slingOption.isDefined && !board.started) {
      val fittedX = {
        if (x < (board.slingOption.get.start.x - board.maximumStretch)) {
          board.slingOption.get.start.x - board.maximumStretch
        } else if (x > (board.slingOption.get.start.x + board.maximumStretch)) {
          board.slingOption.get.start.x + board.maximumStretch
        } else {
          x.toDouble
        }
      }

      val fittedY = {
        if (y < (board.slingOption.get.start.y - board.maximumStretch)) {
          board.slingOption.get.start.y - board.maximumStretch
        } else if (y > (board.slingOption.get.start.y + board.maximumStretch)) {
          board.slingOption.get.start.y + board.maximumStretch
        } else {
          y.toDouble
        }
      }

      board.ball.worldBody.get.GetPosition.set_x(fittedX)
      board.ball.worldBody.get.GetPosition.set_y(SCREEN_SIZE - fittedY)

      board.slingOption = Option(new Sling(board.slingOption.get.start, new Point(fittedX, fittedY), "white"))
      board.slingOption.get.draw(canvas)

      board.ball.makeMovable
      val xForce = -board.slingOption.get.deltaX
      println(s"x: $xForce")
      val yForce = board.slingOption.get.deltaY
      println(s"y: $yForce")
      board.ball.worldBody.get.ApplyLinearImpulse(b2Vec2(xForce, yForce),
        board.ball.worldBody.get.GetWorldCenter())
      pullingRubber = false
      board.started = true
      backgroundMusic.play()
    } else if (drawingLine && curObstacle.isDefined) {
      board.obstacles = (new Line(curObstacle.get.start, new Point(x, y), "white")) :: board.obstacles
      board.obstacles.head.addToWorld(board.world)
      drawingLine = false
      curObstacle = None
    }

    false
  }
}