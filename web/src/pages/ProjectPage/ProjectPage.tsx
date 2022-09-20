import { useEffect } from 'react'

import { Button, Flex, HStack, VStack } from '@chakra-ui/react'
import { AiFillCiCircle, AiOutlineFileText } from 'react-icons/ai'
import { BsFillMouse3Fill, BsPencil } from 'react-icons/bs'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import { FabricCanvas } from 'src/plugins/fabricJSCanvas'
import { FilestackWidget } from 'src/plugins/filestackImage'

const ProjectPage = () => {
  const { currentUser } = useAuth()
  useEffect(() => {
    console.log({ currentUser })
  }, [])
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
            <FilestackWidget />
          </VStack>
        </HStack>
        <FabricCanvas />
      </Flex>
    </>
  )
}

export default ProjectPage
