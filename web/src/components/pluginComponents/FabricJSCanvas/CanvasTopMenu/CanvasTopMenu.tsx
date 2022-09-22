import { Button, HStack } from '@chakra-ui/react'
import { AiFillAccountBook } from 'react-icons/ai'

import { setCanvasBackgroundColor } from 'src/plugins/fabricJSCanvas'

const CanvasTopMenu = () => {
  const itemRef = setCanvasBackgroundColor()

  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <Button>
        <input ref={itemRef} type={'color'} />
      </Button>
      <Button>
        <AiFillAccountBook />
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
