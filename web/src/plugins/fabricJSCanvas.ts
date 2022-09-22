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
    }

    itemRef.current.onclick = () => addImageFunc(ImageUrl)
  }, [fabricJSApi])

  return itemRef
}
