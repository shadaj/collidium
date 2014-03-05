package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic.{ global => g }
import Math._
import org.scalajs.dom.CanvasRenderingContext2D
import example.cp._
import example.cp.Implicits._

class Point(var x: Double, var y: Double) {
  override def toString: String = {
    "Point(" + x + "," + y + ")"
  }
}

abstract class Sprite(val color: String)(implicit space: Space) {
  val SCREEN_SIZE = 500

  def draw(canvas: CanvasRenderingContext2D): Unit = {
    canvas.fillStyle = color
    canvas.strokeStyle = color
  }
}

class Circle(var location: Point, val diameter: Int, color: String, usePhysics: Boolean)(implicit space: Space) extends Sprite(color) {
  val radius = diameter / 2
  val mass = math.Pi * radius * radius
  val moment = 0.5 * mass * radius * radius
  val body = if (usePhysics) new Body(mass, moment) else space.staticBody
  if (usePhysics) space.addBody(body)
  body.setPos((location.x, location.y))
  val shape = new CircleShape(body, radius, (0, 0))
  if (usePhysics) space.addShape(shape)
  shape.setElasticity(1)
  
  override def draw(canvas: CanvasRenderingContext2D): Unit = {
      val worldLocation = body.getPos()
      super.draw(canvas)
      canvas.beginPath
      val radius = diameter / 2
      canvas.arc(worldLocation.x, worldLocation.y, radius, 0, 2 * PI, false)
      canvas.fill("nonzero")
  }

  def inBoundsOf(circle: Circle): Boolean = {
    val xshift = circle.body.getPos().x - body.getPos().x
    val yshift = circle.body.getPos().y - body.getPos().y
    val deltaDiameter = (diameter - circle.diameter) / 2
    if ((xshift * xshift) + (yshift * yshift) < (deltaDiameter) * (deltaDiameter) && circle.diameter <= diameter) {
      true
    } else {
      false
    }
  }
}

class Line(val start: Point, val end: Point, color: String)(implicit space: Space) extends Sprite(color) {
  val shape = new SegmentShape(space.staticBody, (start.x, start.y), (end.x, end.y), 0)
  shape.setElasticity(1)
  shape.setFriction(1)
  space.addShape(shape)

  val deltaX = end.x - start.x
  val deltaY = end.y - start.y

  override def draw(canvas: CanvasRenderingContext2D): Unit = {
    super.draw(canvas)
    canvas.lineWidth = 2
    canvas.beginPath
    canvas.moveTo(start.x, start.y)
    canvas.lineTo(end.x, end.y)
    canvas.stroke
  }
}

class Sling(start: Point, end: Point, color: String)(implicit space: Space) extends Line(start, end, color)
