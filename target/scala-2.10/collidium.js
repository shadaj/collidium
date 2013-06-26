(function($) {
  $.registerClass("collidium.Angle", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$degrees = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["deg()D"] = (function() {
      return (this.$jsfield$degrees * ($.m["scala.math.package"]["Pi()D"]() / 180))
    });
    Class.prototype["<init>(D)"] = (function(arg$degrees) {
      this.$jsfield$degrees = arg$degrees;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.deg = (function() {
      return this["deg()D"]()
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(D)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Angle", Class, JSClass, "java.lang.Object", {
      "collidium.Angle": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Angle$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["doubleToAngle(D)Lcollidium.Angle;"] = (function(arg$degrees) {
      return new $.c["collidium.Angle"]()["<init>(D)"](arg$degrees)
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["collidium.Angle"]._instance = this;
      return this
    });
    Class.prototype.doubleToAngle = (function(arg$1) {
      return this["doubleToAngle(D)Lcollidium.Angle;"](arg$1)
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Angle$", Class, JSClass, "java.lang.Object", {
      "collidium.Angle$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("collidium.Angle", "collidium.Angle$")
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Board", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$name = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$margin = 0;
      this.$jsfield$walls = null;
      this.$jsfield$ball = null;
      this.$jsfield$hole = null;
      this.$jsfield$friction = 0.0;
      this.$jsfield$slingOption = null;
      this.$jsfield$started = false;
      this.$jsfield$obstacles = null;
      this.$jsfield$winnable = false
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["name()T"] = (function() {
      return this.$jsfield$name
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["margin()I"] = (function() {
      return this.$jsfield$margin
    });
    Class.prototype["walls()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$walls
    });
    Class.prototype["ball()Lcollidium.Circle;"] = (function() {
      return this.$jsfield$ball
    });
    Class.prototype["hole()Lcollidium.Circle;"] = (function() {
      return this.$jsfield$hole
    });
    Class.prototype["friction()D"] = (function() {
      return this.$jsfield$friction
    });
    Class.prototype["slingOption()Lscala.Option;"] = (function() {
      return this.$jsfield$slingOption
    });
    Class.prototype["slingOption_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$slingOption = arg$x$1
    });
    Class.prototype["started()Z"] = (function() {
      return this.$jsfield$started
    });
    Class.prototype["started_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$started = arg$x$1
    });
    Class.prototype["obstacles()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$obstacles
    });
    Class.prototype["obstacles_=(Lscala.collection.immutable.List;)V"] = (function(arg$x$1) {
      this.$jsfield$obstacles = arg$x$1
    });
    Class.prototype["winnable()Z"] = (function() {
      return this.$jsfield$winnable
    });
    Class.prototype["winnable_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$winnable = arg$x$1
    });
    Class.prototype["paint(Lcollidium.Canvas2D;)V"] = (function(arg$canvas) {
      arg$canvas.fillStyle = "black";
      arg$canvas.fillRect(0, 0, 500, 500);
      var jsx$1 = this["walls()Lscala.collection.immutable.List;"]();
      var jsx$2 = new $.c["collidium.Board$$anonfun$paint$1"]()["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"](this, arg$canvas);
      jsx$1["foreach(Lscala.Function1;)V"](jsx$2);
      var jsx$3 = this["obstacles()Lscala.collection.immutable.List;"]();
      var jsx$4 = new $.c["collidium.Board$$anonfun$paint$2"]()["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"](this, arg$canvas);
      jsx$3["foreach(Lscala.Function1;)V"](jsx$4);
      if ($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]()) {
        $.asInstance($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["get()O"](), "collidium.Line")["draw(Lcollidium.Canvas2D;)V"](arg$canvas)
      } else {
        /*<skip>*/
      };
      this["hole()Lcollidium.Circle;"]()["draw(Lcollidium.Canvas2D;)V"](arg$canvas);
      if (this["started()Z"]()) {
        this["ball()Lcollidium.Circle;"]()["draw(Lcollidium.Canvas2D;)V"](arg$canvas)
      } else {
        new $.c["collidium.Circle"]()["<init>(Lcollidium.Point;IT)"](new $.c["collidium.Point"]()["<init>(DD)"]($.uF(this["cannonLocation()Lscala.Tuple2;"]()["_1()O"]()), $.uF(this["cannonLocation()Lscala.Tuple2;"]()["_2()O"]())), 50, "green")["draw(Lcollidium.Canvas2D;)V"](arg$canvas);
        if (this["slingOption()Lscala.Option;"]()["isDefined()Z"]()) {
          $.asInstance(this["slingOption()Lscala.Option;"]()["get()O"](), "collidium.Line")["draw(Lcollidium.Canvas2D;)V"](arg$canvas)
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["update()V"] = (function() {
      if (this["started()Z"]()) {
        if ((this["ball()Lcollidium.Circle;"]()["magnitude()D"]() >= 0.01)) {
          this["ball()Lcollidium.Circle;"]()["magnitude_=(D)V"]((this["ball()Lcollidium.Circle;"]()["magnitude()D"]() - this["friction()D"]()))
        } else {
          /*<skip>*/
        };
        var jsx$5 = this["walls()Lscala.collection.immutable.List;"]();
        var jsx$6 = new $.c["collidium.Board$$anonfun^date$1"]()["<init>(Lcollidium.Board;)"](this);
        jsx$5["foreach(Lscala.Function1;)V"](jsx$6);
        var jsx$7 = this["obstacles()Lscala.collection.immutable.List;"]();
        var jsx$8 = new $.c["collidium.Board$$anonfun^date$2"]()["<init>(Lcollidium.Board;)"](this);
        jsx$7["foreach(Lscala.Function1;)V"](jsx$8);
        if ((this["hole()Lcollidium.Circle;"]()["inBoundsOf(Lcollidium.Circle;)Z"](this["ball()Lcollidium.Circle;"]()) && (this["winnable()Z"]() === true))) {
          $.m["scala.Predef"]["println(O)V"]("You Won!");
          $.m["collidium.CollidiumOnline"]["backgroundMusic()Lcollidium.AudioElement;"]().pause();
          $.m["collidium.CollidiumOnline"]["youwonMusic()Lcollidium.AudioElement;"]().play();
          this["winnable_=(Z)V"](false);
          this["ball()Lcollidium.Circle;"]()["magnitude_=(D)V"](0.0)
        } else {
          /*<skip>*/
        };
        this["ball()Lcollidium.Circle;"]()["update()V"]()
      } else {
        /*<skip>*/
      }
    });
    Class.prototype["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lcollidium.Circle;Lcollidium.Circle;D)"] = (function(arg$name, arg$cannonLocation, arg$margin, arg$walls, arg$ball, arg$hole, arg$friction) {
      this.$jsfield$name = arg$name;
      this.$jsfield$cannonLocation = arg$cannonLocation;
      this.$jsfield$margin = arg$margin;
      this.$jsfield$walls = arg$walls;
      this.$jsfield$ball = arg$ball;
      this.$jsfield$hole = arg$hole;
      this.$jsfield$friction = arg$friction;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      this.$jsfield$slingOption = $.m["scala.None"];
      this.$jsfield$started = false;
      this.$jsfield$obstacles = $.m["scala.collection.immutable.Nil"];
      this.$jsfield$winnable = true;
      return this
    });
    Class.prototype.name = (function() {
      return this["name()T"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.margin = (function() {
      return this["margin()I"]()
    });
    Class.prototype.walls = (function() {
      return this["walls()Lscala.collection.immutable.List;"]()
    });
    Class.prototype.ball = (function() {
      return this["ball()Lcollidium.Circle;"]()
    });
    Class.prototype.hole = (function() {
      return this["hole()Lcollidium.Circle;"]()
    });
    Class.prototype.friction = (function() {
      return this["friction()D"]()
    });
    Class.prototype.slingOption = (function() {
      return this["slingOption()Lscala.Option;"]()
    });
    Class.prototype["slingOption_="] = (function(arg$1) {
      return this["slingOption_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.started = (function() {
      return this["started()Z"]()
    });
    Class.prototype["started_="] = (function(arg$1) {
      return this["started_=(Z)V"](arg$1)
    });
    Class.prototype.obstacles = (function() {
      return this["obstacles()Lscala.collection.immutable.List;"]()
    });
    Class.prototype["obstacles_="] = (function(arg$1) {
      return this["obstacles_=(Lscala.collection.immutable.List;)V"](arg$1)
    });
    Class.prototype.winnable = (function() {
      return this["winnable()Z"]()
    });
    Class.prototype["winnable_="] = (function(arg$1) {
      return this["winnable_=(Z)V"](arg$1)
    });
    Class.prototype.paint = (function(arg$1) {
      return this["paint(Lcollidium.Canvas2D;)V"](arg$1)
    });
    Class.prototype.update = (function() {
      return this["update()V"]()
    });
    function JSClass(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7) {
      Class.call(this);
      return this["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lcollidium.Circle;Lcollidium.Circle;D)"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Board", Class, JSClass, "java.lang.Object", {
      "collidium.Board": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Board$$anonfun$paint$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$canvas$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.Sprite;)V"] = (function(arg$x$1) {
      arg$x$1["draw(Lcollidium.Canvas2D;)V"](this.$jsfield$canvas$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.Sprite;)V"]($.asInstance(arg$v1, "collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"] = (function(arg$$outer, arg$canvas$1) {
      this.$jsfield$canvas$1 = arg$canvas$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "collidium.Sprite")) {
        return this["apply(Lcollidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Board$$anonfun$paint$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.Board$$anonfun$paint$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Board$$anonfun$paint$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$canvas$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.Sprite;)V"] = (function(arg$x$2) {
      arg$x$2["draw(Lcollidium.Canvas2D;)V"](this.$jsfield$canvas$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.Sprite;)V"]($.asInstance(arg$v1, "collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"] = (function(arg$$outer, arg$canvas$1) {
      this.$jsfield$canvas$1 = arg$canvas$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "collidium.Sprite")) {
        return this["apply(Lcollidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(Lcollidium.Board;Lcollidium.Canvas2D;)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Board$$anonfun$paint$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.Board$$anonfun$paint$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Board$$anonfun^date$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.Sprite;)V"] = (function(arg$wall) {
      arg$wall["colliding(Lcollidium.Sprite;)V"](this.$jsfield$$outer["ball()Lcollidium.Circle;"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.Sprite;)V"]($.asInstance(arg$v1, "collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lcollidium.Board;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "collidium.Sprite")) {
        return this["apply(Lcollidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lcollidium.Board;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Board$$anonfun^date$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.Board$$anonfun^date$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Board$$anonfun^date$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.Sprite;)V"] = (function(arg$obstacle) {
      arg$obstacle["colliding(Lcollidium.Sprite;)V"](this.$jsfield$$outer["ball()Lcollidium.Circle;"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.Sprite;)V"]($.asInstance(arg$v1, "collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lcollidium.Board;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "collidium.Sprite")) {
        return this["apply(Lcollidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lcollidium.Board;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Board$$anonfun^date$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.Board$$anonfun^date$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Circle", (function($) {
    function Class() {
      $.c["collidium.Sprite"].prototype.constructor.call(this);
      this.$jsfield$location = null;
      this.$jsfield$diameter = 0;
      this.$jsfield$magnitude = 0.0
    };
    Class.prototype = Object.create($.c["collidium.Sprite"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["location()Lcollidium.Point;"] = (function() {
      return this.$jsfield$location
    });
    Class.prototype["location_=(Lcollidium.Point;)V"] = (function(arg$x$1) {
      this.$jsfield$location = arg$x$1
    });
    Class.prototype["diameter()I"] = (function() {
      return this.$jsfield$diameter
    });
    Class.prototype["next()Lcollidium.Point;"] = (function() {
      return new $.c["collidium.Point"]()["<init>(DD)"]((this["location()Lcollidium.Point;"]()["x()D"]() + this["deltaX()D"]()), (this["location()Lcollidium.Point;"]()["y()D"]() + this["deltaY()D"]()))
    });
    Class.prototype["draw(Lcollidium.Canvas2D;)V"] = (function(arg$canvas) {
      $.c["collidium.Sprite"].prototype["draw(Lcollidium.Canvas2D;)V"].call(this, arg$canvas);
      arg$canvas.beginPath();
      var radius$jsid$22353 = ((this["diameter()I"]() / 2) | 0);
      arg$canvas.arc(this["location()Lcollidium.Point;"]()["x()D"](), this["location()Lcollidium.Point;"]()["y()D"](), radius$jsid$22353, 0, 6.283185307179586, false);
      arg$canvas.fill()
    });
    Class.prototype["colliding(Lcollidium.Sprite;)V"] = (function(arg$sprite) {
      /*<skip>*/
    });
    Class.prototype["inBoundsOf(Lcollidium.Circle;)Z"] = (function(arg$circle) {
      var xshift$jsid$21812 = (arg$circle["location()Lcollidium.Point;"]()["x()D"]() - this["location()Lcollidium.Point;"]()["x()D"]());
      var yshift$jsid$21813 = (arg$circle["location()Lcollidium.Point;"]()["y()D"]() - this["location()Lcollidium.Point;"]()["y()D"]());
      var deltaDiameter$jsid$21814 = (((this["diameter()I"]() - arg$circle["diameter()I"]()) / 2) | 0);
      if ((arg$circle["diameter()I"]() > this["diameter()I"]())) {
        return false
      } else {
        if ((((xshift$jsid$21812 * xshift$jsid$21812) + (yshift$jsid$21813 * yshift$jsid$21813)) < (deltaDiameter$jsid$21814 * deltaDiameter$jsid$21814))) {
          return true
        } else {
          return false
        }
      }
    });
    Class.prototype["deltaX()D"] = (function() {
      return ($.m["java.lang.Math"]["cos(D)D"](this["theta()D"]()) * this["magnitude()D"]())
    });
    Class.prototype["deltaY()D"] = (function() {
      return ($.m["java.lang.Math"]["sin(D)D"](this["theta()D"]()) * this["magnitude()D"]())
    });
    Class.prototype["magnitude()D"] = (function() {
      return this.$jsfield$magnitude
    });
    Class.prototype["magnitude_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$magnitude = arg$x$1
    });
    Class.prototype["<init>(Lcollidium.Point;IT)"] = (function(arg$location, arg$diameter, arg$color) {
      this.$jsfield$location = arg$location;
      this.$jsfield$diameter = arg$diameter;
      $.c["collidium.Sprite"].prototype["<init>(T)"].call(this, arg$color);
      this.$jsfield$magnitude = 0.0;
      return this
    });
    Class.prototype.diameter = (function() {
      return this["diameter()I"]()
    });
    Class.prototype.inBoundsOf = (function(arg$1) {
      return this["inBoundsOf(Lcollidium.Circle;)Z"](arg$1)
    });
    Class.prototype.deltaX = (function() {
      return this["deltaX()D"]()
    });
    Class.prototype.deltaY = (function() {
      return this["deltaY()D"]()
    });
    Class.prototype.magnitude = (function() {
      return this["magnitude()D"]()
    });
    Class.prototype["magnitude_="] = (function(arg$1) {
      return this["magnitude_=(D)V"](arg$1)
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lcollidium.Point;IT)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Circle", Class, JSClass, "collidium.Sprite", {
      "collidium.Circle": true,
      "collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.CollidiumOnline$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$board = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$pullingRubber = false;
      this.$jsfield$curObstacle = null;
      this.$jsfield$drawingLine = false;
      this.$jsfield$canvasOrig = null;
      this.$jsfield$canvasDom = null;
      this.$jsfield$canvasElem = null;
      this.$jsfield$canvas = null;
      this.$jsfield$youwonMusic = null;
      this.$jsfield$backgroundMusic = null;
      this.$jsfield$onMouseDown = null;
      this.$jsfield$onMouseMove = null;
      this.$jsfield$onMouseUp = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["board()Lcollidium.Board;"] = (function() {
      return this.$jsfield$board
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["pullingRubber()Z"] = (function() {
      return this.$jsfield$pullingRubber
    });
    Class.prototype["pullingRubber_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$pullingRubber = arg$x$1
    });
    Class.prototype["curObstacle()Lscala.Option;"] = (function() {
      return this.$jsfield$curObstacle
    });
    Class.prototype["curObstacle_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$curObstacle = arg$x$1
    });
    Class.prototype["drawingLine()Z"] = (function() {
      return this.$jsfield$drawingLine
    });
    Class.prototype["drawingLine_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$drawingLine = arg$x$1
    });
    Class.prototype["canvasOrig()Lscala.js.Dynamic;"] = (function() {
      return this.$jsfield$canvasOrig
    });
    Class.prototype["canvasDom()Lcollidium.DOMElement;"] = (function() {
      return this.$jsfield$canvasDom
    });
    Class.prototype["canvasElem()Lcollidium.HTMLCanvasElement;"] = (function() {
      return this.$jsfield$canvasElem
    });
    Class.prototype["canvas()Lcollidium.Canvas2D;"] = (function() {
      return this.$jsfield$canvas
    });
    Class.prototype["youwonMusic()Lcollidium.AudioElement;"] = (function() {
      return this.$jsfield$youwonMusic
    });
    Class.prototype["backgroundMusic()Lcollidium.AudioElement;"] = (function() {
      return this.$jsfield$backgroundMusic
    });
    Class.prototype["main()V"] = (function() {
      var tick$jsid$22118 = new $.c["collidium.CollidiumOnline$$anonfun$1"]()["<init>()"]();
      this["canvasDom()Lcollidium.DOMElement;"]().onmousedown = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseDown()Lscala.Function1;"]());
      this["canvasDom()Lcollidium.DOMElement;"]().onmouseup = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseUp()Lscala.Function1;"]());
      this["canvasDom()Lcollidium.DOMElement;"]().onmousemove = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseMove()Lscala.Function1;"]());
      $.g.setInterval((function($this) {
        return (function() {
          return $this["apply()O"]()
        })
      })(tick$jsid$22118), 20)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseDown
    });
    Class.prototype["onMouseMove()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseMove
    });
    Class.prototype["onMouseUp()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseUp
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["collidium.CollidiumOnline"]._instance = this;
      this.$jsfield$board = new $.c["collidium.Board"]()["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lcollidium.Circle;Lcollidium.Circle;D)"]("baseLevel", new $.c["scala.Tuple2"]()["<init>(OO)"]($.bF(400.0), $.bF(400.0)), 5, $.m["scala.collection.immutable.List"]["apply(Lscala.collection.Seq;)Lscala.collection.immutable.List;"]($.m["scala.Predef"]["wrapRefArray([O)Lscala.collection.mutable.WrappedArray;"]($.asInstance($.makeNativeArrayWrapper($.classes["collidium.Line"].array, [new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](10.0, 10.0), new $.c["collidium.Point"]()["<init>(DD)"](490.0, 10.0), "white"), new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](490.0, 10.0), new $.c["collidium.Point"]()["<init>(DD)"](490.0, 490.0), "white"), new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](490.0, 490.0), new $.c["collidium.Point"]()["<init>(DD)"](10.0, 490.0), "white"), new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](10.0, 490.0), new $.c["collidium.Point"]()["<init>(DD)"](10.0, 10.0), "white")]), "java.lang.Object[]"))), new $.c["collidium.Circle"]()["<init>(Lcollidium.Point;IT)"](new $.c["collidium.Point"]()["<init>(DD)"](250.0, 250.0), 10, "orange"), new $.c["collidium.Circle"]()["<init>(Lcollidium.Point;IT)"](new $.c["collidium.Point"]()["<init>(DD)"](100.0, 100.0), 50, "red"), 0.0);
      this.$jsfield$cannonLocation = this["board()Lcollidium.Board;"]()["cannonLocation()Lscala.Tuple2;"]();
      this.$jsfield$pullingRubber = false;
      this.$jsfield$curObstacle = $.m["scala.None"];
      this.$jsfield$drawingLine = false;
      this.$jsfield$canvasOrig = $.g.document.getElementById("canvas");
      this.$jsfield$canvasDom = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvasElem = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvas = this["canvasElem()Lcollidium.HTMLCanvasElement;"]().getContext("2d");
      this.$jsfield$youwonMusic = $.g.document.getElementById("youWonAudio");
      this.$jsfield$backgroundMusic = $.g.document.getElementById("backgroundAudio");
      var jsx$1 = new $.c["collidium.CollidiumOnline$$anonfun$2"]()["<init>()"]();
      this.$jsfield$onMouseDown = jsx$1;
      var jsx$2 = new $.c["collidium.CollidiumOnline$$anonfun$3"]()["<init>()"]();
      this.$jsfield$onMouseMove = jsx$2;
      var jsx$3 = new $.c["collidium.CollidiumOnline$$anonfun$4"]()["<init>()"]();
      this.$jsfield$onMouseUp = jsx$3;
      return this
    });
    Class.prototype.board = (function() {
      return this["board()Lcollidium.Board;"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.pullingRubber = (function() {
      return this["pullingRubber()Z"]()
    });
    Class.prototype["pullingRubber_="] = (function(arg$1) {
      return this["pullingRubber_=(Z)V"](arg$1)
    });
    Class.prototype.curObstacle = (function() {
      return this["curObstacle()Lscala.Option;"]()
    });
    Class.prototype["curObstacle_="] = (function(arg$1) {
      return this["curObstacle_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.drawingLine = (function() {
      return this["drawingLine()Z"]()
    });
    Class.prototype["drawingLine_="] = (function(arg$1) {
      return this["drawingLine_=(Z)V"](arg$1)
    });
    Class.prototype.canvasOrig = (function() {
      return this["canvasOrig()Lscala.js.Dynamic;"]()
    });
    Class.prototype.canvasDom = (function() {
      return this["canvasDom()Lcollidium.DOMElement;"]()
    });
    Class.prototype.canvasElem = (function() {
      return this["canvasElem()Lcollidium.HTMLCanvasElement;"]()
    });
    Class.prototype.canvas = (function() {
      return this["canvas()Lcollidium.Canvas2D;"]()
    });
    Class.prototype.youwonMusic = (function() {
      return this["youwonMusic()Lcollidium.AudioElement;"]()
    });
    Class.prototype.backgroundMusic = (function() {
      return this["backgroundMusic()Lcollidium.AudioElement;"]()
    });
    Class.prototype.main = (function() {
      return this["main()V"]()
    });
    Class.prototype.onMouseDown = (function() {
      return this["onMouseDown()Lscala.Function1;"]()
    });
    Class.prototype.onMouseMove = (function() {
      return this["onMouseMove()Lscala.Function1;"]()
    });
    Class.prototype.onMouseUp = (function() {
      return this["onMouseUp()Lscala.Function1;"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.CollidiumOnline$", Class, JSClass, "java.lang.Object", {
      "collidium.CollidiumOnline$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("collidium.CollidiumOnline", "collidium.CollidiumOnline$");
  $.registerClass("collidium.CollidiumOnline$$anonfun$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply()V"] = (function() {
      this["apply$mcV$sp()V"]()
    });
    Class.prototype["apply$mcV$sp()V"] = (function() {
      $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["paint(Lcollidium.Canvas2D;)V"]($.m["collidium.CollidiumOnline"]["canvas()Lcollidium.Canvas2D;"]());
      $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["update()V"]()
    });
    Class.prototype["apply()O"] = (function() {
      this["apply()V"]();
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.CollidiumOnline$$anonfun$1", Class, JSClass, "scala.runtime.AbstractFunction0$mcV$sp", {
      "collidium.CollidiumOnline$$anonfun$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction0$mcV$sp": true,
      "scala.Function0$mcV$sp": true,
      "scala.runtime.AbstractFunction0": true,
      "scala.Function0": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.CollidiumOnline$$anonfun$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22025 = arg$event.layerX;
      var y$jsid$22026 = arg$event.layerY;
      var xDiff$jsid$22027 = ($.uF($.m["collidium.CollidiumOnline"]["cannonLocation()Lscala.Tuple2;"]()["_1()O"]()) - x$jsid$22025);
      var yDiff$jsid$22028 = ($.uF($.m["collidium.CollidiumOnline"]["cannonLocation()Lscala.Tuple2;"]()["_2()O"]()) - y$jsid$22026);
      if ((!$.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["started()Z"]())) {
        if ((((xDiff$jsid$22027 * xDiff$jsid$22027) + (yDiff$jsid$22028 * yDiff$jsid$22028)) <= 625)) {
          $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Sling"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22025, y$jsid$22026), new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22025, y$jsid$22026), "white")));
          $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["x_=(D)V"](x$jsid$22025);
          $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["y_=(D)V"](y$jsid$22026)
        } else {
          $.m["collidium.CollidiumOnline"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22025, y$jsid$22026), new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22025, y$jsid$22026), "white")));
          $.m["collidium.CollidiumOnline"]["drawingLine_=(Z)V"](true)
        }
      } else {
        /*<skip>*/
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lcollidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.CollidiumOnline$$anonfun$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.CollidiumOnline$$anonfun$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.CollidiumOnline$$anonfun$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22070 = arg$event.layerX;
      var y$jsid$22071 = arg$event.layerY;
      if (($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["started()Z"]()))) {
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["x_=(D)V"](x$jsid$22070);
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["y_=(D)V"](y$jsid$22071);
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Sling"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"]($.asInstance($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "collidium.Line")["start()Lcollidium.Point;"](), new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22070, y$jsid$22071), "white")));
        $.asInstance($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "collidium.Line")["draw(Lcollidium.Canvas2D;)V"]($.m["collidium.CollidiumOnline"]["canvas()Lcollidium.Canvas2D;"]())
      } else {
        if (($.m["collidium.CollidiumOnline"]["drawingLine()Z"]() && $.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["collidium.CollidiumOnline"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"]($.asInstance($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["get()O"](), "collidium.Line")["start()Lcollidium.Point;"](), new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22070, y$jsid$22071), "white")));
          $.asInstance($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["get()O"](), "collidium.Line")["draw(Lcollidium.Canvas2D;)V"]($.m["collidium.CollidiumOnline"]["canvas()Lcollidium.Canvas2D;"]())
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lcollidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.CollidiumOnline$$anonfun$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.CollidiumOnline$$anonfun$3": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.CollidiumOnline$$anonfun$4", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lcollidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22082 = arg$event.layerX;
      var y$jsid$22083 = arg$event.layerY;
      if (($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["started()Z"]()))) {
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["theta_=(D)V"]($.asInstance($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "collidium.Sprite")["theta()D"]());
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["magnitude_=(D)V"](($.asInstance($.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "collidium.Line")["magnitude()D"]() / 40));
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["y_=(D)V"](y$jsid$22083);
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["ball()Lcollidium.Circle;"]()["location()Lcollidium.Point;"]()["x_=(D)V"](x$jsid$22082);
        $.m["collidium.CollidiumOnline"]["pullingRubber_=(Z)V"](false);
        $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["started_=(Z)V"](true);
        $.m["collidium.CollidiumOnline"]["backgroundMusic()Lcollidium.AudioElement;"]().play()
      } else {
        if (($.m["collidium.CollidiumOnline"]["drawingLine()Z"]() && $.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["collidium.CollidiumOnline"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"]($.asInstance($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["get()O"](), "collidium.Line")["start()Lcollidium.Point;"](), new $.c["collidium.Point"]()["<init>(DD)"](x$jsid$22082, y$jsid$22083), "white")));
          var jsx$4 = $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]();
          var x$1$jsid$22112 = $.asInstance($.m["collidium.CollidiumOnline"]["curObstacle()Lscala.Option;"]()["get()O"](), "collidium.Line");
          var jsx$5 = $.m["collidium.CollidiumOnline"]["board()Lcollidium.Board;"]()["obstacles()Lscala.collection.immutable.List;"]()["::(O)Lscala.collection.immutable.List;"](x$1$jsid$22112);
          jsx$4["obstacles_=(Lscala.collection.immutable.List;)V"](jsx$5);
          $.m["collidium.CollidiumOnline"]["drawingLine_=(Z)V"](false);
          $.m["collidium.CollidiumOnline"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.None"])
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lcollidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lcollidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.CollidiumOnline$$anonfun$4", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "collidium.CollidiumOnline$$anonfun$4": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Level", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$name = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$margin = 0;
      this.$jsfield$obstacles = null;
      this.$jsfield$ball = null;
      this.$jsfield$hole = null;
      this.$jsfield$friction = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["name()T"] = (function() {
      return this.$jsfield$name
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["margin()I"] = (function() {
      return this.$jsfield$margin
    });
    Class.prototype["obstacles()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$obstacles
    });
    Class.prototype["ball()Lcollidium.Circle;"] = (function() {
      return this.$jsfield$ball
    });
    Class.prototype["hole()Lcollidium.Circle;"] = (function() {
      return this.$jsfield$hole
    });
    Class.prototype["friction()D"] = (function() {
      return this.$jsfield$friction
    });
    Class.prototype["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lcollidium.Circle;Lcollidium.Circle;D)"] = (function(arg$name, arg$cannonLocation, arg$margin, arg$obstacles, arg$ball, arg$hole, arg$friction) {
      this.$jsfield$name = arg$name;
      this.$jsfield$cannonLocation = arg$cannonLocation;
      this.$jsfield$margin = arg$margin;
      this.$jsfield$obstacles = arg$obstacles;
      this.$jsfield$ball = arg$ball;
      this.$jsfield$hole = arg$hole;
      this.$jsfield$friction = arg$friction;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.name = (function() {
      return this["name()T"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.margin = (function() {
      return this["margin()I"]()
    });
    Class.prototype.obstacles = (function() {
      return this["obstacles()Lscala.collection.immutable.List;"]()
    });
    Class.prototype.ball = (function() {
      return this["ball()Lcollidium.Circle;"]()
    });
    Class.prototype.hole = (function() {
      return this["hole()Lcollidium.Circle;"]()
    });
    Class.prototype.friction = (function() {
      return this["friction()D"]()
    });
    function JSClass(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7) {
      Class.call(this);
      return this["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lcollidium.Circle;Lcollidium.Circle;D)"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Level", Class, JSClass, "java.lang.Object", {
      "collidium.Level": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Line", (function($) {
    function Class() {
      $.c["collidium.Sprite"].prototype.constructor.call(this);
      this.$jsfield$start = null;
      this.$jsfield$end = null;
      this.$jsfield$deltaX = 0.0;
      this.$jsfield$deltaY = 0.0;
      this.$jsfield$magnitude = 0.0;
      this.$jsfield$m = 0.0;
      this.$jsfield$c = 0.0;
      this.$jsfield$minX = 0.0;
      this.$jsfield$maxX = 0.0;
      this.$jsfield$minY = 0.0;
      this.$jsfield$maxY = 0.0;
      this.$jsfield$location = null
    };
    Class.prototype = Object.create($.c["collidium.Sprite"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["start()Lcollidium.Point;"] = (function() {
      return this.$jsfield$start
    });
    Class.prototype["end()Lcollidium.Point;"] = (function() {
      return this.$jsfield$end
    });
    Class.prototype["deltaX()D"] = (function() {
      return this.$jsfield$deltaX
    });
    Class.prototype["deltaY()D"] = (function() {
      return this.$jsfield$deltaY
    });
    Class.prototype["magnitude()D"] = (function() {
      return this.$jsfield$magnitude
    });
    Class.prototype["m()D"] = (function() {
      return this.$jsfield$m
    });
    Class.prototype["c()D"] = (function() {
      return this.$jsfield$c
    });
    Class.prototype["y()Lscala.Function1;"] = (function() {
      return new $.c["collidium.Line$$anonfun$y$1"]()["<init>(Lcollidium.Line;)"](this)
    });
    Class.prototype["minX()D"] = (function() {
      return this.$jsfield$minX
    });
    Class.prototype["maxX()D"] = (function() {
      return this.$jsfield$maxX
    });
    Class.prototype["minY()D"] = (function() {
      return this.$jsfield$minY
    });
    Class.prototype["maxY()D"] = (function() {
      return this.$jsfield$maxY
    });
    Class.prototype["next()Lcollidium.Point;"] = (function() {
      return this["start()Lcollidium.Point;"]()
    });
    Class.prototype["location()Lcollidium.Point;"] = (function() {
      return this.$jsfield$location
    });
    Class.prototype["location_=(Lcollidium.Point;)V"] = (function(arg$x$1) {
      this.$jsfield$location = arg$x$1
    });
    Class.prototype["draw(Lcollidium.Canvas2D;)V"] = (function(arg$canvas) {
      $.c["collidium.Sprite"].prototype["draw(Lcollidium.Canvas2D;)V"].call(this, arg$canvas);
      arg$canvas.beginPath();
      arg$canvas.moveTo(this["start()Lcollidium.Point;"]()["x()D"](), this["start()Lcollidium.Point;"]()["y()D"]());
      arg$canvas.lineTo(this["end()Lcollidium.Point;"]()["x()D"](), this["end()Lcollidium.Point;"]()["y()D"]());
      arg$canvas.stroke()
    });
    Class.prototype["intersects(Lcollidium.Line;)Lscala.Option;"] = (function(arg$line) {
      if (($.m["java.lang.Math"]["abs(D)D"]((arg$line["m()D"]() - this["m()D"]())) < 0.0010)) {
        return $.m["scala.None"]
      } else {
        if (((arg$line["m()D"]() > 1000000) || (arg$line["m()D"]() < -1000000))) {
          var intersectionY$jsid$22453 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](arg$line["minX()D"]());
          if (((arg$line["maxY()D"]() > intersectionY$jsid$22453) && (arg$line["minY()D"]() < intersectionY$jsid$22453))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Point"]()["<init>(DD)"](arg$line["minX()D"](), intersectionY$jsid$22453))
          } else {
            return $.m["scala.None"]
          }
        } else {
          if (((this["m()D"]() > 1000000) || (this["m()D"]() < -1000000))) {
            var intersectionX$jsid$22477 = this["start()Lcollidium.Point;"]()["x()D"]();
            var intersectionY$jsid$22478 = arg$line["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$22477);
            var x1$jsid$22969 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22477, intersectionY$jsid$22478)
          } else {
            var intersectionX$jsid$22485 = ((arg$line["c()D"]() - this["c()D"]()) / (this["m()D"]() - arg$line["m()D"]()));
            var intersectionY$jsid$22486 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$22485);
            var x1$jsid$22969 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22485, intersectionY$jsid$22486)
          };
          var result$$jslabel$matchEnd3$22972;
          $jslabel$matchEnd3$22972: do {
            if ((x1$jsid$22969 !== null)) {
              var intersectionX$jsid$22509 = x1$jsid$22969["_1$mcD$sp()D"]();
              var intersectionY$jsid$22510 = x1$jsid$22969["_2$mcD$sp()D"]();
              result$$jslabel$matchEnd3$22972 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22509, intersectionY$jsid$22510);
              break $jslabel$matchEnd3$22972
            } else {
              /*<skip>*/
            };
            throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22969);
            break $jslabel$matchEnd3$22972
          } while (false);
          var x$1$jsid$22466 = result$$jslabel$matchEnd3$22972;
          var intersectionX$jsid$22467 = x$1$jsid$22466["_1$mcD$sp()D"]();
          var intersectionY$jsid$22468 = x$1$jsid$22466["_2$mcD$sp()D"]();
          if (((((((((intersectionX$jsid$22467 >= arg$line["minX()D"]()) && (intersectionX$jsid$22467 <= arg$line["maxX()D"]())) && (intersectionY$jsid$22468 >= arg$line["minY()D"]())) && (intersectionY$jsid$22468 <= arg$line["maxY()D"]())) && (intersectionX$jsid$22467 >= this["minX()D"]())) && (intersectionX$jsid$22467 <= this["maxX()D"]())) && (intersectionY$jsid$22468 >= this["minY()D"]())) && (intersectionY$jsid$22468 <= this["maxY()D"]()))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["collidium.Point"]()["<init>(DD)"](intersectionX$jsid$22467, intersectionY$jsid$22468))
          } else {
            return $.m["scala.None"]
          }
        }
      }
    });
    Class.prototype["colliding(Lcollidium.Sprite;)V"] = (function(arg$sprite) {
      var spriteLine$jsid$22553 = new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](arg$sprite["location()Lcollidium.Point;"](), arg$sprite["next()Lcollidium.Point;"](), arg$sprite["color()T"]());
      var x1$jsid$23000 = this["intersects(Lcollidium.Line;)Lscala.Option;"](spriteLine$jsid$22553);
      $jslabel$matchEnd5$23005: do {
        if ($.isInstance(x1$jsid$23000, "scala.Some")) {
          var x2$jsid$23001 = $.asInstance(x1$jsid$23000, "scala.Some");
          var point$jsid$22587 = $.asInstance(x2$jsid$23001["x()O"](), "collidium.Point");
          arg$sprite["move(Lcollidium.Point;)V"](point$jsid$22587);
          arg$sprite["theta_=(D)V"](((2 * this["theta()D"]()) - arg$sprite["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23005
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$23000)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23005
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$23000);
        break $jslabel$matchEnd5$23005
      } while (false)
    });
    Class.prototype["colliding(Lcollidium.Circle;)V"] = (function(arg$circle) {
      var spriteLine$jsid$22597 = new $.c["collidium.Line"]()["<init>(Lcollidium.Point;Lcollidium.Point;T)"](arg$circle["location()Lcollidium.Point;"](), arg$circle["next()Lcollidium.Point;"](), arg$circle["color()T"]());
      var x1$jsid$23013 = this["intersects(Lcollidium.Line;)Lscala.Option;"](spriteLine$jsid$22597);
      $jslabel$matchEnd5$23018: do {
        if ($.isInstance(x1$jsid$23013, "scala.Some")) {
          var x2$jsid$23014 = $.asInstance(x1$jsid$23013, "scala.Some");
          var point$jsid$22599 = $.asInstance(x2$jsid$23014["x()O"](), "collidium.Point");
          var radius$jsid$22600 = ((arg$circle["diameter()I"]() / 2) | 0);
          var movePoint$jsid$22601 = new $.c["collidium.Point"]()["<init>(DD)"]((point$jsid$22599["x()D"]() - ($.m["java.lang.Math"]["cos(D)D"](arg$circle["theta()D"]()) * radius$jsid$22600)), (point$jsid$22599["y()D"]() - ($.m["java.lang.Math"]["sin(D)D"](arg$circle["theta()D"]()) * radius$jsid$22600)));
          arg$circle["move(Lcollidium.Point;)V"](movePoint$jsid$22601);
          arg$circle["theta_=(D)V"](((2 * this["theta()D"]()) - arg$circle["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23018
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$23013)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23018
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$23013);
        break $jslabel$matchEnd5$23018
      } while (false)
    });
    Class.prototype["height()I"] = (function() {
      return 0
    });
    Class.prototype["width()I"] = (function() {
      return 0
    });
    Class.prototype["bounds()Lscala.Tuple2;"] = (function() {
      return new $.c["scala.Tuple2"]()["<init>(OO)"](this["start()Lcollidium.Point;"](), this["end()Lcollidium.Point;"]())
    });
    Class.prototype["<init>(Lcollidium.Point;Lcollidium.Point;T)"] = (function(arg$start, arg$end, arg$color) {
      this.$jsfield$start = arg$start;
      this.$jsfield$end = arg$end;
      $.c["collidium.Sprite"].prototype["<init>(T)"].call(this, arg$color);
      this.$jsfield$deltaX = (arg$end["x()D"]() - arg$start["x()D"]());
      this.$jsfield$deltaY = (arg$end["y()D"]() - arg$start["y()D"]());
      this.$jsfield$magnitude = $.m["java.lang.Math"]["sqrt(D)D"](((this["deltaX()D"]() * this["deltaX()D"]()) + (this["deltaY()D"]() * this["deltaY()D"]())));
      this.$jsfield$m = (this["deltaY()D"]() / this["deltaX()D"]());
      this.$jsfield$c = (arg$start["y()D"]() - (arg$start["x()D"]() * this["m()D"]()));
      this.$jsfield$minX = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["x()D"]()))["min(O)O"]($.bD(arg$end["x()D"]())));
      this.$jsfield$maxX = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["x()D"]()))["max(O)O"]($.bD(arg$end["x()D"]())));
      this.$jsfield$minY = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["y()D"]()))["min(O)O"]($.bD(arg$end["y()D"]())));
      this.$jsfield$maxY = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["y()D"]()))["max(O)O"]($.bD(arg$end["y()D"]())));
      this["theta_=(D)V"]($.m["java.lang.Math"]["atan(D)D"](this["m()D"]()));
      if ((arg$start["x()D"]() < arg$end["x()D"]())) {
        this["theta_=(D)V"]((this["theta()D"]() + $.m["collidium.Angle"]["doubleToAngle(D)Lcollidium.Angle;"](180.0)["deg()D"]()))
      } else {
        /*<skip>*/
      };
      this.$jsfield$location = arg$start;
      return this
    });
    Class.prototype.start = (function() {
      return this["start()Lcollidium.Point;"]()
    });
    Class.prototype.end = (function() {
      return this["end()Lcollidium.Point;"]()
    });
    Class.prototype.deltaX = (function() {
      return this["deltaX()D"]()
    });
    Class.prototype.deltaY = (function() {
      return this["deltaY()D"]()
    });
    Class.prototype.magnitude = (function() {
      return this["magnitude()D"]()
    });
    Class.prototype.m = (function() {
      return this["m()D"]()
    });
    Class.prototype.c = (function() {
      return this["c()D"]()
    });
    Class.prototype.y = (function() {
      return this["y()Lscala.Function1;"]()
    });
    Class.prototype.minX = (function() {
      return this["minX()D"]()
    });
    Class.prototype.maxX = (function() {
      return this["maxX()D"]()
    });
    Class.prototype.minY = (function() {
      return this["minY()D"]()
    });
    Class.prototype.maxY = (function() {
      return this["maxY()D"]()
    });
    Class.prototype.intersects = (function(arg$1) {
      return this["intersects(Lcollidium.Line;)Lscala.Option;"](arg$1)
    });
    Class.prototype.colliding = (function(arg$1) {
      if ($.isInstance(arg$1, "collidium.Circle")) {
        return this["colliding(Lcollidium.Circle;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "collidium.Sprite")) {
          return this["colliding(Lcollidium.Sprite;)V"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    Class.prototype.height = (function() {
      return this["height()I"]()
    });
    Class.prototype.width = (function() {
      return this["width()I"]()
    });
    Class.prototype.bounds = (function() {
      return this["bounds()Lscala.Tuple2;"]()
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lcollidium.Point;Lcollidium.Point;T)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Line", Class, JSClass, "collidium.Sprite", {
      "collidium.Line": true,
      "collidium.Sprite": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("collidium.Line$$anonfun$y$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(D)D"] = (function(arg$x) {
      return this["apply$mcDD$sp(D)D"](arg$x)
    });
    Class.prototype["apply$mcDD$sp(D)D"] = (function(arg$x) {
      return ((this.$jsfield$$outer["m()D"]() * arg$x) + this.$jsfield$$outer["c()D"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bD(this["apply(D)D"]($.uD(arg$v1)))
    });
    Class.prototype["<init>(Lcollidium.Line;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lcollidium.Line;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Line$$anonfun$y$1", Class, JSClass, "scala.runtime.AbstractFunction1$mcDD$sp", {
      "collidium.Line$$anonfun$y$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1$mcDD$sp": true,
      "scala.Function1$mcDD$sp": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Point", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$x = 0.0;
      this.$jsfield$y = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["x()D"] = (function() {
      return this.$jsfield$x
    });
    Class.prototype["x_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$x = arg$x$1
    });
    Class.prototype["y()D"] = (function() {
      return this.$jsfield$y
    });
    Class.prototype["y_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$y = arg$x$1
    });
    Class.prototype["toString()T"] = (function() {
      return (((("Point(" + $.bD(this["x()D"]())) + ",") + $.bD(this["y()D"]())) + ")")
    });
    Class.prototype["<init>(DD)"] = (function(arg$x, arg$y) {
      this.$jsfield$x = arg$x;
      this.$jsfield$y = arg$y;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.x = (function() {
      return this["x()D"]()
    });
    Class.prototype["x_="] = (function(arg$1) {
      return this["x_=(D)V"](arg$1)
    });
    Class.prototype.y = (function() {
      return this["y()D"]()
    });
    Class.prototype["y_="] = (function(arg$1) {
      return this["y_=(D)V"](arg$1)
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(DD)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Point", Class, JSClass, "java.lang.Object", {
      "collidium.Point": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Sling", (function($) {
    function Class() {
      $.c["collidium.Line"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["collidium.Line"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["<init>(Lcollidium.Point;Lcollidium.Point;T)"] = (function(arg$start, arg$end, arg$color) {
      $.c["collidium.Line"].prototype["<init>(Lcollidium.Point;Lcollidium.Point;T)"].call(this, arg$start, arg$end, arg$color);
      return this
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lcollidium.Point;Lcollidium.Point;T)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Sling", Class, JSClass, "collidium.Line", {
      "collidium.Sling": true,
      "collidium.Line": true,
      "collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("collidium.Sprite", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$color = null;
      this.$jsfield$theta = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["color()T"] = (function() {
      return this.$jsfield$color
    });
    Class.prototype["draw(Lcollidium.Canvas2D;)V"] = (function(arg$canvas) {
      arg$canvas.fillStyle = this["color()T"]();
      arg$canvas.strokeStyle = this["color()T"]()
    });
    Class.prototype["theta()D"] = (function() {
      return this.$jsfield$theta
    });
    Class.prototype["theta_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$theta = arg$x$1
    });
    Class.prototype["move(Lcollidium.Point;)V"] = (function(arg$to) {
      this["location_=(Lcollidium.Point;)V"](arg$to)
    });
    Class.prototype["update()V"] = (function() {
      this["move(Lcollidium.Point;)V"](this["next()Lcollidium.Point;"]())
    });
    Class.prototype["<init>(T)"] = (function(arg$color) {
      this.$jsfield$color = arg$color;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      this.$jsfield$theta = 0.0;
      return this
    });
    Class.prototype.color = (function() {
      return this["color()T"]()
    });
    Class.prototype.draw = (function(arg$1) {
      return this["draw(Lcollidium.Canvas2D;)V"](arg$1)
    });
    Class.prototype.colliding = (function(arg$1) {
      return this["colliding(Lcollidium.Sprite;)V"](arg$1)
    });
    Class.prototype.theta = (function() {
      return this["theta()D"]()
    });
    Class.prototype["theta_="] = (function(arg$1) {
      return this["theta_=(D)V"](arg$1)
    });
    Class.prototype.location = (function() {
      return this["location()Lcollidium.Point;"]()
    });
    Class.prototype["location_="] = (function(arg$1) {
      return this["location_=(Lcollidium.Point;)V"](arg$1)
    });
    Class.prototype.next = (function() {
      return this["next()Lcollidium.Point;"]()
    });
    Class.prototype.move = (function(arg$1) {
      return this["move(Lcollidium.Point;)V"](arg$1)
    });
    Class.prototype.update = (function() {
      return this["update()V"]()
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(T)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("collidium.Sprite", Class, JSClass, "java.lang.Object", {
      "collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Angle", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$degrees = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["deg()D"] = (function() {
      return (this.$jsfield$degrees * ($.m["scala.math.package"]["Pi()D"]() / 180))
    });
    Class.prototype["<init>(D)"] = (function(arg$degrees) {
      this.$jsfield$degrees = arg$degrees;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.deg = (function() {
      return this["deg()D"]()
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(D)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Angle", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Angle": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Angle$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["doubleToAngle(D)Lme.shadaj.collidium.Angle;"] = (function(arg$degrees) {
      return new $.c["me.shadaj.collidium.Angle"]()["<init>(D)"](arg$degrees)
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["me.shadaj.collidium.Angle"]._instance = this;
      return this
    });
    Class.prototype.doubleToAngle = (function(arg$1) {
      return this["doubleToAngle(D)Lme.shadaj.collidium.Angle;"](arg$1)
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Angle$", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Angle$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("me.shadaj.collidium.Angle", "me.shadaj.collidium.Angle$")
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Board", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$name = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$margin = 0;
      this.$jsfield$walls = null;
      this.$jsfield$ball = null;
      this.$jsfield$hole = null;
      this.$jsfield$friction = 0.0;
      this.$jsfield$slingOption = null;
      this.$jsfield$started = false;
      this.$jsfield$obstacles = null;
      this.$jsfield$winnable = false
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["name()T"] = (function() {
      return this.$jsfield$name
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["margin()I"] = (function() {
      return this.$jsfield$margin
    });
    Class.prototype["walls()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$walls
    });
    Class.prototype["ball()Lme.shadaj.collidium.Circle;"] = (function() {
      return this.$jsfield$ball
    });
    Class.prototype["hole()Lme.shadaj.collidium.Circle;"] = (function() {
      return this.$jsfield$hole
    });
    Class.prototype["friction()D"] = (function() {
      return this.$jsfield$friction
    });
    Class.prototype["slingOption()Lscala.Option;"] = (function() {
      return this.$jsfield$slingOption
    });
    Class.prototype["slingOption_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$slingOption = arg$x$1
    });
    Class.prototype["started()Z"] = (function() {
      return this.$jsfield$started
    });
    Class.prototype["started_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$started = arg$x$1
    });
    Class.prototype["obstacles()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$obstacles
    });
    Class.prototype["obstacles_=(Lscala.collection.immutable.List;)V"] = (function(arg$x$1) {
      this.$jsfield$obstacles = arg$x$1
    });
    Class.prototype["winnable()Z"] = (function() {
      return this.$jsfield$winnable
    });
    Class.prototype["winnable_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$winnable = arg$x$1
    });
    Class.prototype["paint(Lme.shadaj.collidium.Canvas2D;)V"] = (function(arg$canvas) {
      arg$canvas.fillStyle = "black";
      arg$canvas.fillRect(0, 0, 500, 500);
      var jsx$1 = this["walls()Lscala.collection.immutable.List;"]();
      var jsx$2 = new $.c["me.shadaj.collidium.Board$$anonfun$paint$1"]()["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"](this, arg$canvas);
      jsx$1["foreach(Lscala.Function1;)V"](jsx$2);
      var jsx$3 = this["obstacles()Lscala.collection.immutable.List;"]();
      var jsx$4 = new $.c["me.shadaj.collidium.Board$$anonfun$paint$2"]()["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"](this, arg$canvas);
      jsx$3["foreach(Lscala.Function1;)V"](jsx$4);
      if ($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]()) {
        $.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas)
      } else {
        /*<skip>*/
      };
      this["hole()Lme.shadaj.collidium.Circle;"]()["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas);
      if (this["started()Z"]()) {
        this["ball()Lme.shadaj.collidium.Circle;"]()["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas)
      } else {
        new $.c["me.shadaj.collidium.Circle"]()["<init>(Lme.shadaj.collidium.Point;IT)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"]($.uF(this["cannonLocation()Lscala.Tuple2;"]()["_1()O"]()), $.uF(this["cannonLocation()Lscala.Tuple2;"]()["_2()O"]())), 50, "green")["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas);
        if (this["slingOption()Lscala.Option;"]()["isDefined()Z"]()) {
          $.asInstance(this["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas)
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["update()V"] = (function() {
      if (this["started()Z"]()) {
        if ((this["ball()Lme.shadaj.collidium.Circle;"]()["magnitude()D"]() >= 0.01)) {
          this["ball()Lme.shadaj.collidium.Circle;"]()["magnitude_=(D)V"]((this["ball()Lme.shadaj.collidium.Circle;"]()["magnitude()D"]() - this["friction()D"]()))
        } else {
          /*<skip>*/
        };
        var jsx$5 = this["walls()Lscala.collection.immutable.List;"]();
        var jsx$6 = new $.c["me.shadaj.collidium.Board$$anonfun^date$1"]()["<init>(Lme.shadaj.collidium.Board;)"](this);
        jsx$5["foreach(Lscala.Function1;)V"](jsx$6);
        var jsx$7 = this["obstacles()Lscala.collection.immutable.List;"]();
        var jsx$8 = new $.c["me.shadaj.collidium.Board$$anonfun^date$2"]()["<init>(Lme.shadaj.collidium.Board;)"](this);
        jsx$7["foreach(Lscala.Function1;)V"](jsx$8);
        if ((this["hole()Lme.shadaj.collidium.Circle;"]()["inBoundsOf(Lme.shadaj.collidium.Circle;)Z"](this["ball()Lme.shadaj.collidium.Circle;"]()) && (this["winnable()Z"]() === true))) {
          $.m["scala.Predef"]["println(O)V"]("You Won!");
          $.m["me.shadaj.collidium.Main"]["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]().pause();
          $.m["me.shadaj.collidium.Main"]["youwonMusic()Lme.shadaj.collidium.AudioElement;"]().play();
          this["winnable_=(Z)V"](false);
          this["ball()Lme.shadaj.collidium.Circle;"]()["magnitude_=(D)V"](0.0)
        } else {
          /*<skip>*/
        };
        this["ball()Lme.shadaj.collidium.Circle;"]()["update()V"]()
      } else {
        /*<skip>*/
      }
    });
    Class.prototype["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"] = (function(arg$name, arg$cannonLocation, arg$margin, arg$walls, arg$ball, arg$hole, arg$friction) {
      this.$jsfield$name = arg$name;
      this.$jsfield$cannonLocation = arg$cannonLocation;
      this.$jsfield$margin = arg$margin;
      this.$jsfield$walls = arg$walls;
      this.$jsfield$ball = arg$ball;
      this.$jsfield$hole = arg$hole;
      this.$jsfield$friction = arg$friction;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      this.$jsfield$slingOption = $.m["scala.None"];
      this.$jsfield$started = false;
      this.$jsfield$obstacles = $.m["scala.collection.immutable.Nil"];
      this.$jsfield$winnable = true;
      return this
    });
    Class.prototype.name = (function() {
      return this["name()T"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.margin = (function() {
      return this["margin()I"]()
    });
    Class.prototype.walls = (function() {
      return this["walls()Lscala.collection.immutable.List;"]()
    });
    Class.prototype.ball = (function() {
      return this["ball()Lme.shadaj.collidium.Circle;"]()
    });
    Class.prototype.hole = (function() {
      return this["hole()Lme.shadaj.collidium.Circle;"]()
    });
    Class.prototype.friction = (function() {
      return this["friction()D"]()
    });
    Class.prototype.slingOption = (function() {
      return this["slingOption()Lscala.Option;"]()
    });
    Class.prototype["slingOption_="] = (function(arg$1) {
      return this["slingOption_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.started = (function() {
      return this["started()Z"]()
    });
    Class.prototype["started_="] = (function(arg$1) {
      return this["started_=(Z)V"](arg$1)
    });
    Class.prototype.obstacles = (function() {
      return this["obstacles()Lscala.collection.immutable.List;"]()
    });
    Class.prototype["obstacles_="] = (function(arg$1) {
      return this["obstacles_=(Lscala.collection.immutable.List;)V"](arg$1)
    });
    Class.prototype.winnable = (function() {
      return this["winnable()Z"]()
    });
    Class.prototype["winnable_="] = (function(arg$1) {
      return this["winnable_=(Z)V"](arg$1)
    });
    Class.prototype.paint = (function(arg$1) {
      return this["paint(Lme.shadaj.collidium.Canvas2D;)V"](arg$1)
    });
    Class.prototype.update = (function() {
      return this["update()V"]()
    });
    function JSClass(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7) {
      Class.call(this);
      return this["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Board", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Board": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Board$$anonfun$paint$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$canvas$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$x$1) {
      arg$x$1["draw(Lme.shadaj.collidium.Canvas2D;)V"](this.$jsfield$canvas$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.Sprite;)V"]($.asInstance(arg$v1, "me.shadaj.collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"] = (function(arg$$outer, arg$canvas$1) {
      this.$jsfield$canvas$1 = arg$canvas$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "me.shadaj.collidium.Sprite")) {
        return this["apply(Lme.shadaj.collidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Board$$anonfun$paint$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Board$$anonfun$paint$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Board$$anonfun$paint$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$canvas$1 = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$x$2) {
      arg$x$2["draw(Lme.shadaj.collidium.Canvas2D;)V"](this.$jsfield$canvas$1)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.Sprite;)V"]($.asInstance(arg$v1, "me.shadaj.collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"] = (function(arg$$outer, arg$canvas$1) {
      this.$jsfield$canvas$1 = arg$canvas$1;
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "me.shadaj.collidium.Sprite")) {
        return this["apply(Lme.shadaj.collidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Board;Lme.shadaj.collidium.Canvas2D;)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Board$$anonfun$paint$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Board$$anonfun$paint$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Board$$anonfun^date$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$wall) {
      arg$wall["colliding(Lme.shadaj.collidium.Sprite;)V"](this.$jsfield$$outer["ball()Lme.shadaj.collidium.Circle;"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.Sprite;)V"]($.asInstance(arg$v1, "me.shadaj.collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Board;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "me.shadaj.collidium.Sprite")) {
        return this["apply(Lme.shadaj.collidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Board;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Board$$anonfun^date$1", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Board$$anonfun^date$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Board$$anonfun^date$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$obstacle) {
      arg$obstacle["colliding(Lme.shadaj.collidium.Sprite;)V"](this.$jsfield$$outer["ball()Lme.shadaj.collidium.Circle;"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.Sprite;)V"]($.asInstance(arg$v1, "me.shadaj.collidium.Sprite"));
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Board;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "me.shadaj.collidium.Sprite")) {
        return this["apply(Lme.shadaj.collidium.Sprite;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "java.lang.Object")) {
          return this["apply(O)O"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Board;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Board$$anonfun^date$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Board$$anonfun^date$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Circle", (function($) {
    function Class() {
      $.c["me.shadaj.collidium.Sprite"].prototype.constructor.call(this);
      this.$jsfield$location = null;
      this.$jsfield$diameter = 0;
      this.$jsfield$magnitude = 0.0
    };
    Class.prototype = Object.create($.c["me.shadaj.collidium.Sprite"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["location()Lme.shadaj.collidium.Point;"] = (function() {
      return this.$jsfield$location
    });
    Class.prototype["location_=(Lme.shadaj.collidium.Point;)V"] = (function(arg$x$1) {
      this.$jsfield$location = arg$x$1
    });
    Class.prototype["diameter()I"] = (function() {
      return this.$jsfield$diameter
    });
    Class.prototype["next()Lme.shadaj.collidium.Point;"] = (function() {
      return new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"]((this["location()Lme.shadaj.collidium.Point;"]()["x()D"]() + this["deltaX()D"]()), (this["location()Lme.shadaj.collidium.Point;"]()["y()D"]() + this["deltaY()D"]()))
    });
    Class.prototype["draw(Lme.shadaj.collidium.Canvas2D;)V"] = (function(arg$canvas) {
      $.c["me.shadaj.collidium.Sprite"].prototype["draw(Lme.shadaj.collidium.Canvas2D;)V"].call(this, arg$canvas);
      arg$canvas.beginPath();
      var radius$jsid$22359 = ((this["diameter()I"]() / 2) | 0);
      arg$canvas.arc(this["location()Lme.shadaj.collidium.Point;"]()["x()D"](), this["location()Lme.shadaj.collidium.Point;"]()["y()D"](), radius$jsid$22359, 0, 6.283185307179586, false);
      arg$canvas.fill()
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$sprite) {
      /*<skip>*/
    });
    Class.prototype["inBoundsOf(Lme.shadaj.collidium.Circle;)Z"] = (function(arg$circle) {
      var xshift$jsid$21818 = (arg$circle["location()Lme.shadaj.collidium.Point;"]()["x()D"]() - this["location()Lme.shadaj.collidium.Point;"]()["x()D"]());
      var yshift$jsid$21819 = (arg$circle["location()Lme.shadaj.collidium.Point;"]()["y()D"]() - this["location()Lme.shadaj.collidium.Point;"]()["y()D"]());
      var deltaDiameter$jsid$21820 = (((this["diameter()I"]() - arg$circle["diameter()I"]()) / 2) | 0);
      if ((arg$circle["diameter()I"]() > this["diameter()I"]())) {
        return false
      } else {
        if ((((xshift$jsid$21818 * xshift$jsid$21818) + (yshift$jsid$21819 * yshift$jsid$21819)) < (deltaDiameter$jsid$21820 * deltaDiameter$jsid$21820))) {
          return true
        } else {
          return false
        }
      }
    });
    Class.prototype["deltaX()D"] = (function() {
      return ($.m["java.lang.Math"]["cos(D)D"](this["theta()D"]()) * this["magnitude()D"]())
    });
    Class.prototype["deltaY()D"] = (function() {
      return ($.m["java.lang.Math"]["sin(D)D"](this["theta()D"]()) * this["magnitude()D"]())
    });
    Class.prototype["magnitude()D"] = (function() {
      return this.$jsfield$magnitude
    });
    Class.prototype["magnitude_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$magnitude = arg$x$1
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Point;IT)"] = (function(arg$location, arg$diameter, arg$color) {
      this.$jsfield$location = arg$location;
      this.$jsfield$diameter = arg$diameter;
      $.c["me.shadaj.collidium.Sprite"].prototype["<init>(T)"].call(this, arg$color);
      this.$jsfield$magnitude = 0.0;
      return this
    });
    Class.prototype.diameter = (function() {
      return this["diameter()I"]()
    });
    Class.prototype.inBoundsOf = (function(arg$1) {
      return this["inBoundsOf(Lme.shadaj.collidium.Circle;)Z"](arg$1)
    });
    Class.prototype.deltaX = (function() {
      return this["deltaX()D"]()
    });
    Class.prototype.deltaY = (function() {
      return this["deltaY()D"]()
    });
    Class.prototype.magnitude = (function() {
      return this["magnitude()D"]()
    });
    Class.prototype["magnitude_="] = (function(arg$1) {
      return this["magnitude_=(D)V"](arg$1)
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Point;IT)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Circle", Class, JSClass, "me.shadaj.collidium.Sprite", {
      "me.shadaj.collidium.Circle": true,
      "me.shadaj.collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Level", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$name = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$margin = 0;
      this.$jsfield$obstacles = null;
      this.$jsfield$ball = null;
      this.$jsfield$hole = null;
      this.$jsfield$friction = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["name()T"] = (function() {
      return this.$jsfield$name
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["margin()I"] = (function() {
      return this.$jsfield$margin
    });
    Class.prototype["obstacles()Lscala.collection.immutable.List;"] = (function() {
      return this.$jsfield$obstacles
    });
    Class.prototype["ball()Lme.shadaj.collidium.Circle;"] = (function() {
      return this.$jsfield$ball
    });
    Class.prototype["hole()Lme.shadaj.collidium.Circle;"] = (function() {
      return this.$jsfield$hole
    });
    Class.prototype["friction()D"] = (function() {
      return this.$jsfield$friction
    });
    Class.prototype["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"] = (function(arg$name, arg$cannonLocation, arg$margin, arg$obstacles, arg$ball, arg$hole, arg$friction) {
      this.$jsfield$name = arg$name;
      this.$jsfield$cannonLocation = arg$cannonLocation;
      this.$jsfield$margin = arg$margin;
      this.$jsfield$obstacles = arg$obstacles;
      this.$jsfield$ball = arg$ball;
      this.$jsfield$hole = arg$hole;
      this.$jsfield$friction = arg$friction;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.name = (function() {
      return this["name()T"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.margin = (function() {
      return this["margin()I"]()
    });
    Class.prototype.obstacles = (function() {
      return this["obstacles()Lscala.collection.immutable.List;"]()
    });
    Class.prototype.ball = (function() {
      return this["ball()Lme.shadaj.collidium.Circle;"]()
    });
    Class.prototype.hole = (function() {
      return this["hole()Lme.shadaj.collidium.Circle;"]()
    });
    Class.prototype.friction = (function() {
      return this["friction()D"]()
    });
    function JSClass(arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7) {
      Class.call(this);
      return this["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Level", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Level": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Line", (function($) {
    function Class() {
      $.c["me.shadaj.collidium.Sprite"].prototype.constructor.call(this);
      this.$jsfield$start = null;
      this.$jsfield$end = null;
      this.$jsfield$deltaX = 0.0;
      this.$jsfield$deltaY = 0.0;
      this.$jsfield$magnitude = 0.0;
      this.$jsfield$m = 0.0;
      this.$jsfield$c = 0.0;
      this.$jsfield$minX = 0.0;
      this.$jsfield$maxX = 0.0;
      this.$jsfield$minY = 0.0;
      this.$jsfield$maxY = 0.0;
      this.$jsfield$location = null
    };
    Class.prototype = Object.create($.c["me.shadaj.collidium.Sprite"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["start()Lme.shadaj.collidium.Point;"] = (function() {
      return this.$jsfield$start
    });
    Class.prototype["end()Lme.shadaj.collidium.Point;"] = (function() {
      return this.$jsfield$end
    });
    Class.prototype["deltaX()D"] = (function() {
      return this.$jsfield$deltaX
    });
    Class.prototype["deltaY()D"] = (function() {
      return this.$jsfield$deltaY
    });
    Class.prototype["magnitude()D"] = (function() {
      return this.$jsfield$magnitude
    });
    Class.prototype["m()D"] = (function() {
      return this.$jsfield$m
    });
    Class.prototype["c()D"] = (function() {
      return this.$jsfield$c
    });
    Class.prototype["y()Lscala.Function1;"] = (function() {
      return new $.c["me.shadaj.collidium.Line$$anonfun$y$1"]()["<init>(Lme.shadaj.collidium.Line;)"](this)
    });
    Class.prototype["minX()D"] = (function() {
      return this.$jsfield$minX
    });
    Class.prototype["maxX()D"] = (function() {
      return this.$jsfield$maxX
    });
    Class.prototype["minY()D"] = (function() {
      return this.$jsfield$minY
    });
    Class.prototype["maxY()D"] = (function() {
      return this.$jsfield$maxY
    });
    Class.prototype["next()Lme.shadaj.collidium.Point;"] = (function() {
      return this["start()Lme.shadaj.collidium.Point;"]()
    });
    Class.prototype["location()Lme.shadaj.collidium.Point;"] = (function() {
      return this.$jsfield$location
    });
    Class.prototype["location_=(Lme.shadaj.collidium.Point;)V"] = (function(arg$x$1) {
      this.$jsfield$location = arg$x$1
    });
    Class.prototype["draw(Lme.shadaj.collidium.Canvas2D;)V"] = (function(arg$canvas) {
      $.c["me.shadaj.collidium.Sprite"].prototype["draw(Lme.shadaj.collidium.Canvas2D;)V"].call(this, arg$canvas);
      arg$canvas.beginPath();
      arg$canvas.moveTo(this["start()Lme.shadaj.collidium.Point;"]()["x()D"](), this["start()Lme.shadaj.collidium.Point;"]()["y()D"]());
      arg$canvas.lineTo(this["end()Lme.shadaj.collidium.Point;"]()["x()D"](), this["end()Lme.shadaj.collidium.Point;"]()["y()D"]());
      arg$canvas.stroke()
    });
    Class.prototype["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"] = (function(arg$line) {
      if (($.m["java.lang.Math"]["abs(D)D"]((arg$line["m()D"]() - this["m()D"]())) < 0.0010)) {
        return $.m["scala.None"]
      } else {
        if (((arg$line["m()D"]() > 1000000) || (arg$line["m()D"]() < -1000000))) {
          var intersectionY$jsid$22459 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](arg$line["minX()D"]());
          if (((arg$line["maxY()D"]() > intersectionY$jsid$22459) && (arg$line["minY()D"]() < intersectionY$jsid$22459))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](arg$line["minX()D"](), intersectionY$jsid$22459))
          } else {
            return $.m["scala.None"]
          }
        } else {
          if (((this["m()D"]() > 1000000) || (this["m()D"]() < -1000000))) {
            var intersectionX$jsid$22483 = this["start()Lme.shadaj.collidium.Point;"]()["x()D"]();
            var intersectionY$jsid$22484 = arg$line["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$22483);
            var x1$jsid$22975 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22483, intersectionY$jsid$22484)
          } else {
            var intersectionX$jsid$22491 = ((arg$line["c()D"]() - this["c()D"]()) / (this["m()D"]() - arg$line["m()D"]()));
            var intersectionY$jsid$22492 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$22491);
            var x1$jsid$22975 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22491, intersectionY$jsid$22492)
          };
          var result$$jslabel$matchEnd3$22978;
          $jslabel$matchEnd3$22978: do {
            if ((x1$jsid$22975 !== null)) {
              var intersectionX$jsid$22515 = x1$jsid$22975["_1$mcD$sp()D"]();
              var intersectionY$jsid$22516 = x1$jsid$22975["_2$mcD$sp()D"]();
              result$$jslabel$matchEnd3$22978 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$22515, intersectionY$jsid$22516);
              break $jslabel$matchEnd3$22978
            } else {
              /*<skip>*/
            };
            throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$22975);
            break $jslabel$matchEnd3$22978
          } while (false);
          var x$1$jsid$22472 = result$$jslabel$matchEnd3$22978;
          var intersectionX$jsid$22473 = x$1$jsid$22472["_1$mcD$sp()D"]();
          var intersectionY$jsid$22474 = x$1$jsid$22472["_2$mcD$sp()D"]();
          if (((((((((intersectionX$jsid$22473 >= arg$line["minX()D"]()) && (intersectionX$jsid$22473 <= arg$line["maxX()D"]())) && (intersectionY$jsid$22474 >= arg$line["minY()D"]())) && (intersectionY$jsid$22474 <= arg$line["maxY()D"]())) && (intersectionX$jsid$22473 >= this["minX()D"]())) && (intersectionX$jsid$22473 <= this["maxX()D"]())) && (intersectionY$jsid$22474 >= this["minY()D"]())) && (intersectionY$jsid$22474 <= this["maxY()D"]()))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](intersectionX$jsid$22473, intersectionY$jsid$22474))
          } else {
            return $.m["scala.None"]
          }
        }
      }
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$sprite) {
      var spriteLine$jsid$22559 = new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$sprite["location()Lme.shadaj.collidium.Point;"](), arg$sprite["next()Lme.shadaj.collidium.Point;"](), arg$sprite["color()T"]());
      var x1$jsid$23006 = this["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"](spriteLine$jsid$22559);
      $jslabel$matchEnd5$23011: do {
        if ($.isInstance(x1$jsid$23006, "scala.Some")) {
          var x2$jsid$23007 = $.asInstance(x1$jsid$23006, "scala.Some");
          var point$jsid$22593 = $.asInstance(x2$jsid$23007["x()O"](), "me.shadaj.collidium.Point");
          arg$sprite["move(Lme.shadaj.collidium.Point;)V"](point$jsid$22593);
          arg$sprite["theta_=(D)V"](((2 * this["theta()D"]()) - arg$sprite["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23011
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$23006)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23011
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$23006);
        break $jslabel$matchEnd5$23011
      } while (false)
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Circle;)V"] = (function(arg$circle) {
      var spriteLine$jsid$22603 = new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$circle["location()Lme.shadaj.collidium.Point;"](), arg$circle["next()Lme.shadaj.collidium.Point;"](), arg$circle["color()T"]());
      var x1$jsid$23019 = this["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"](spriteLine$jsid$22603);
      $jslabel$matchEnd5$23024: do {
        if ($.isInstance(x1$jsid$23019, "scala.Some")) {
          var x2$jsid$23020 = $.asInstance(x1$jsid$23019, "scala.Some");
          var point$jsid$22605 = $.asInstance(x2$jsid$23020["x()O"](), "me.shadaj.collidium.Point");
          var radius$jsid$22606 = ((arg$circle["diameter()I"]() / 2) | 0);
          var movePoint$jsid$22607 = new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"]((point$jsid$22605["x()D"]() - ($.m["java.lang.Math"]["cos(D)D"](arg$circle["theta()D"]()) * radius$jsid$22606)), (point$jsid$22605["y()D"]() - ($.m["java.lang.Math"]["sin(D)D"](arg$circle["theta()D"]()) * radius$jsid$22606)));
          arg$circle["move(Lme.shadaj.collidium.Point;)V"](movePoint$jsid$22607);
          arg$circle["theta_=(D)V"](((2 * this["theta()D"]()) - arg$circle["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23024
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$23019)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$23024
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$23019);
        break $jslabel$matchEnd5$23024
      } while (false)
    });
    Class.prototype["height()I"] = (function() {
      return 0
    });
    Class.prototype["width()I"] = (function() {
      return 0
    });
    Class.prototype["bounds()Lscala.Tuple2;"] = (function() {
      return new $.c["scala.Tuple2"]()["<init>(OO)"](this["start()Lme.shadaj.collidium.Point;"](), this["end()Lme.shadaj.collidium.Point;"]())
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"] = (function(arg$start, arg$end, arg$color) {
      this.$jsfield$start = arg$start;
      this.$jsfield$end = arg$end;
      $.c["me.shadaj.collidium.Sprite"].prototype["<init>(T)"].call(this, arg$color);
      this.$jsfield$deltaX = (arg$end["x()D"]() - arg$start["x()D"]());
      this.$jsfield$deltaY = (arg$end["y()D"]() - arg$start["y()D"]());
      this.$jsfield$magnitude = $.m["java.lang.Math"]["sqrt(D)D"](((this["deltaX()D"]() * this["deltaX()D"]()) + (this["deltaY()D"]() * this["deltaY()D"]())));
      this.$jsfield$m = (this["deltaY()D"]() / this["deltaX()D"]());
      this.$jsfield$c = (arg$start["y()D"]() - (arg$start["x()D"]() * this["m()D"]()));
      this.$jsfield$minX = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["x()D"]()))["min(O)O"]($.bD(arg$end["x()D"]())));
      this.$jsfield$maxX = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["x()D"]()))["max(O)O"]($.bD(arg$end["x()D"]())));
      this.$jsfield$minY = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["y()D"]()))["min(O)O"]($.bD(arg$end["y()D"]())));
      this.$jsfield$maxY = $.uD(new $.c["scala.runtime.RichDouble"]()["<init>(D)"]($.m["scala.Predef"]["doubleWrapper(D)D"](arg$start["y()D"]()))["max(O)O"]($.bD(arg$end["y()D"]())));
      this["theta_=(D)V"]($.m["java.lang.Math"]["atan(D)D"](this["m()D"]()));
      if ((arg$start["x()D"]() < arg$end["x()D"]())) {
        this["theta_=(D)V"]((this["theta()D"]() + $.m["me.shadaj.collidium.Angle"]["doubleToAngle(D)Lme.shadaj.collidium.Angle;"](180.0)["deg()D"]()))
      } else {
        /*<skip>*/
      };
      this.$jsfield$location = arg$start;
      return this
    });
    Class.prototype.start = (function() {
      return this["start()Lme.shadaj.collidium.Point;"]()
    });
    Class.prototype.end = (function() {
      return this["end()Lme.shadaj.collidium.Point;"]()
    });
    Class.prototype.deltaX = (function() {
      return this["deltaX()D"]()
    });
    Class.prototype.deltaY = (function() {
      return this["deltaY()D"]()
    });
    Class.prototype.magnitude = (function() {
      return this["magnitude()D"]()
    });
    Class.prototype.m = (function() {
      return this["m()D"]()
    });
    Class.prototype.c = (function() {
      return this["c()D"]()
    });
    Class.prototype.y = (function() {
      return this["y()Lscala.Function1;"]()
    });
    Class.prototype.minX = (function() {
      return this["minX()D"]()
    });
    Class.prototype.maxX = (function() {
      return this["maxX()D"]()
    });
    Class.prototype.minY = (function() {
      return this["minY()D"]()
    });
    Class.prototype.maxY = (function() {
      return this["maxY()D"]()
    });
    Class.prototype.intersects = (function(arg$1) {
      return this["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"](arg$1)
    });
    Class.prototype.colliding = (function(arg$1) {
      if ($.isInstance(arg$1, "me.shadaj.collidium.Circle")) {
        return this["colliding(Lme.shadaj.collidium.Circle;)V"](arg$1)
      } else {
        if ($.isInstance(arg$1, "me.shadaj.collidium.Sprite")) {
          return this["colliding(Lme.shadaj.collidium.Sprite;)V"](arg$1)
        } else {
          throw "No matching overload"
        }
      }
    });
    Class.prototype.height = (function() {
      return this["height()I"]()
    });
    Class.prototype.width = (function() {
      return this["width()I"]()
    });
    Class.prototype.bounds = (function() {
      return this["bounds()Lscala.Tuple2;"]()
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Line", Class, JSClass, "me.shadaj.collidium.Sprite", {
      "me.shadaj.collidium.Line": true,
      "me.shadaj.collidium.Sprite": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Line$$anonfun$y$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype.constructor.call(this);
      this.$jsfield$$outer = null
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(D)D"] = (function(arg$x) {
      return this["apply$mcDD$sp(D)D"](arg$x)
    });
    Class.prototype["apply$mcDD$sp(D)D"] = (function(arg$x) {
      return ((this.$jsfield$$outer["m()D"]() * arg$x) + this.$jsfield$$outer["c()D"]())
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return $.bD(this["apply(D)D"]($.uD(arg$v1)))
    });
    Class.prototype["<init>(Lme.shadaj.collidium.Line;)"] = (function(arg$$outer) {
      if ((arg$$outer === null)) {
        throw new $.c["java.lang.NullPointerException"]()["<init>()"]()
      } else {
        this.$jsfield$$outer = arg$$outer
      };
      $.c["scala.runtime.AbstractFunction1$mcDD$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Line;)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Line$$anonfun$y$1", Class, JSClass, "scala.runtime.AbstractFunction1$mcDD$sp", {
      "me.shadaj.collidium.Line$$anonfun$y$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1$mcDD$sp": true,
      "scala.Function1$mcDD$sp": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Main$", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$board = null;
      this.$jsfield$cannonLocation = null;
      this.$jsfield$pullingRubber = false;
      this.$jsfield$curObstacle = null;
      this.$jsfield$drawingLine = false;
      this.$jsfield$canvasOrig = null;
      this.$jsfield$canvasDom = null;
      this.$jsfield$canvasElem = null;
      this.$jsfield$canvas = null;
      this.$jsfield$youwonMusic = null;
      this.$jsfield$backgroundMusic = null;
      this.$jsfield$onMouseDown = null;
      this.$jsfield$onMouseMove = null;
      this.$jsfield$onMouseUp = null
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["board()Lme.shadaj.collidium.Board;"] = (function() {
      return this.$jsfield$board
    });
    Class.prototype["cannonLocation()Lscala.Tuple2;"] = (function() {
      return this.$jsfield$cannonLocation
    });
    Class.prototype["pullingRubber()Z"] = (function() {
      return this.$jsfield$pullingRubber
    });
    Class.prototype["pullingRubber_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$pullingRubber = arg$x$1
    });
    Class.prototype["curObstacle()Lscala.Option;"] = (function() {
      return this.$jsfield$curObstacle
    });
    Class.prototype["curObstacle_=(Lscala.Option;)V"] = (function(arg$x$1) {
      this.$jsfield$curObstacle = arg$x$1
    });
    Class.prototype["drawingLine()Z"] = (function() {
      return this.$jsfield$drawingLine
    });
    Class.prototype["drawingLine_=(Z)V"] = (function(arg$x$1) {
      this.$jsfield$drawingLine = arg$x$1
    });
    Class.prototype["canvasOrig()Lscala.js.Dynamic;"] = (function() {
      return this.$jsfield$canvasOrig
    });
    Class.prototype["canvasDom()Lme.shadaj.collidium.DOMElement;"] = (function() {
      return this.$jsfield$canvasDom
    });
    Class.prototype["canvasElem()Lme.shadaj.collidium.HTMLCanvasElement;"] = (function() {
      return this.$jsfield$canvasElem
    });
    Class.prototype["canvas()Lme.shadaj.collidium.Canvas2D;"] = (function() {
      return this.$jsfield$canvas
    });
    Class.prototype["youwonMusic()Lme.shadaj.collidium.AudioElement;"] = (function() {
      return this.$jsfield$youwonMusic
    });
    Class.prototype["backgroundMusic()Lme.shadaj.collidium.AudioElement;"] = (function() {
      return this.$jsfield$backgroundMusic
    });
    Class.prototype["main()V"] = (function() {
      var tick$jsid$22297 = new $.c["me.shadaj.collidium.Main$$anonfun$1"]()["<init>()"]();
      this["canvasDom()Lme.shadaj.collidium.DOMElement;"]().onmousedown = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseDown()Lscala.Function1;"]());
      this["canvasDom()Lme.shadaj.collidium.DOMElement;"]().onmouseup = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseUp()Lscala.Function1;"]());
      this["canvasDom()Lme.shadaj.collidium.DOMElement;"]().onmousemove = (function($this) {
        return (function(arg1) {
          return $this["apply(O)O"](arg1)
        })
      })(this["onMouseMove()Lscala.Function1;"]());
      $.g.setInterval((function($this) {
        return (function() {
          return $this["apply()O"]()
        })
      })(tick$jsid$22297), 20)
    });
    Class.prototype["onMouseDown()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseDown
    });
    Class.prototype["onMouseMove()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseMove
    });
    Class.prototype["onMouseUp()Lscala.Function1;"] = (function() {
      return this.$jsfield$onMouseUp
    });
    Class.prototype["<init>()"] = (function() {
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      $.modules["me.shadaj.collidium.Main"]._instance = this;
      this.$jsfield$board = new $.c["me.shadaj.collidium.Board"]()["<init>(TLscala.Tuple2;ILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"]("baseLevel", new $.c["scala.Tuple2"]()["<init>(OO)"]($.bF(400.0), $.bF(400.0)), 5, $.m["scala.collection.immutable.List"]["apply(Lscala.collection.Seq;)Lscala.collection.immutable.List;"]($.m["scala.Predef"]["wrapRefArray([O)Lscala.collection.mutable.WrappedArray;"]($.asInstance($.makeNativeArrayWrapper($.classes["me.shadaj.collidium.Line"].array, [new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](10.0, 10.0), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](490.0, 10.0), "white"), new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](490.0, 10.0), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](490.0, 490.0), "white"), new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](490.0, 490.0), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](10.0, 490.0), "white"), new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](10.0, 490.0), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](10.0, 10.0), "white")]), "java.lang.Object[]"))), new $.c["me.shadaj.collidium.Circle"]()["<init>(Lme.shadaj.collidium.Point;IT)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](250.0, 250.0), 10, "orange"), new $.c["me.shadaj.collidium.Circle"]()["<init>(Lme.shadaj.collidium.Point;IT)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](100.0, 100.0), 50, "red"), 0.0);
      this.$jsfield$cannonLocation = this["board()Lme.shadaj.collidium.Board;"]()["cannonLocation()Lscala.Tuple2;"]();
      this.$jsfield$pullingRubber = false;
      this.$jsfield$curObstacle = $.m["scala.None"];
      this.$jsfield$drawingLine = false;
      this.$jsfield$canvasOrig = $.g.document.getElementById("canvas");
      this.$jsfield$canvasDom = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvasElem = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvas = this["canvasElem()Lme.shadaj.collidium.HTMLCanvasElement;"]().getContext("2d");
      this.$jsfield$youwonMusic = $.g.document.getElementById("youWonAudio");
      this.$jsfield$backgroundMusic = $.g.document.getElementById("backgroundAudio");
      var jsx$1 = new $.c["me.shadaj.collidium.Main$$anonfun$2"]()["<init>()"]();
      this.$jsfield$onMouseDown = jsx$1;
      var jsx$2 = new $.c["me.shadaj.collidium.Main$$anonfun$3"]()["<init>()"]();
      this.$jsfield$onMouseMove = jsx$2;
      var jsx$3 = new $.c["me.shadaj.collidium.Main$$anonfun$4"]()["<init>()"]();
      this.$jsfield$onMouseUp = jsx$3;
      return this
    });
    Class.prototype.board = (function() {
      return this["board()Lme.shadaj.collidium.Board;"]()
    });
    Class.prototype.cannonLocation = (function() {
      return this["cannonLocation()Lscala.Tuple2;"]()
    });
    Class.prototype.pullingRubber = (function() {
      return this["pullingRubber()Z"]()
    });
    Class.prototype["pullingRubber_="] = (function(arg$1) {
      return this["pullingRubber_=(Z)V"](arg$1)
    });
    Class.prototype.curObstacle = (function() {
      return this["curObstacle()Lscala.Option;"]()
    });
    Class.prototype["curObstacle_="] = (function(arg$1) {
      return this["curObstacle_=(Lscala.Option;)V"](arg$1)
    });
    Class.prototype.drawingLine = (function() {
      return this["drawingLine()Z"]()
    });
    Class.prototype["drawingLine_="] = (function(arg$1) {
      return this["drawingLine_=(Z)V"](arg$1)
    });
    Class.prototype.canvasOrig = (function() {
      return this["canvasOrig()Lscala.js.Dynamic;"]()
    });
    Class.prototype.canvasDom = (function() {
      return this["canvasDom()Lme.shadaj.collidium.DOMElement;"]()
    });
    Class.prototype.canvasElem = (function() {
      return this["canvasElem()Lme.shadaj.collidium.HTMLCanvasElement;"]()
    });
    Class.prototype.canvas = (function() {
      return this["canvas()Lme.shadaj.collidium.Canvas2D;"]()
    });
    Class.prototype.youwonMusic = (function() {
      return this["youwonMusic()Lme.shadaj.collidium.AudioElement;"]()
    });
    Class.prototype.backgroundMusic = (function() {
      return this["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]()
    });
    Class.prototype.main = (function() {
      return this["main()V"]()
    });
    Class.prototype.onMouseDown = (function() {
      return this["onMouseDown()Lscala.Function1;"]()
    });
    Class.prototype.onMouseMove = (function() {
      return this["onMouseMove()Lscala.Function1;"]()
    });
    Class.prototype.onMouseUp = (function() {
      return this["onMouseUp()Lscala.Function1;"]()
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Main$", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Main$": true,
      "java.lang.Object": true
    })
  }));
  $.registerModule("me.shadaj.collidium.Main", "me.shadaj.collidium.Main$");
  $.registerClass("me.shadaj.collidium.Main$$anonfun$1", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply()V"] = (function() {
      this["apply$mcV$sp()V"]()
    });
    Class.prototype["apply$mcV$sp()V"] = (function() {
      $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["paint(Lme.shadaj.collidium.Canvas2D;)V"]($.m["me.shadaj.collidium.Main"]["canvas()Lme.shadaj.collidium.Canvas2D;"]());
      $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["update()V"]()
    });
    Class.prototype["apply()O"] = (function() {
      this["apply()V"]();
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction0$mcV$sp"].prototype["<init>()"].call(this);
      return this
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Main$$anonfun$1", Class, JSClass, "scala.runtime.AbstractFunction0$mcV$sp", {
      "me.shadaj.collidium.Main$$anonfun$1": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction0$mcV$sp": true,
      "scala.Function0$mcV$sp": true,
      "scala.runtime.AbstractFunction0": true,
      "scala.Function0": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Main$$anonfun$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22204 = arg$event.layerX;
      var y$jsid$22205 = arg$event.layerY;
      var xDiff$jsid$22206 = ($.uF($.m["me.shadaj.collidium.Main"]["cannonLocation()Lscala.Tuple2;"]()["_1()O"]()) - x$jsid$22204);
      var yDiff$jsid$22207 = ($.uF($.m["me.shadaj.collidium.Main"]["cannonLocation()Lscala.Tuple2;"]()["_2()O"]()) - y$jsid$22205);
      if ((!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]())) {
        if ((((xDiff$jsid$22206 * xDiff$jsid$22206) + (yDiff$jsid$22207 * yDiff$jsid$22207)) <= 625)) {
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Sling"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22204, y$jsid$22205), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22204, y$jsid$22205), "white")));
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](x$jsid$22204);
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](y$jsid$22205)
        } else {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22204, y$jsid$22205), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22204, y$jsid$22205), "white")));
          $.m["me.shadaj.collidium.Main"]["drawingLine_=(Z)V"](true)
        }
      } else {
        /*<skip>*/
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Main$$anonfun$2", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Main$$anonfun$2": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Main$$anonfun$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22249 = arg$event.layerX;
      var y$jsid$22250 = arg$event.layerY;
      if (($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]()))) {
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](x$jsid$22249);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](y$jsid$22250);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Sling"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22249, y$jsid$22250), "white")));
        $.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"]($.m["me.shadaj.collidium.Main"]["canvas()Lme.shadaj.collidium.Canvas2D;"]())
      } else {
        if (($.m["me.shadaj.collidium.Main"]["drawingLine()Z"]() && $.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22249, y$jsid$22250), "white")));
          $.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"]($.m["me.shadaj.collidium.Main"]["canvas()Lme.shadaj.collidium.Canvas2D;"]())
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Main$$anonfun$3", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Main$$anonfun$3": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }));
  $.registerClass("me.shadaj.collidium.Main$$anonfun$4", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.MouseEvent;)V"] = (function(arg$event) {
      var x$jsid$22261 = arg$event.layerX;
      var y$jsid$22262 = arg$event.layerY;
      if (($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]()))) {
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["theta_=(D)V"]($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Sprite")["theta()D"]());
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["magnitude_=(D)V"](($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["magnitude()D"]() / 40));
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](y$jsid$22262);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](x$jsid$22261);
        $.m["me.shadaj.collidium.Main"]["pullingRubber_=(Z)V"](false);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started_=(Z)V"](true);
        $.m["me.shadaj.collidium.Main"]["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]().play()
      } else {
        if (($.m["me.shadaj.collidium.Main"]["drawingLine()Z"]() && $.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$22261, y$jsid$22262), "white")));
          var jsx$4 = $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]();
          var x$1$jsid$22291 = $.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line");
          var jsx$5 = $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["obstacles()Lscala.collection.immutable.List;"]()["::(O)Lscala.collection.immutable.List;"](x$1$jsid$22291);
          jsx$4["obstacles_=(Lscala.collection.immutable.List;)V"](jsx$5);
          $.m["me.shadaj.collidium.Main"]["drawingLine_=(Z)V"](false);
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.None"])
        } else {
          /*<skip>*/
        }
      }
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$v1);
      return $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]()
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lme.shadaj.collidium.MouseEvent;)V"](arg$1)
      }
    });
    function JSClass() {
      Class.call(this);
      return this["<init>()"]()
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Main$$anonfun$4", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Main$$anonfun$4": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Point", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$x = 0.0;
      this.$jsfield$y = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["x()D"] = (function() {
      return this.$jsfield$x
    });
    Class.prototype["x_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$x = arg$x$1
    });
    Class.prototype["y()D"] = (function() {
      return this.$jsfield$y
    });
    Class.prototype["y_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$y = arg$x$1
    });
    Class.prototype["toString()T"] = (function() {
      return (((("Point(" + $.bD(this["x()D"]())) + ",") + $.bD(this["y()D"]())) + ")")
    });
    Class.prototype["<init>(DD)"] = (function(arg$x, arg$y) {
      this.$jsfield$x = arg$x;
      this.$jsfield$y = arg$y;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.x = (function() {
      return this["x()D"]()
    });
    Class.prototype["x_="] = (function(arg$1) {
      return this["x_=(D)V"](arg$1)
    });
    Class.prototype.y = (function() {
      return this["y()D"]()
    });
    Class.prototype["y_="] = (function(arg$1) {
      return this["y_=(D)V"](arg$1)
    });
    function JSClass(arg$1, arg$2) {
      Class.call(this);
      return this["<init>(DD)"](arg$1, arg$2)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Point", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Point": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Sling", (function($) {
    function Class() {
      $.c["me.shadaj.collidium.Line"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["me.shadaj.collidium.Line"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"] = (function(arg$start, arg$end, arg$color) {
      $.c["me.shadaj.collidium.Line"].prototype["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"].call(this, arg$start, arg$end, arg$color);
      return this
    });
    function JSClass(arg$1, arg$2, arg$3) {
      Class.call(this);
      return this["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$1, arg$2, arg$3)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Sling", Class, JSClass, "me.shadaj.collidium.Line", {
      "me.shadaj.collidium.Sling": true,
      "me.shadaj.collidium.Line": true,
      "me.shadaj.collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Sprite", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$color = null;
      this.$jsfield$theta = 0.0
    };
    Class.prototype = Object.create($.c["java.lang.Object"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["color()T"] = (function() {
      return this.$jsfield$color
    });
    Class.prototype["draw(Lme.shadaj.collidium.Canvas2D;)V"] = (function(arg$canvas) {
      arg$canvas.fillStyle = this["color()T"]();
      arg$canvas.strokeStyle = this["color()T"]()
    });
    Class.prototype["theta()D"] = (function() {
      return this.$jsfield$theta
    });
    Class.prototype["theta_=(D)V"] = (function(arg$x$1) {
      this.$jsfield$theta = arg$x$1
    });
    Class.prototype["move(Lme.shadaj.collidium.Point;)V"] = (function(arg$to) {
      this["location_=(Lme.shadaj.collidium.Point;)V"](arg$to)
    });
    Class.prototype["update()V"] = (function() {
      this["move(Lme.shadaj.collidium.Point;)V"](this["next()Lme.shadaj.collidium.Point;"]())
    });
    Class.prototype["<init>(T)"] = (function(arg$color) {
      this.$jsfield$color = arg$color;
      $.c["java.lang.Object"].prototype["<init>()"].call(this);
      this.$jsfield$theta = 0.0;
      return this
    });
    Class.prototype.color = (function() {
      return this["color()T"]()
    });
    Class.prototype.draw = (function(arg$1) {
      return this["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$1)
    });
    Class.prototype.colliding = (function(arg$1) {
      return this["colliding(Lme.shadaj.collidium.Sprite;)V"](arg$1)
    });
    Class.prototype.theta = (function() {
      return this["theta()D"]()
    });
    Class.prototype["theta_="] = (function(arg$1) {
      return this["theta_=(D)V"](arg$1)
    });
    Class.prototype.location = (function() {
      return this["location()Lme.shadaj.collidium.Point;"]()
    });
    Class.prototype["location_="] = (function(arg$1) {
      return this["location_=(Lme.shadaj.collidium.Point;)V"](arg$1)
    });
    Class.prototype.next = (function() {
      return this["next()Lme.shadaj.collidium.Point;"]()
    });
    Class.prototype.move = (function(arg$1) {
      return this["move(Lme.shadaj.collidium.Point;)V"](arg$1)
    });
    Class.prototype.update = (function() {
      return this["update()V"]()
    });
    function JSClass(arg$1) {
      Class.call(this);
      return this["<init>(T)"](arg$1)
    };
    JSClass.prototype = Class.prototype;
    $.createClass("me.shadaj.collidium.Sprite", Class, JSClass, "java.lang.Object", {
      "me.shadaj.collidium.Sprite": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

//@ sourceMappingURL=collidium.js.map
