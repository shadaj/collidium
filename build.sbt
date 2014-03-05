// Turn this project into a Scala.js project by importing these settings

scalaVersion := "2.10.3"

libraryDependencies += "org.scala-lang.modules.scalajs" %% "scalajs-dom" % "0.3-SNAPSHOT"

scalaJSSettings

org.scalastyle.sbt.ScalastylePlugin.Settings

name := "collidium"

version := "0.1-SNAPSHOT"

unmanagedSources in (Compile, ScalaJSKeys.packageJS) +=
    baseDirectory.value / "js" / "startup.js"