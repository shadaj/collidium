package me.shadaj.collidium

import org.scalajs.dom
import org.scalajs.dom.CanvasRenderingContext2D

import me.shadaj.scalajs.physicsjs.Physics
import me.shadaj.scalajs.physicsjs.Ticker
import me.shadaj.scalajs.physicsjs.Vector

class Board(val name: String, val maximumStretch: Int, val margin: Int, val walls: List[Sprite], val ball: Circle, val hole: Circle, val friction: Double) {
  var slingOption: Option[Sling] = None
  var started = false
  var obstacles = List[Sprite]()
  var won = false
  var prevTime = 0D
  var timeTaken = 0D
  var curObstacle: Option[Line] = None

  dom.document.getElementById("levelName").innerHTML = name

  val FORCE_SCALE = 1D / 1000
  val SCREEN_SIZE = 500

  val world = Physics()
  val onTick = (time: Double) => {
    if (!won) {
      world.step(time)
      if (started) {
        timeTaken += (time - prevTime)
      }
      prevTime = time
      update
    }
  }
  Ticker.subscribe(onTick)
  Ticker.start()
  world.add(Physics.behavior("body-collision-detection"))
  world.add(Physics.behavior("sweep-prune"))
  world.add(Physics.behavior("body-impulse-response"))

  world.add(ball.body)
  walls.foreach(w => world.add(w.body))

  world.subscribe("step", () => paint(Main.canvas))

  def paint(canvas: CanvasRenderingContext2D) {
    canvas.fillStyle = "black"
    canvas.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE)
    if (won) {
      Main.nextLevel
    } else {
      dom.document.getElementById("timeTaken").innerHTML = "Time Elapsed: " + f"${timeTaken / 1000}%0.2f"
      walls.foreach(_.draw(canvas))
      obstacles.foreach(_.draw(canvas))
      if (curObstacle.isDefined) {
        curObstacle.get.draw(canvas)
      }
      hole.draw(canvas)
      ball.draw(canvas)
      if (!started) {
        if (slingOption.isDefined) {
          slingOption.get.draw(canvas)
        }
      }
    }
  }

  def update {
    if (hole.inBoundsOf(ball) && !won) {
      Main.backgroundMusic.pause
      won = true
      Main.nextLevel
    }
  }

  def onMouseDown(x: Double, y: Double): Unit = {
    val xDiff = ball.location.x - x
    val yDiff = ball.location.y - y
    if (!started) {
      if ((xDiff * xDiff) + (yDiff * yDiff) <= (ball.diameter * ball.diameter)) {
        slingOption = Option(new Sling(new Point(x, y), new Point(x, y), "white"))
        ball.body.state.pos.set(x, y)
      } else if (name == "Sandbox") {
        curObstacle = Some(new Line(new Point(x, y), new Point(x, y), "white"))
      }
    }
  }

  def onMouseMove(x: Double, y: Double): Unit = {
    if (slingOption.isDefined && !started) {
      val xDiff = x - slingOption.get.start.x
      val yDiff = y - slingOption.get.start.y
      val distance = math.sqrt(xDiff * xDiff + yDiff * yDiff)
      val newBallPos = if (distance <= maximumStretch) {
        (x, y)
      } else {
        val fittedXDiff = xDiff * (maximumStretch / distance)
        val fittedYDiff = yDiff * (maximumStretch / distance)
        val newX = slingOption.get.start.x + fittedXDiff
        val newY = slingOption.get.start.y + fittedYDiff
        (newX, newY)
      }

      ball.body.state.pos.set(newBallPos._1, newBallPos._2)

      slingOption = Option(new Sling(slingOption.get.start, new Point(newBallPos._1, newBallPos._2), "white"))
      slingOption.get.draw(Main.canvas)
    } else if (curObstacle.isDefined) {
      curObstacle = Some(new Line(curObstacle.get.start, new Point(x, y), "white"))
    }
  }

  def onMouseUp(x: Double, y: Double): Unit = {
    if (slingOption.isDefined && !started) {
      val xDiff = x - slingOption.get.start.x
      val yDiff = y - slingOption.get.start.y
      val distance = math.sqrt(xDiff * xDiff + yDiff * yDiff)
      val newBallPos = if (distance <= maximumStretch) {
        (x, y)
      } else {
        val fittedXDiff = xDiff * (maximumStretch / distance)
        val fittedYDiff = yDiff * (maximumStretch / distance)
        val newX = slingOption.get.start.x + fittedXDiff
        val newY = slingOption.get.start.y + fittedYDiff
        (newX, newY)
      }

      ball.body.state.pos.set(newBallPos._1, newBallPos._2)

      slingOption = Option(new Sling(slingOption.get.start, new Point(newBallPos._1, newBallPos._2), "white"))
      slingOption.get.draw(Main.canvas)

      val xForce = -slingOption.get.deltaX
      val yForce = -slingOption.get.deltaY

      ball.body.accelerate(Vector(xForce * FORCE_SCALE, yForce * FORCE_SCALE))
      ball.body.fixed = false
      started = true
      Main.backgroundMusic.play()
    } else if (curObstacle.isDefined) {
      val newObstacle = new Line(curObstacle.get.start, new Point(x, y), "white")
      obstacles = newObstacle :: obstacles
      world.add(newObstacle.body)
      curObstacle = None
    }
  }
}