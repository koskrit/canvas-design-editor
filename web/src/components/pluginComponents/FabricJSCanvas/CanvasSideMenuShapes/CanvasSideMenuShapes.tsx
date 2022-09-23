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
import { BiShapeCircle } from 'react-icons/bi'
import { RiShape2Fill } from 'react-icons/ri'
import { TbLine } from 'react-icons/tb'

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
        return <BiShapeCircle color="white" />
      case 'Rect':
        return <RiShape2Fill color="white" />
      case 'Line':
        return <TbLine color="white" />
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
            <BiShapeCircle color="white" />
          </Button>
          <Button
            ref={rectangleRef}
            onClick={() => setShapeHandler('Rect')}
            background={'blue'}
            size="sm"
            m={1}
          >
            <RiShape2Fill color="white" />
          </Button>
          <Button
            ref={lineRef}
            onClick={() => setShapeHandler('Line')}
            background={'blue'}
            size="sm"
            m={1}
          >
            <TbLine color="white" />
          </Button>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export default CanvasSideMenuShapes
