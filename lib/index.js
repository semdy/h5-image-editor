(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageEditor"] = factory();
	else
		root["ImageEditor"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 591:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(8).default;
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports.default = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ 8:
/***/ (function(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports.default = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports.default = module.exports;

/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(591)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 814:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}t.r(e),t.d(e,{Base:function(){return g},default:function(){return D}});var a,s,h="ontouchstart"in document||navigator.maxTouchPoints,u=navigator.userAgent,c=window.navigator.msPointerEnabled&&/IEMobile/i.test(u);h=h||c||!1,void 0!==document.hidden?(a="hidden",s="visibilitychange"):void 0!==document.msHidden?(a="msHidden",s="msvisibilitychange"):void 0!==document.webkitHidden&&(a="webkitHidden",s="webkitvisibilitychange");var l=c?{START:"MSPointerDown",MOVE:"MSPointerMove",END:"MSPointerUp",CANCEL:"MSPointerCancel",HIDDEN:a,VISIBILITYCHANGE:s}:{START:h?"touchstart":"mousedown",MOVE:h?"touchmove":"mousemove",END:h?"touchend":"mouseup",CANCEL:h?"touchcancel":"mouseout",HIDDEN:a,VISIBILITYCHANGE:s};function d(){}function p(t){if(t.changedTouches){var e=t.changedTouches[0];return e.touchLength=t.changedTouches.length,e}return t.touchLength=1,t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function v(t,e,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}},v(t,e,n||t)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function w(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}l.RESIZE="onorientationchange"in window?"orientationchange":"resize";var g=function(){function t(){i(this,t)}return r(t,[{key:"init",value:function(){this.resize=this.resize.bind(this),this.attachEvents(),this.resize()}},{key:"resize",value:function(){var t,e,n=this.options,i=n.width,o=n.height,r=n.maxWidth,a=n.root,s=n.scaleRatio;if(t="auto"===i?a.clientWidth:i,e="auto"===o?a.clientHeight:o,s>0?(this.drawElement.width=t*s,this.drawElement.height=e*s,this.drawCtx.scale(s,s)):(this.drawElement.width=t,this.drawElement.height=e),r){var h=t;t=Math.min(t,r),e=Math.min(e,t/h*e)}this.drawElement.style.cssText="width: ".concat(t,"px; height: ").concat(e,"px; touch-action: none;"),this.tempImageData&&(this.drawCtx.putImageData(this.tempImageData,0,0),this.tempImageData=null,this._isResizing=!1)}},{key:"attachEvents",value:function(){var t,e,n,i=this,o=this.options,r=o.width,a=o.height,s=(t=this.resize.bind(this),e=this.options.resizeDebounceTime,n=null,function(){n&&clearTimeout(n),n=setTimeout(t,e)});this.resizeHandle=function(t){i._isResizing||(i.tempImageData=i.drawCtx.getImageData(0,0,i.drawElement.width,i.drawElement.height)),i._isResizing=!0,s(t)},"auto"!==r&&"auto"!==a||window.addEventListener(l.RESIZE,this.resizeHandle,!1)}},{key:"detachEvents",value:function(){window.removeEventListener(l.RESIZE,this.resizeHandle,!1)}},{key:"destroy",value:function(){this.detachEvents()}}]),t}();function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this._touchTimer=null,this.options=E(E({},t.defaultOptions),e)}return r(t,[{key:"attach",value:function(t){this.element=t,this.bindEvents()}},{key:"bindEvents",value:function(){this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.element.addEventListener(l.START,this.onTouchStart,!1),this.element.addEventListener(l.MOVE,this.onTouchMove,!1),this.element.addEventListener(l.END,this.onTouchEnd,!1),this.element.addEventListener(l.CANCEL,this.onMouseOut,!1)}},{key:"onTouchStart",value:function(t){var e=this;t=p(t),this._startTime=Date.now(),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseDown(t),this._touchTimer=setTimeout((function(){e.options.onLongTap(t)}),300)}},{key:"onTouchMove",value:function(t){t.preventDefault(),t=p(t),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseMove(t)}},{key:"onTouchEnd",value:function(t){t=p(t),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseUp(t),Date.now()-this._startTime<100&&this.options.onClick(t)}},{key:"onMouseOut",value:function(t){this.clearTouchTimer(),this.options.onMouseOut(t)}},{key:"clearTouchTimer",value:function(){this._touchTimer&&clearTimeout(this._touchTimer)}},{key:"setMouseEventXY",value:function(t){var e=function(t,e){if(void 0!==e.offsetX)return{x:e.offsetX,y:e.offsetY};if(void 0!==e.layerX&&e.layerX!==e.offsetX)return{x:e.layerX,y:e.layerY};var n=function(t){try{return t.getBoundingClientRect()}catch(t){return{left:0,top:0}}}(t),i=n.width/t.clientWidth;return{x:(e.clientX-n.left)/i,y:(e.clientY-n.top)/i}}(this.element,t),n=e.x,i=e.y;t.stageX=n,t.stageY=i}},{key:"detach",value:function(){this.element.removeEventListener(l.START,this.onTouchStart,!1),this.element.removeEventListener(l.MOVE,this.onTouchMove,!1),this.element.removeEventListener(l.END,this.onTouchEnd,!1),this.element.removeEventListener(l.CANCEL,this.onMouseOut,!1)}}]),t}();O.defaultOptions={onMouseDown:d,onMouseMove:d,onMouseUp:d,onMouseOut:d,onClick:d,onLongTap:d};var k=O;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?S(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=f(e);if(n){var o=f(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return w(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,a),(t=o.call(this,e)).options=e,t._isStart=!1,t._isMoved=!1,t._isEmpty=!0,t._touchCount=0,t.prePoint={},t.point={},t}return r(a,[{key:"init",value:function(){var t=this.options.root;this.drawElement=document.createElement("canvas"),this.drawCtx=this.drawElement.getContext("2d"),t.appendChild(this.drawElement),v(f(a.prototype),"init",this).call(this),this.mouseEvent=new k({onMouseDown:this.handleMouseDown.bind(this),onMouseMove:this.handleMouseMove.bind(this),onMouseUp:this.handleMouseUp.bind(this),onMouseOut:this.handleMouseUp.bind(this)}),this.mouseEvent.attach(this.drawElement)}},{key:"drawStartPoint",value:function(t){this.drawCtx.lineWidth=this.options.lineWidth,this.drawCtx.beginPath(),this.drawCtx.moveTo(t.stageX,t.stageY),this.drawCtx.lineTo(t.stageX+.1,t.stageY+.1),this.drawCtx.stroke()}},{key:"drawSmoothLine",value:function(t,e){var n=.33*(e.x-t.x),i=.33*(e.y-t.y),o=t.x+n,r=t.y+i,a=o+n,s=r+i;if(e.lastX=a,e.lastY=s,"number"==typeof t.lastX){var h=(t.lineWidth+e.lineWidth)/2;this.drawCurveLine(t.lastX,t.lastY,t.x,t.y,o,r,h)}this.drawLine(o,r,a,s,e.lineWidth)}},{key:"drawNoSmoothLine",value:function(t,e){var n=(e.x-t.x)/2,i=(e.y-t.y)/2;e.lastX=t.x+n,e.lastY=t.y+i,"number"==typeof t.lastX&&this.drawCurveLine(t.lastX,t.lastY,t.x,t.y,e.lastX,e.lastY,this.options.lineWidth)}},{key:"drawLine",value:function(t,e,n,i,o){this.drawCtx.lineWidth=o,this.drawCtx.beginPath(),this.drawCtx.moveTo(t,e),this.drawCtx.lineTo(n,i),this.drawCtx.closePath(),this.drawCtx.stroke()}},{key:"drawCurveLine",value:function(t,e,n,i,o,r,a){this.drawCtx.lineWidth=a,this.drawCtx.beginPath(),this.drawCtx.moveTo(t,e),this.drawCtx.quadraticCurveTo(n,i,o,r),this.drawCtx.stroke()}},{key:"drawByImage",value:function(t){var e=this.options.scaleRatio,n=this.drawElement,i=n.width,o=n.height;this.clear(),this.drawCtx.drawImage(t,0,0,i/e,o/e)}},{key:"handleMouseDown",value:function(t){this._touchCount++,t.touchLength>1||this._touchCount>1?this._isStart=!1:(this._isStart=!0,this.prePoint={x:t.stageX,y:t.stageY,t:Date.now(),lastX:t.stageX,lastY:t.stageY,color:this.options.color,lineWidth:this.options.lineWidth},this.drawCtx.lineJoin="round",this.drawCtx.lineCap="round",this.drawCtx.strokeStyle=this.options.color,this.options.onDrawStart(t,this.prePoint))}},{key:"handleMouseMove",value:function(t){this._isStart&&(this.point={x:t.stageX,y:t.stageY,t:Date.now(),color:this.options.color},this.point.lineWidth=this._calculateLineWidth(),this.options.openSmooth?this.drawSmoothLine(this.prePoint,this.point):this.drawNoSmoothLine(this.prePoint,this.point),this.prePoint=x({},this.point),this._isMoved=!0,this._isEmpty=!1,this.options.onDrawing(t,this.point))}},{key:"handleMouseUp",value:function(t){var e=this;if(this._touchCount=0,this._isStart){this._isMoved||this.drawStartPoint(t),this._isStart=!1,this._isEmpty=!1,this._isMoved=!1;var n=new Image;n.src=this.drawElement.toDataURL(),n.onload=function(){e.options.onDrawUp(t,n),n.onload=null}}}},{key:"setLineWidth",value:function(t){this.options.lineWidth=t}},{key:"setColor",value:function(t){this.options.color=t}},{key:"setOptions",value:function(t){this.options=x(x({},this.options),t)}},{key:"getLineWidth",value:function(t){var e=this.options.lineWidth,n=this.options.minWidth,i=(e-n)*t/(this.options.minSpeed>10?10:this.options.minSpeed<1?1:this.options.minSpeed),o=Math.max(e-i,n);return Math.min(o,e)}},{key:"isEmpy",value:function(){return this._isEmpty}},{key:"clear",value:function(){this._isEmpty=!0,this.drawElement&&this.drawCtx.clearRect(0,0,this.drawElement.width,this.drawElement.height)}},{key:"destroy",value:function(){this._isStart=null,this._isMoved=null,this._isEmpty=null,this.prePoint=null,this.point=null,this.clear(),v(f(a.prototype),"destroy",this).call(this),this.mouseEvent.detach();try{this.drawElement.parentElement.removeChild(this.drawElement),this.drawElement=null}catch(t){}}},{key:"_calculateLineWidth",value:function(){if(this.options.openSmooth){var t=this._calculateSpeed(),e=this.getLineWidth(t),n=(e-this.prePoint.lineWidth)/this.prePoint.lineWidth,i=this.options.maxWidthDiffRate/100;if(i=i>1?1:i<.01?.01:i,Math.abs(n)>i){var o=n>0?i:-i;e=this.prePoint.lineWidth*(1+o)}return e}return this.options.lineWidth}},{key:"_calculateSpeed",value:function(){var t=this.point.t-this.prePoint.t||.1,e=this.point.x-this.prePoint.x,n=this.point.y-this.prePoint.y;return Math.sqrt(e*e,n*n)/t}}]),a}(g),C=M,T=function(){function t(e){i(this,t),this._undoStack=[],this._redoStack=[],this.maxLength=e}return r(t,[{key:"push",value:function(t,e){var n=this;this._undoStack.push((function i(){t(),n._redoStack.push((function(){e(),n._undoStack.push(i)}))})),this.maxLength>0&&this._undoStack.length>this.maxLength&&(this._undoStack=this._undoStack.slice(-this.maxLength))}},{key:"undo",value:function(){var t=this._undoStack.pop();t instanceof Function&&t()}},{key:"redo",value:function(){var t=this._redoStack.pop();t instanceof Function&&t()}},{key:"setMaxHistoryLength",value:function(t){this.maxLength=t}},{key:"canUndo",value:function(){return this._undoStack.length>0}},{key:"canRedo",value:function(){return this._redoStack.length>0}},{key:"clear",value:function(){this._redoStack=[],this._undoStack=[]}}]),t}();function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var _=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.options=R(R({},t.defaultOptions),e),this.drawStack=[],this.lastCanUndo=!1,this.lastCanRedo=!1,this._isEmpty=!0,this.painter=new C(R(R({},this.options),{},{onDrawUp:this.onDrawUp.bind(this)})),this.undoRedoManager=new T(this.options.maxHistoryLength),this.init()}return r(t,[{key:"init",value:function(){var t=this.options.root;if(!(t&&t instanceof Element))throw new Error("Invalid root element.");this.painter.init(),this.drawElement=this.painter.drawElement,this.handleUndoRedoStateChange(!0)}},{key:"onDrawUp",value:function(t,e){var n=this,i=function(){n.drawStack.push(e)};this.undoRedoManager.push((function(){n.drawStack.pop()}),i),i(),this.options.onDrawUp(t,e),this.handleUndoRedoStateChange()}},{key:"rerender",value:function(){var t=this.drawStack[this.drawStack.length-1];t?this.painter.drawByImage(t):this.painter.clear()}},{key:"clear",value:function(){this.drawStack=[],this.undoRedoManager.clear(),this.painter.clear(),this.handleUndoRedoStateChange()}},{key:"setLineWidth",value:function(t){this.painter.setLineWidth(t)}},{key:"setColor",value:function(t){this.painter.setColor(t)}},{key:"setOptions",value:function(t){this.options=R(R({},this.options),t),this.painter.setOptions(R(R({},t),{},{onDrawUp:this.onDrawUp.bind(this)})),t&&"maxHistoryLength"in t&&this.undoRedoManager.setMaxHistoryLength(t.maxHistoryLength)}},{key:"handleUndoRedoStateChange",value:function(t){var e=this.canUndo(),n=this.canRedo();t&&this.options.undoRedoStateChange(e,n),this.lastCanUndo!==e&&(this.options.undoRedoStateChange(e,n),this.lastCanUndo=e),this.lastCanRedo!==n&&(this.options.undoRedoStateChange(e,n),this.lastCanRedo=n)}},{key:"undo",value:function(){this.undoRedoManager.undo(),this.rerender(),this.handleUndoRedoStateChange()}},{key:"redo",value:function(){this.undoRedoManager.redo(),this.rerender(),this.handleUndoRedoStateChange()}},{key:"canUndo",value:function(){return this.undoRedoManager.canUndo()}},{key:"canRedo",value:function(){return this.undoRedoManager.canRedo()}},{key:"isEmpty",value:function(){return this.painter.isEmpy()}},{key:"destroy",value:function(){this.clear(),this.painter.destroy(),this.undoRedoManager.clear()}},{key:"getValidBound",value:function(t){for(var e=t.getContext("2d"),n=t.width,i=t.height,o=e.getImageData(0,0,n,i).data,r=n,a=0,s=i,h=0,u=0;u<n;u++)for(var c=0;c<i;c++)o[4*(u+n*c)+3]>0&&(h=Math.max(c,h),a=Math.max(u,a),s=Math.min(c,s),r=Math.min(u,r));return{cutWidth:++a-++r,cutHeight:++h-++s,lOffset:r,rOffset:a,tOffset:s,bOffset:h}}},{key:"getResult",value:function(t){try{var e=this.drawElement;0!==this.options.rotate&&(e=this.getRotateCanvas(this.options.rotate));var n=this.getValidBound(e),i=n.cutWidth,o=n.cutHeight,r=n.lOffset,a=n.tOffset;if(i<=0||o<=0)return;if(t)return e;var s=this.options,h=s.exportMaxWidth,u=s.exportMaxHeight,c=s.exportPadding,l=s.scaleRatio,d=document.createElement("canvas"),p=d.getContext("2d");if(d.width=i,d.height=o,p.drawImage(e,r,a,i,o,0,0,d.width,d.height),h||u||0!==c){var f=d.width,v=d.height,y=h*l,m=u*l;h&&y<f&&(v*=y/f,f=y),u&&m<v&&(f*=m/v,v=m);var w=document.createElement("canvas"),g=w.getContext("2d");return w.width=f,w.height=v,g.drawImage(d,c,c,w.width-2*c,w.height-2*c),w}return d}catch(t){console.error(t)}}},{key:"getRotateCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90;t=t>0?t>90?180:90:t<-90?180:-90;var e=document.createElement("canvas"),n=this.drawElement.width,i=this.drawElement.height;180===t?(e.width=n,e.height=i):(e.width=i,e.height=n);var o=e.getContext("2d");return o.rotate(t*Math.PI/180),90===t?o.drawImage(this.drawElement,0,-i,n,i):-90===t?o.drawImage(this.drawElement,-n,0,n,i):180===t&&o.drawImage(this.drawElement,-n,-i,n,i),e}},{key:"base64ToBlob",value:function(t){for(var e=t.split(";base64,"),n=e[0].split(":")[1],i=window.atob(e[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:n})}},{key:"downloadFile",value:function(){var t=Date.now(),e=document.createElement("a"),n=this.base64ToBlob(this.drawElement.toDataURL()),i=URL.createObjectURL(n);document.createEvent("HTMLEvents").initEvent("click",!0,!0),e.download=t,e.href=i,e.click(),window.URL.revokeObjectURL(i),e=null,i=null}}]),t}();_.defaultOptions={root:null,width:"auto",height:"auto",openSmooth:!0,color:"#000",lineWidth:8,rotate:0,minWidth:2,minSpeed:1.5,scaleRatio:window.devicePixelRatio||1,maxWidth:null,maxWidthDiffRate:20,resizeDebounceTime:200,maxHistoryLength:0,exportPadding:0,exportMaxWidth:null,exportMaxHeight:null,undoRedoStateChange:d,onDrawStart:d,onDrawing:d,onDrawUp:d};var D=_;return e}()}));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/h5-signature/lib/index.min.js
var index_min = __webpack_require__(814);
var index_min_default = /*#__PURE__*/__webpack_require__.n(index_min);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/get.js

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
;// CONCATENATED MODULE: ./src/ImageBackdrop.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ImageBackdrop = /*#__PURE__*/function (_Base) {
  _inherits(ImageBackdrop, _Base);
  var _super = _createSuper(ImageBackdrop);
  function ImageBackdrop() {
    var _this;
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ImageBackdrop);
    _this = _super.call(this, options);
    _this.options = options;
    return _this;
  }
  _createClass(ImageBackdrop, [{
    key: "init",
    value: function init() {
      var root = this.options.root;
      this.drawElement = document.createElement("canvas");
      this.drawCtx = this.drawElement.getContext("2d");
      root.appendChild(this.drawElement);
      _get(_getPrototypeOf(ImageBackdrop.prototype), "init", this).call(this);
    }
  }, {
    key: "drawImage",
    value: function drawImage(img) {
      var _this$options = this.options,
        width = _this$options.width,
        height = _this$options.height;
      this.drawCtx.drawImage(img, 0, 0, width, height);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(ImageBackdrop.prototype), "destroy", this).call(this);
      try {
        var parent = this.drawElement.parentElement || document.body;
        parent.removeChild(this.drawElement);
        this.drawElement = null;
      } catch (e) {}
    }
  }]);
  return ImageBackdrop;
}(index_min.Base);
/* harmony default export */ var src_ImageBackdrop = (ImageBackdrop);
;// CONCATENATED MODULE: ./src/loader.js

function identity(x) {
  return x;
}
function setAndResolve(img, src, resolve, reject) {
  img.onload = function () {
    resolve(img);
    img.onload = null;
  };
  img.onerror = function (e) {
    reject(e);
    img.onerror = null;
  };
  img.setAttribute("crossorigin", "anonymous");
  img.src = src;
}
function getLoader(resource) {
  var type = _typeof(resource);
  if (type === "string") {
    return loadUrl;
  }
  if (resource instanceof Image) {
    return identity;
  }
  return loadFile;
}
function load(resource) {
  var loader = getLoader(resource);
  return loader(resource);
}
function loadUrl(url) {
  var img = new Image();
  return new Promise(function (resolve, reject) {
    setAndResolve(img, url, resolve, reject);
  });
}
function loadFile(file) {
  var img = new Image();
  return new Promise(function (resolve, reject) {
    setAndResolve(img, URL.createObjectURL(file), resolve, reject);
  });
}
;// CONCATENATED MODULE: ./src/Finger.js


function getLen(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
function dot(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}
function getAngle(v1, v2) {
  var mr = getLen(v1) * getLen(v2);
  if (mr === 0) return 0;
  var r = dot(v1, v2) / mr;
  if (r > 1) r = 1;
  return Math.acos(r);
}
function cross(v1, v2) {
  return v1.x * v2.y - v2.x * v1.y;
}
function getRotateAngle(v1, v2) {
  var angle = getAngle(v1, v2);
  if (cross(v1, v2) > 0) {
    angle *= -1;
  }
  return angle * 180 / Math.PI;
}
var Finger = /*#__PURE__*/function () {
  function Finger(el, options) {
    _classCallCheck(this, Finger);
    this.element = el;
    this.options = options;
    this.preV = {
      x: null,
      y: null
    };
    this.pinchStartLen = null;
    this.scale = 1;
    this.isDoubleTap = false;
    this.delta = null;
    this.last = null;
    this.now = null;
    this.end = null;
    this.multiTouch = false;
    this.tapTimeout = null;
    this.longTapTimeout = null;
    this.singleTapTimeout = null;
    this.swipeTimeout = null;
    this.x1 = this.x2 = this.y1 = this.y2 = null;
    this.preTapPosition = {
      x: null,
      y: null
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.element.addEventListener("touchstart", this.handleStart, false);
    this.element.addEventListener("touchmove", this.handleMove, false);
    this.element.addEventListener("touchend", this.handleEnd, false);
    this.element.addEventListener("touchcancel", this.handleCancel, false);
  }
  _createClass(Finger, [{
    key: "_emitEvent",
    value: function _emitEvent(name) {
      if (this.options[name]) {
        for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          arg[_key - 1] = arguments[_key];
        }
        this.options[name].apply(this.options.context, arg);
      }
    }
  }, {
    key: "handleStart",
    value: function handleStart(evt) {
      var _this = this;
      if (!evt.touches) return;
      this.now = Date.now();
      this.x1 = evt.touches[0].pageX;
      this.y1 = evt.touches[0].pageY;
      this.delta = this.now - (this.last || this.now);
      if (this.preTapPosition.x !== null) {
        this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;
      }
      this.preTapPosition.x = this.x1;
      this.preTapPosition.y = this.y1;
      this.last = this.now;
      var preV = this.preV,
        len = evt.touches.length;
      if (len > 1) {
        this._cancelLongTap();
        this._cancelSingleTap();
        var v = {
          x: evt.touches[1].pageX - this.x1,
          y: evt.touches[1].pageY - this.y1
        };
        preV.x = v.x;
        preV.y = v.y;
        this.pinchStartLen = getLen(preV);
        this._emitEvent("onMultipointStart", evt);
      }
      this.longTapTimeout = setTimeout(function () {
        _this._emitEvent("onLongTap", evt);
      }, 750);
    }
  }, {
    key: "handleMove",
    value: function handleMove(evt) {
      var preV = this.preV,
        len = evt.touches.length,
        currentX = evt.touches[0].pageX,
        currentY = evt.touches[0].pageY;
      this.isDoubleTap = false;
      if (len > 1) {
        var v = {
          x: evt.touches[1].pageX - currentX,
          y: evt.touches[1].pageY - currentY
        };
        if (preV.x !== null) {
          if (this.pinchStartLen > 0) {
            var center = {
              x: (evt.touches[1].pageX + currentX) / 2,
              y: (evt.touches[1].pageY + currentY) / 2
            };
            var scale = getLen(v) / this.pinchStartLen;
            this._emitEvent("onPinch", evt, {
              center: center,
              scale: scale
            });
          }
          var angle = getRotateAngle(v, preV);
          this._emitEvent("onRotate", evt, {
            angle: angle
          });
        }
        preV.x = v.x;
        preV.y = v.y;
        this.multiTouch = true;
        var evtObj = {};
        if (this.x2 !== null) {
          evtObj.deltaX = currentX - this.x2;
          evtObj.deltaY = currentY - this.y2;
        } else {
          evtObj.deltaX = 0;
          evtObj.deltaY = 0;
        }
        this._emitEvent("onPressMove", evt, evtObj);
      }
      this._cancelLongTap();
      this.x2 = currentX;
      this.y2 = currentY;
      if (len > 1) {
        evt.preventDefault();
      }
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      clearInterval(this.singleTapTimeout);
      clearInterval(this.tapTimeout);
      clearInterval(this.longTapTimeout);
      clearInterval(this.swipeTimeout);
    }
  }, {
    key: "handleEnd",
    value: function handleEnd(evt) {
      var _this2 = this;
      this.end = Date.now();
      this._cancelLongTap();
      if (evt.touches.length < 2) {
        this._emitEvent("onMultipointEnd", evt);
      }
      var evtObj = {};
      evtObj.origin = [this.x1, this.y1];
      if (this.multiTouch === false) {
        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.preV.y - this.y2) > 30) {
          evtObj.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
          evtObj.distance = Math.abs(this.x1 - this.x2);
          this.swipeTimeout = setTimeout(function () {
            _this2._emitEvent("onSwipe", evt, evtObj);
          }, 0);
        } else {
          this.tapTimeout = setTimeout(function () {
            _this2._emitEvent("onTap", evt, evtObj);
            if (_this2.isDoubleTap) {
              _this2._emitEvent("onDoubleTap", evt, evtObj);
              clearTimeout(_this2.singleTapTimeout);
              _this2.isDoubleTap = false;
            } else {
              _this2.singleTapTimeout = setTimeout(function () {
                _this2._emitEvent("onSingleTap", evt, evtObj);
              }, 250);
            }
          }, 0);
        }
      }
      this.preV.x = 0;
      this.preV.y = 0;
      this.scale = 1;
      this.pinchStartLen = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.multiTouch = false;
    }
  }, {
    key: "_cancelLongTap",
    value: function _cancelLongTap() {
      clearTimeout(this.longTapTimeout);
    }
  }, {
    key: "_cancelSingleTap",
    value: function _cancelSingleTap() {
      clearTimeout(this.singleTapTimeout);
    }
  }, {
    key: "_swipeDirection",
    value: function _swipeDirection(x1, x2, y1, y2) {
      if (Math.abs(x1 - x2) > 80 || this.end - this.now < 250) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
      } else {
        return "Nochange";
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.handleCancel();
      this.element.removeEventListener("touchstart", this.handleStart);
      this.element.removeEventListener("touchmove", this.handleMove);
      this.element.removeEventListener("touchend", this.handleEnd);
      this.element.removeEventListener("touchcancel", this.handleCancel);
      this.preV.x = 0;
      this.preV.y = 0;
      this.scale = 1;
      this.pinchStartLen = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.multiTouch = false;
    }
  }]);
  return Finger;
}();

;// CONCATENATED MODULE: ./src/transform.js
/* prettier-ignore */

var Matrix3D = function Matrix3D(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
  this.elements = window.Float32Array ? new Float32Array(16) : [];
  var te = this.elements;
  te[0] = n11 !== undefined ? n11 : 1;
  te[4] = n12 || 0;
  te[8] = n13 || 0;
  te[12] = n14 || 0;
  te[1] = n21 || 0;
  te[5] = n22 !== undefined ? n22 : 1;
  te[9] = n23 || 0;
  te[13] = n24 || 0;
  te[2] = n31 || 0;
  te[6] = n32 || 0;
  te[10] = n33 !== undefined ? n33 : 1;
  te[14] = n34 || 0;
  te[3] = n41 || 0;
  te[7] = n42 || 0;
  te[11] = n43 || 0;
  te[15] = n44 !== undefined ? n44 : 1;
};
Matrix3D.DEG_TO_RAD = Math.PI / 180;
Matrix3D.prototype = {
  set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
    var te = this.elements;
    te[0] = n11;
    te[4] = n12;
    te[8] = n13;
    te[12] = n14;
    te[1] = n21;
    te[5] = n22;
    te[9] = n23;
    te[13] = n24;
    te[2] = n31;
    te[6] = n32;
    te[10] = n33;
    te[14] = n34;
    te[3] = n41;
    te[7] = n42;
    te[11] = n43;
    te[15] = n44;
    return this;
  },
  identity: function identity() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  multiplyMatrices: function multiplyMatrices(a, be) {
    var ae = a.elements;
    var te = this.elements;
    var a11 = ae[0],
      a12 = ae[4],
      a13 = ae[8],
      a14 = ae[12];
    var a21 = ae[1],
      a22 = ae[5],
      a23 = ae[9],
      a24 = ae[13];
    var a31 = ae[2],
      a32 = ae[6],
      a33 = ae[10],
      a34 = ae[14];
    var a41 = ae[3],
      a42 = ae[7],
      a43 = ae[11],
      a44 = ae[15];
    var b11 = be[0],
      b12 = be[1],
      b13 = be[2],
      b14 = be[3];
    var b21 = be[4],
      b22 = be[5],
      b23 = be[6],
      b24 = be[7];
    var b31 = be[8],
      b32 = be[9],
      b33 = be[10],
      b34 = be[11];
    var b41 = be[12],
      b42 = be[13],
      b43 = be[14],
      b44 = be[15];
    te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
    te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
    te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
    te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
    te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
    te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
    te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
    te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
    te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
    te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
    te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
    te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
    te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
    te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
    te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
    te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;
    return this;
  },
  // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
  _rounded: function _rounded(value, i) {
    i = Math.pow(10, i || 15);
    // default
    return Math.round(value * i) / i;
  },
  appendTransform: function appendTransform(x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {
    var rx = rotateX * Matrix3D.DEG_TO_RAD;
    var cosx = this._rounded(Math.cos(rx));
    var sinx = this._rounded(Math.sin(rx));
    var ry = rotateY * Matrix3D.DEG_TO_RAD;
    var cosy = this._rounded(Math.cos(ry));
    var siny = this._rounded(Math.sin(ry));
    var rz = rotateZ * Matrix3D.DEG_TO_RAD;
    var cosz = this._rounded(Math.cos(rz * -1));
    var sinz = this._rounded(Math.sin(rz * -1));
    this.multiplyMatrices(this, [1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]);
    this.multiplyMatrices(this, [cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]);
    this.multiplyMatrices(this, [cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]);
    if (skewX || skewY) {
      this.multiplyMatrices(this, [this._rounded(Math.cos(skewX * Matrix3D.DEG_TO_RAD)), this._rounded(Math.sin(skewX * Matrix3D.DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * Matrix3D.DEG_TO_RAD)), this._rounded(Math.cos(skewY * Matrix3D.DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    if (originX || originY || originZ) {
      this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
      this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
      this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
    }
    return this;
  }
};
function observe(target, props, callback) {
  for (var i = 0, len = props.length; i < len; i++) {
    var prop = props[i];
    watch(target, prop, callback);
  }
}
function watch(target, prop, callback) {
  Object.defineProperty(target, prop, {
    get: function get() {
      return this["__" + prop];
    },
    set: function set(value) {
      if (value !== this["__" + prop]) {
        this["__" + prop] = value;
        callback();
      }
    }
  });
}
var Transform = function Transform(element) {
  observe(element, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"], function () {
    var mtx = element.matrix3D.identity().appendTransform(element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ, element.skewX, element.skewY, element.originX, element.originY, element.originZ);
    element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
  });
  observe(element, ["perspective"], function () {
    element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(element.matrix3D.elements).join(",") + ")";
  });
  element.matrix3D = new Matrix3D();
  element.perspective = 500;
  element.scaleX = element.scaleY = element.scaleZ = 1;
  //由于image自带了x\y\z，所有加上translate前缀
  element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ = element.skewX = element.skewY = element.originX = element.originY = element.originZ = 0;
};
/* harmony default export */ var transform = (Transform);
;// CONCATENATED MODULE: ./src/Editor.js





function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }





function noop() {}
var Editor = /*#__PURE__*/function () {
  function Editor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Editor);
    this.options = _objectSpread(_objectSpread({}, Editor.defaultOptions), options);
    this.initScale = 1;
    this.screenWidth = window.innerWidth || window.screen.availWidth;
    this.screenHeight = window.innerHeight || window.screen.availHeight;
    this.init();

    // const log = document.getElementById("log");
    // window.console.log = function (...args) {
    //   log.textContent = args.join(" ");
    // };
  }
  _createClass(Editor, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this$options, root, url, scaleable, maxScale, lineWidth, color, openSmooth, rotate, minWidth, minSpeed, maxWidth, maxWidthDiffRate, maxHistoryLength, undoRedoStateChange, onDrawStart, onDrawing, onDrawUp, scaleRatio, img, width, height, elWidth, elHeight, drawElement;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _this$options = this.options, root = _this$options.root, url = _this$options.url, scaleable = _this$options.scaleable, maxScale = _this$options.maxScale, lineWidth = _this$options.lineWidth, color = _this$options.color, openSmooth = _this$options.openSmooth, rotate = _this$options.rotate, minWidth = _this$options.minWidth, minSpeed = _this$options.minSpeed, maxWidth = _this$options.maxWidth, maxWidthDiffRate = _this$options.maxWidthDiffRate, maxHistoryLength = _this$options.maxHistoryLength, undoRedoStateChange = _this$options.undoRedoStateChange, onDrawStart = _this$options.onDrawStart, onDrawing = _this$options.onDrawing, onDrawUp = _this$options.onDrawUp;
              scaleRatio = this.options.scaleRatio;
              if (!(!root || !(root instanceof Element))) {
                _context.next = 4;
                break;
              }
              throw new Error("Invalid root element.");
            case 4:
              this.element = document.createElement("div");
              _context.next = 7;
              return load(url);
            case 7:
              img = _context.sent;
              this.imgWidth = img.width;
              this.imgHeight = img.height;
              if (maxWidth) {
                scaleRatio = img.width / maxWidth;
              }
              width = img.width / scaleRatio;
              height = img.height / scaleRatio;
              elWidth = Math.min(width, maxWidth);
              elHeight = Math.min(height, elWidth / width * height);
              this.element.style.position = "relative";
              this.element.style.width = elWidth + "px";
              this.element.style.height = elHeight + "px";
              root.appendChild(this.element);
              this.imageBackdrop = new src_ImageBackdrop({
                root: this.element,
                scaleRatio: scaleRatio,
                width: width,
                height: height,
                maxWidth: maxWidth
              });
              this.imageBackdrop.init();
              this.imageBackdrop.drawImage(img);
              this.drawInstance = new (index_min_default())({
                root: this.element,
                scaleRatio: scaleRatio,
                width: width,
                height: height,
                openSmooth: openSmooth,
                lineWidth: lineWidth,
                color: color,
                rotate: rotate,
                minWidth: minWidth,
                minSpeed: minSpeed,
                maxWidth: maxWidth,
                maxWidthDiffRate: maxWidthDiffRate,
                maxHistoryLength: maxHistoryLength,
                undoRedoStateChange: undoRedoStateChange,
                onDrawStart: onDrawStart,
                onDrawing: onDrawing,
                onDrawUp: onDrawUp
              });
              drawElement = this.drawInstance.drawElement;
              drawElement.style.position = "absolute";
              drawElement.style.left = "0";
              drawElement.style.top = "0";
              if (scaleable) {
                transform(this.element);
                this.finger = new Finger(this.element, {
                  context: this,
                  maxScale: maxScale,
                  onMultipointStart: function onMultipointStart() {
                    this.initScale = this.element.scaleX;
                  },
                  onPinch: function onPinch(evt, evtObj) {
                    this.element.style.webkitTransition = "cubic-bezier(.25,.01,.25,1)";
                    var _this$element = this.element,
                      originX = _this$element.originX,
                      originY = _this$element.originY,
                      originX2 = evtObj.center.x - this.screenWidth / 2 - document.body.scrollLeft,
                      originY2 = evtObj.center.y - this.screenHeight / 2 - document.body.scrollTop;
                    this.element.originX = originX2;
                    this.element.originY = originY2;
                    this.element.translateX = this.element.translateX + (originX2 - originX) * this.element.scaleX;
                    this.element.translateY = this.element.translateY + (originY2 - originY) * this.element.scaleY;
                    this.element.scaleX = this.element.scaleY = this.initScale * evtObj.scale;
                  },
                  onMultipointEnd: function onMultipointEnd() {
                    this.element.style.webkitTransition = "300ms ease";
                    var maxScale = this.options.maxScale;
                    // scale to normal
                    if (this.element.scaleX < 1) {
                      this.restore(false);
                    }
                    if (this.element.scaleX > maxScale) {
                      this.setScale(maxScale);
                    }
                  },
                  onPressMove: function onPressMove(evt, evtObj) {
                    this.endAnimation();
                    this.element.translateX += evtObj.deltaX;
                    this.element.translateY += evtObj.deltaY;
                    evt.preventDefault();
                  }
                });
              }
              this.setCenter();
            case 29:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "setCenter",
    value: function setCenter() {
      var _this$options2 = this.options,
        root = _this$options2.root,
        scaleable = _this$options2.scaleable;
      if (scaleable) {
        this.element.translateX = (root.clientWidth - this.element.clientWidth) / 2;
        this.element.translateY = (root.clientHeight - this.element.clientHeight) / 2;
      } else {
        this.element.style.marginLeft = (root.clientWidth - this.element.clientWidth) / 2 + "px";
        this.element.style.marginTop = (root.clientHeight - this.element.clientHeight) / 2 + "px";
      }
    }
  }, {
    key: "setScale",
    value: function setScale(size) {
      this.element.style.transition = "300ms ease-in-out";
      this.element.style.webkitTransition = "300ms ease-in-out";
      this.element.scaleX = this.element.scaleY = size;
    }
  }, {
    key: "restore",
    value: function restore() {
      var rotate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.options.center) {
        this.setCenter();
      } else {
        this.element.translateX = this.element.translateY = 0;
      }
      !!rotate && (this.element.rotateZ = 0);
      this.element.scaleX = this.element.scaleY = 1;
      this.element.originX = this.element.originY = 0;
    }
  }, {
    key: "endAnimation",
    value: function endAnimation() {
      this.element.style.transition = "0";
      this.element.style.webkitTransition = "0";
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this$drawInstance;
      (_this$drawInstance = this.drawInstance) === null || _this$drawInstance === void 0 ? void 0 : _this$drawInstance.clear();
    }
  }, {
    key: "setLineWidth",
    value: function setLineWidth(num) {
      var _this$drawInstance2;
      (_this$drawInstance2 = this.drawInstance) === null || _this$drawInstance2 === void 0 ? void 0 : _this$drawInstance2.setLineWidth(num);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      var _this$drawInstance3;
      (_this$drawInstance3 = this.drawInstance) === null || _this$drawInstance3 === void 0 ? void 0 : _this$drawInstance3.setColor(color);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      var _this$drawInstance4;
      (_this$drawInstance4 = this.drawInstance) === null || _this$drawInstance4 === void 0 ? void 0 : _this$drawInstance4.setOptions(options);
    }
  }, {
    key: "undo",
    value: function undo() {
      var _this$drawInstance5;
      (_this$drawInstance5 = this.drawInstance) === null || _this$drawInstance5 === void 0 ? void 0 : _this$drawInstance5.undo();
    }
  }, {
    key: "redo",
    value: function redo() {
      var _this$drawInstance6;
      (_this$drawInstance6 = this.drawInstance) === null || _this$drawInstance6 === void 0 ? void 0 : _this$drawInstance6.redo();
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      var _this$drawInstance7;
      return (_this$drawInstance7 = this.drawInstance) === null || _this$drawInstance7 === void 0 ? void 0 : _this$drawInstance7.canUndo();
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      var _this$drawInstance8;
      return (_this$drawInstance8 = this.drawInstance) === null || _this$drawInstance8 === void 0 ? void 0 : _this$drawInstance8.canRedo();
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var _this$drawInstance9;
      return (_this$drawInstance9 = this.drawInstance) === null || _this$drawInstance9 === void 0 ? void 0 : _this$drawInstance9.isEmpty();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$drawInstance10, _this$imageBackdrop, _this$finger;
      (_this$drawInstance10 = this.drawInstance) === null || _this$drawInstance10 === void 0 ? void 0 : _this$drawInstance10.destroy();
      (_this$imageBackdrop = this.imageBackdrop) === null || _this$imageBackdrop === void 0 ? void 0 : _this$imageBackdrop.destroy();
      (_this$finger = this.finger) === null || _this$finger === void 0 ? void 0 : _this$finger.destroy();
      try {
        var parent = this.element.parentElement || document.body;
        parent.removeChild(this.element);
        this.element = null;
      } catch (e) {}
    }
  }, {
    key: "getResult",
    value: function getResult() {
      try {
        if (!this.drawInstance || !this.imageBackdrop) return;
        var mergeCanvas = document.createElement("canvas");
        var mergeCtx = mergeCanvas.getContext("2d");
        mergeCanvas.width = this.imgWidth;
        mergeCanvas.height = this.imgHeight;
        mergeCtx.drawImage(this.imageBackdrop.drawElement, 0, 0, this.imgWidth, this.imgHeight);
        mergeCtx.drawImage(this.drawInstance.drawElement, 0, 0, this.imgWidth, this.imgHeight);
        return mergeCanvas;
      } catch (e) {
        console.error(e);
      }
    }
  }]);
  return Editor;
}();
Editor.defaultOptions = {
  root: null,
  openSmooth: false,
  center: true,
  scaleRatio: window.devicePixelRatio || 1,
  scaleable: true,
  maxScale: 5,
  maxWidth: window.innerWidth,
  onDrawStart: noop,
  onDrawing: noop,
  onDrawUp: noop
};
/* harmony default export */ var src_Editor = (Editor);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (src_Editor);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});