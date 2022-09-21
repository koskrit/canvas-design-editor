import { Button, HStack } from '@chakra-ui/react'
import { AiFillAccountBook } from 'react-icons/ai'

const CanvasTopMenu = () => {
  return (
    <HStack w="full" p={2} background={'lightcoral'}>
      <Button>
        <AiFillAccountBook />
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
