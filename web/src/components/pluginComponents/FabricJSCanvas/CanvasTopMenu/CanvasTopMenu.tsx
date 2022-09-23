import { Button, HStack } from '@chakra-ui/react'
import {
  AiFillAccountBook,
  AiFillDelete,
  AiOutlineMinusSquare,
} from 'react-icons/ai'
import { BsSquareFill } from 'react-icons/bs'
import { CgShapeSquare } from 'react-icons/cg'

import {
  deleteCanvasSelection,
  setCanvasBackgroundColor,
  setSelectionAttribute,
} from 'src/plugins/fabricJSCanvas'

const CanvasTopMenu = () => {
  const setBackgroundColorRef = setCanvasBackgroundColor()
  const deleteSelectionRef = deleteCanvasSelection()
  const fillColorRef = setSelectionAttribute('fill')
  const strokeColorRef = setSelectionAttribute('stroke')

  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <Button>
        <input ref={setBackgroundColorRef} type={'color'} />
      </Button>
      <Button ref={deleteSelectionRef}>
        <AiFillDelete />
      </Button>
      <HStack
        p="1"
        ref={strokeColorRef}
        border={'solid 1px'}
        background="white"
      >
        <CgShapeSquare />
        <input type={'color'} />
      </HStack>
      <HStack p="1" ref={fillColorRef} border={'solid 1px'} background="white">
        <BsSquareFill />
        <input type={'color'} />
      </HStack>
      <Button>
        <AiFillAccountBook />
      </Button>
    </HStack>
  )
}

export default CanvasTopMenu
