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

const CreateProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Input />
            <Text>Dimensions</Text>
            <HStack>
              <Input placeholder="Height" />
              <Input placeholder="Width" />
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button variant={'ghost'} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" mr={3}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProjectModal
