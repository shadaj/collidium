package me.shadaj.collidium

import js.Dynamic.{ global => g }

trait b2Vec2 extends js.Object {
	def get_x(): js.Number
	def set_x(newValue: js.Number): Unit
	def get_y(): js.Number
	def set_y(newValue: js.Number): Unit
}
object b2Vec2 {
	def apply(x: Double, y: Double) = {
		g.eval(s"new Box2D.b2Vec2($x, $y)").asInstanceOf[b2Vec2]
	}
}

trait b2World extends js.Object {
	def CreateBody(body: b2BodyDef): b2Body
	def Step(timeStep: js.Number, velocityIterations: js.Number, positionIterations: js.Number): Unit
}

object b2World {
	def apply(gravity: b2Vec2) = {
		g.eval("new Box2D.b2World(new Box2D.b2Vec2(" + gravity.get_x + " , " + gravity.get_y + "))").asInstanceOf[b2World]
	}
}

trait b2BodyDef extends js.Object {
	def get_type: js.Dynamic
	def set_type(newValue: js.Dynamic): Unit
	def get_position: b2Vec2
	def set_position(newValue: b2Vec2): Unit
}

object b2BodyDef {
	def apply()= {
		g.eval("new Box2D.b2BodyDef()").asInstanceOf[b2BodyDef]
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
	def ApplyLinearImpulse(force: b2Vec2, point: b2Vec2): Unit
	def GetWorldCenter(): b2Vec2
	def SetType(newType: js.Dynamic): Unit
}

trait b2Shape extends js.Object {
	
}

trait b2FixtureDef extends js.Object {
	var density: js.Number
	var friction: js.Number
	def get_shape(): b2Shape
	def set_shape(newShape: b2Shape): Unit
	var m_shape: js.Dynamic
	def get_restitution(): js.Number
	def set_restitution(newValue: js.Number): Unit
	def get_density(): js.Number
	def set_density(newValue: js.Number): Unit
}

object b2FixtureDef {
	def apply()= {
		g.eval("new Box2D.b2FixtureDef()").asInstanceOf[b2FixtureDef]
	}
}

trait b2CircleShape extends b2Shape {
	def get_m_radius: js.Number
	def set_m_radius(newValue: js.Number): Unit
}

object b2CircleShape {
	def apply()= {
		g.eval(s"new Box2D.b2CircleShape()").asInstanceOf[b2CircleShape]
	}
}

trait b2PolygonShape extends b2Shape {
	def SetAsBox(width: js.Number, height: js.Number)
	def SetAsVector(vertices: js.Array[b2Vec2], vertexCount: js.Number)
}

object b2PolygonShape extends b2Shape {
	def apply()= {
		g.eval("new Box2D.b2PolygonShape()").asInstanceOf[b2PolygonShape]
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

		g.eval("new Box2D.Collision.Shapes.b2EdgeShape(" + "new Box2D.Common.Math.b2Vec2(" + v1.get_x + " , " + v1.get_y + "), " + "new Box2D.Common.Math.b2Vec2(" + v2.get_x + " , " + v2.get_y + ")" + ")").asInstanceOf[b2EdgeShape]

		// g.eval("new b2EdgeShape()").asInstanceOf[b2EdgeShape]
	}
}