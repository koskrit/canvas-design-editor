import { useEffect } from 'react'

import { Button, Flex, HStack, VStack } from '@chakra-ui/react'
import {
  AiFillCiCircle,
  AiFillCodepenCircle,
  AiOutlineFileText,
} from 'react-icons/ai'
import { BsFillMouse3Fill, BsPencil } from 'react-icons/bs'

import { MetaTags } from '@redwoodjs/web'

import { CloudinaryWidget } from 'src/plugins/cloudinaryImage'
import { FabricCanvas } from 'src/plugins/fabricJSCanvas'

const ProjectPage = () => {
  useEffect(() => {}, [])
  return (
    <>
      <MetaTags title="Project" description="Project page" />
      <Flex>
        <HStack background={'blue'}>
          <VStack background={'orange'} minH="500px" minW="50px">
            <Button background={'blue'} size="sm">
              <AiOutlineFileText color="white" />
            </Button>
            <Button background={'blue'} size="sm">
              <BsFillMouse3Fill color="white" />
            </Button>
            <Button background={'blue'} size="sm">
              <AiFillCiCircle color="white" />
            </Button>
            <Button background={'blue'} size="sm">
              <BsPencil color="white" />
            </Button>
          </VStack>
          <VStack background={'green'} h="500px" minW={'200px'}>
            <Button w={'full'}>Upload Media</Button>
            <CloudinaryWidget />
          </VStack>
        </HStack>
        <FabricCanvas />
      </Flex>
    </>
  )
}

export default ProjectPage
