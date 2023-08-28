import Signature from "h5-signature";
import ImageBackdrop from "./ImageBackdrop";
import { load } from "./loader";

class Editor {
  constructor(options = {}) {
    this.options = { ...Editor.defaultOptions, ...options };
    this.init();
  }

  async init() {
    const {
      root,
      url,
      scaleRatio,
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
    const img = await load(url);
    this.imgWidth = img.width;
    this.imgHeight = img.height;
    const width = img.width / scaleRatio;
    const height = img.height / scaleRatio;

    root.style.position = "relative";
    root.style.width = width + "px";
    root.style.height = height + "px";

    this.imageBackdrop = new ImageBackdrop({
      root,
      scaleRatio,
      width,
      height,
    });
    this.imageBackdrop.init();
    this.imageBackdrop.drawImage(img);
    this.drawInstance = new Signature({
      root,
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

  canRedo() {
    return this.drawInstance.canRedo();
  }

  destroy() {
    this.drawInstance.destroy();
    this.imageBackdrop.destroy();
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
};

export default Editor;
