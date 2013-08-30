package me.shadaj.collidium

import js.Dynamic.{ global => g }

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true

  val world = b2World(b2Vec2(0.0,0.0))

  ball.addToWorld(world)

  walls.foreach(_.addToWorld(world))

  def paint(canvas: Canvas2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0,0,500,500)
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
    world.Step(2.0/60.0, 8, 3)
  }
}