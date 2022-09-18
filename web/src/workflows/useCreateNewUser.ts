import { useApolloClient, gql } from '@apollo/client'

import { useGlobalState } from 'src/contexts/initialization'
import type { User } from 'src/contexts/user'

const graphQLString = gql`
  mutation (
    $Id: String!
    $Name: String!
    $ProfilePhoto: String!
    $Email: String!
    $Slug: String!
  ) {
    createUser(
      input: {
        Id: $Id
        Name: $Name
        ProfilePhoto: $ProfilePhoto
        Email: $Email
        Slug: $Slug
      }
    ) {
      Email
      Id
      Name
      CreatedDate
      ModifiedDate
      Slug
      ProfilePhoto
      Project {
        Id
      }
    }
  }
`

export default function useCreateNewUser(userData: User) {
  const [currentUser, setCurrentUser] = useGlobalState('user')
  const apolloClient = useApolloClient()

  setCurrentUser(userData)
  apolloClient.mutate({
    mutation: graphQLString,
    variables: {},
  })
}
