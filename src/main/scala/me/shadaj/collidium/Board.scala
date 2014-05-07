package me.shadaj.collidium

import org.scalajs.dom
import org.scalajs.dom.{HTMLButtonElement, CanvasRenderingContext2D}
import org.scalajs.dom.extensions.Castable

import me.shadaj.scalajs.physicsjs.{PhysicsSetup, Physics, Ticker, Vector}

class Board(val name: String, val maximumStretch: Int, var obstacles: List[Sprite], val ball: Circle, val hole: Circle) {
  var slingOption: Option[Sling] = None
  var started = false
  var ended = false
  var prevTime = 0D
  var timeRemaining = 60000D
  var curObstacle: Option[Line] = None

  var remainingStrokes = 25
  var remainingFuel = 5

  var strokes = List[Sprite]()
  var prevStrokeLocation: Option[(Double, Double)] = None

  dom.document.getElementById("levelName").innerHTML = name

  val FORCE_SCALE = 1D / 100
  val SCREEN_SIZE = 500

  val world = Physics(PhysicsSetup(1, 16, "improved-euler"))
  val onTick = (time: Double) => {
    if (!ended) {
      world.step(time)
      if (started) {
        timeRemaining -= (time - prevTime)
        if (timeRemaining <= 0) {
          ended = true
          Main.backgroundMusic.pause()
          dom.document.getElementById("timeTaken").innerHTML = "Time Remaining: 0"
          val text = "Time Out!"
          Main.canvas.font = "normal 50px Arial"
          val measure = Main.canvas.measureText(text)
          val xShift = measure.width / 2
          Main.canvas.fillStyle = "orange"
          Main.canvas.fillText(text, 250 - xShift, 250)
          dom.setTimeout(() => {
            Main.reset()
          }, 2000)
        }
      }
      prevTime = time
      update()
    }
  }
  Ticker.on(onTick)
  Ticker.start()
  world.add(Physics.behavior("sweep-prune"))
  world.add(Physics.behavior("body-collision-detection"))
  world.add(Physics.behavior("body-impulse-response"))

  world.add(ball.body)
  obstacles.foreach(w => world.add(w.body))

  world.on("step", () => paint(Main.canvas))

  world.on("collisions:detected", () => Main.hitMusic.play())

  def updateInk(): Unit = {
    dom.document.getElementById("ink-left").setAttribute("style", s"width: ${remainingStrokes * 4}%;")
  }

  def updateFuel(): Unit = {
    dom.document.getElementById("fuel-left").setAttribute("style", s"width: ${remainingFuel * 20}%;")
  }

  updateInk()
  updateFuel()
  dom.document.getElementById("rocketButton").cast[HTMLButtonElement].disabled = false

  def paint(canvas: CanvasRenderingContext2D) {
    if (ended) {
    } else {
      canvas.fillStyle = "black"
      canvas.fillRect(0, 0, SCREEN_SIZE, SCREEN_SIZE)
      dom.document.getElementById("timeTaken").innerHTML = "Time Remaining: " + f"${timeRemaining / 1000}%0.2f"
      updateInk()
      updateFuel()
      obstacles.foreach(_.draw(canvas))
      strokes.foreach(_.draw(canvas))
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

  def rocket(): Unit = {
    if (started && remainingFuel > 0) {
      ball.body.applyForce(Vector(ball.body.state.vel.get(0) * 0.2, ball.body.state.vel.get(1) * 0.2))
      remainingFuel -= 1
      if (remainingFuel == 0) {
        dom.document.getElementById("rocketButton").cast[HTMLButtonElement].disabled = true
      }
    }
  }

  def update(): Unit = {
    if (hole.inBoundsOf(ball) && !ended) {
      Main.backgroundMusic.pause()
      ended = true
      val text = "You Won!"
      Main.canvas.font = "normal 50px Arial"
      val measure = Main.canvas.measureText(text)
      val xShift = measure.width / 2
      Main.canvas.fillStyle = "orange"
      Main.canvas.fillText(text, 250 - xShift, 250)
      Main.winMusic.play()
      dom.setTimeout(() => {
        Main.nextLevel()
      }, 2000)
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
    } else {
      prevStrokeLocation = Some(x, y)
    }
  }

  def onMouseMove(x: Double, y: Double): Unit = {
    if (!started) {
      if (slingOption.isDefined) {
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
    } else if (prevStrokeLocation.isDefined) {
      if (remainingStrokes == 0) {
        prevStrokeLocation = None
      } else {
        val stroke = new Line(new Point(prevStrokeLocation.get._1, prevStrokeLocation.get._2), new Point(x, y), "#2FA4E7")
        prevStrokeLocation = Some(x, y)
        world.add(stroke.body)
        strokes = stroke :: strokes
        remainingStrokes -= 1
        dom.setTimeout(() => {
          world.remove(stroke.body)
          strokes = strokes.init
          remainingStrokes += 1
          updateInk()
        }, 2000)
      }
    }
  }

  def onMouseUp(x: Double, y: Double): Unit = {
    if (!started) {
      if (slingOption.isDefined) {
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

        ball.body.treatment = "dynamic"
        ball.body.applyForce(Vector(xForce * FORCE_SCALE, yForce * FORCE_SCALE))
        started = true
        Main.backgroundMusic.play()
      } else if (curObstacle.isDefined) {
        val newObstacle = new Line(curObstacle.get.start, new Point(x, y), "white")
        obstacles = newObstacle :: obstacles
        world.add(newObstacle.body)
        curObstacle = None
      }
    } else if (prevStrokeLocation.isDefined) {
      prevStrokeLocation = None
    }
  }
}