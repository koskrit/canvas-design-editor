import {
  Button,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'
import { AiFillCiCircle, AiFillIeSquare, AiOutlineLine } from 'react-icons/ai'

import { addShape } from 'src/plugins/fabricJSCanvas'

const CanvasSideMenuShapes = () => {
  const circleRef = addShape('Circle')
  const rectangleRef = addShape('Rectangle')
  const lineRef = addShape('Line')

  return (
    <Popover>
      <PopoverTrigger>
        <Button background={'blue'} size="sm">
          <AiFillCiCircle color="white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'auto'}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader p={0}>
          <Button ref={circleRef} background={'blue'} size="sm" m={1}>
            <AiFillCiCircle color="white" />
          </Button>
          <Button ref={rectangleRef} background={'blue'} size="sm" m={1}>
            <AiFillIeSquare color="white" />
          </Button>
          <Button ref={lineRef} background={'blue'} size="sm" m={1}>
            <AiOutlineLine color="white" />
          </Button>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export default CanvasSideMenuShapes
