import { useEffect, useLayoutEffect, useRef } from 'react'

import { Center, Container, chakra, Box } from '@chakra-ui/react'
import { useFabricJSEditor, FabricJSCanvas } from 'fabricjs-react'

import useGlobalState from 'src/contexts/initialization'

const FabricCanvas = () => {
  const { onReady } = useFabricJSEditor()
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  useLayoutEffect(() => {
    const canvas = document.querySelector('canvas')

    canvas.height = currentProject?.Height || 1000
    canvas.width = currentProject?.Height || 500
    canvas.style.background = currentProject.BackgroundColor || 'white'
  }, [])
  console.log({ currentProject })

  return (
    <Center
      background={'gray'}
      p={0}
      w={'full'}
      h={'500px'}
      background="lightblue"
      overflowY={'auto'}
      overflowX="auto"
      border={'solid 2px orange'}
    >
      <FabricJSCanvas onReady={onReady} />
    </Center>
  )
}

export default FabricCanvas
