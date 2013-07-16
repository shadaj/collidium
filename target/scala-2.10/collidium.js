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
  $.createInterface("me.shadaj.collidium.AudioElement", {
    "me.shadaj.collidium.AudioElement": true,
    "me.shadaj.collidium.DOMElement": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.registerClass("me.shadaj.collidium.Board", (function($) {
    function Class() {
      $.c["java.lang.Object"].prototype.constructor.call(this);
      this.$jsfield$name = null;
      this.$jsfield$maximumStretch = 0;
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
    Class.prototype["maximumStretch()I"] = (function() {
      return this.$jsfield$maximumStretch
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
      this["ball()Lme.shadaj.collidium.Circle;"]()["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas);
      if ((!this["started()Z"]())) {
        if (this["slingOption()Lscala.Option;"]()["isDefined()Z"]()) {
          $.asInstance(this["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"](arg$canvas)
        } else {
          /*<skip>*/
        }
      } else {
        /*<skip>*/
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
    Class.prototype["<init>(TIILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"] = (function(arg$name, arg$maximumStretch, arg$margin, arg$walls, arg$ball, arg$hole, arg$friction) {
      this.$jsfield$name = arg$name;
      this.$jsfield$maximumStretch = arg$maximumStretch;
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
    Class.prototype.maximumStretch = (function() {
      return this["maximumStretch()I"]()
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
      return this["<init>(TIILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"](arg$1, arg$2, arg$3, arg$4, arg$5, arg$6, arg$7)
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
  $.createInterface("me.shadaj.collidium.Canvas2D", {
    "me.shadaj.collidium.Canvas2D": true,
    "java.lang.Object": true
  })
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
      var radius$jsid$26574 = ((this["diameter()I"]() / 2) | 0);
      arg$canvas.arc(this["location()Lme.shadaj.collidium.Point;"]()["x()D"](), this["location()Lme.shadaj.collidium.Point;"]()["y()D"](), radius$jsid$26574, 0, 6.283185307179586, false);
      arg$canvas.fill()
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$sprite) {
      /*<skip>*/
    });
    Class.prototype["inBoundsOf(Lme.shadaj.collidium.Circle;)Z"] = (function(arg$circle) {
      var xshift$jsid$21801 = (arg$circle["location()Lme.shadaj.collidium.Point;"]()["x()D"]() - this["location()Lme.shadaj.collidium.Point;"]()["x()D"]());
      var yshift$jsid$21802 = (arg$circle["location()Lme.shadaj.collidium.Point;"]()["y()D"]() - this["location()Lme.shadaj.collidium.Point;"]()["y()D"]());
      var deltaDiameter$jsid$21803 = (((this["diameter()I"]() - arg$circle["diameter()I"]()) / 2) | 0);
      if ((arg$circle["diameter()I"]() > this["diameter()I"]())) {
        return false
      } else {
        if ((((xshift$jsid$21801 * xshift$jsid$21801) + (yshift$jsid$21802 * yshift$jsid$21802)) < (deltaDiameter$jsid$21803 * deltaDiameter$jsid$21803))) {
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
  $.createInterface("me.shadaj.collidium.DOMDocument", {
    "me.shadaj.collidium.DOMDocument": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.DOMElement", {
    "me.shadaj.collidium.DOMElement": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.HTMLCanvasElement", {
    "me.shadaj.collidium.HTMLCanvasElement": true,
    "me.shadaj.collidium.DOMElement": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.JQuery", {
    "me.shadaj.collidium.JQuery": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.JQueryEvent", {
    "me.shadaj.collidium.JQueryEvent": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.JQueryOffset", {
    "me.shadaj.collidium.JQueryOffset": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.JQueryStatic", {
    "me.shadaj.collidium.JQueryStatic": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.JSON", {
    "me.shadaj.collidium.JSON": true,
    "java.lang.Object": true
  })
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
          var intersectionY$jsid$26674 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](arg$line["minX()D"]());
          if (((arg$line["maxY()D"]() > intersectionY$jsid$26674) && (arg$line["minY()D"]() < intersectionY$jsid$26674))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](arg$line["minX()D"](), intersectionY$jsid$26674))
          } else {
            return $.m["scala.None"]
          }
        } else {
          if (((this["m()D"]() > 1000000) || (this["m()D"]() < -1000000))) {
            var intersectionX$jsid$26698 = this["start()Lme.shadaj.collidium.Point;"]()["x()D"]();
            var intersectionY$jsid$26699 = arg$line["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$26698);
            var x1$jsid$27229 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$26698, intersectionY$jsid$26699)
          } else {
            var intersectionX$jsid$26706 = ((arg$line["c()D"]() - this["c()D"]()) / (this["m()D"]() - arg$line["m()D"]()));
            var intersectionY$jsid$26707 = this["y()Lscala.Function1;"]()["apply$mcDD$sp(D)D"](intersectionX$jsid$26706);
            var x1$jsid$27229 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$26706, intersectionY$jsid$26707)
          };
          var result$$jslabel$matchEnd3$27231;
          $jslabel$matchEnd3$27231: do {
            if ((x1$jsid$27229 !== null)) {
              var intersectionX$jsid$26729 = x1$jsid$27229["_1$mcD$sp()D"]();
              var intersectionY$jsid$26730 = x1$jsid$27229["_2$mcD$sp()D"]();
              result$$jslabel$matchEnd3$27231 = new $.c["scala.Tuple2$mcDD$sp"]()["<init>(DD)"](intersectionX$jsid$26729, intersectionY$jsid$26730);
              break $jslabel$matchEnd3$27231
            } else {
              /*<skip>*/
            };
            throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27229);
            break $jslabel$matchEnd3$27231
          } while (false);
          var x$1$jsid$26687 = result$$jslabel$matchEnd3$27231;
          var intersectionX$jsid$26688 = x$1$jsid$26687["_1$mcD$sp()D"]();
          var intersectionY$jsid$26689 = x$1$jsid$26687["_2$mcD$sp()D"]();
          if (((((((((intersectionX$jsid$26688 >= arg$line["minX()D"]()) && (intersectionX$jsid$26688 <= arg$line["maxX()D"]())) && (intersectionY$jsid$26689 >= arg$line["minY()D"]())) && (intersectionY$jsid$26689 <= arg$line["maxY()D"]())) && (intersectionX$jsid$26688 >= this["minX()D"]())) && (intersectionX$jsid$26688 <= this["maxX()D"]())) && (intersectionY$jsid$26689 >= this["minY()D"]())) && (intersectionY$jsid$26689 <= this["maxY()D"]()))) {
            return $.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](intersectionX$jsid$26688, intersectionY$jsid$26689))
          } else {
            return $.m["scala.None"]
          }
        }
      }
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Sprite;)V"] = (function(arg$sprite) {
      var spriteLine$jsid$26773 = new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$sprite["location()Lme.shadaj.collidium.Point;"](), arg$sprite["next()Lme.shadaj.collidium.Point;"](), arg$sprite["color()T"]());
      var x1$jsid$27235 = this["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"](spriteLine$jsid$26773);
      $jslabel$matchEnd5$27240: do {
        if ($.isInstance(x1$jsid$27235, "scala.Some")) {
          var x2$jsid$27236 = $.asInstance(x1$jsid$27235, "scala.Some");
          var point$jsid$26807 = $.asInstance(x2$jsid$27236["x()O"](), "me.shadaj.collidium.Point");
          arg$sprite["move(Lme.shadaj.collidium.Point;)V"](point$jsid$26807);
          arg$sprite["theta_=(D)V"](((2 * this["theta()D"]()) - arg$sprite["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$27240
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$27235)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$27240
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27235);
        break $jslabel$matchEnd5$27240
      } while (false)
    });
    Class.prototype["colliding(Lme.shadaj.collidium.Circle;)V"] = (function(arg$circle) {
      var spriteLine$jsid$26817 = new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](arg$circle["location()Lme.shadaj.collidium.Point;"](), arg$circle["next()Lme.shadaj.collidium.Point;"](), arg$circle["color()T"]());
      var x1$jsid$27248 = this["intersects(Lme.shadaj.collidium.Line;)Lscala.Option;"](spriteLine$jsid$26817);
      $jslabel$matchEnd5$27253: do {
        if ($.isInstance(x1$jsid$27248, "scala.Some")) {
          var x2$jsid$27249 = $.asInstance(x1$jsid$27248, "scala.Some");
          var point$jsid$26819 = $.asInstance(x2$jsid$27249["x()O"](), "me.shadaj.collidium.Point");
          var radius$jsid$26820 = ((arg$circle["diameter()I"]() / 2) | 0);
          var movePoint$jsid$26821 = new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"]((point$jsid$26819["x()D"]() - ($.m["java.lang.Math"]["cos(D)D"](arg$circle["theta()D"]()) * radius$jsid$26820)), (point$jsid$26819["y()D"]() - ($.m["java.lang.Math"]["sin(D)D"](arg$circle["theta()D"]()) * radius$jsid$26820)));
          arg$circle["move(Lme.shadaj.collidium.Point;)V"](movePoint$jsid$26821);
          arg$circle["theta_=(D)V"](((2 * this["theta()D"]()) - arg$circle["theta()D"]()));
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$27253
        } else {
          /*<skip>*/
        };
        if ($.anyRefEqEq($.m["scala.None"], x1$jsid$27248)) {
          $.m["scala.runtime.BoxedUnit"]["UNIT()Lscala.runtime.BoxedUnit;"]();
          break $jslabel$matchEnd5$27253
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27248);
        break $jslabel$matchEnd5$27253
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
    Class.prototype["jsonToPoint(Lscala.js.Dynamic;)Lme.shadaj.collidium.Point;"] = (function(arg$json) {
      return new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.x.toString()))["toInt()I"](), new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.y.toString()))["toInt()I"]())
    });
    Class.prototype["jsonToSprite(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"] = (function(arg$json) {
      if ((arg$json.typ.toString() === "line")) {
        return new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](this["jsonToPoint(Lscala.js.Dynamic;)Lme.shadaj.collidium.Point;"](arg$json.start), this["jsonToPoint(Lscala.js.Dynamic;)Lme.shadaj.collidium.Point;"](arg$json.end), arg$json.color.toString())
      } else {
        if ((arg$json.typ.toString() === "circle")) {
          return new $.c["me.shadaj.collidium.Circle"]()["<init>(Lme.shadaj.collidium.Point;IT)"](this["jsonToPoint(Lscala.js.Dynamic;)Lme.shadaj.collidium.Point;"](arg$json.location), new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.diameter.toString()))["toInt()I"](), arg$json.color.toString())
        } else {
          return null
        }
      }
    });
    Class.prototype["jsonToBoard(Lscala.js.Dynamic;)Lme.shadaj.collidium.Board;"] = (function(arg$json) {
      var obstacleJSArray$jsid$22150 = arg$json.obstacles;
      var obstaclesArray$jsid$22151 = $.asInstance($.m["scala.js.Array"]["toArray(Lscala.js.Array;Lscala.reflect.ClassTag;)O"](obstacleJSArray$jsid$22150, $.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["scala.js.Dynamic"].cls)), "scala.js.Dynamic[]");
      var jsx$1 = $;
      var jsx$3 = $.m["scala.Predef"]["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"]($.asInstance(obstaclesArray$jsid$22151, "java.lang.Object[]"));
      var jsx$4 = new $.c["me.shadaj.collidium.Main$$anonfun$2"]()["<init>()"]();
      var jsx$5 = $.m["scala.Array"]["canBuildFrom(Lscala.reflect.ClassTag;)Lscala.collection.generic.CanBuildFrom;"]($.m["scala.reflect.ClassTag"]["apply(Ljava.lang.Class;)Lscala.reflect.ClassTag;"]($.classes["me.shadaj.collidium.Sprite"].cls));
      var jsx$2 = jsx$3["map(Lscala.Function1;Lscala.collection.generic.CanBuildFrom;)O"](jsx$4, jsx$5);
      var obstacles$jsid$22152 = jsx$1.asInstance(jsx$2, "me.shadaj.collidium.Sprite[]");
      return new $.c["me.shadaj.collidium.Board"]()["<init>(TIILscala.collection.immutable.List;Lme.shadaj.collidium.Circle;Lme.shadaj.collidium.Circle;D)"](arg$json.name.toString(), new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.maximumStretch.toString()))["toInt()I"](), new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.margin.toString()))["toInt()I"](), $.m["scala.Predef"]["refArrayOps([O)Lscala.collection.mutable.ArrayOps;"]($.asInstance(obstacles$jsid$22152, "java.lang.Object[]"))["toList()Lscala.collection.immutable.List;"](), $.asInstance(this["jsonToSprite(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$json.ball), "me.shadaj.collidium.Circle"), $.asInstance(this["jsonToSprite(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$json.hole), "me.shadaj.collidium.Circle"), new $.c["scala.collection.immutable.StringOps"]()["<init>(T)"]($.m["scala.Predef"]["augmentString(T)T"](arg$json.friction.toString()))["toInt()I"]())
    });
    Class.prototype["board()Lme.shadaj.collidium.Board;"] = (function() {
      return this.$jsfield$board
    });
    Class.prototype["board_=(Lme.shadaj.collidium.Board;)V"] = (function(arg$x$1) {
      this.$jsfield$board = arg$x$1
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
      var tick$jsid$26499 = new $.c["me.shadaj.collidium.Main$$anonfun$1"]()["<init>()"]();
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
      })(tick$jsid$26499), 20)
    });
    Class.prototype["levelJump()V"] = (function() {
      this["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]().pause();
      this["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]().currentTime = 0;
      this["youwonMusic()Lme.shadaj.collidium.AudioElement;"]().pause();
      this["youwonMusic()Lme.shadaj.collidium.AudioElement;"]().currentTime = 0;
      var levelChooser$jsid$26526 = $.g.document.getElementById("levelChooser");
      var level$jsid$26527 = levelChooser$jsid$26526.value.toString();
      this["board_=(Lme.shadaj.collidium.Board;)V"](this["jsonToBoard(Lscala.js.Dynamic;)Lme.shadaj.collidium.Board;"]($.g[level$jsid$26527]))
    });
    Class.prototype["location(Lme.shadaj.collidium.MouseEvent;)Lscala.Tuple2;"] = (function(arg$event) {
      var x$jsid$26531 = arg$event.layerX;
      var y$jsid$26532 = arg$event.layerY;
      return new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$26531, y$jsid$26532)
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
      this.$jsfield$board = this["jsonToBoard(Lscala.js.Dynamic;)Lme.shadaj.collidium.Board;"]($.g.level0);
      this.$jsfield$pullingRubber = false;
      this.$jsfield$curObstacle = $.m["scala.None"];
      this.$jsfield$drawingLine = false;
      this.$jsfield$canvasOrig = $.g.document.getElementById("canvas");
      this.$jsfield$canvasDom = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvasElem = this["canvasOrig()Lscala.js.Dynamic;"]();
      this.$jsfield$canvas = this["canvasElem()Lme.shadaj.collidium.HTMLCanvasElement;"]().getContext("2d");
      this.$jsfield$youwonMusic = $.g.document.getElementById("youWonAudio");
      this.$jsfield$backgroundMusic = $.g.document.getElementById("backgroundAudio");
      var jsx$6 = new $.c["me.shadaj.collidium.Main$$anonfun$3"]()["<init>()"]();
      this.$jsfield$onMouseDown = jsx$6;
      var jsx$7 = new $.c["me.shadaj.collidium.Main$$anonfun$4"]()["<init>()"]();
      this.$jsfield$onMouseMove = jsx$7;
      var jsx$8 = new $.c["me.shadaj.collidium.Main$$anonfun$5"]()["<init>()"]();
      this.$jsfield$onMouseUp = jsx$8;
      return this
    });
    Class.prototype.jsonToPoint = (function(arg$1) {
      return this["jsonToPoint(Lscala.js.Dynamic;)Lme.shadaj.collidium.Point;"](arg$1)
    });
    Class.prototype.jsonToSprite = (function(arg$1) {
      return this["jsonToSprite(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$1)
    });
    Class.prototype.jsonToBoard = (function(arg$1) {
      return this["jsonToBoard(Lscala.js.Dynamic;)Lme.shadaj.collidium.Board;"](arg$1)
    });
    Class.prototype.board = (function() {
      return this["board()Lme.shadaj.collidium.Board;"]()
    });
    Class.prototype["board_="] = (function(arg$1) {
      return this["board_=(Lme.shadaj.collidium.Board;)V"](arg$1)
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
    Class.prototype.levelJump = (function() {
      return this["levelJump()V"]()
    });
    Class.prototype.location = (function(arg$1) {
      return this["location(Lme.shadaj.collidium.MouseEvent;)Lscala.Tuple2;"](arg$1)
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
  $.registerClass("me.shadaj.collidium.Main$$anonfun$2", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"] = (function(arg$obstacle) {
      return $.m["me.shadaj.collidium.Main"]["jsonToSprite(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$obstacle)
    });
    Class.prototype["apply(O)O"] = (function(arg$v1) {
      return this["apply(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$v1)
    });
    Class.prototype["<init>()"] = (function() {
      $.c["scala.runtime.AbstractFunction1"].prototype["<init>()"].call(this);
      return this
    });
    Class.prototype.apply = (function(arg$1) {
      if ($.isInstance(arg$1, "java.lang.Object")) {
        return this["apply(O)O"](arg$1)
      } else {
        return this["apply(Lscala.js.Dynamic;)Lme.shadaj.collidium.Sprite;"](arg$1)
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
  $.registerClass("me.shadaj.collidium.Main$$anonfun$3", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.MouseEvent;)V"] = (function(arg$event) {
      var x1$jsid$27183 = $.m["me.shadaj.collidium.Main"]["location(Lme.shadaj.collidium.MouseEvent;)Lscala.Tuple2;"](arg$event);
      var result$$jslabel$matchEnd3$27186;
      $jslabel$matchEnd3$27186: do {
        if ((x1$jsid$27183 !== null)) {
          var x$jsid$26169 = x1$jsid$27183["_1()O"]();
          var y$jsid$26170 = x1$jsid$27183["_2()O"]();
          result$$jslabel$matchEnd3$27186 = new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$26169, y$jsid$26170);
          break $jslabel$matchEnd3$27186
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27183);
        break $jslabel$matchEnd3$27186
      } while (false);
      var x$1$jsid$26159 = result$$jslabel$matchEnd3$27186;
      var x$jsid$26160 = x$1$jsid$26159["_1()O"]();
      var y$jsid$26161 = x$1$jsid$26159["_2()O"]();
      var xDiff$jsid$26162 = ($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x()D"]() - x$jsid$26160);
      var yDiff$jsid$26163 = ($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y()D"]() - y$jsid$26161);
      if ((!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]())) {
        if ((((xDiff$jsid$26162 * xDiff$jsid$26162) + (yDiff$jsid$26163 * yDiff$jsid$26163)) <= ($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["diameter()I"]() * $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["diameter()I"]()))) {
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Sling"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26160, y$jsid$26161), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26160, y$jsid$26161), "white")));
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](x$jsid$26160);
          $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](y$jsid$26161)
        } else {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"](new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26160, y$jsid$26161), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26160, y$jsid$26161), "white")));
          $.m["me.shadaj.collidium.Main"]["drawingLine_=(Z)V"](true)
        }
      } else {
        /*<skip>*/
      };
      arg$event.preventDefault()
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
      var x1$jsid$27214 = $.m["me.shadaj.collidium.Main"]["location(Lme.shadaj.collidium.MouseEvent;)Lscala.Tuple2;"](arg$event);
      var result$$jslabel$matchEnd3$27216;
      $jslabel$matchEnd3$27216: do {
        if ((x1$jsid$27214 !== null)) {
          var x$jsid$26233 = x1$jsid$27214["_1()O"]();
          var y$jsid$26234 = x1$jsid$27214["_2()O"]();
          result$$jslabel$matchEnd3$27216 = new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$26233, y$jsid$26234);
          break $jslabel$matchEnd3$27216
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27214);
        break $jslabel$matchEnd3$27216
      } while (false);
      var x$2$jsid$26227 = result$$jslabel$matchEnd3$27216;
      var x$jsid$26228 = x$2$jsid$26227["_1()O"]();
      var y$jsid$26229 = x$2$jsid$26227["_2()O"]();
      if (($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]()))) {
        if ((x$jsid$26228 < ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
          var fittedX$jsid$26241 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
        } else {
          if ((x$jsid$26228 > ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
            var fittedX$jsid$26241 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
          } else {
            var fittedX$jsid$26241 = x$jsid$26228
          }
        };
        if ((y$jsid$26229 < ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
          var fittedY$jsid$26242 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
        } else {
          if ((y$jsid$26229 > ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
            var fittedY$jsid$26242 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
          } else {
            var fittedY$jsid$26242 = y$jsid$26229
          }
        };
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](fittedX$jsid$26241);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](fittedY$jsid$26242);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Sling"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](fittedX$jsid$26241, fittedY$jsid$26242), "white")));
        $.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"]($.m["me.shadaj.collidium.Main"]["canvas()Lme.shadaj.collidium.Canvas2D;"]())
      } else {
        if (($.m["me.shadaj.collidium.Main"]["drawingLine()Z"]() && $.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26228, y$jsid$26229), "white")));
          $.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["draw(Lme.shadaj.collidium.Canvas2D;)V"]($.m["me.shadaj.collidium.Main"]["canvas()Lme.shadaj.collidium.Canvas2D;"]())
        } else {
          /*<skip>*/
        }
      };
      arg$event.preventDefault()
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
  }));
  $.registerClass("me.shadaj.collidium.Main$$anonfun$5", (function($) {
    function Class() {
      $.c["scala.runtime.AbstractFunction1"].prototype.constructor.call(this)
    };
    Class.prototype = Object.create($.c["scala.runtime.AbstractFunction1"].prototype);
    Class.prototype.constructor = Class;
    Class.prototype["apply(Lme.shadaj.collidium.MouseEvent;)V"] = (function(arg$event) {
      var x1$jsid$27220 = $.m["me.shadaj.collidium.Main"]["location(Lme.shadaj.collidium.MouseEvent;)Lscala.Tuple2;"](arg$event);
      var result$$jslabel$matchEnd3$27222;
      $jslabel$matchEnd3$27222: do {
        if ((x1$jsid$27220 !== null)) {
          var x$jsid$26339 = x1$jsid$27220["_1()O"]();
          var y$jsid$26340 = x1$jsid$27220["_2()O"]();
          result$$jslabel$matchEnd3$27222 = new $.c["scala.Tuple2"]()["<init>(OO)"](x$jsid$26339, y$jsid$26340);
          break $jslabel$matchEnd3$27222
        } else {
          /*<skip>*/
        };
        throw new $.c["scala.MatchError"]()["<init>(O)"](x1$jsid$27220);
        break $jslabel$matchEnd3$27222
      } while (false);
      var x$3$jsid$26333 = result$$jslabel$matchEnd3$27222;
      var x$jsid$26334 = x$3$jsid$26333["_1()O"]();
      var y$jsid$26335 = x$3$jsid$26333["_2()O"]();
      if (($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["isDefined()Z"]() && (!$.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started()Z"]()))) {
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["theta_=(D)V"]($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Sprite")["theta()D"]());
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["magnitude_=(D)V"](($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["magnitude()D"]() / 20));
        if ((x$jsid$26334 < ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
          var fittedX$jsid$26347 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
        } else {
          if ((x$jsid$26334 > ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
            var fittedX$jsid$26347 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["x()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
          } else {
            var fittedX$jsid$26347 = x$jsid$26334
          }
        };
        if ((y$jsid$26335 < ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
          var fittedY$jsid$26348 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() - $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
        } else {
          if ((y$jsid$26335 > ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]()))) {
            var fittedY$jsid$26348 = ($.asInstance($.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["slingOption()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"]()["y()D"]() + $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["maximumStretch()I"]())
          } else {
            var fittedY$jsid$26348 = y$jsid$26335
          }
        };
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["x_=(D)V"](fittedX$jsid$26347);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["ball()Lme.shadaj.collidium.Circle;"]()["location()Lme.shadaj.collidium.Point;"]()["y_=(D)V"](fittedY$jsid$26348);
        $.m["me.shadaj.collidium.Main"]["pullingRubber_=(Z)V"](false);
        $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["started_=(Z)V"](true);
        $.m["me.shadaj.collidium.Main"]["backgroundMusic()Lme.shadaj.collidium.AudioElement;"]().play()
      } else {
        if (($.m["me.shadaj.collidium.Main"]["drawingLine()Z"]() && $.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["isDefined()Z"]())) {
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.Option"]["apply(O)Lscala.Option;"](new $.c["me.shadaj.collidium.Line"]()["<init>(Lme.shadaj.collidium.Point;Lme.shadaj.collidium.Point;T)"]($.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line")["start()Lme.shadaj.collidium.Point;"](), new $.c["me.shadaj.collidium.Point"]()["<init>(DD)"](x$jsid$26334, y$jsid$26335), "white")));
          var jsx$9 = $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]();
          var x$4$jsid$26451 = $.asInstance($.m["me.shadaj.collidium.Main"]["curObstacle()Lscala.Option;"]()["get()O"](), "me.shadaj.collidium.Line");
          var jsx$10 = $.m["me.shadaj.collidium.Main"]["board()Lme.shadaj.collidium.Board;"]()["obstacles()Lscala.collection.immutable.List;"]()["::(O)Lscala.collection.immutable.List;"](x$4$jsid$26451);
          jsx$9["obstacles_=(Lscala.collection.immutable.List;)V"](jsx$10);
          $.m["me.shadaj.collidium.Main"]["drawingLine_=(Z)V"](false);
          $.m["me.shadaj.collidium.Main"]["curObstacle_=(Lscala.Option;)V"]($.m["scala.None"])
        } else {
          /*<skip>*/
        }
      };
      arg$event.preventDefault()
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
    $.createClass("me.shadaj.collidium.Main$$anonfun$5", Class, JSClass, "scala.runtime.AbstractFunction1", {
      "me.shadaj.collidium.Main$$anonfun$5": true,
      "scala.Serializable": true,
      "java.io.Serializable": true,
      "scala.runtime.AbstractFunction1": true,
      "scala.Function1": true,
      "java.lang.Object": true
    })
  }))
})($ScalaJSEnvironment);

(function($) {
  $.createInterface("me.shadaj.collidium.MouseEvent", {
    "me.shadaj.collidium.MouseEvent": true,
    "java.lang.Object": true
  })
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

(function($) {
  $.createInterface("me.shadaj.collidium.Window", {
    "me.shadaj.collidium.Window": true,
    "java.lang.Object": true
  })
})($ScalaJSEnvironment);

//@ sourceMappingURL=collidium.js.map
