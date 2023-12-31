# h5-image-editor

基于 canvas 的图片编辑. [online demo](https://semdy.github.io/h5-image-editor)

## Install

```bash
    npm install h5-image-editor
    # or
    yarn add h5-image-editor

    # development
    npm run start
    # build
    npm run build
```

## Usage

```js
<div style="width:300px;height:300px" id="container"></div>;
var container = document.getElementById("container");
new Editor.default({
  root: container, // root dom container
  color: "#000", // draw color
  lineWidth: 8, // draw line width
  openSmooth: false, // if enable brush thickness effect
  center: true, // if entered canvas in container
  rotate: 0, // export rotated image, available values: -90/90/-180/180
  minWidth: 2, // minimize linWidth
  minSpeed: 1.5, // minimize brush move speed
  scaleRatio: window.devicePixelRatio, // canvas scale ratio
  resizeRatio: 1 / window.devicePixelRatio, // resize canvas ratio
  scaleable: true, // canvas can pinch scaleable
  maxScale: 5, // max scacle by pinch
  maxWidth: window.innerWidth, // canvas element style max width
  maxWidthDiffRate: 20, // Smooth transition threshold
  maxHistoryLength: 0, // max history length, no limit if set to 0
  undoRedoStateChange: Function, // state change callback if undo/redo state changed
  onDrawStart: Function, // called when draw starts, [MouseEvent, point]
  onDrawing: Function, // called when draw going , [MouseEvent, point]
  onDrawUp: Function, // called when draw up , [MouseEvent, Image]
});
```

## instance methods

#### setLineWidth

    parameters: width [number]

set draw lineWidth dynamic

#### setColor

    parameters: color [string]

set draw color dynamic

#### setOptions

    parameters: options Object

set override options, all properties same as constructor parameters, see above

#### clear

clear the canvas

#### undo

go prev draw stage

#### redo

go next draw stage

#### canUndo

query if can undo

#### canRedo

query if can redo

#### restore

parameters: [rotate] boolean

reset translate、scale and origin

#### setScale

parameters: scale number

set scale manually

#### getResult

get the cropped or origin canvas dom

#### destroy

destroy the instance
