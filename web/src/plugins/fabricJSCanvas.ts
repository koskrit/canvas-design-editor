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
        fabricJSEditor.zoomIn()
        fabricJSEditor.zoomOut()
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
    }

    itemRef.current.onclick = (e) => setCanvasModeDrawingFunc(enabled)
  }, [fabricJSApi])

  return itemRef
}

type Shape = 'Rectangle' | 'Circle' | 'Line'

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
    }

    itemRef.current.onclick = (e) => setCanvasModeSelectionFunc()
  }, [fabricJSApi])

  return itemRef
}
