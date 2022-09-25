import { Button, HStack } from '@chakra-ui/react'
import { AiFillMinusSquare, AiOutlineWeiboSquare } from 'react-icons/ai'
import { BiDuplicate, BiSave } from 'react-icons/bi'
import {
  BsBorderOuter,
  BsBack,
  BsFront,
  BsDownload,
  BsSave,
} from 'react-icons/bs'
import { TbFlipVertical, TbFlipHorizontal } from 'react-icons/tb'
import { TiDelete } from 'react-icons/ti'

import {
  deleteCanvasSelection,
  downloadCanvasAsImage,
  setCanvasBackgroundColor,
  setSelectionAttribute,
  useDuplicateCanvasObject,
  useSetCanvasSelectionObjectLayer,
} from 'src/plugins/fabricJSCanvas'
import useSaveProject from 'src/workflows/useSaveProject'

import CanvasTopMenuOpacity from '../CanvasTopMenuOpacity/CanvasTopMenuOpacity'

const CanvasTopMenu = () => {
  const setBackgroundColorRef = setCanvasBackgroundColor()
  const deleteSelectionRef = deleteCanvasSelection()
  const fillColorRef = setSelectionAttribute({
    attribute: 'fill',
    isInput: true,
  })
  const strokeColorRef = setSelectionAttribute({
    attribute: 'stroke',
    isInput: true,
  })

  const flipX = setSelectionAttribute({
    attribute: 'flipX',
    isInput: false,
    isToggle: true,
  })
  const flipY = setSelectionAttribute({
    attribute: 'flipY',
    isInput: false,
    isToggle: true,
  })

  const bringObjectForwardRef = useSetCanvasSelectionObjectLayer('bringForward')
  const sendObjectBackwardRef =
    useSetCanvasSelectionObjectLayer('sendBackwards')
  const duplicateRef = useDuplicateCanvasObject()

  const saveProjectRef = useSaveProject()
  const downloadImageRef = downloadCanvasAsImage()

  return (
    <HStack
      w="full"
      p={2}
      pl="4"
      pr={'4'}
      background={'lightcoral'}
      justifyContent={'space-between'}
    >
      <HStack>
        <HStack border={'solid 1px'} background="white" p="1">
          <AiOutlineWeiboSquare />
          <input
            ref={setBackgroundColorRef}
            type={'color'}
            width={'24px !important'}
          />
        </HStack>

        <HStack
          p="1"
          ref={strokeColorRef}
          border="solid 1px"
          background="white"
        >
          <BsBorderOuter />
          <input type={'color'} width={'24px !important'} />
        </HStack>
        <HStack
          p="1"
          ref={fillColorRef}
          border={'solid 1px'}
          background="white"
        >
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
        <Button h={'39px'} ref={flipX} background={'white'} border="solid 1px">
          <TbFlipHorizontal />
        </Button>
        <Button h={'39px'} ref={flipY} background={'white'} border="solid 1px">
          <TbFlipVertical />
        </Button>
        <Button
          h={'39px'}
          ref={deleteSelectionRef}
          background={'white'}
          border="solid 1px"
        >
          <TiDelete />
        </Button>
      </HStack>
      <HStack>
        <Button ref={downloadImageRef}>
          <BsDownload />
          &nbsp; Download
        </Button>
        <Button background={'lightgreen'} ref={saveProjectRef}>
          <BsSave />
          &nbsp; Save
        </Button>
      </HStack>
    </HStack>
  )
}

export default CanvasTopMenu
