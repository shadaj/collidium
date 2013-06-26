package me.shadaj.collidium

class Angle(degrees: Double) {
  def deg = degrees * (math.Pi/180)
}

object Angle {
  implicit def doubleToAngle(degrees: Double) = new Angle(degrees)
}