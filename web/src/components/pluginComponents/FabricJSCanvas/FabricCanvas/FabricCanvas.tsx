import {
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
  useState,
} from 'react'

import { Center, Container, chakra, Box } from '@chakra-ui/react'
import { useFabricJSEditor, FabricJSCanvas } from 'fabricjs-react'

import useGlobalState from 'src/contexts/initialization'
import {
  extractUrlParams,
  fabric,
  useLoadCanvasProject,
} from 'src/plugins/fabricJSCanvas'

const FabricCanvas = () => {
  const { onReady } = useSetupCanvas()

  return (
    <Center
      p={0}
      w={'full'}
      h={'500px'}
      background="lightcoral"
      overflowY={'auto'}
      overflowX="auto"
      border={'solid 2px orange'}
    >
      <FabricJSCanvas className="main-canvas" onReady={onReady} />
    </Center>
  )
}

export function useSetupCanvas() {
  const { onReady, editor } = useFabricJSEditor()
  const [fabricJSApi, setFabricJSAPi] = useGlobalState('fabricJSApi')
  const [shouldRender, setShouldRender] = useState(true)

  useSetCanvasLayout()
  useLoadCanvasProject()

  useEffect(() => {
    if (shouldRender && editor) {
      setFabricJSAPi({ fabricJSEditor: editor })
      setShouldRender(false)
      editor.canvas.preserveObjectStacking = true
    }
  }, [editor])

  return { onReady, editor }
}

const useSetCanvasLayout = () => {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  const { Height, Width } = extractUrlParams()

  useLayoutEffect(() => {
    console.log({ currentProject, Height, Width })

    const canvas = document.querySelector('.main-canvas')

    canvas.style.height = currentProject?.Height
      ? `${currentProject?.Height}px`
      : `${Height}px` || '500px'
    canvas.style.width = currentProject?.Width
      ? `${currentProject?.Width}px`
      : `${Width}px` || '1000px'

    canvas.style.background = currentProject.BackgroundColor || 'white'
  }, [])
}

export default FabricCanvas
