import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'
import { v4 as uuv4 } from 'uuid'

import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import type { Project } from 'src/contexts/currentProject'
import useGlobalState from 'src/contexts/initialization'

const graphQLString = gql`
  mutation (
    $Id: String!
    $userId: String!
    $Name: String!
    $PreviewImage: String!
    $Height: Int!
    $Width: Int!
    $BackgroundColor: String!
    $Slug: String!
    $Serialization: String!
  ) {
    createProject(
      input: {
        Id: $Id
        userId: $userId
        Name: $Name
        PreviewImage: $PreviewImage
        Height: $Height
        Width: $Width
        BackgroundColor: $BackgroundColor
        Slug: $Slug
        Serialization: $Serialization
      }
    ) {
      Id
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

export default function useCreateNewProject() {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  const { currentUser } = useAuth()

  const apolloClient = useApolloClient()

  return async (projectData: Project) => {
    projectData = fillEmptyFields(projectData)
    setCurrentProject(projectData)

    await apolloClient.mutate({
      mutation: graphQLString,
      variables: { ...projectData },
    })

    navigate(
      routes.project({
        Id: projectData.Id,
        Name: projectData.Name,
        Slug: projectData.Id,
      })
    )
  }

  function fillEmptyFields(projectData: Project) {
    projectData.Id = projectData.Id || uuv4()
    projectData.Name = projectData.Name || `project-${projectData.Id}`
    projectData.Slug = projectData.Slug || projectData.Id
    projectData.userId = projectData.userId || currentUser.sub
    projectData.BackgroundColor = projectData.BackgroundColor || '#000'
    projectData.Height = projectData.Height - 0 || 1000
    projectData.Width = projectData.Width - 0 || 1000
    projectData.Serialization = projectData.Serialization || 'serialization'

    return projectData
  }
}
