package me.shadaj.collidium

import scala.scalajs.js
import js.Dynamic
import js.Any
import Any._
import scala.language.implicitConversions
import example.cp.Space
import example.cp.Implicits._

object BoardLoader {
  def jsonToPoint(json: js.Dynamic): Point = {
    new Point(json.selectDynamic("x").toString.toInt, json.selectDynamic("y").toString.toInt)
  }

  def jsonToSprite(json: js.Dynamic)(implicit space: Space): Option[Sprite] = {
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
  
  def jsonToBoard(json: js.Dynamic): Board = {
    implicit val space = new Space
    val obstacleJSArray = json.obstacles.asInstanceOf[js.Array[js.Dynamic]]
    
    val obstaclesArray: scala.Array[js.Dynamic] = obstacleJSArray
    
    val obstacles = for (obstacle <- obstaclesArray) yield jsonToSprite(obstacle).get

    new Board(json.name.toString,
              json.maximumStretch.toString.toInt,
              json.margin.toString.toInt,
              obstacles.toList,
              jsonToSprite(json.ball).get.asInstanceOf[Circle],
              jsonToSprite(json.hole).get.asInstanceOf[Circle],
              json.friction.toString.toInt, space)
  }
}