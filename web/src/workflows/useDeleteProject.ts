import { useApolloClient } from '@apollo/client'
import { gql } from '@apollo/client'

import { routes, navigate } from '@redwoodjs/router'

import { notify } from 'src/plugins/notifications'

const graphQLString = gql`
  mutation DeleteProject($Id: String!) {
    deleteProject(id: $Id) {
      Id
      Name
      userId
      PreviewImage
    }
  }
`

const useDeleteProject = () => {
  const apolloClient = useApolloClient()

  return async (Id: string, navigateTo?: string) => {
    const res = await apolloClient.mutate({
      mutation: graphQLString,
      variables: { Id },
    })
    console.log({ res })
    notify('info', '🚮 Project Deleted Successfuly')

    if (navigateTo) {
      navigate(routes[navigateTo]())
    }
  }
}

export default useDeleteProject
