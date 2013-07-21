package me.shadaj.collidium

import js.Dynamic.{ global => g }

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var winnable = true

  val world = b2World(b2Vec2(0.0,0.75))

  val ground = b2FixtureDef()
  ground.density = 0.5
  ground.friction = 0.0

  val groundBody = b2BodyDef()
  groundBody.asInstanceOf[js.Dynamic].updateDynamic("type")(g.Box2D.Dynamics.b2Body.b2_staticBody)

  val polygon = g.eval("new Box2D.Collision.Shapes.b2PolygonShape()").asInstanceOf[b2PolygonShape]
  polygon.SetAsBox(250, 2)

  ground.shape = polygon
  ground.m_shape = polygon

  groundBody.position = b2Vec2(250, 2)
  world.CreateBody(groundBody).CreateFixture(ground)

  ball.addToWorld(world)

  walls.foreach(_.addToWorld(world))

  val ballFixture = ball.worldFixture
  val ballBody = ballFixture.asInstanceOf[js.Dynamic].selectDynamic("GetBody")().asInstanceOf[b2Body]
  ballBody.ApplyImpulse(b2Vec2(-100000, -100000), ballFixture.asInstanceOf[js.Dynamic].selectDynamic("GetBody")().asInstanceOf[b2Body].GetWorldCenter())


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
    // if (started) {
    //   if (ball.magnitude >= 0.01) {
    //     ball.magnitude = ball.magnitude - friction
    //   }
    //   walls.foreach { wall =>
    //     wall.colliding(ball)
    //   }
    //   obstacles.foreach { obstacle =>
    //     obstacle.colliding(ball)
    //   }
    //   if (hole.inBoundsOf(ball) && winnable == true) {
    //     println("You Won!")
    //     Main.backgroundMusic.pause
    //     Main.youwonMusic.play
    //     winnable = false
    //     ball.magnitude = 0
    //   }
    //   ball.update
    // }

    world.Step(2.0/60.0, 8, 3)
  }
}