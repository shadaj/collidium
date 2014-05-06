package me.shadaj.collidium

import me.shadaj.scalajs.physicsjs._
import me.shadaj.scalajs.physicsjs.Implicits._

import org.scalajs.dom.CanvasRenderingContext2D

class Point(var x: Double, var y: Double) {
  override def toString: String = {
    "Point(" + x + "," + y + ")"
  }
}

abstract class Sprite(val color: String) {
  val SCREEN_SIZE = 500

  val body: Body

  def draw(canvas: CanvasRenderingContext2D): Unit = {
    canvas.fillStyle = color
    canvas.strokeStyle = color
  }
}

class Circle(var location: Point, val diameter: Int, color: String, usePhysics: Boolean) extends Sprite(color) {
  val setup: CircleSetup = CircleSetup(location.x, location.y, 0, 0, "static", diameter / 2D)
  val body = Physics.body("circle", setup)

  override def draw(canvas: CanvasRenderingContext2D): Unit = {
    val worldLocation = body.state.pos
    super.draw(canvas)
    canvas.beginPath
    val radius = diameter / 2
    canvas.arc(worldLocation.x, worldLocation.y, radius, 0, 2 * math.Pi, false)
    canvas.fill("nonzero")
  }

  def inBoundsOf(circle: Circle): Boolean = {
    val xshift = circle.body.state.pos.x - body.state.pos.x
    val yshift = circle.body.state.pos.y - body.state.pos.y
    val deltaDiameter = (diameter - circle.diameter) / 2
    if ((xshift * xshift) + (yshift * yshift) < (deltaDiameter) * (deltaDiameter) && circle.diameter <= diameter) {
      true
    } else {
      false
    }
  }
}

class Line(val start: Point, val end: Point, color: String) extends Sprite(color) {
  val setup = PolygonSetup((start.x + end.x) / 2D, (start.y + end.y) / 2, 0, 0, "static", Array(Vector(start.x, start.y), Vector(start.x - 1, start.y - 1), Vector(end.x - 1, end.y - 1), Vector(end.x, end.y)))
  val body = Physics.body("convex-polygon", setup)
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

class Sling(start: Point, end: Point, color: String) extends Line(start, end, color)
