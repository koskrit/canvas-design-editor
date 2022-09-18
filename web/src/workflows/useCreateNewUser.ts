import { useApolloClient } from '@apollo/client'

import { useGlobalState } from 'src/contexts/initialization'
import type { User } from 'src/contexts/user'

const generateGraphQLString = (userData: User) => `

mutation {
  createUser(input :{
  Id: "${userData.id}"
  Name: "${userData.name}"
  ProfilePhoto: "${userData.photo}"
  Email:"${userData.email}"
  Slug: "${userData.id}"
  }){
  Email
  Id
  Name
  CreatedDate
  ModifiedDate
  Slug
  ProfilePhoto
  Project
}
}
`

export default function useCreateNewUser(userData: User) {
  const [currentUser, setCurrentUser] = useGlobalState('user')
  const apolloClient = useApolloClient()

  setCurrentUser(userData)
  apolloClient.mutate({
    mutation: generateGraphQLString(userData),
  })
}
