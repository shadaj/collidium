package me.shadaj.collidium

import js.Dynamic.{ global => g }
import scala.js._

import scala.language.implicitConversions

import scala.annotation.tailrec
import scala.js

import Math._

import Angle._

object Main {
  var sandboxMode = false

  def jsonToPoint(json: js.Dynamic) = {
    new Point(json.selectDynamic("x").toString.toInt, json.selectDynamic("y").toString.toInt)
  }

  def jsonToSprite(json: js.Dynamic): Sprite = {
    if (json.typ.toString == "line") {
      new Line(jsonToPoint(json.start), jsonToPoint(json.end), json.color.toString)
    } else if (json.typ.toString == "circle") {
      new Circle(jsonToPoint(json.location), json.diameter.toString.toInt, json.color.toString, json.usePhysics.toString.toBoolean)
    } else {
      null
    }
  }

  def jsonToBoard(json: js.Dynamic) = {
    val obstacleJSArray = json.obstacles.asInstanceOf[js.Array[js.Dynamic]]
    val obstaclesArray: scala.Array[js.Dynamic] = obstacleJSArray

    val obstacles = for (obstacle <- obstaclesArray) yield jsonToSprite(obstacle)

    new Board(json.name.toString,
              json.maximumStretch.toString.toInt,
              json.margin.toString.toInt,
              obstacles.toList,
              jsonToSprite(json.ball).asInstanceOf[Circle],
              jsonToSprite(json.hole).asInstanceOf[Circle],
              json.friction.toString.toInt)
  }

  var board = jsonToBoard(g.level0)

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

  def levelJump(): Unit = {
    backgroundMusic.pause
    backgroundMusic.currentTime = 0
    youwonMusic.pause
    youwonMusic.currentTime = 0
    val levelChooser = g.document.getElementById("levelChooser")
    val level = levelChooser.value.toString
    if (level == "sandbox") {
      sandboxMode = true
    } else {
      sandboxMode = false
    }
    board = jsonToBoard(g.selectDynamic(level))
  }

  def location(event: MouseEvent): (js.Number, js.Number) = {
    val x = event.layerX
    val y = event.layerY
    (x,y)
  }

  val onMouseDown: MouseEvent => js.Boolean = (event: MouseEvent) => {
    val (x,y) = location(event)
    val xDiff = board.ball.location.x - x
    val yDiff = board.ball.location.y - y
    if (!board.started) {
      if ((xDiff * xDiff) + (yDiff * yDiff) <= (board.ball.diameter * board.ball.diameter)) {
        board.slingOption = Option(new Sling(new Point(x, y), new Point(x, y), "white"))
        board.ball.worldBody.GetPosition.set_x(x)
        board.ball.worldBody.GetPosition.set_y(500 - y)
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

      board.ball.worldBody.GetPosition.set_x(fittedX)
      board.ball.worldBody.GetPosition.set_y(500 - fittedY)

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

      board.ball.worldBody.GetPosition.set_x(fittedX)
      board.ball.worldBody.GetPosition.set_y(500 - fittedY)

      board.ball.makeMovable
      board.ball.worldBody.ApplyLinearImpulse(b2Vec2(-10000000000L * board.slingOption.get.deltaX, 10000000000L * board.slingOption.get.deltaY), board.ball.worldBody.GetWorldCenter())
      pullingRubber = false
      board.started = true
      backgroundMusic.play()
    } else if (drawingLine && curObstacle.isDefined) {
      curObstacle = Option(new Line(curObstacle.get.start, new Point(x, y), "white"))
      board.obstacles = curObstacle.get :: board.obstacles
      board.obstacles.head.addToWorld(board.world)
      drawingLine = false
      curObstacle = None
    }

    false
  }
}

