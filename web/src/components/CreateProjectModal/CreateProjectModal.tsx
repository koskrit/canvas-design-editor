import { useRef } from 'react'

import {
  Button,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import useCreateNewProject from 'src/workflows/useCreateNewProject'

const CreateProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const heightRef = useRef()
  const widthRef = useRef()
  const nameRef = useRef()

  const createNewProject = useCreateNewProject()

  // try to find a way to maximize simplicity and cleaness for workflow hooks

  // try the createNewProject workflow
  const handleProjectSubmit = () => {
    onClose()
    createNewProject({
      Name: nameRef.current.value,
      Width: widthRef.current.value,
      Height: heightRef.current.value,
      Id: '',
      userId: '',
      PreviewImage: '',
      BackgroundColor: '',
      Slug: '',
      Serialization: '',
    })
  }

  return (
    <>
      <Button onClick={onOpen}>Create A Project</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create A Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Project Name</Text>
            <Input ref={nameRef} />
            <Text>Dimensions</Text>
            <HStack>
              <Input placeholder="Height" ref={heightRef} />
              <Input placeholder="Width" ref={widthRef} />
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button variant={'ghost'} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3} onClick={handleProjectSubmit}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProjectModal
