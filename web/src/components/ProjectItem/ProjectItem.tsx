import { Badge, Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'

import { navigate, routes } from '@redwoodjs/router'

import type { Project } from 'src/contexts/currentProject'
import useGlobalState from 'src/contexts/initialization'

interface Props {
  projectInfo: Project
}

const ProjectItem = ({ projectInfo }: Props) => {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')

  const projectSelectHandler = () => {
    setCurrentProject(projectInfo)
    navigate(routes.project({ id: projectInfo.Id }))
  }

  return (
    <VStack m={5} p={2} background="lightblue" w={'3xs'} h={'auto'}>
      <Image
        src={projectInfo.PreviewImage || 'defaults/preview-project.png'}
        alt={projectInfo.Name}
      />
      <Text>{projectInfo.Name}</Text>
    </VStack>
  )
}

export default ProjectItem
