import { useEffect, useRef } from 'react'

import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

import useGlobalState from 'src/contexts/initialization'
import { notify } from 'src/plugins/notifications'

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
      Height
      BackgroundColor
      Serialization
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
        setUrlParams(projectData)
        console.log({ projectData })

        const res = await apolloClient.mutate({
          mutation: graphQLString,
          variables: { ...projectData },
        })
        console.log({ res })
        notify('info', '💾 Project Saved Successfuly')
      }
    }
  }, [fabricJSApi])

  return itemRef
}

export function setUrlParams(projectData) {
  // find a way to store params at refresh at url
  const { Serialization } = projectData

  const urlParams = new URLSearchParams(document.location.href.split('?')[1])
  const Name = urlParams.get('Name')
  const Slug = urlParams.get('Slug')
  const Id = urlParams.get('Id')
  const Height = urlParams.get('Height')
  const Width = urlParams.get('Width')
  const BackgroundColor = urlParams.get('BackgroundColor')

  console.log({ Serialization })

  window.history.replaceState(
    null,
    null,
    `?Id=${Id}&Name=${Name}&Slug=${Slug}&Height=${Height}&Width=${Width}&BackgroundColor=${BackgroundColor}&Serialization=${Serialization}`
  )
}

export default useSaveProject
