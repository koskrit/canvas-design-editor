import type { Project } from 'src/contexts/currentProject'

const generateNewProjectString = (projectData: Project) => `
`

export default function createNewProject(
  projectData: Project,
  setCurrentUser: any,
  apolloClient: any
) {
  setCurrentUser(data)
  apolloClient.mutate({
    mutation: CHANGE_GRAPHQL,
  })
}
