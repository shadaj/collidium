package me.shadaj.scalajs.physicsjs

import scala.scalajs.js
import scala.scalajs.js.Any.fromInt
import scala.scalajs.js.annotation.JSName

@JSName("Physics")
object Physics extends js.Object {
  def apply(): World = ???
  def apply(setup: PhysicsSetup): World = ???
  def body(shape: js.String, setup: ShapeSetup): Body = ???
  def renderer(name: js.String, setup: RendererSetup): Renderer = ???
  def behavior(name: js.String): Behavior = ???
}

trait Behavior extends js.Object

trait ShapeSetup extends js.Object {
  var x: js.Number
  var y: js.Number
  var vx: js.Number
  var vy: js.Number
  var fixed: js.Boolean
}

trait CircleSetup extends ShapeSetup {
  var radius: js.Number
}

trait PolygonSetup extends ShapeSetup {
  var vertices: js.Array[Vector]
}

object PolygonSetup {
  def apply(x: js.Number, y: js.Number, vx: js.Number, vy: js.Number, fixed: js.Boolean, vertices: js.Array[Vector]) = {
    js.Dynamic.literal(x = x, y = y, vx = vx, vy = vy, fixed = fixed, vertices = vertices).asInstanceOf[PolygonSetup]
  }
}

object CircleSetup {
  def apply(x: js.Number, y: js.Number, vx: js.Number, vy: js.Number, fixed: js.Boolean, radius: js.Number) = {
    js.Dynamic.literal(x = x, y = y, vx = vx, vy = vy, fixed = fixed, radius = radius).asInstanceOf[CircleSetup]
  }
}

trait PhysicsSetup extends js.Object {
  var timestep: js.Number
  var maxIPF: js.Number
  var integrator: js.String
}

object PhysicsSetup {
  def apply(timestep: js.Number, maxIPF: js.Number, integrator: js.String): PhysicsSetup = {
    js.Dynamic.literal(timestep = timestep, maxIPF = maxIPF, integrator = integrator).asInstanceOf[PhysicsSetup]
  }
}

trait Renderer extends js.Object

trait RendererSetup extends js.Object {
  var el: js.String
  var width: js.Number
  var height: js.Number
  var meta: js.Boolean
}

object RendererSetup {
  def apply(el: js.String, width: js.Number, height: js.Number, meta: js.Boolean): RendererSetup = {
    js.Dynamic.literal(el = el, width = width, height = height, meta = meta).asInstanceOf[RendererSetup]
  }
}

trait World extends js.Object {
  def add(body: Body): Unit
  def add(Behavior: Behavior): Unit
  def step(time: js.Number): Unit
  def add(renderer: Renderer): Unit
  def subscribe(mode: js.String, func: js.Function0[Unit]): Unit
  def subscribe(mode: js.String, func: js.Function1[js.Dynamic, Unit]): Unit
  def render(): Unit
  def destroy(): Unit
}

trait Body extends js.Object {
  var state: BodyState
  def applyForce(f: Vector): Unit
  def accelerate(f: Vector): Unit
  def recalc: Unit
  var fixed: js.Boolean
}

trait BodyState extends js.Object {
  var pos: Vector
  var vel: Vector
}

trait Vector extends js.Object {
  def get(i: js.Number): js.Number
  def set(x: js.Number, y: js.Number): Unit
}

object Implicits {
  implicit class BetterVector(vector: Vector) {
    def x = vector.get(0)
    def y = vector.get(1)
  }
}

@JSName("Physics.vector")
object Vector extends js.Object {
  def apply(x: js.Number, y: js.Number): Vector = ???
}

@JSName("Physics.util.ticker")
object Ticker extends js.Object {
  def subscribe(function: js.Function2[js.Number, js.Number, Unit]): Unit = ???
  def unsubscribe(function: js.Function2[js.Number, js.Number, Unit]): Unit = ???
  def start(): Unit = ???
}