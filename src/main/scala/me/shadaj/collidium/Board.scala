package me.shadaj.collidium

import js.Dynamic.{ global => g }

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true

  val X_GRAVITY = 0.0
  val Y_GRAVITY = 0.0
  val SCREEN_SIZE = 500

  val TIME_STEP = 1.0/60.0
  val VELOCITY_ITERATIONS = 8
  val POSITION_ITERATIONS = 3

  val world = b2World(b2Vec2(X_GRAVITY, Y_GRAVITY))

  ball.addToWorld(world)

  walls.foreach(_.addToWorld(world))

  def paint(canvas: Canvas2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0,0,SCREEN_SIZE,SCREEN_SIZE)
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

  def update {
    if (hole.inBoundsOf(ball) && winnable == true) {
      Main.backgroundMusic.pause
      Main.youwonMusic.play
      winnable = false
      ball.freeze
    }
    world.Step(TIME_STEP, VELOCITY_ITERATIONS, POSITION_ITERATIONS)
  }
}