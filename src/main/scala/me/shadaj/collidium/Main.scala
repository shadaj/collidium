package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic.{ global => g }
import js._

import scala.annotation.tailrec

object Main {
  var sandboxMode = false

  var board = BoardLoader.jsonToBoard(g.level0)

  var pullingRubber = false

  var curObstacle: Option[Line] = None

  var drawingLine = false

  val canvasOrig = g.document.getElementById("canvas")
  val canvasDom = canvasOrig.asInstanceOf[DOMElement]
  val canvasElem = canvasOrig.asInstanceOf[HTMLCanvasElement]
  val canvas = canvasElem.getContext("2d").asInstanceOf[Canvas2D]

  val youwonMusic = g.document.getElementById("youWonAudio").asInstanceOf[AudioElement]
  val backgroundMusic = g.document.getElementById("backgroundAudio").asInstanceOf[AudioElement]

  val TICK_INTERVAL = 20
  val SCREEN_SIZE = 500
  val FORCE_SCALE = 10000000000L

  def main(): Unit = {
    val tick = () => {
      board.paint(canvas)
      board.update
    }

    canvasDom.onmousedown = onMouseDown
    canvasDom.onmouseup = onMouseUp
    canvasDom.onmousemove = onMouseMove
    g.setInterval(tick, TICK_INTERVAL)
  }

  def levelJump(): Unit = {
    backgroundMusic.pause
    backgroundMusic.currentTime = 0
    youwonMusic.pause
    youwonMusic.currentTime = 0
    val levelChooser = g.document.getElementById("levelChooser")
    val level = levelChooser.value.toString
    sandboxMode = (level == "sandbox")
    board = BoardLoader.jsonToBoard(g.selectDynamic(level))
  }

  def location(event: MouseEvent): (js.Number, js.Number) = {
    (event.layerX, event.layerY)
  }

  val onMouseDown: MouseEvent => js.Boolean = (event: MouseEvent) => {
    val (x,y) = location(event)
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

  val onMouseMove: MouseEvent => js.Boolean = (event: MouseEvent) => {
    val (x,y) = location(event)
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

  val onMouseUp: MouseEvent => js.Boolean = (event: MouseEvent) => {
    val (x,y) = location(event)
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
      val xForce = -FORCE_SCALE * board.slingOption.get.deltaX
      println(s"x: $xForce")
      val yForce = FORCE_SCALE * board.slingOption.get.deltaY
      println(s"y: $yForce")
      board.ball.worldBody.get.ApplyLinearImpulse(b2Vec2(xForce,yForce),
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