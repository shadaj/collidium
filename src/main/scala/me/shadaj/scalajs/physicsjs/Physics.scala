package me.shadaj.scalajs.physicsjs

import scala.scalajs.js
import scala.scalajs.js.annotation.JSName
import scala.scalajs.js.Dynamic.literal

@JSName("Physics")
object Physics extends js.Object {
  def apply(): World = ???
  def apply(setup: PhysicsSetup): World = ???
  def body(shape: String, setup: ShapeSetup): Body = ???
  def renderer(name: String, setup: RendererSetup): Renderer = ???
  def behavior(name: String): Behavior = ???
}

trait Behavior extends js.Object

trait ShapeSetup extends js.Object {
  var x: Double
  var y: Double
  var vx: Double
  var vy: Double
  var treatment: Boolean
}

trait CircleSetup extends ShapeSetup {
  var radius: Double
}

trait PolygonSetup extends ShapeSetup {
  var vertices: js.Array[Vector]
}

object PolygonSetup {
  def apply(x: Double, y: Double, vx: Double, vy: Double, treatment: String, vertices: js.Array[Vector]) = {
    literal(x = x, y = y, vx = vx, vy = vy, treatment = treatment, vertices = vertices).asInstanceOf[PolygonSetup]
  }
}

object CircleSetup {
  def apply(x: Double, y: Double, vx: Double, vy: Double, treatment: String, radius: Double) = {
    literal(x = x, y = y, vx = vx, vy = vy, treatment = treatment, radius = radius).asInstanceOf[CircleSetup]
  }
}

trait PhysicsSetup extends js.Object {
  var timestep: Double
  var maxIPF: Double
  var integrator: String
}

object PhysicsSetup {
  def apply(timestep: Double, maxIPF: Double, integrator: String): PhysicsSetup = {
    literal(timestep = timestep, maxIPF = maxIPF, integrator = integrator).asInstanceOf[PhysicsSetup]
  }
}

trait Renderer extends js.Object

trait RendererSetup extends js.Object {
  var el: String
  var width: Double
  var height: Double
  var meta: Boolean
}

object RendererSetup {
  def apply(el: String, width: Double, height: Double, meta: Boolean): RendererSetup = {
    literal(el = el, width = width, height = height, meta = meta).asInstanceOf[RendererSetup]
  }
}

trait World extends js.Object {
  def add(body: Body): Unit
  def remove(body: Body): Unit
  def add(behavior: Behavior): Unit
  def step(time: Double): Unit
  def add(renderer: Renderer): Unit
  def on(mode: String, func: js.Function0[Unit]): Unit
  def on(mode: String, func: js.Function1[js.Dynamic, Unit]): Unit
  def render(): Unit
  def destroy(): Unit
}

trait Body extends js.Object {
  var state: BodyState
  def applyForce(f: Vector): Unit
  def accelerate(f: Vector): Unit
  def recalc(): Unit
  var treatment: String
}

trait BodyState extends js.Object {
  var pos: Vector
  var vel: Vector
  var angular: AngularData
}

trait AngularData extends js.Object {
  var pos: Double
  var vel: Double
  var acc: Double
}

trait Vector extends js.Object {
  def get(i: Double): Double
  def set(x: Double, y: Double): Unit
}

@JSName("Physics.vector")
object Vector extends js.Object {
  def apply(x: Double, y: Double): Vector = ???
}

@JSName("Physics.util.ticker")
object Ticker extends js.Object {
  def on(function: js.Function1[Double, Unit]): Unit = ???
  def off(function: js.Function1[Double, Unit]): Unit = ???
  def start(): Unit = ???
}

object Implicits {
  implicit class BetterVector(vector: Vector) {
    def x = vector.get(0)
    def y = vector.get(1)
  }
}