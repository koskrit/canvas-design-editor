import { Button, HStack } from '@chakra-ui/react'
import { AiFillAccountBook, AiTwotonePicture } from 'react-icons/ai'
import { BiLayerPlus, BiLayerMinus } from 'react-icons/bi'
import { BsSquareFill } from 'react-icons/bs'
import { CgShapeSquare, CgDropOpacity } from 'react-icons/cg'
import { TiDelete } from 'react-icons/ti'

import {
  deleteCanvasSelection,
  setCanvasBackgroundColor,
  setSelectionAttribute,
  useSetCanvasSelectionObjectLayer,
} from 'src/plugins/fabricJSCanvas'

import CanvasTopMenuOpacity from '../CanvasTopMenuOpacity/CanvasTopMenuOpacity'

const CanvasTopMenu = () => {
  const setBackgroundColorRef = setCanvasBackgroundColor()
  const deleteSelectionRef = deleteCanvasSelection()
  const fillColorRef = setSelectionAttribute('fill')
  const strokeColorRef = setSelectionAttribute('stroke')
  const bringObjectForwardRef = useSetCanvasSelectionObjectLayer('bringForward')
  const sendObjectBackwardRef =
    useSetCanvasSelectionObjectLayer('sendBackwards')

  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <HStack border={'solid 1px'} background="white" p="1">
        <AiTwotonePicture />
        <input ref={setBackgroundColorRef} type={'color'} />
      </HStack>
      <Button ref={deleteSelectionRef} background={'white'} border="solid 1px">
        <TiDelete />
      </Button>
      <HStack p="1" ref={strokeColorRef} border="solid 1px" background="white">
        <CgShapeSquare />
        <input type={'color'} />
      </HStack>
      <HStack p="1" ref={fillColorRef} border={'solid 1px'} background="white">
        <BsSquareFill />
        <input type={'color'} />
      </HStack>
      <Button
        background={'white'}
        border="solid 1px"
        ref={bringObjectForwardRef}
      >
        <BiLayerPlus />
      </Button>
      <Button
        background={'white'}
        border="solid 1px"
        ref={sendObjectBackwardRef}
      >
        <BiLayerMinus />
      </Button>

      <CanvasTopMenuOpacity />
    </HStack>
  )
}

export default CanvasTopMenu
