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

  return (angle * 180) / Math.PI;
}

export default class Finger {
  constructor(el, options) {
    this.element = el;
    this.options = options;
    this.preV = { x: null, y: null };
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
    this.preTapPosition = { x: null, y: null };

    this.handleStart = this.handleStart.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.element.addEventListener("touchstart", this.handleStart, false);
    this.element.addEventListener("touchmove", this.handleMove, false);
    this.element.addEventListener("touchend", this.handleEnd, false);
    this.element.addEventListener("touchcancel", this.handleCancel, false);
  }

  _emitEvent(name, ...arg) {
    if (this.options[name]) {
      this.options[name].apply(this.options.context, arg);
    }
  }

  handleStart(evt) {
    if (!evt.touches) return;
    this.now = Date.now();
    this.x1 = evt.touches[0].clientX;
    this.y1 = evt.touches[0].clientY;
    this.delta = this.now - (this.last || this.now);
    if (this.preTapPosition.x !== null) {
      this.isDoubleTap =
        this.delta > 0 &&
        this.delta <= 250 &&
        Math.abs(this.preTapPosition.x - this.x1) < 30 &&
        Math.abs(this.preTapPosition.y - this.y1) < 30;
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
        x: evt.touches[1].clientX - this.x1,
        y: evt.touches[1].clientY - this.y1,
      };
      preV.x = v.x;
      preV.y = v.y;
      this.pinchStartLen = getLen(preV);
      this._emitEvent("onMultipointStart", evt);
    }
    this.longTapTimeout = setTimeout(() => {
      this._emitEvent("onLongTap", evt);
    }, 750);
  }

  handleMove(evt) {
    var preV = this.preV,
      len = evt.touches.length,
      currentX = evt.touches[0].clientX,
      currentY = evt.touches[0].clientY;
    this.isDoubleTap = false;
    if (len > 1) {
      var v = {
        x: evt.touches[1].clientX - currentX,
        y: evt.touches[1].clientY - currentY,
      };

      if (preV.x !== null) {
        if (this.pinchStartLen > 0) {
          const center = {
            x: (evt.touches[1].clientX + currentX) / 2,
            y: (evt.touches[1].clientY + currentY) / 2,
          };
          const scale = getLen(v) / this.pinchStartLen;
          this._emitEvent("onPinch", evt, { center, scale });
        }
        const angle = getRotateAngle(v, preV);
        this._emitEvent("onRotate", evt, { angle });
      }
      preV.x = v.x;
      preV.y = v.y;
      this.multiTouch = true;

      const evtObj = {};
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

  handleCancel() {
    clearInterval(this.singleTapTimeout);
    clearInterval(this.tapTimeout);
    clearInterval(this.longTapTimeout);
    clearInterval(this.swipeTimeout);
  }

  handleEnd(evt) {
    this.end = Date.now();
    this._cancelLongTap();

    if (evt.touches.length < 2) {
      this._emitEvent("onMultipointEnd", evt);
    }

    const evtObj = {};

    evtObj.origin = [this.x1, this.y1];
    if (this.multiTouch === false) {
      if (
        (this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
        (this.y2 && Math.abs(this.preV.y - this.y2) > 30)
      ) {
        evtObj.direction = this._swipeDirection(
          this.x1,
          this.x2,
          this.y1,
          this.y2
        );
        evtObj.distance = Math.abs(this.x1 - this.x2);
        this.swipeTimeout = setTimeout(() => {
          this._emitEvent("onSwipe", evt, evtObj);
        }, 0);
      } else {
        this.tapTimeout = setTimeout(() => {
          this._emitEvent("onTap", evt, evtObj);
          if (this.isDoubleTap) {
            this._emitEvent("onDoubleTap", evt, evtObj);
            clearTimeout(this.singleTapTimeout);
            this.isDoubleTap = false;
          } else {
            this.singleTapTimeout = setTimeout(() => {
              this._emitEvent("onSingleTap", evt, evtObj);
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

  _cancelLongTap() {
    clearTimeout(this.longTapTimeout);
  }

  _cancelSingleTap() {
    clearTimeout(this.singleTapTimeout);
  }

  _swipeDirection(x1, x2, y1, y2) {
    if (Math.abs(x1 - x2) > 80 || this.end - this.now < 250) {
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
        ? x1 - x2 > 0
          ? "Left"
          : "Right"
        : y1 - y2 > 0
        ? "Up"
        : "Down";
    } else {
      return "Nochange";
    }
  }

  destroy() {
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
}
