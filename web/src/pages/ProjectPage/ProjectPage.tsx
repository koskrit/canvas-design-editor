import { useEffect } from 'react'

import { Button, Flex, HStack, VStack } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'

import UploadedImagesCell from 'src/components/cells/UploadedImagesCell'
import CanvasSideMenu from 'src/components/pluginComponents/FabricJSCanvas/CanvasSideMenu/CanvasSideMenu'
import CanvasTopMenu from 'src/components/pluginComponents/FabricJSCanvas/CanvasTopMenu/CanvasTopMenu'
import useGlobalState from 'src/contexts/initialization'
import { FabricCanvas } from 'src/plugins/fabricJSCanvas'
import { FilestackWidget } from 'src/plugins/filestackImage'

const ProjectPage = () => {
  const { currentUser } = useAuth()
  const [uploadedImagesRender, setUploadedImagesRender] = useGlobalState(
    'uploadedImagesRender'
  )
  console.log(uploadedImagesRender)

  useEffect(() => {
    console.log({ currentUser })
  }, [])
  return (
    <>
      <MetaTags title="Project" description="Project page" />
      <Flex>
        <HStack background={'blue'}>
          <CanvasSideMenu />
          <VStack background={'green'} h="500px" minW={'200px'}>
            <FilestackWidget />
            {uploadedImagesRender && (
              <UploadedImagesCell
                userId={currentUser.sub}
                type={'Image'}
                uploadedImagesRender={uploadedImagesRender}
              />
            )}
          </VStack>
        </HStack>
        <VStack w="full" background={'gray'}>
          <CanvasTopMenu />
          <FabricCanvas />
        </VStack>
      </Flex>
    </>
  )
}

export default ProjectPage
