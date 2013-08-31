package me.shadaj.collidium

import js.Dynamic.{ global => g }
import scala.js
import Math._

class Point(var x: Double, var y: Double) {
  override def toString: String = {
    "Point(" + x + "," + y + ")"
  }
}

abstract class Sprite(val color: String) {
  val SCREEN_SIZE = 500

  def draw(canvas: Canvas2D): Unit = {
    canvas.fillStyle = color
    canvas.strokeStyle = color
  }
  var location: Point
  def addToWorld(world: b2World): Unit
}

class Circle(var location: Point, val diameter: Int, color: String, usePhysics: Boolean) extends Sprite(color) {
  val body = b2BodyDef()
  body.set_type(g.Box2D.b2_staticBody)
  body.set_position(b2Vec2(location.x, SCREEN_SIZE - location.y))

  val circleShape = b2CircleShape()
  circleShape.asInstanceOf[js.Dynamic].set_m_radius(diameter/2)

  val fixture = b2FixtureDef()
  fixture.set_shape(circleShape.asInstanceOf[b2Shape])
  fixture.set_restitution(1.0)

  var worldBody: Option[b2Body] = None

  def addToWorld(world: b2World): Unit = {
    worldBody = Some(world.CreateBody(body))
    worldBody.get.CreateFixture(fixture)
  }

  def makeMovable: Unit = {
    if (worldBody.isDefined) {
      worldBody.get.SetType(g.Box2D.b2_dynamicBody)
    }
  }

  def freeze: Unit = {
    if (worldBody.isDefined) {
      worldBody.get.SetType(g.Box2D.b2_staticBody)
    }
  }

  override def draw(canvas: Canvas2D): Unit = {
    if (worldBody.isDefined) {
      val worldLocation = worldBody.get.GetPosition()
      super.draw(canvas)
      canvas.beginPath
      val radius = diameter/2
      canvas.arc(worldLocation.get_x, SCREEN_SIZE - worldLocation.get_y, radius, 0, 2*PI, false)
      canvas.fill
    } else {
      super.draw(canvas)
      canvas.beginPath
      val radius = diameter/2
      canvas.arc(location.x, location.y, radius, 0, 2*PI, false)
      canvas.fill
    }
  }

  def inBoundsOf(circle: Circle): Boolean = {
    val xshift = circle.worldBody.get.GetPosition.get_x - location.x
    val yshift = (SCREEN_SIZE - circle.worldBody.get.GetPosition.get_y) - location.y
    val deltaDiameter = (diameter - circle.diameter)/2
    if ((xshift * xshift) + (yshift*yshift) < (deltaDiameter)*(deltaDiameter) && circle.diameter <= diameter) {
      true
    } else {
      false
    }
  }
}

class Line(val start: Point, val end: Point, color: String) extends Sprite(color) {
  val body = b2BodyDef()
  body.set_type(g.Box2D.b2Body.b2_staticBody)
  val edgeLine = b2EdgeShape()

  val startVector = b2Vec2(start.x, SCREEN_SIZE - start.y)
  val endVector = b2Vec2(end.x, SCREEN_SIZE - end.y)

  edgeLine.Set(startVector, endVector)

  val fixture = b2FixtureDef()
  fixture.set_shape(edgeLine.asInstanceOf[b2Shape])
  fixture.set_restitution(1.0)


  var worldBody: Option[b2Body] = None

  def addToWorld(world: b2World): Unit = {
    worldBody = Some(world.CreateBody(body))
    worldBody.get.CreateFixture(fixture)
  }

  val deltaX = end.x - start.x
  val deltaY = end.y - start.y

  var location = start

  override def draw(canvas: Canvas2D): Unit = {
    super.draw(canvas)
    canvas.lineWidth = 2
    canvas.beginPath
    canvas.moveTo(start.x,start.y)
    canvas.lineTo(end.x,end.y)
    canvas.stroke
  }
}

class Sling(start: Point, end: Point, color: String) extends Line(start, end, color)
