import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { TiDelete } from 'react-icons/ti'

import useDeleteProject from 'src/workflows/useDeleteProject'

interface Props {
  projectId: string
  projectName: string
}

const QuestionModal = (Props: Props) => {
  const { projectId, projectName } = Props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const deleteProject = useDeleteProject()

  console.log({ projectId, projectName })

  return (
    <>
      <Button
        onClick={onOpen}
        ml="-40px"
        borderRadius={'100px'}
        background="tomato"
        p={1}
        key={projectId}
      >
        <TiDelete fontSize={'30px'} color="white" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Project "{projectName}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete project "{projectName}"
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="pink"
              mr={3}
              onClick={() => {
                deleteProject(projectId, 'home')
                onClose()
              }}
            >
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default QuestionModal
