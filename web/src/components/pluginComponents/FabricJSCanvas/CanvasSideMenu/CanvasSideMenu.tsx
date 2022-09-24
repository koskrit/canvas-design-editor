import { Button, VStack } from '@chakra-ui/react'
import { BiText } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'
import { FaMousePointer } from 'react-icons/fa'

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
    <VStack pt={1} background={'orange'} minH="506px" minW="50px">
      <Button ref={textRef} background={'blue'} size="sm">
        <BiText color="white" />
      </Button>
      <Button ref={selectRef} background={'blue'} size="sm">
        <FaMousePointer color="white" />
      </Button>
      <CanvasSideMenuShapes />
      <Button ref={drawingRef} background={'blue'} size="sm">
        <BsPencil color="white" />
      </Button>
    </VStack>
  )
}

export default CanvasSideMenu
