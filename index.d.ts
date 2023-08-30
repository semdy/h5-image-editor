import { IOptions as SignatureIOptions } from "h5-signature";

export interface IOptions
  extends Omit<
    SignatureIOptions,
    "resizeDebounceTime | exportPadding | exportMaxWidth | exportMaxHeight"
  > {
  url: string | File | Blob | HTMLImageElement;
  scaleable?: boolean;
  maxScale?: number;
}

export type ConstructorOptions = IOptions & { root: HTMLElement | null };

export default class ImageEditor {
  static defaultOptions: IOptions;

  constructor(options?: ConstructorOptions);

  setLineWidth: (width: number) => void;
  setColor: (color: string) => void;
  setOptions: (options: IOptions) => void;
  clear: () => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => void;
  canRedo: () => void;
  isEmpty: () => boolean;
  getResult: () => HTMLCanvasElement | undefined;
  destroy: () => void;
}
