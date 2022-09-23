import { useState } from 'react'

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

import { addShape, setCanvasAddShapeMode } from 'src/plugins/fabricJSCanvas'

type Shape = 'Circle' | 'Rect' | 'Line'

const CanvasSideMenuShapes = () => {
  const circleRef = setCanvasAddShapeMode('Circle')
  const rectangleRef = setCanvasAddShapeMode('Rect')
  const lineRef = setCanvasAddShapeMode('Line')

  const [parentShape, setParentShape] = useState<Shape>('Circle')

  const getParentShapeIcon = () => {
    switch (parentShape) {
      case 'Circle':
        return <AiFillCiCircle color="white" />
      case 'Rect':
        return <AiFillIeSquare color="white" />
      case 'Line':
        return <AiOutlineLine color="white" />
    }
  }
  const setShapeHandler = (shape: Shape) => {
    setParentShape(shape)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button background={'blue'} size="sm">
          {getParentShapeIcon()}
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'auto'}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader p={0}>
          <Button
            ref={circleRef}
            onClick={() => setShapeHandler('Circle')}
            background={'blue'}
            size="sm"
            m={1}
          >
            <AiFillCiCircle color="white" />
          </Button>
          <Button
            ref={rectangleRef}
            onClick={() => setShapeHandler('Rect')}
            background={'blue'}
            size="sm"
            m={1}
          >
            <AiFillIeSquare color="white" />
          </Button>
          <Button
            ref={lineRef}
            onClick={() => setShapeHandler('Line')}
            background={'blue'}
            size="sm"
            m={1}
          >
            <AiOutlineLine color="white" />
          </Button>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export default CanvasSideMenuShapes
