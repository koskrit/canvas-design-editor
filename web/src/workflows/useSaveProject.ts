import { useEffect, useRef } from 'react'

import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

import useGlobalState from 'src/contexts/initialization'

import { useSaveCanvasToState } from './../plugins/fabricJSCanvas'

const graphQLString = gql`
  mutation UpdateProject(
    $Id: String!
    $userId: String!
    $Name: String!
    $PreviewImage: String!
    $Height: Int!
    $Width: Int!
    $Serialization: String!
    $BackgroundColor: String!
    $Slug: String!
  ) {
    updateProject(
      id: $Id
      input: {
        Id: $Id
        userId: $userId
        Name: $Name
        PreviewImage: $PreviewImage
        Height: $Height
        Width: $Width
        Serialization: $Serialization
        BackgroundColor: $BackgroundColor
        Slug: $Slug
      }
    ) {
      Id
      Name
    }
  }
`
// add the update database functionality

const useSaveProject = () => {
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  const [fabricJSApi, setFabricJSApi] = useGlobalState('fabricJSApi')
  const saveCanvasToState = useSaveCanvasToState()
  const apolloClient = useApolloClient()

  const itemRef = useRef()

  useEffect(() => {
    const { fabricJSEditor } = fabricJSApi
    if (itemRef.current && fabricJSEditor) {
      itemRef.current.onclick = async () => {
        const projectData = await saveCanvasToState()

        const res = await apolloClient.mutate({
          mutation: graphQLString,
          variables: { ...projectData },
        })
        console.log({ res })
      }
    }
  }, [fabricJSApi])

  return itemRef
}

export default useSaveProject
