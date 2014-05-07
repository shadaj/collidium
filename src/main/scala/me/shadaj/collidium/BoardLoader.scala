package me.shadaj.collidium

import scala.scalajs.js

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
        json.color.toString))
    } else {
      None
    }
  }

  def jsonToBoard(json: js.Dynamic): Board = {
    val obstacleJSArray = json.obstacles.asInstanceOf[js.Array[js.Dynamic]]

    val obstaclesArray: scala.Array[js.Dynamic] = obstacleJSArray

    val obstacles = for (obstacle <- obstaclesArray) yield jsonToSprite(obstacle).get

    new Board(json.name.toString,
      json.maximumStretch.toString.toInt,
      obstacles.toList,
      jsonToSprite(json.ball).get.asInstanceOf[Circle],
      jsonToSprite(json.hole).get.asInstanceOf[Circle])
  }
}