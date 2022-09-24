import { Button, HStack } from '@chakra-ui/react'
import { AiFillMinusSquare, AiOutlineWeiboSquare } from 'react-icons/ai'
import { BiDuplicate } from 'react-icons/bi'
import { BsBorderOuter, BsBack, BsFront } from 'react-icons/bs'
import { TiDelete } from 'react-icons/ti'

import {
  deleteCanvasSelection,
  setCanvasBackgroundColor,
  setSelectionAttribute,
  useDuplicateCanvasObject,
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
  const duplicateRef = useDuplicateCanvasObject()

  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <HStack border={'solid 1px'} background="white" p="1">
        <AiOutlineWeiboSquare />
        <input
          ref={setBackgroundColorRef}
          type={'color'}
          width={'24px !important'}
        />
      </HStack>

      <HStack p="1" ref={strokeColorRef} border="solid 1px" background="white">
        <BsBorderOuter />
        <input type={'color'} width={'24px !important'} />
      </HStack>
      <HStack p="1" ref={fillColorRef} border={'solid 1px'} background="white">
        <AiFillMinusSquare />
        <input type={'color'} width={'24px !important'} />
      </HStack>
      <Button
        h={'39px'}
        background={'white'}
        border="solid 1px"
        ref={bringObjectForwardRef}
      >
        <BsFront />
      </Button>
      <Button
        h={'39px'}
        background={'white'}
        border="solid 1px"
        ref={sendObjectBackwardRef}
      >
        <BsBack />
      </Button>
      <Button
        h={'39px'}
        background={'white'}
        border="solid 1px"
        ref={duplicateRef}
      >
        <BiDuplicate />
      </Button>
      <CanvasTopMenuOpacity />
      <Button
        h={'39px'}
        ref={deleteSelectionRef}
        background={'white'}
        border="solid 1px"
      >
        <TiDelete />
      </Button>
    </HStack>
  )
}

export default CanvasTopMenu
