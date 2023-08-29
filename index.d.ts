
export interface IOptions {
  url: string
  openSmooth?: boolean
  color?: string
  lineWidth?: number
  rotate?: number
  minWidth?: number
  minSpeed?: number
  scaleRatio?: number
  scaleable?: boolean,
  maxScale?: number,
  maxWidthDiffRate?: number
  maxHistoryLength?: number
  undoRedoStateChange?: (canUndo: boolean, canRedo: boolean) => void
}

export type ConstructorOptions = IOptions & { root: HTMLElement | null }


export default class ImageEditor {
  static defaultOptions: IOptions

  constructor(options?: ConstructorOptions)

  setLineWidth: (width: number) => void
  setColor: (color: string) => void
  setOptions: (options: IOptions) => void
  clear: () => void
  undo: () => void
  redo: () => void
  canUndo: () => void
  canRedo: () => void
  getResult: () => HTMLCanvasElement | undefined
  destroy: () => void
}
