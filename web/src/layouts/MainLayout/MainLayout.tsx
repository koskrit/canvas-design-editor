import React, { useEffect } from 'react'

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
  Center,
} from '@chakra-ui/react'
import netlifyIdentityWidget from 'netlify-identity-widget'
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineInbox,
  AiFillAlipayCircle,
} from 'react-icons/ai'
import { BsFillCameraVideoFill } from 'react-icons/bs'

import { useAuth } from '@redwoodjs/auth'

import CreateProjectModal from 'src/components/CreateProjectModal/CreateProjectModal'
import useNetlifyWidget from 'src/plugins/netlifyAuth'

type MainLayoutProps = {
  children?: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  const netlifyIdentityWidget = useNetlifyWidget()

  useEffect(() => {
    netlifyIdentityWidget.open('login')
  }, [])

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<AiOutlineInbox />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillCameraVideoFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <AiFillAlipayCircle />
              <VisuallyHidden>Canvas Design Editor</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<AiOutlineInbox />}
                size="sm"
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                leftIcon={<BsFillCameraVideoFill />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          >
            <CreateProjectModal />
            <Center>
              <Avatar
                size="sm"
                name="Dan Abrahmov"
                src="public/defaults/user-icon.png"
              />
            </Center>
          </HStack>
        </Flex>
      </chakra.header>
      {children}
    </React.Fragment>
  )
}
