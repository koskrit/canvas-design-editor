import { useEffect, useRef } from 'react'

import { fabric } from 'fabric'

import FabricCanvas from 'src/components/pluginComponents/FabricJSCanvas/FabricCanvas/FabricCanvas'
import useGlobalState from 'src/contexts/initialization'

export { FabricCanvas, fabric }

export const addImageListener = (ImageUrl: string) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const addImageFunc = (ImageUrl: string) => {
      fabric.Image.fromURL(ImageUrl, function (oImg) {
        console.log(oImg)
        fabricJSEditor?.canvas.add(oImg)
      })
      console.log({ fabricJSEditor })
    }

    itemRef.current.onclick = () => addImageFunc(ImageUrl)
  }, [fabricJSApi])

  return itemRef
}

export const setCanvasBackgroundColor = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const setCanvasBackgroundColorFunc = (e) => {
      console.log({ fabricJSEditor })

      fabricJSEditor.canvas.setBackgroundColor(e.target.value, () => {
        fabricJSEditor.canvas.renderAll()
      })
    }

    itemRef.current.onchange = (e) => setCanvasBackgroundColorFunc(e)
  }, [fabricJSApi])

  return itemRef
}

export const setCanvasModeDrawing = (enabled: boolean) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const setCanvasModeDrawingFunc = (enabled: boolean) => {
      fabricJSEditor.canvas.isDrawingMode = enabled
      fabricJSEditor.canvas.__eventListeners = {}
    }

    itemRef.current.onclick = (e) => setCanvasModeDrawingFunc(enabled)
  }, [fabricJSApi])

  return itemRef
}

type Shape = 'Rect' | 'Circle' | 'Line'

export const addShape = (shape: Shape) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const setCanvasModeDrawingFunc = (shape: Shape) => {
      fabricJSEditor['add' + shape]()
    }

    itemRef.current.onclick = (e) => setCanvasModeDrawingFunc(shape)
  }, [fabricJSApi])

  return itemRef
}

export const setCanvasModeSelection = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const setCanvasModeSelectionFunc = () => {
      fabricJSEditor.canvas.isDrawingMode = false
      fabricJSEditor.canvas.__eventListeners = {}
    }

    itemRef.current.onclick = (e) => setCanvasModeSelectionFunc()
  }, [fabricJSApi])

  return itemRef
}

export const deleteCanvasSelection = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const deleteCanvasSelectionFunc = () => {
      const { canvas } = fabricJSEditor
      const active = canvas.getActiveObject()
      if (active) {
        canvas.remove(active)
        if (active.type == 'activeSelection') {
          active.getObjects().forEach((obj) => canvas.remove(obj))
          canvas.discardActiveObject().renderAll()
        }
      }
    }

    itemRef.current.onclick = (e) => deleteCanvasSelectionFunc()
  }, [fabricJSApi])

  return itemRef
}

/* ----------------------- Add Canvas Event Listeners ----------------------- */

export const setCanvasAddShapeMode = (shape: Shape) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi
    let action

    switch (shape) {
      case 'Line':
        action = (e) => setCanvasDrawLine(fabricJSEditor.canvas)
        break
      case 'Rect':
        action = (e) => setCanvasDrawSquare(fabricJSEditor.canvas)
        break
      case 'Circle':
        action = (e) => setCanvasDrawCircle(fabricJSEditor.canvas)
        break
    }

    itemRef.current.onclick = action
  }, [fabricJSApi])

  return itemRef

  /* -------------------------- Canvas Event Actions -------------------------- */

  function setCanvasDrawLine(canvas: any) {
    let isDown, createdShape

    canvas.__eventListeners = {}
    canvas.on('mouse:down', function (e) {
      if (canvas.getActiveObject()) {
        return false
      }
      isDown = true
      const pointer = canvas.getPointer(e.e)
      const points = [pointer.x, pointer.y, pointer.x, pointer.y]

      createdShape = new fabric.Line(points, {
        strokeWidth: 5,
        fill: 'red',
        stroke: 'red',
        originX: 'center',
        originY: 'center',
      })
      canvas.add(createdShape)
    })

    canvas.on('mouse:move', function (e) {
      if (!isDown) return
      const pointer = canvas.getPointer(e.e)

      console.log({ createdShape })
      createdShape.set({ x2: pointer.x, y2: pointer.y })
      canvas.renderAll()
    })

    canvas.on('mouse:up', function (e) {
      isDown = false
    })
  }
}

function setCanvasDrawSquare(canvas: any) {
  canvas.__eventListeners = {}

  let rectangle, isDown, origX, origY

  canvas.on('mouse:down', function (e) {
    if (canvas.getActiveObject()) {
      return false
    }
    const pointer = canvas.getPointer(e.e)

    isDown = true
    origX = pointer.x
    origY = pointer.y

    rectangle = new fabric.Rect({
      left: origX,
      top: origY,
      fill: '',
      stroke: 'red',
      strokeWidth: 3,
    })
    canvas.add(rectangle)
  })

  canvas.on('mouse:move', function (e) {
    if (!isDown) return
    const pointer = canvas.getPointer(e.e)
    if (origX > pointer.x) {
      rectangle.set({ left: Math.abs(pointer.x) })
    }
    if (origY > pointer.y) {
      rectangle.set({ top: Math.abs(pointer.y) })
    }

    rectangle.set({ width: Math.abs(origX - pointer.x) })
    rectangle.set({ height: Math.abs(origY - pointer.y) })
    canvas.renderAll()
  })

  canvas.on('mouse:up', function (e) {
    isDown = false
  })
}

function setCanvasDrawCircle(canvas: any) {
  canvas.__eventListeners = {}
  let circle, isDown, origX, origY

  canvas.on('mouse:down', function (e) {
    if (canvas.getActiveObject()) {
      return false
    }
    isDown = true
    const pointer = canvas.getPointer(e.e)
    origX = pointer.x
    origY = pointer.y
    circle = new fabric.Circle({
      left: origX,
      top: origY,
      originX: 'left',
      originY: 'top',
      radius: pointer.x - origX,
      angle: 0,
      fill: '',
      stroke: 'red',
      strokeWidth: 3,
    })
    canvas.add(circle)
  })

  canvas.on('mouse:move', function (e) {
    if (!isDown) return
    const pointer = canvas.getPointer(e.e)
    let radius = Math.abs(origY - pointer.y) / 2
    if (radius > circle.strokeWidth) {
      radius -= circle.strokeWidth / 2
    }
    circle.set({ radius: radius })

    if (origX > pointer.x) {
      circle.set({ originX: 'right' })
    } else {
      circle.set({ originX: 'left' })
    }
    if (origY > pointer.y) {
      circle.set({ originY: 'bottom' })
    } else {
      circle.set({ originY: 'top' })
    }

    canvas.renderAll()
  })

  canvas.on('mouse:up', function (e) {
    isDown = false
  })
}
