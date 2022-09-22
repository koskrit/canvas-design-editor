import { Button, VStack } from '@chakra-ui/react'
import { AiFillCiCircle, AiOutlineFileText } from 'react-icons/ai'
import { BsFillMouse3Fill, BsPencil } from 'react-icons/bs'

import { setCanvasModeDrawing } from 'src/plugins/fabricJSCanvas'

const CanvasSideMenu = () => {
  const itemRef = setCanvasModeDrawing(true)
  return (
    <VStack pt={1} background={'orange'} minH="500px" minW="50px">
      <Button background={'blue'} size="sm">
        <AiOutlineFileText color="white" />
      </Button>
      <Button background={'blue'} size="sm">
        <BsFillMouse3Fill color="white" />
      </Button>
      <Button background={'blue'} size="sm">
        <AiFillCiCircle color="white" />
      </Button>
      <Button ref={itemRef} background={'blue'} size="sm">
        <BsPencil color="white" />
      </Button>
    </VStack>
  )
}

export default CanvasSideMenu
