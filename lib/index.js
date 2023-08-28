(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Signature"] = factory();
	else
		root["Signature"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(666);


/***/ }),

/***/ 814:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r:function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}t.r(e),t.d(e,{Base:function(){return g},default:function(){return j}});var a,s,h="ontouchstart"in document||navigator.maxTouchPoints,u=navigator.userAgent,c=window.navigator.msPointerEnabled&&/IEMobile/i.test(u);h=h||c||!1,void 0!==document.hidden?(a="hidden",s="visibilitychange"):void 0!==document.msHidden?(a="msHidden",s="msvisibilitychange"):void 0!==document.webkitHidden&&(a="webkitHidden",s="webkitvisibilitychange");var l=c?{START:"MSPointerDown",MOVE:"MSPointerMove",END:"MSPointerCancel",HIDDEN:a,VISIBILITYCHANGE:s}:{START:h?"touchstart":"mousedown",MOVE:h?"touchmove":"mousemove",END:h?"touchend":"mouseup",HIDDEN:a,VISIBILITYCHANGE:s};function d(){}function f(t){return t.changedTouches?t.changedTouches[0]:t}function p(t){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},p(t)}function v(t,e,n){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}},v(t,e,n||t)}function y(t,e){return y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},y(t,e)}function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function m(t,e){if(e&&("object"===w(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}l.RESIZE="onorientationchange"in window?"orientationchange":"resize";var g=function(){function t(){i(this,t)}return r(t,[{key:"init",value:function(){this.resize=this.resize.bind(this),this.attachEvents(),this.resize()}},{key:"resize",value:function(){var t,e,n=this.options,i=n.width,o=n.height,r=n.root,a=n.scaleRatio;t="auto"===i?r.clientWidth:i,e="auto"===o?r.clientHeight:o,a>0?(this.drawElement.width=t*a,this.drawElement.height=e*a,this.drawCtx.scale(a,a)):(this.drawElement.width=t,this.drawElement.height=e),this.drawElement.style.cssText="width: ".concat(t,"px; height: ").concat(e,"px; touch-action: none;"),this.tempImageData&&(this.drawCtx.putImageData(this.tempImageData,0,0),this.tempImageData=null,this._isResizing=!1)}},{key:"attachEvents",value:function(){var t,e,n,i=this,o=this.options,r=o.width,a=o.height,s=(t=this.resize.bind(this),e=this.options.resizeDebounceTime,n=null,function(){n&&clearTimeout(n),n=setTimeout(t,e)});this.resizeHandle=function(t){i._isResizing||(i.tempImageData=i.drawCtx.getImageData(0,0,i.drawElement.width,i.drawElement.height)),i._isResizing=!0,s(t)},"auto"!==r&&"auto"!==a||window.addEventListener(l.RESIZE,this.resizeHandle,!1)}},{key:"detachEvents",value:function(){window.removeEventListener(l.RESIZE,this.resizeHandle,!1)}},{key:"destroy",value:function(){this.detachEvents()}}]),t}();function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var E=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this._touchTimer=null,this.options=O(O({},t.defaultOptions),e)}return r(t,[{key:"attach",value:function(t){this.element=t,this.bindEvents()}},{key:"bindEvents",value:function(){this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.element.addEventListener(l.START,this.onTouchStart,!1),this.element.addEventListener(l.MOVE,this.onTouchMove,!1),this.element.addEventListener(l.END,this.onTouchEnd,!1),this.element.addEventListener("mouseout",this.onMouseOut,!1)}},{key:"onTouchStart",value:function(t){var e=this;t=f(t),this._startTime=Date.now(),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseDown(t),this._touchTimer=setTimeout((function(){e.options.onLongTap(t)}),300)}},{key:"onTouchMove",value:function(t){t.preventDefault(),t=f(t),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseMove(t)}},{key:"onTouchEnd",value:function(t){t=f(t),this.clearTouchTimer(),this.setMouseEventXY(t),this.options.onMouseUp(t),Date.now()-this._startTime<100&&this.options.onClick(t)}},{key:"onMouseOut",value:function(t){this.clearTouchTimer(),this.options.onMouseOut(t)}},{key:"clearTouchTimer",value:function(){this._touchTimer&&clearTimeout(this._touchTimer)}},{key:"setMouseEventXY",value:function(t){var e=function(t,e){if(void 0!==e.offsetX)return{x:e.offsetX,y:e.offsetY};if(void 0!==e.layerX&&e.layerX!==e.offsetX)return{x:e.layerX,y:e.layerY};var n=function(t){try{return t.getBoundingClientRect()}catch(t){return{left:0,top:0}}}(t);return{x:e.clientX-n.left,y:e.clientY-n.top}}(this.element,t),n=e.x,i=e.y;t.stageX=n,t.stageY=i}},{key:"detach",value:function(){this.element.removeEventListener(l.START,this.onTouchStart,!1),this.element.removeEventListener(l.MOVE,this.onTouchMove,!1),this.element.removeEventListener(l.END,this.onTouchEnd,!1),this.element.removeEventListener("mouseout",this.onMouseOut,!1)}}]),t}();E.defaultOptions={onMouseDown:d,onMouseMove:d,onMouseUp:d,onMouseOut:d,onClick:d,onLongTap:d};var k=E;function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?S(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):S(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var M=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(a,t);var e,n,o=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,i=p(e);if(n){var o=p(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return m(this,t)});function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,a),(t=o.call(this,e)).options=e,t._isStart=!1,t.prePoint={},t.point={},t}return r(a,[{key:"init",value:function(){var t=this.options.root;this.drawElement=document.createElement("canvas"),this.drawCtx=this.drawElement.getContext("2d"),t.appendChild(this.drawElement),v(p(a.prototype),"init",this).call(this),this.mouseEvent=new k({onMouseDown:this.handleMouseDown.bind(this),onMouseMove:this.handleMouseMove.bind(this),onMouseUp:this.handleMouseUp.bind(this),onMouseOut:this.handleMouseOut.bind(this)}),this.mouseEvent.attach(this.drawElement)}},{key:"drawStartPoint",value:function(t){this.drawCtx.lineWidth=this.options.lineWidth,this.drawCtx.beginPath(),this.drawCtx.moveTo(t.stageX,t.stageY),this.drawCtx.lineTo(t.stageX+.1,t.stageY+.1),this.drawCtx.stroke()}},{key:"drawSmoothLine",value:function(t,e){var n=.33*(e.x-t.x),i=.33*(e.y-t.y),o=t.x+n,r=t.y+i,a=o+n,s=r+i;if(e.lastX=a,e.lastY=s,"number"==typeof t.lastX){var h=(t.lineWidth+e.lineWidth)/2;this.drawCurveLine(t.lastX,t.lastY,t.x,t.y,o,r,h)}this.drawLine(o,r,a,s,e.lineWidth)}},{key:"drawNoSmoothLine",value:function(t,e){var n=(e.x-t.x)/2,i=(e.y-t.y)/2;e.lastX=t.x+n,e.lastY=t.y+i,"number"==typeof t.lastX&&this.drawCurveLine(t.lastX,t.lastY,t.x,t.y,e.lastX,e.lastY,this.options.lineWidth)}},{key:"drawLine",value:function(t,e,n,i,o){this.drawCtx.lineWidth=o,this.drawCtx.beginPath(),this.drawCtx.moveTo(t,e),this.drawCtx.lineTo(n,i),this.drawCtx.closePath(),this.drawCtx.stroke()}},{key:"drawCurveLine",value:function(t,e,n,i,o,r,a){this.drawCtx.lineWidth=a,this.drawCtx.beginPath(),this.drawCtx.moveTo(t,e),this.drawCtx.quadraticCurveTo(n,i,o,r),this.drawCtx.stroke()}},{key:"drawByImage",value:function(t){var e=this.options.scaleRatio,n=this.drawElement,i=n.width,o=n.height;this.clear(),this.drawCtx.drawImage(t,0,0,i/e,o/e)}},{key:"handleMouseDown",value:function(t){this._isStart=!0,this.prePoint={x:t.stageX,y:t.stageY,t:Date.now(),lastX:t.stageX,lastY:t.stageY,color:this.options.color,lineWidth:this.options.lineWidth},this.drawCtx.lineJoin="round",this.drawCtx.lineCap="round",this.drawCtx.strokeStyle=this.options.color,this.drawStartPoint(t),this.options.onDrawStart(t,this.prePoint)}},{key:"handleMouseMove",value:function(t){this._isStart&&(this.point={x:t.stageX,y:t.stageY,t:Date.now(),color:this.options.color},this.point.lineWidth=this._calculateLineWidth(),this.options.openSmooth?this.drawSmoothLine(this.prePoint,this.point):this.drawNoSmoothLine(this.prePoint,this.point),this.prePoint=x({},this.point),this.options.onDrawing(t,this.point))}},{key:"handleMouseUp",value:function(t){var e=this;this._isStart=!1;var n=new Image;n.src=this.drawElement.toDataURL(),n.onload=function(){e.options.onDrawUp(t,n),n.onload=null}}},{key:"handleMouseOut",value:function(t){this._isStart&&this.handleMouseUp(t)}},{key:"setLineWidth",value:function(t){this.options.lineWidth=t}},{key:"setColor",value:function(t){this.options.color=t}},{key:"setOptions",value:function(t){this.options=x(x({},this.options),t)}},{key:"getLineWidth",value:function(t){var e=this.options.lineWidth,n=this.options.minWidth,i=(e-n)*t/(this.options.minSpeed>10?10:this.options.minSpeed<1?1:this.options.minSpeed),o=Math.max(e-i,n);return Math.min(o,e)}},{key:"clear",value:function(){this.drawElement&&this.drawCtx.clearRect(0,0,this.drawElement.width,this.drawElement.height)}},{key:"destroy",value:function(){this._isStart=!1,this.prePoint=null,this.point=null,this.clear(),v(p(a.prototype),"destroy",this).call(this),this.mouseEvent.detach();try{this.drawElement.parentElement.removeChild(this.drawElement),this.drawElement=null}catch(t){}}},{key:"_calculateLineWidth",value:function(){if(this.options.openSmooth){var t=this._calculateSpeed(),e=this.getLineWidth(t),n=(e-this.prePoint.lineWidth)/this.prePoint.lineWidth,i=this.options.maxWidthDiffRate/100;if(i=i>1?1:i<.01?.01:i,Math.abs(n)>i){var o=n>0?i:-i;e=this.prePoint.lineWidth*(1+o)}return e}return this.options.lineWidth}},{key:"_calculateSpeed",value:function(){var t=this.point.t-this.prePoint.t||.1,e=this.point.x-this.prePoint.x,n=this.point.y-this.prePoint.y;return Math.sqrt(e*e,n*n)/t}}]),a}(g),T=M,C=function(){function t(e){i(this,t),this._undoStack=[],this._redoStack=[],this.maxLength=e}return r(t,[{key:"push",value:function(t,e){var n=this;this._undoStack.push((function i(){t(),n._redoStack.push((function(){e(),n._undoStack.push(i)}))})),this.maxLength>0&&this._undoStack.length>this.maxLength&&(this._undoStack=this._undoStack.slice(-this.maxLength))}},{key:"undo",value:function(){var t=this._undoStack.pop();t instanceof Function&&t()}},{key:"redo",value:function(){var t=this._redoStack.pop();t instanceof Function&&t()}},{key:"setMaxHistoryLength",value:function(t){this.maxLength=t}},{key:"canUndo",value:function(){return this._undoStack.length>0}},{key:"canRedo",value:function(){return this._redoStack.length>0}},{key:"clear",value:function(){this._redoStack=[],this._undoStack=[]}}]),t}();function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function R(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var D=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.options=R(R({},t.defaultOptions),e),this.drawStack=[],this.lastCanUndo=!1,this.lastCanRedo=!1,this.painter=new T(R(R({},this.options),{},{onDrawUp:this.onDrawUp.bind(this)})),this.undoRedoManager=new C(this.options.maxHistoryLength),this.init()}return r(t,[{key:"init",value:function(){var t=this.options.root;if(!(t&&t instanceof Element))throw new Error("Invalid root element.");this.painter.init(),this.drawElement=this.painter.drawElement,this.handleUndoRedoStateChange(!0)}},{key:"onDrawUp",value:function(t,e){var n=this,i=function(){n.drawStack.push(e)};this.undoRedoManager.push((function(){n.drawStack.pop()}),i),i(),this.options.onDrawUp(t,e),this.handleUndoRedoStateChange()}},{key:"rerender",value:function(){var t=this.drawStack[this.drawStack.length-1];t?this.painter.drawByImage(t):this.painter.clear()}},{key:"clear",value:function(){this.drawStack=[],this.undoRedoManager.clear(),this.painter.clear(),this.handleUndoRedoStateChange()}},{key:"setLineWidth",value:function(t){this.painter.setLineWidth(t)}},{key:"setColor",value:function(t){this.painter.setColor(t)}},{key:"setOptions",value:function(t){this.options=R(R({},this.options),t),this.painter.setOptions(R(R({},t),{},{onDrawUp:this.onDrawUp.bind(this)})),t&&"maxHistoryLength"in t&&this.undoRedoManager.setMaxHistoryLength(t.maxHistoryLength)}},{key:"handleUndoRedoStateChange",value:function(t){var e=this.canUndo(),n=this.canRedo();t&&this.options.undoRedoStateChange(e,n),this.lastCanUndo!==e&&(this.options.undoRedoStateChange(e,n),this.lastCanUndo=e),this.lastCanRedo!==n&&(this.options.undoRedoStateChange(e,n),this.lastCanRedo=n)}},{key:"undo",value:function(){this.undoRedoManager.undo(),this.rerender(),this.handleUndoRedoStateChange()}},{key:"redo",value:function(){this.undoRedoManager.redo(),this.rerender(),this.handleUndoRedoStateChange()}},{key:"canUndo",value:function(){return this.undoRedoManager.canUndo()}},{key:"canRedo",value:function(){return this.undoRedoManager.canRedo()}},{key:"destroy",value:function(){this.clear(),this.painter.destroy(),this.undoRedoManager.clear()}},{key:"getValidBound",value:function(t){for(var e=t.getContext("2d"),n=t.width,i=t.height,o=e.getImageData(0,0,n,i).data,r=n,a=0,s=i,h=0,u=0;u<n;u++)for(var c=0;c<i;c++)o[4*(u+n*c)+3]>0&&(h=Math.max(c,h),a=Math.max(u,a),s=Math.min(c,s),r=Math.min(u,r));return{cutWidth:++a-++r,cutHeight:++h-++s,lOffset:r,rOffset:a,tOffset:s,bOffset:h}}},{key:"getResult",value:function(t){try{var e=this.drawElement;0!==this.options.rotate&&(e=this.getRotateCanvas(this.options.rotate));var n=this.getValidBound(e),i=n.cutWidth,o=n.cutHeight,r=n.lOffset,a=n.tOffset;if(i<=0||o<=0)return;if(t)return e;var s=this.options,h=s.exportMaxWidth,u=s.exportMaxHeight,c=s.exportPadding,l=s.scaleRatio,d=document.createElement("canvas"),f=d.getContext("2d");if(d.width=i,d.height=o,f.drawImage(e,r,a,i,o,0,0,d.width,d.height),h||u||0!==c){var p=d.width,v=d.height,y=h*l,w=u*l;h&&y<p&&(v*=y/p,p=y),u&&w<v&&(p*=w/v,v=w);var m=document.createElement("canvas"),g=m.getContext("2d");return m.width=p,m.height=v,g.drawImage(d,c,c,m.width-2*c,m.height-2*c),m}return d}catch(t){console.error(t)}}},{key:"getRotateCanvas",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90;t=t>0?t>90?180:90:t<-90?180:-90;var e=document.createElement("canvas"),n=this.drawElement.width,i=this.drawElement.height;180===t?(e.width=n,e.height=i):(e.width=i,e.height=n);var o=e.getContext("2d");return o.rotate(t*Math.PI/180),90===t?o.drawImage(this.drawElement,0,-i,n,i):-90===t?o.drawImage(this.drawElement,-n,0,n,i):180===t&&o.drawImage(this.drawElement,-n,-i,n,i),e}},{key:"base64ToBlob",value:function(t){for(var e=t.split(";base64,"),n=e[0].split(":")[1],i=window.atob(e[1]),o=i.length,r=new Uint8Array(o),a=0;a<o;++a)r[a]=i.charCodeAt(a);return new Blob([r],{type:n})}},{key:"downloadFile",value:function(){var t=Date.now(),e=document.createElement("a"),n=this.base64ToBlob(this.drawElement.toDataURL()),i=URL.createObjectURL(n);document.createEvent("HTMLEvents").initEvent("click",!0,!0),e.download=t,e.href=i,e.click(),window.URL.revokeObjectURL(i),e=null,i=null}}]),t}();D.defaultOptions={root:null,width:"auto",height:"auto",openSmooth:!0,color:"#000",lineWidth:8,rotate:0,minWidth:2,minSpeed:1.5,scaleRatio:window.devicePixelRatio||1,maxWidthDiffRate:20,resizeDebounceTime:200,maxHistoryLength:0,exportPadding:0,exportMaxWidth:null,exportMaxHeight:null,undoRedoStateChange:d,onDrawStart:d,onDrawing:d,onDrawUp:d};var j=D;return e}()}));

/***/ }),

/***/ 666:
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
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
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
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

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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
        this.drawElement.parentElement.removeChild(this.drawElement);
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
;// CONCATENATED MODULE: ./src/Editor.js






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Editor = /*#__PURE__*/function () {
  function Editor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Editor);

    this.options = _objectSpread(_objectSpread({}, Editor.defaultOptions), options);
    this.init();
  }

  _createClass(Editor, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee() {
        var _this$options, root, url, scaleRatio, lineWidth, color, openSmooth, rotate, minWidth, minSpeed, maxWidthDiffRate, maxHistoryLength, undoRedoStateChange, img, width, height, drawElement;

        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$options = this.options, root = _this$options.root, url = _this$options.url, scaleRatio = _this$options.scaleRatio, lineWidth = _this$options.lineWidth, color = _this$options.color, openSmooth = _this$options.openSmooth, rotate = _this$options.rotate, minWidth = _this$options.minWidth, minSpeed = _this$options.minSpeed, maxWidthDiffRate = _this$options.maxWidthDiffRate, maxHistoryLength = _this$options.maxHistoryLength, undoRedoStateChange = _this$options.undoRedoStateChange;

                if (!(!root || !(root instanceof Element))) {
                  _context.next = 3;
                  break;
                }

                throw new Error("Invalid root element.");

              case 3:
                _context.next = 5;
                return load(url);

              case 5:
                img = _context.sent;
                this.imgWidth = img.width;
                this.imgHeight = img.height;
                width = img.width / scaleRatio;
                height = img.height / scaleRatio;
                root.style.position = "relative";
                root.style.width = width + "px";
                root.style.height = height + "px";
                this.imageBackdrop = new src_ImageBackdrop({
                  root: root,
                  scaleRatio: scaleRatio,
                  width: width,
                  height: height
                });
                this.imageBackdrop.init();
                this.imageBackdrop.drawImage(img);
                this.drawInstance = new (index_min_default())({
                  root: root,
                  scaleRatio: scaleRatio,
                  width: width,
                  height: height,
                  openSmooth: openSmooth,
                  lineWidth: lineWidth,
                  color: color,
                  rotate: rotate,
                  minWidth: minWidth,
                  minSpeed: minSpeed,
                  maxWidthDiffRate: maxWidthDiffRate,
                  maxHistoryLength: maxHistoryLength,
                  undoRedoStateChange: undoRedoStateChange
                });
                drawElement = this.drawInstance.drawElement;
                drawElement.style.position = "absolute";
                drawElement.style.left = "0";
                drawElement.style.top = "0";

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "clear",
    value: function clear() {
      this.drawInstance.clear();
    }
  }, {
    key: "setLineWidth",
    value: function setLineWidth(num) {
      this.drawInstance.setLineWidth(num);
    }
  }, {
    key: "setColor",
    value: function setColor(color) {
      this.drawInstance.setColor(color);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.drawInstance.setOptions(options);
    }
  }, {
    key: "undo",
    value: function undo() {
      this.drawInstance.undo();
    }
  }, {
    key: "redo",
    value: function redo() {
      this.drawInstance.redo();
    }
  }, {
    key: "canUndo",
    value: function canUndo() {
      return this.drawInstance.canUndo();
    }
  }, {
    key: "canRedo",
    value: function canRedo() {
      return this.drawInstance.canRedo();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.drawInstance.destroy();
      this.imageBackdrop.destroy();
    }
  }, {
    key: "getResult",
    value: function getResult() {
      try {
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
  openSmooth: false
};
/* harmony default export */ var src_Editor = (Editor);
;// CONCATENATED MODULE: ./src/index.js

/* harmony default export */ var src = (src_Editor);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});