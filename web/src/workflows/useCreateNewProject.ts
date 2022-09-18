import { useApolloClient } from '@apollo/client'
import { v4 as uuv4 } from 'uuid'

import type { Project } from 'src/contexts/currentProject'
import useGlobalState from 'src/contexts/initialization'

const generateNewProjectString = (projectData: Project) => `

mutation {
  createProject(input:{
    Id:"${projectData.Id}"
    userId:"${projectData.userId}"
    Name:"${projectData.Name}"
    PreviewImage:"${projectData.PreviewImage}"
    Height:"${projectData.Height}"
    Width:"${projectData.Width}"
    BackgroundColor:"${projectData.BackgroundColor}"
    Slug:"${projectData.Id}"
    Serialization: "${projectData.Serialization}"

  }){
  userId
  Id
  Creator
  userId
  Name
  PreviewImage
  Height
  Width
  BackgroundColor
  Slug
  Serialization
}
}

`

export default function useCreateNewProject(projectData: Project) {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  const apolloClient = useApolloClient()

  projectData.Id = uuv4()
  setCurrentProject(projectData)

  apolloClient.mutate({
    mutation: generateNewProjectString(projectData),
  })
}
