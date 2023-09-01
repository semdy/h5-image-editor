import Signature from "h5-signature";
import ImageBackdrop from "./ImageBackdrop";
import { load } from "./loader";
import Finger from "./Finger";
import Transform from "./transform";

function noop() {}

class Editor {
  constructor(options = {}) {
    this.options = { ...Editor.defaultOptions, ...options };
    this.initScale = 1;
    this.screenWidth = window.innerWidth || window.screen.availWidth;
    this.screenHeight = window.innerHeight || window.screen.availHeight;
    this.init();

    // const log = document.getElementById("log");
    // window.console.log = function (...args) {
    //   log.textContent = args.join(" ");
    // };
  }

  async init() {
    const {
      root,
      url,
      scaleable,
      maxScale,
      resizeRatio,
      lineWidth,
      color,
      openSmooth,
      rotate,
      minWidth,
      minSpeed,
      maxWidth,
      maxWidthDiffRate,
      maxHistoryLength,
      undoRedoStateChange,
      onDrawStart,
      onDrawing,
      onDrawUp,
    } = this.options;

    let { scaleRatio } = this.options;

    if (!root || !(root instanceof Element)) {
      throw new Error("Invalid root element.");
    }

    this.element = document.createElement("div");
    root.appendChild(this.element);

    const img = await load(url);
    this.imgWidth = img.width * resizeRatio;
    this.imgHeight = img.height * resizeRatio;

    if (maxWidth) {
      scaleRatio = this.imgWidth / maxWidth;
    }

    const width = this.imgWidth / scaleRatio;
    const height = this.imgHeight / scaleRatio;

    const elWidth = Math.min(width, maxWidth);
    const elHeight = Math.min(height, (elWidth / width) * height);

    this.element.style.position = "relative";
    this.element.style.width = elWidth + "px";
    this.element.style.height = elHeight + "px";

    this.imageBackdrop = new ImageBackdrop({
      root: this.element,
      scaleRatio,
      width,
      height,
      maxWidth,
    });
    this.imageBackdrop.init();
    this.imageBackdrop.drawImage(img);
    this.drawInstance = new Signature({
      root: this.element,
      scaleRatio,
      width,
      height,
      openSmooth,
      lineWidth,
      color,
      rotate,
      minWidth,
      minSpeed,
      maxWidth,
      maxWidthDiffRate,
      maxHistoryLength,
      undoRedoStateChange,
      onDrawStart,
      onDrawing,
      onDrawUp,
    });
    const { drawElement } = this.drawInstance;
    drawElement.style.position = "absolute";
    drawElement.style.left = "0";
    drawElement.style.top = "0";

    if (scaleable) {
      Transform(this.element);

      this.finger = new Finger(this.element, {
        context: this,
        maxScale,
        onMultipointStart() {
          this.initScale = this.element.scaleX;
        },
        onPinch(evt, evtObj) {
          this.element.style.webkitTransition = "cubic-bezier(.25,.01,.25,1)";

          const { originX, originY } = this.element,
            originX2 =
              evtObj.center.x - this.screenWidth / 2 - document.body.scrollLeft,
            originY2 =
              evtObj.center.y - this.screenHeight / 2 - document.body.scrollTop;

          this.element.originX = originX2;
          this.element.originY = originY2;
          this.element.translateX =
            this.element.translateX +
            (originX2 - originX) * this.element.scaleX;
          this.element.translateY =
            this.element.translateY +
            (originY2 - originY) * this.element.scaleY;
          this.element.scaleX = this.element.scaleY =
            this.initScale * evtObj.scale;
        },
        onMultipointEnd() {
          this.element.style.webkitTransition = "300ms ease";

          const { maxScale } = this.options;
          // scale to normal
          if (this.element.scaleX < 1) {
            this.restore(false);
          }
          if (this.element.scaleX > maxScale) {
            this.setScale(maxScale);
          }
        },
        onPressMove(evt, evtObj) {
          this.endAnimation();
          this.element.translateX += evtObj.deltaX;
          this.element.translateY += evtObj.deltaY;
          evt.preventDefault();
        },
      });
    }
    this.setCenter();
  }

  setCenter() {
    const { root, scaleable } = this.options;
    if (scaleable) {
      this.element.translateX =
        (root.clientWidth - this.element.clientWidth) / 2;
      this.element.translateY =
        (root.clientHeight - this.element.clientHeight) / 2;
    } else {
      this.element.style.marginLeft =
        (root.clientWidth - this.element.clientWidth) / 2 + "px";
      this.element.style.marginTop =
        (root.clientHeight - this.element.clientHeight) / 2 + "px";
    }
  }

  setScale(size) {
    this.element.style.transition = "300ms ease-in-out";
    this.element.style.webkitTransition = "300ms ease-in-out";
    this.element.scaleX = this.element.scaleY = size;
  }

  restore(rotate = true) {
    if (this.options.center) {
      this.setCenter();
    } else {
      this.element.translateX = this.element.translateY = 0;
    }
    !!rotate && (this.element.rotateZ = 0);
    this.element.scaleX = this.element.scaleY = 1;
    this.element.originX = this.element.originY = 0;
  }

  endAnimation() {
    this.element.style.transition = "0";
    this.element.style.webkitTransition = "0";
  }

  clear() {
    this.drawInstance?.clear();
  }

  setLineWidth(num) {
    this.drawInstance?.setLineWidth(num);
  }

  setColor(color) {
    this.drawInstance?.setColor(color);
  }

  setOptions(options) {
    this.drawInstance?.setOptions(options);
  }

  undo() {
    this.drawInstance?.undo();
  }

  redo() {
    this.drawInstance?.redo();
  }

  canUndo() {
    return this.drawInstance?.canUndo();
  }

  canRedo() {
    return this.drawInstance?.canRedo();
  }

  isEmpty() {
    return this.drawInstance?.isEmpty();
  }

  destroy() {
    this.drawInstance?.destroy();
    this.imageBackdrop?.destroy();
    this.finger?.destroy();
    try {
      const parent = this.element.parentElement || document.body;
      parent.removeChild(this.element);
      this.element = null;
    } catch (e) {}
  }

  getResult() {
    try {
      if (!this.drawInstance || !this.imageBackdrop) return;
      const mergeCanvas = document.createElement("canvas");
      const mergeCtx = mergeCanvas.getContext("2d");
      mergeCanvas.width = this.imgWidth;
      mergeCanvas.height = this.imgHeight;
      mergeCtx.drawImage(
        this.imageBackdrop.drawElement,
        0,
        0,
        this.imgWidth,
        this.imgHeight
      );
      mergeCtx.drawImage(
        this.drawInstance.drawElement,
        0,
        0,
        this.imgWidth,
        this.imgHeight
      );
      return mergeCanvas;
    } catch (e) {
      console.error(e);
    }
  }
}

Editor.defaultOptions = {
  root: null,
  openSmooth: false,
  center: true,
  scaleRatio: window.devicePixelRatio || 1,
  resizeRatio: 1 / (window.devicePixelRatio || 1),
  scaleable: true,
  maxScale: 5,
  maxWidth: window.innerWidth,
  onDrawStart: noop,
  onDrawing: noop,
  onDrawUp: noop,
};

export default Editor;
