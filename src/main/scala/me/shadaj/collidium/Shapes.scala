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
  def colliding(sprite: Sprite): Unit
  var theta: Double = 0
  var location: Point
  def next: Point
  def move(to: Point) {
    location = to
  }
  def update {
    move(next)
  }
}

class Circle(var location: Point, val diameter: Int, color: String) extends Sprite(color) {
  def next = {
    new Point((location.x + deltaX), (location.y + deltaY))
  }

  override def draw(canvas: Canvas2D): Unit = {
    super.draw(canvas)
    canvas.beginPath
    val radius = diameter/2
    // canvas.fillRect(location.x, location.y, radius, radius)
    canvas.arc(location.x, location.y, radius, 0, 2*PI, false)
    canvas.fill
  }
  
  def colliding(sprite: Sprite) {
  }
  
  def inBoundsOf(circle: Circle) = {
    val xshift = circle.location.x - location.x
    val yshift = circle.location.y - location.y
    val deltaDiameter = (diameter - circle.diameter)/2
    if (circle.diameter > diameter) {
      false
    } else if ((xshift * xshift) + (yshift*yshift) < (deltaDiameter)*(deltaDiameter)) {
      true
    } else false
  }

  def deltaX = Math.cos(theta) * magnitude
  def deltaY = Math.sin(theta) * magnitude
  var magnitude = 0D
}

class Line(val start: Point, val end: Point, color: String) extends Sprite(color) {
  val deltaX = end.x - start.x
  val deltaY = end.y - start.y
  val magnitude = sqrt(deltaX * deltaX + deltaY * deltaY)
  val m = deltaY / deltaX
  
  val c = start.y - (start.x * m)
  def y = (x: Double) => m * x + c // mx + c
  val minX = start.x min end.x
  val maxX = start.x max end.x
  val minY = start.y min end.y
  val maxY = start.y max end.y

  theta = atan(m)
  
  if (start.x < end.x) {
    theta = theta + (180 deg)
  }

  def next = start
  var location = start

  override def draw(canvas: Canvas2D) {
    super.draw(canvas)
    canvas.beginPath
    canvas.moveTo(start.x,start.y)
    canvas.lineTo(end.x,end.y)
    canvas.stroke
  }

  def intersects(line: Line) = {
    if (abs(line.m - m) < 0.001) {
      None // Parallel lines
    } else if(line.m > 1000000 || line.m < -1000000) { //need to fix for straight up lines using isInfinite
      val intersectionY = y(line.minX)
      if (line.maxY > intersectionY && line.minY < intersectionY) {
        Option(new Point(line.minX, intersectionY))
      } else {
        None
      }
    } else {
      val (intersectionX, intersectionY) = if (m > 1000000 || m < -1000000) { //need to fix again as above
        val intersectionX = start.x
        val intersectionY = line.y(intersectionX)
        (intersectionX, intersectionY)
      } else {
        val intersectionX = (line.c - c) / (m - line.m)
        val intersectionY = y(intersectionX)
        (intersectionX, intersectionY)
      }
      if (intersectionX >= line.minX && intersectionX <= line.maxX && intersectionY >= line.minY && intersectionY <= line.maxY
          && intersectionX >= minX && intersectionX <= maxX && intersectionY >= minY && intersectionY <= maxY) {
        Option(new Point(intersectionX, intersectionY))
      } else {
        None
      }
    }
  }
  def colliding(sprite: Sprite) {
    val spriteLine = new Line(sprite.location, sprite.next, sprite.color)
    intersects(spriteLine) match {
      case Some(point) =>
        sprite.move(point)
        sprite.theta = (2 * theta) - sprite.theta 
      case None =>
    }
  }
  
  def colliding(circle: Circle) {
    val spriteLine = new Line(circle.location, circle.next, circle.color)
    intersects(spriteLine) match {
      case Some(point) =>
        val radius = circle.diameter / 2
        val movePoint = new Point(point.x - (cos(circle.theta)*radius), point.y - (sin(circle.theta)*radius))
        circle.move(movePoint)
        circle.theta = (2 * theta) - circle.theta 
      case None =>
    }
  }

  def height = 0
  def width = 0
  def bounds = (start, end)
}

class Sling(start: Point, end: Point, color: String) extends Line(start, end, color)