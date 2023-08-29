import Signature from "h5-signature";
import ImageBackdrop from "./ImageBackdrop";
import { load } from "./loader";
import Finger from "./Finger";
import Transform from "./transform";

class Editor {
  constructor(options = {}) {
    this.options = { ...Editor.defaultOptions, ...options };
    this.initScale = 1;
    this.screenWidth = window.innerWidth || window.screen.availWidth;
    this.screenHeight = window.innerHeight || window.screen.availHeight;
    this.init();
  }

  async init() {
    const {
      root,
      url,
      scaleRatio,
      scaleable,
      maxScale,
      lineWidth,
      color,
      openSmooth,
      rotate,
      minWidth,
      minSpeed,
      maxWidthDiffRate,
      maxHistoryLength,
      undoRedoStateChange,
    } = this.options;
    if (!root || !(root instanceof Element)) {
      throw new Error("Invalid root element.");
    }
    this.element = document.createElement("div");
    root.appendChild(this.element);

    const img = await load(url);
    this.imgWidth = img.width;
    this.imgHeight = img.height;
    const width = img.width / scaleRatio;
    const height = img.height / scaleRatio;

    this.element.style.position = "relative";
    this.element.style.width = width + "px";
    this.element.style.height = height + "px";

    this.imageBackdrop = new ImageBackdrop({
      root: this.element,
      scaleRatio,
      width,
      height,
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
      maxWidthDiffRate,
      maxHistoryLength,
      undoRedoStateChange,
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
          evt.preventDefault();
        },
      });
    }
  }

  setScale(size) {
    this.element.style.webkitTransition = "300ms ease-in-out";
    this.element.scaleX = this.element.scaleY = size;
  }

  restore(rotate = true) {
    this.element.translateX = this.element.translateY = 0;
    !!rotate && (this.element.rotateZ = 0);
    this.element.scaleX = this.element.scaleY = 1;
    this.element.originX = this.element.originY = 0;
  }

  endAnimation() {
    this.element.style.webkitTransition = "0";
  }

  clear() {
    this.drawInstance.clear();
  }

  setLineWidth(num) {
    this.drawInstance.setLineWidth(num);
  }

  setColor(color) {
    this.drawInstance.setColor(color);
  }

  setOptions(options) {
    this.drawInstance.setOptions(options);
  }

  undo() {
    this.drawInstance.undo();
  }

  redo() {
    this.drawInstance.redo();
  }

  canUndo() {
    return this.drawInstance.canUndo();
  }

  canRedo() {}

  destroy() {
    this.drawInstance.destroy();
    this.imageBackdrop.destroy();
    this.finger?.destroy();
  }

  getResult() {
    try {
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
  scaleable: true,
  maxScale: 3,
};

export default Editor;
