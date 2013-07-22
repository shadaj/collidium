// Turn this project into a Scala.js project by importing these settings
scalaJSSettings

scalaJSSettings

name := "collidium"

version := "0.1-SNAPSHOT"

unmanagedSources in (Compile, ScalaJSKeys.optimizeJS) <++= (
    baseDirectory
) map { base =>
  Seq(base / "js" / "scalajs-runtime.js", base / "js" / "startup.js")
}