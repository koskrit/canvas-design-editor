import { useState, useRef, useEffect } from 'react'

import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react'
import { CgDropOpacity } from 'react-icons/cg'

import {
  getCanvasObject,
  useSetCanvasActiveOpacity,
} from 'src/plugins/fabricJSCanvas'

const CanvasTopMenuOpacity = () => {
  const [sliderValue, setSliderValue] = useState(100)
  const canvasRef = getCanvasObject()

  const opacityToggleHandler = () => {
    const active = canvasRef.current?.getActiveObject()

    active && setSliderValue(active.opacity * 100)
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          onClick={opacityToggleHandler}
          background={'white'}
          border="solid 1px"
        >
          <CgDropOpacity />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'auto'}>
        <PopoverArrow />
        <PopoverHeader p={0}>
          <OpacitySlider
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

function OpacitySlider({ sliderValue, setSliderValue }) {
  useSetCanvasActiveOpacity(sliderValue)

  return (
    <Box p={2} w={'100px'}>
      <Slider
        aria-label="slider-ex-6"
        onChange={(value) => setSliderValue(value)}
        defaultValue={100}
      >
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack w={sliderValue + '% !important'} />
        </SliderTrack>
        <SliderThumb left={sliderValue + '% !important'} />
      </Slider>
    </Box>
  )
}

export default CanvasTopMenuOpacity
