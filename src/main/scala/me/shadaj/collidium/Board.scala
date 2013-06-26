package me.shadaj.collidium

class Board(val name: String, val cannonLocation: (Float, Float), val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true

  def paint(canvas: Canvas2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0,0,500,500)
    walls.foreach(_.draw(canvas))
    obstacles.foreach(_.draw(canvas))
    if (Main.curObstacle.isDefined) {
    	Main.curObstacle.get.draw(canvas)
    }
    hole.draw(canvas)
    if (started) {
      ball.draw(canvas)
    } else {
      (new Circle(new Point(cannonLocation._1, cannonLocation._2), 50, "green")).draw(canvas)
      if (slingOption.isDefined) {
        slingOption.get.draw(canvas)
      }
    }
  }

  def update {
    if (started) {
      if (ball.magnitude >= 0.01) {
        ball.magnitude = ball.magnitude - friction
      }
      walls.foreach { wall =>
        wall.colliding(ball)
      }
      obstacles.foreach { obstacle =>
        obstacle.colliding(ball)
      }
      if (hole.inBoundsOf(ball) && winnable == true) {
        println("You Won!")
        Main.backgroundMusic.pause
        Main.youwonMusic.play
        winnable = false
        ball.magnitude = 0
      }
      ball.update
    }

    //TODO: Add cursor in update
  }
}