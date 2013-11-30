package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic
import js.Any
import Any._
import scala.language.implicitConversions

object BoardLoader {
  def jsonToPoint(json: js.Dynamic): Point = {
    new Point(json.selectDynamic("x").toString.toInt, json.selectDynamic("y").toString.toInt)
  }

  def jsonToSprite(json: js.Dynamic): Option[Sprite] = {
    if (json.typ.toString == "line") {
      Some(new Line(jsonToPoint(json.start), jsonToPoint(json.end), json.color.toString))
    } else if (json.typ.toString == "circle") {
      Some(new Circle(jsonToPoint(json.location),
                      json.diameter.toString.toInt,
                      json.color.toString,
                      json.usePhysics.toString.toBoolean))
    } else {
      None
    }
  }

  def myToArray[T](jsArray: js.Array[T]) = {
    
  }
  
  def jsonToBoard(json: js.Dynamic): Board = {
    val obstacleJSArray = json.obstacles.asInstanceOf[js.Array[js.Dynamic]]
    
    val obstaclesArray: scala.Array[js.Dynamic] = obstacleJSArray
    
    val obstacles = for (obstacle <- obstaclesArray) yield jsonToSprite(obstacle).get

    new Board(json.name.toString,
              json.maximumStretch.toString.toInt,
              json.margin.toString.toInt,
              obstacles.toList,
              jsonToSprite(json.ball).get.asInstanceOf[Circle],
              jsonToSprite(json.hole).get.asInstanceOf[Circle],
              json.friction.toString.toInt)
  }
}