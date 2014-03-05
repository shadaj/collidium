package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic.{ global => g }
import org.scalajs.dom.CanvasRenderingContext2D
import example.cp._
import Implicits._

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double, implicit val space: Space) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true
  var won = false
  var points = 0
  var pointsToIncrement = 0

  val X_GRAVITY = 0.0
  val Y_GRAVITY = 0.0
  val FORCE_SCALE = 40
  val SCREEN_SIZE = 500

  val TIME_STEP = 1.0 / 60.0
  val VELOCITY_ITERATIONS = 8
  val POSITION_ITERATIONS = 3
  val MAX_YOU_WON_SIZE = 100

  space.gravity = (X_GRAVITY, Y_GRAVITY)

  var youWonTicks = 0D

  def paint(canvas: CanvasRenderingContext2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE)
    if (won) {
      showWin(canvas)
      if (youWonTicks == MAX_YOU_WON_SIZE * 9) {
        Main.nextLevel
      }
    } else {
      walls.foreach(_.draw(canvas))
      obstacles.foreach(_.draw(canvas))
      if (Main.curObstacle.isDefined) {
        Main.curObstacle.get.draw(canvas)
      }
      hole.draw(canvas)
      ball.draw(canvas)
      if (!started) {
        if (slingOption.isDefined) {
          slingOption.get.draw(canvas)
        }
      }
    }
  }

  def update {
    if (hole.inBoundsOf(ball) && winnable == true) {
      Main.backgroundMusic.pause
      Main.youwonMusic.play
      winnable = false
      won = true
    }
    if (started && !won) {
      space.step(TIME_STEP)
    }
  }

  var sandboxWallStart: Option[(Double, Double)] = None

  def onMouseDown(x: Double, y: Double): Unit = {
    val xDiff = ball.location.x - x
    val yDiff = ball.location.y - y
    if (!started) {
      if ((xDiff * xDiff) + (yDiff * yDiff) <= (ball.diameter * ball.diameter)) {
        slingOption = Option(new Sling(new Point(x, y), new Point(x, y), "white"))
        ball.body.setPos((x, y))
      } else if (name == "Sandbox") {
        sandboxWallStart = Option((x, y))
      }
    }
  }

  def onMouseMove(x: Double, y: Double): Unit = {
    if (slingOption.isDefined && !started) {
      val xDiff = x - slingOption.get.start.x
      val yDiff = y - slingOption.get.start.y
      val distance = math.sqrt(xDiff * xDiff + yDiff * yDiff)
      val newBallPos = if (distance <= maximumStretch) {
        (x, y)
      } else {
        val fittedXDiff = xDiff * (maximumStretch / distance)
        val fittedYDiff = yDiff * (maximumStretch / distance)
        val newX = slingOption.get.start.x + fittedXDiff
        val newY = slingOption.get.start.y + fittedYDiff
        (newX, newY)
      }

      ball.body.setPos((newBallPos._1, newBallPos._2))

      slingOption = Option(new Sling(slingOption.get.start, new Point(newBallPos._1, newBallPos._2), "white"))
      slingOption.get.draw(Main.canvas)
    } else if (sandboxWallStart.isDefined) {
      val canvas = Main.canvas
      canvas.lineWidth = 2
      canvas.beginPath
      canvas.moveTo(sandboxWallStart.get._1, sandboxWallStart.get._2)
      canvas.lineTo(x, y)
      canvas.stroke
    }
  }

  def onMouseUp(x: Double, y: Double): Unit = {
    if (slingOption.isDefined && !started) {
      val xDiff = x - slingOption.get.start.x
      val yDiff = y - slingOption.get.start.y
      val distance = math.sqrt(xDiff * xDiff + yDiff * yDiff)
      val newBallPos = if (distance <= maximumStretch) {
        (x, y)
      } else {
        val fittedXDiff = xDiff * (maximumStretch / distance)
        val fittedYDiff = yDiff * (maximumStretch / distance)
        val newX = slingOption.get.start.x + fittedXDiff
        val newY = slingOption.get.start.y + fittedYDiff
        (newX, newY)
      }

      ball.body.setPos((newBallPos._1, newBallPos._2))

      slingOption = Option(new Sling(slingOption.get.start, new Point(newBallPos._1, newBallPos._2), "white"))
      slingOption.get.draw(Main.canvas)

      val xForce = -slingOption.get.deltaX
      val yForce = -slingOption.get.deltaY

      ball.body.applyImpulse((xForce * FORCE_SCALE, yForce * FORCE_SCALE), (0, 0))
      started = true
      Main.backgroundMusic.play()
    } else if (sandboxWallStart.isDefined) {
      println((new Point(sandboxWallStart.get._1, sandboxWallStart.get._2), new Point(x, y)))
      obstacles = (new Line(new Point(sandboxWallStart.get._1, sandboxWallStart.get._2), new Point(x, y), "white")) :: (new Line(new Point(20, 20), new Point(480, 20), "white")) :: obstacles
      sandboxWallStart = None
    }
  }

  private def showWin(canvas: CanvasRenderingContext2D): Unit = {
    youWonTicks += 0.5
    val fontSize = if (youWonTicks % (MAX_YOU_WON_SIZE * 2) <= MAX_YOU_WON_SIZE) {
      youWonTicks % (MAX_YOU_WON_SIZE * 2)
    } else {
      (MAX_YOU_WON_SIZE * 2) - youWonTicks % (MAX_YOU_WON_SIZE * 2)
    }
    canvas.fillStyle = "turquoise"
    canvas.font = fontSize + "px arial"
    val textWidth = canvas.measureText("You Won!").width
    canvas.fillText("You Won!", (SCREEN_SIZE / 2) - (textWidth / 2), SCREEN_SIZE / 2)
  }
}