package me.shadaj.collidium

import js.Dynamic.{ global => g }
import scala.js
import Math._

import Angle._

class Point(var x: Double, var y: Double) {
  override def toString = {
    "Point(" + x + "," + y + ")"
  }
}

abstract class Sprite(val color: String) {
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
  body.set_position(b2Vec2(location.x, 500 - location.y))

  val circleShape = b2CircleShape()
  circleShape.asInstanceOf[js.Dynamic].set_m_radius(diameter/2)

  val fixture = b2FixtureDef()
  fixture.set_shape(circleShape.asInstanceOf[b2Shape])
  fixture.set_restitution(1.0)

  var worldBody: b2Body = null
  var worldFixture: b2Fixture = null

  def addToWorld(world: b2World) {
    worldBody = world.CreateBody(body)
    worldBody.CreateFixture(fixture)
  }

  def makeMovable: Unit = {
    worldBody.SetType(g.Box2D.b2_dynamicBody)
  }

  def freeze: Unit = {
    worldBody.SetType(g.Box2D.b2_staticBody)
  }

  override def draw(canvas: Canvas2D): Unit = {
    if (worldBody == null) {
      super.draw(canvas)
      canvas.beginPath
      val radius = diameter/2
      canvas.arc(location.x, location.y, radius, 0, 2*PI, false)
      canvas.fill
    } else {
      val worldLocation = worldBody.GetPosition()
      super.draw(canvas)
      canvas.beginPath
      val radius = diameter/2
      canvas.arc(worldLocation.get_x, 500 - worldLocation.get_y, radius, 0, 2*PI, false)
      canvas.fill
    }
  }
  
  def inBoundsOf(circle: Circle) = {
    val xshift = circle.worldBody.GetPosition.get_x - location.x
    val yshift = (500 - circle.worldBody.GetPosition.get_y) - location.y
    val deltaDiameter = (diameter - circle.diameter)/2
    if (circle.diameter > diameter) {
      false
    } else if ((xshift * xshift) + (yshift*yshift) < (deltaDiameter)*(deltaDiameter)) {
      true
    } else false
  }
}

class Line(val start: Point, val end: Point, color: String) extends Sprite(color) {
  val body = b2BodyDef()
  body.asInstanceOf[js.Dynamic].set_type(g.Box2D.b2Body.b2_staticBody)
  val polygonLine = b2EdgeShape()

  val startVector = b2Vec2(start.x, 500 - start.y)
  val endVector = b2Vec2(end.x, 500 - end.y)

  polygonLine.Set(startVector, endVector)

  val fixture = b2FixtureDef()
  fixture.set_shape(polygonLine.asInstanceOf[b2Shape])
  fixture.set_restitution(1.0)


  var worldBody: b2Body = null
  var worldFixture: b2Fixture = null

  def addToWorld(world: b2World) {
    worldBody = world.CreateBody(body)
    worldFixture = worldBody.CreateFixture(fixture)
  }

  val deltaX = end.x - start.x
  val deltaY = end.y - start.y

  var location = start

  override def draw(canvas: Canvas2D) {
    super.draw(canvas)
    canvas.lineWidth = 2
    canvas.beginPath
    canvas.moveTo(start.x,start.y)
    canvas.lineTo(end.x,end.y)
    canvas.stroke
  }
}

class Sling(start: Point, end: Point, color: String) extends Line(start, end, color)
