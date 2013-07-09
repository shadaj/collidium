package me.shadaj.collidium

import js.Dynamic.{ global => g }
import scala.js._

import scala.language.implicitConversions

import scala.annotation.tailrec
import scala.js

import Math._

import Angle._

object Main {
  val board = new Board("baseLevel", 50, 5, List(new Line(new Point(10,10), new Point(490, 10), "white"),
                                                         new Line(new Point(490,10), new Point(490, 490), "white"),
                                                         new Line(new Point(490,490), new Point(10, 490), "white"),
                                                         new Line(new Point(10,490), new Point(10, 10), "white")),
                        new Circle(new Point(400,400), 10, "orange"), new Circle(new Point(100, 100), 50, "red"), 0)

  var pullingRubber = false

  var curObstacle: Option[Line] = None

  var drawingLine = false

  val canvasOrig = g.document.getElementById("canvas")
  val canvasDom = canvasOrig.asInstanceOf[DOMElement]
  val canvasElem = canvasOrig.asInstanceOf[HTMLCanvasElement]
  val canvas = canvasElem.getContext("2d").asInstanceOf[Canvas2D]

  val youwonMusic = g.document.getElementById("youWonAudio").asInstanceOf[AudioElement]
  val backgroundMusic = g.document.getElementById("backgroundAudio").asInstanceOf[AudioElement]

  def main(): Unit = {
    val tick = () => {
      board.paint(canvas)
      board.update
    }

    canvasDom.onmousedown = onMouseDown
    canvasDom.onmouseup = onMouseUp
    canvasDom.onmousemove = onMouseMove

    g.setInterval(tick, 20)
  }

  def location(event: MouseEvent): (js.Number, js.Number) = {
    val x = event.layerX
    val y = event.layerY
    (x,y)
  }

  val onMouseDown = (event: MouseEvent) => {
    val (x,y) = location(event)
    val xDiff = board.ball.location.x - x
    val yDiff = board.ball.location.y - y
    if (!board.started) {
      if ((xDiff * xDiff) + (yDiff * yDiff) <= (board.ball.diameter * board.ball.diameter)) {
        board.slingOption = Option(new Sling(new Point(x, y), new Point(x, y), "white"))
        board.ball.location.x = x
        board.ball.location.y = y
      } else {
        curObstacle = Option(new Line(new Point(x, y), new Point(x, y), "white"))
        drawingLine = true
      }
    }

    event.preventDefault()
  }

  val onMouseMove = (event: MouseEvent) => {
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

      board.ball.location.x = fittedX
      board.ball.location.y = fittedY

      board.slingOption = Option(new Sling(board.slingOption.get.start, new Point(fittedX, fittedY), "white"))
      board.slingOption.get.draw(canvas)
    } else if (drawingLine && curObstacle.isDefined) {
      curObstacle = Option(new Line(curObstacle.get.start, new Point(x, y), "white"))
      curObstacle.get.draw(canvas)
    }

    event.preventDefault
  }

  val onMouseUp = (event: MouseEvent) => {
    val (x,y) = location(event)
    if (board.slingOption.isDefined && !board.started) {
      board.ball.theta = board.slingOption.get.theta
      board.ball.magnitude = board.slingOption.get.magnitude / 40
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

      board.ball.location.x = fittedX
      board.ball.location.y = fittedY

      pullingRubber = false
      board.started = true
      backgroundMusic.play()
    } else if (drawingLine && curObstacle.isDefined) {
      curObstacle = Option(new Line(curObstacle.get.start, new Point(x, y), "white"))
      board.obstacles = curObstacle.get :: board.obstacles
      drawingLine = false
      curObstacle = None
    }

    event.preventDefault
  }
}

