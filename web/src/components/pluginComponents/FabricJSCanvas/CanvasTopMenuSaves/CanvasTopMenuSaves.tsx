import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  VStack,
} from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BsDownload, BsSave } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

import { downloadCanvasAsImage } from 'src/plugins/fabricJSCanvas'
import useDeleteProject from 'src/workflows/useDeleteProject'
import useSaveProject from 'src/workflows/useSaveProject'

const CanvasTopMenuSaves = () => {
  const saveProjectRef = useSaveProject()
  const downloadImageRef = downloadCanvasAsImage()
  const deleteProject = useDeleteProject()

  return (
    <Popover>
      <PopoverTrigger>
        <Button background={'white'} border="solid 1px" w={'135px'}>
          <GrProjects />
          &nbsp; Options
        </Button>
      </PopoverTrigger>
      <PopoverContent w={'auto'}>
        <PopoverArrow />
        <PopoverHeader p={1}>
          <VStack>
            <Button w={'full'} m="0" ref={downloadImageRef}>
              <BsDownload />
              &nbsp; Download
            </Button>
            <Button
              w={'full'}
              m="0"
              background={'tomato'}
              textAlign="left"
              onClick={() => deleteProject(null, 'home')}
            >
              <AiOutlineDelete />
              &nbsp; Delete
            </Button>
            <Button
              w={'full'}
              m="0"
              background={'lightgreen'}
              ref={saveProjectRef}
            >
              <BsSave />
              &nbsp; Save
            </Button>
          </VStack>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}

export default CanvasTopMenuSaves
