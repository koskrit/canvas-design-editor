import { Center, Container, chakra, Box } from '@chakra-ui/react'
import { useFabricJSEditor, FabricJSCanvas } from 'fabricjs-react'

import useGlobalState from 'src/contexts/initialization'

const FabricCanvas = () => {
  const { onReady } = useFabricJSEditor()
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')

  console.log({ currentProject })

  return (
    <Box
      background={'gray'}
      p={0}
      w={currentProject.Width || '1000px'}
      h={currentProject.Height || '500px'}
    >
      <FabricJSCanvas onReady={onReady} />
    </Box>
  )
}

export default FabricCanvas
