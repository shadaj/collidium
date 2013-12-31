package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic.{ global => g }
import org.scalajs.dom.CanvasRenderingContext2D

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true
  var won = false
  var points = 0
  var pointsToIncrement = 0

  val X_GRAVITY = 0.0
  val Y_GRAVITY = 0.0
  val SCREEN_SIZE = 500

  val TIME_STEP = 1.0 / 60.0
  val VELOCITY_ITERATIONS = 8
  val POSITION_ITERATIONS = 3
  val MAX_YOU_WON_SIZE = 100

  val world = b2World(b2Vec2(X_GRAVITY, Y_GRAVITY))
  
  
  ball.addToWorld(world)

  walls.foreach(_.addToWorld(world))

  var youWonTicks = 0D

  def paint(canvas: CanvasRenderingContext2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE)
    if (won) {
      showWin(canvas)
      if (youWonTicks == MAX_YOU_WON_SIZE * 6) {
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
      ball.freeze
    }
    world.Step(TIME_STEP, VELOCITY_ITERATIONS, POSITION_ITERATIONS)
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

  def reset {
    slingOption = None
    started = false
    obstacles = List[Sprite]()
    winnable = true
    won = false
    youWonTicks = 0
  }
}