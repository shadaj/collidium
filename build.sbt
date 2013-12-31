// Turn this project into a Scala.js project by importing these settings

scalaVersion := "2.10.2"

libraryDependencies += "org.scala-lang.modules.scalajs" %% "scalajs-dom" % "0.1-SNAPSHOT"

scalaJSSettings

org.scalastyle.sbt.ScalastylePlugin.Settings

name := "collidium"

version := "0.1-SNAPSHOT"

unmanagedSources in (Compile, ScalaJSKeys.packageJS) +=
    baseDirectory.value / "js" / "startup.js"

ScalaJSKeys.optimizeJSExterns <+= baseDirectory.map(_ / "js" / "box2d.js")