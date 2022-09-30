import { useEffect, useRef } from 'react'

import { fabric } from 'fabric'
import { useFabricJSEditor } from 'fabricjs-react'

import { useAuth } from '@redwoodjs/auth'

import FabricCanvas from 'src/components/pluginComponents/FabricJSCanvas/FabricCanvas/FabricCanvas'
import { Project } from 'src/contexts/currentProject'
import useGlobalState from 'src/contexts/initialization'

import { uploadImageCloudinary } from './cloudinaryUploader'
import { uploadImage } from './filestackImage'

export { FabricCanvas, fabric }

const fabricState = {
  selectedObject: {
    stroke: '#000',
    fill: '#000',
  },
}

export const addImageListener = (ImageUrl: string) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const addImageFunc = (ImageUrl: string) => {
      fabric.Image.fromURL(
        ImageUrl,
        function (oImg) {
          console.log(oImg)
          fabricJSEditor?.canvas.add(oImg)
        },
        { crossOrigin: 'Anonymous' }
      )
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

    itemRef.current.oninput = (e) => setCanvasBackgroundColorFunc(e)
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

type Shape = 'Rect' | 'Circle' | 'Line' | 'IText'

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
        action = (e) => setCanvasDrawSquareOrText(fabricJSEditor.canvas, 'Rect')
        break
      case 'Circle':
        action = (e) => setCanvasDrawCircle(fabricJSEditor.canvas)
        break
      case 'IText':
        action = (e) =>
          setCanvasDrawSquareOrText(fabricJSEditor.canvas, 'IText')
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
        fill: fabricState.selectedObject.fill,
        stroke: fabricState.selectedObject.stroke,
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

function setCanvasDrawSquareOrText(canvas: any, type: 'Rect' | 'IText') {
  canvas.__eventListeners = {}

  let objShape, isDown, origX, origY

  canvas.on('mouse:down', function (e) {
    if (canvas.getActiveObject()) {
      return false
    }
    const pointer = canvas.getPointer(e.e)

    isDown = true
    origX = pointer.x
    origY = pointer.y

    if (type === 'Rect') {
      objShape = new fabric.Rect({
        left: origX,
        top: origY,
        fill: fabricState.selectedObject.fill,
        stroke: fabricState.selectedObject.stroke,
        strokeWidth: 3,
      })
    } else if (type === 'IText') {
      objShape = new fabric.IText('Insert Text...', {
        left: origX,
        top: origY,
        fill: fabricState.selectedObject.fill,
        stroke: fabricState.selectedObject.stroke,
        strokeWidth: 3,
      })
      console.log({ objShape })
    }

    canvas.add(objShape)
  })

  canvas.on('mouse:move', function (e) {
    if (!isDown) return
    const pointer = canvas.getPointer(e.e)
    if (origX > pointer.x) {
      objShape.set({ left: Math.abs(pointer.x) })
    }
    if (origY > pointer.y) {
      objShape.set({ top: Math.abs(pointer.y) })
    }

    objShape.set({ width: Math.abs(origX - pointer.x) })
    objShape.set({ height: Math.abs(origY - pointer.y) })
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
      fill: fabricState.selectedObject.fill,
      stroke: fabricState.selectedObject.stroke,
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

/* -------------------------------- Top Menu -------------------------------- */
type Attribute =
  | 'stroke'
  | 'fill'
  | 'width'
  | 'height'
  | 'strokeWidth'
  | 'flipX'
  | 'flipY'

interface SetSelectionAttributes {
  attribute: Attribute
  isInput: boolean
  customValue?: any
  isToggle?: boolean
}

export const setSelectionAttribute = (
  setSelectionAttributes: SetSelectionAttributes
) => {
  let { attribute, isInput, customValue, isToggle } = setSelectionAttributes

  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    const setSelectionAttributeFunc = (e) => {
      const { canvas } = fabricJSEditor

      let value = e.target.value
      const active = canvas.getActiveObject()

      if (isToggle) {
        const prev = active[attribute]
        value = customValue = !prev
      }

      if (active) {
        active.set({ [attribute]: isInput ? value : customValue })

        if (active.type == 'activeSelection') {
          active
            .getObjects()
            .forEach((obj) =>
              obj.set({ [attribute]: isInput ? value : customValue })
            )
        }
        canvas.renderAll()
      }
      fabricState.selectedObject[attribute] = isInput ? value : customValue
    }

    itemRef.current[isInput ? 'oninput' : 'onclick'] = (e) =>
      setSelectionAttributeFunc(e)
  }, [fabricJSApi])

  return itemRef
}

export const useSetCanvasActiveOpacity = (sliderValue: any) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const objRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    if (fabricJSEditor) {
      const opacity = sliderValue / 100

      doToSelectedObject({
        fabricJSEditor,
        action: (active) => {
          active.opacity = opacity
          if (active.type === 'activeSelection') {
            objRef.current = active
          }
        },
      })
    }
  }, [fabricJSApi, sliderValue])
  return objRef
}

export const getCanvasObject = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const objRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    if (fabricJSEditor) {
      const { canvas } = fabricJSEditor
      objRef.current = canvas
    }
  }, [fabricJSApi])
  return objRef
}

type LayerDirection =
  | 'sendBackwards'
  | 'sendToBack'
  | 'bringForward'
  | 'bringToFront'

export const useSetCanvasSelectionObjectLayer = (
  layerDirection: LayerDirection
) => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    if (fabricJSEditor && itemRef.current) {
      itemRef.current.onclick = () =>
        doToSelectedObject({
          fabricJSEditor,
          action: (active) => {
            const { canvas } = fabricJSEditor
            canvas[layerDirection](active)
          },
        })
    }
  }, [fabricJSApi])

  return itemRef
}

export const useDuplicateCanvasObject = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    if (fabricJSEditor && itemRef.current) {
      itemRef.current.onclick = () =>
        doToSelectedObject({
          fabricJSEditor,
          action: (active) => {
            const { canvas } = fabricJSEditor
            const object = fabric.util.object.clone(active)
            object.set('top', object.top + 5)
            object.set('left', object.left + 5)
            canvas.add(object)
          },
        })
    }
  }, [fabricJSApi])

  return itemRef
}

interface DoToSelectionObjectParams {
  fabricJSEditor: any
  action: (active) => void
}

function doToSelectedObject(
  doToSelectionObjectParams: DoToSelectionObjectParams
) {
  const { fabricJSEditor, action } = doToSelectionObjectParams

  const { canvas } = fabricJSEditor
  const active = canvas.getActiveObject()

  if (active) {
    action(active)
    if (active.type == 'activeSelection') {
      active.getObjects().forEach((obj) => action(active))
    }
    canvas.renderAll()
  }
}

// fix undefined values
export const useSaveCanvasToState = () => {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  const { currentUser } = useAuth()

  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')

  const { fabricJSEditor } = fabricJSApi

  return async () => {
    if (!fabricJSEditor) return false

    const canvasDataArr = extractCanvasData(fabricJSEditor)
    const urlParams = new URLSearchParams(document.location.href.split('?')[1])
    const urlParamsArr = []
    const userId = {
      key: 'userId',
      value: currentUser.sub,
    }

    urlParams.forEach((value, key) => urlParamsArr.push({ value, key }))

    const projectStateProperties = [...urlParamsArr, ...canvasDataArr, userId]

    const projectState = {} as Project
    projectStateProperties.forEach(
      ({ value, key }) => (projectState[key] = value)
    )
    const { canvas } = fabricJSEditor

    const imageData = canvas.toDataURL()
    const previewImageUrl = await uploadImageCloudinary(imageData)

    projectState.PreviewImage = previewImageUrl

    setCurrentProject(projectState)
    console.log({ currentProject, projectState })

    return projectState
  }
}

interface DownloadOptions {
  format: 'jpg' | 'png'
  quality: number
}

// see if filestack uploaded image number matters after month passed

export const downloadCanvasAsImage = (downloadOptions: DownloadOptions) => {
  // const { format, quality } = downloadOptions

  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi

    if (fabricJSEditor && itemRef.current) {
      const { canvas } = fabricJSEditor
      itemRef.current.onclick = () => {
        const anchor = document.createElement('a')

        anchor.href = canvas.toDataURL('image/png')
        anchor.download = 'IMAGE.PNG'
        anchor.click()
      }
    }
  }, [fabricJSApi])

  return itemRef
}

export const useLoadCanvasProject = () => {
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')

  useEffect(() => {
    console.log({ currentProject, fabricJSApi })

    const { fabricJSEditor } = fabricJSApi
    if (fabricJSEditor) {
      const { canvas } = fabricJSEditor
      let serialization

      if (currentProject?.Serialization?.length > 25) {
        const canvasData = extractUrlParams()
        loadCanvasState(canvasData, canvas)
        // serialization = currentProject.Serialization
      } else {
        const canvasData = extractUrlParams()
        loadCanvasState(canvasData, canvas)
      }
      if (serialization > 25) {
        // canvas.loadFromJSON(serialization)
        const canvasData = extractUrlParams()
        loadCanvasState(canvasData, canvas)
      }
    }
  }, [fabricJSApi])
}

function extractCanvasData(fabricJSEditor: any): any[] {
  const { canvas } = fabricJSEditor
  const canvasDataArr = []

  if (!canvas) return false
  canvasDataArr.push({ key: 'Height', value: canvas.height })
  canvasDataArr.push({ key: 'Width', value: canvas.width })
  canvasDataArr.push({
    key: 'BackgroundColor',
    value: canvas.backgroundColor || '#fff',
  })
  canvasDataArr.push({
    key: 'Serialization',
    value: JSON.stringify(canvas.toJSON('image/png')),
  })
  console.log({ canvasDataArr }, '1')

  return canvasDataArr
}

export function extractUrlParams() {
  const urlParams = new URLSearchParams(document.location.href.split('?')[1])
  const Serialization = urlParams.get('Serialization')
  const Width = urlParams.get('Width') - 0
  const Height = urlParams.get('Height') - 0

  return { Serialization, Width, Height }
}

interface CanvasData {
  Width: string
  Height: string
  Serialization: string
}
function loadCanvasState(canvasData: CanvasData, canvas: any) {
  const { Width, Height, Serialization } = canvasData
  canvas.width = Width
  canvas.height = Height
  canvas.loadFromJSON(Serialization)
}
