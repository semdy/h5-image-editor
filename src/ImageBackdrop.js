import { Base } from "h5-signature";

class ImageBackdrop extends Base {
  constructor(options = {}) {
    super(options);
    this.options = options;
  }

  init() {
    const { root } = this.options;
    this.drawElement = document.createElement("canvas");
    this.drawCtx = this.drawElement.getContext("2d");
    root.appendChild(this.drawElement);
    super.init();
  }

  drawImage(img) {
    const { width, height } = this.options;
    this.drawCtx.drawImage(img, 0, 0, width, height);
  }

  destroy() {
    super.destroy();
    try {
      this.drawElement.parentElement.removeChild(this.drawElement);
      this.drawElement = null;
    } catch (e) {}
  }
}

export default ImageBackdrop;
