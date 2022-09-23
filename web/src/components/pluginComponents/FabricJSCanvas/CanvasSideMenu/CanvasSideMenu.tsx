import { Button, VStack } from '@chakra-ui/react'
import { AiFillCiCircle, AiOutlineFileText } from 'react-icons/ai'
import { BsFillMouse3Fill, BsPencil } from 'react-icons/bs'

import {
  setCanvasAddShapeMode,
  setCanvasModeDrawing,
  setCanvasModeSelection,
} from 'src/plugins/fabricJSCanvas'

import CanvasSideMenuShapes from '../CanvasSideMenuShapes/CanvasSideMenuShapes'

const CanvasSideMenu = () => {
  const drawingRef = setCanvasModeDrawing(true)
  const selectRef = setCanvasModeSelection()
  const textRef = setCanvasAddShapeMode('IText')

  return (
    <VStack pt={1} background={'orange'} minH="500px" minW="50px">
      <Button ref={textRef} background={'blue'} size="sm">
        <AiOutlineFileText color="white" />
      </Button>
      <Button ref={selectRef} background={'blue'} size="sm">
        <BsFillMouse3Fill color="white" />
      </Button>
      <CanvasSideMenuShapes />
      <Button ref={drawingRef} background={'blue'} size="sm">
        <BsPencil color="white" />
      </Button>
    </VStack>
  )
}

export default CanvasSideMenu
