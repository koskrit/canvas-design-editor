import { Button, HStack } from '@chakra-ui/react'
import { AiFillAccountBook, AiFillDelete } from 'react-icons/ai'

import {
  deleteCanvasSelection,
  setCanvasBackgroundColor,
} from 'src/plugins/fabricJSCanvas'

const CanvasTopMenu = () => {
  const setBackgroundColorRef = setCanvasBackgroundColor()
  const deleteSelectionRef = deleteCanvasSelection()

  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <Button>
        <input ref={setBackgroundColorRef} type={'color'} />
      </Button>
      <Button ref={deleteSelectionRef}>
        <AiFillDelete />
      </Button>
      <Button>
        <AiFillAccountBook />
      </Button>
      <Button>
        <AiFillAccountBook />
      </Button>
    </HStack>
  )
}

export default CanvasTopMenu
