package me.shadaj.collidium

import js.Dynamic.{ global => g }

trait b2Vec2 extends js.Object {
	var x: js.Number
	var y: js.Number
}
object b2Vec2 {
	def apply(x: Double, y: Double) = {
		g.eval(s"new Box2D.Common.Math.b2Vec2($x, $y)").asInstanceOf[b2Vec2]
	}
}

trait b2World extends js.Object {
	def CreateBody(body: b2BodyDef): b2Body
	def Step(timeStep: js.Number, velocityIterations: js.Number, positionIterations: js.Number): Unit
}

object b2World {
	def apply(gravity: b2Vec2) = {
		g.eval("new Box2D.Dynamics.b2World(new Box2D.Common.Math.b2Vec2(" + gravity.x + " , " + gravity.y + "))").asInstanceOf[b2World]
	}
}

trait b2BodyDef extends js.Object {
	var position: b2Vec2
	var `type`: js.Dynamic
}

object b2BodyDef {
	def apply()= {
		g.eval("new Box2D.Dynamics.b2BodyDef").asInstanceOf[b2BodyDef]
	}
}


trait b2Fixture {
	def GetBody(): b2Body
	def m_body: b2Body
}

trait b2Body extends js.Object {
	def CreateFixture(shape: b2Shape, density: js.Number): b2Fixture
	def CreateFixture(fixture: b2FixtureDef): b2Fixture
	def GetPosition(): b2Vec2
	def ApplyImpulse(force: b2Vec2, point: b2Vec2): Unit
	def GetWorldCenter(): b2Vec2
}

trait b2Shape extends js.Object {
	
}

trait b2FixtureDef extends js.Object {
	var density: js.Number
	var friction: js.Number
	var shape: js.Dynamic
	var m_shape: js.Dynamic
}

object b2FixtureDef {
	def apply()= {
		g.eval("new Box2D.Dynamics.b2FixtureDef()").asInstanceOf[b2FixtureDef]
	}
}

trait b2CircleShape extends b2Shape {
	var m_radius: js.Number
}

object b2CircleShape {
	def apply(radius: js.Number)= {
		g.eval(s"new Box2D.Collision.Shapes.b2CircleShape($radius)").asInstanceOf[b2CircleShape]
	}
}

trait b2PolygonShape extends b2Shape {
	def SetAsBox(width: js.Number, height: js.Number)
	def SetAsVector(vertices: js.Array[b2Vec2], vertexCount: js.Number)
}

object b2PolygonShape extends b2Shape {
	def apply()= {
		g.eval("new Box2D.Collision.Shapes.b2PolygonShape()").asInstanceOf[b2PolygonShape]
	}
}

trait b2EdgeShape extends b2Shape {
	def Set(start: b2Vec2, end: b2Vec2): Unit
	// var vertex1: b2Vec2
	// var vertex2: b2Vec2
	var m_v1: b2Vec2
	var m_v2: b2Vec2
}

object b2EdgeShape {
	def apply(v1: b2Vec2, v2: b2Vec2) = {
		// val edge = g.eval("new b2EdgeShape()")
		// edge.Set(start, end).asInstanceOf[b2EdgeShape]

		// g.b2EdgeShape.prototype.__constructor(start, end).asInstanceOf[b2EdgeShape]

		g.eval("new Box2D.Collision.Shapes.b2EdgeShape(" + "new Box2D.Common.Math.b2Vec2(" + v1.x + " , " + v1.y + "), " + "new Box2D.Common.Math.b2Vec2(" + v2.x + " , " + v2.y + ")" + ")").asInstanceOf[b2EdgeShape]

		// g.eval("new b2EdgeShape()").asInstanceOf[b2EdgeShape]
	}
}