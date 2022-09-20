import { gql, useApolloClient } from '@apollo/client'

import { useAuth } from '@redwoodjs/auth'

import useGlobalState from 'src/contexts/initialization'

const graphQLString = gql`
  mutation AddImage($ImageUrl: String!, $userId: String!, $ProjectId: String!) {
    createImage(
      input: { ImageUrl: $ImageUrl, userId: $userId, ProjectId: $ProjectId }
    ) {
      Id
      userId
      ImageUrl
      CreatedAt
      ProjectId
    }
  }
`

export interface Image {
  Id?: string
  userId: string
  ImageUrl: string
  CreatedAt?: Date
  ProjectId: string
}

export default function useSaveImageToDatabase() {
  const { currentUser } = useAuth()
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')

  const [uploadedImagesRender, setUploadedImagesRender] = useGlobalState(
    'uploadedImagesRender'
  )

  const apolloClient = useApolloClient()

  return async (imageData: Image) => {
    imageData = fillEmptyFields(imageData)

    await apolloClient.mutate({
      mutation: graphQLString,
      variables: { ...imageData },
    })
    setUploadedImagesRender(uploadedImagesRender + 1)
  }

  function fillEmptyFields(imageData: Image) {
    const defaultImageUrl =
      'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'

    const params = new URL(document?.location).searchParams

    imageData.userId = imageData.userId || currentUser.sub
    imageData.ImageUrl = imageData.ImageUrl || defaultImageUrl
    imageData.ProjectId =
      imageData.ProjectId || currentProject.Id || params.get('id')

    return imageData
  }
}
