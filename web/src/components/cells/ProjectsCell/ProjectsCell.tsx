import { Center, Container, Flex, Wrap, WrapItem } from '@chakra-ui/react'
import type { ProjectsQuery } from 'types/graphql'

import { navigate, NavLink, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import useGlobalState from 'src/contexts/initialization'

import ProjectItem from '../../ProjectItem/ProjectItem'

export const QUERY = gql`
  query ProjectQuery($Id: String!) {
    user(id: $Id) {
      Project {
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
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (data: CellSuccessProps<ProjectsQuery>) => {
  const Project = data?.user?.Project
  const [currentProject, setCurrentProject] = useGlobalState('currentProject')
  console.log({ Project })

  return (
    <Flex display={'inline-flex'} flexWrap="wrap">
      {Project?.map((item) => {
        return (
          <NavLink
            key={item.Id}
            activeClassName={'project-link'}
            onClick={() => setCurrentProject(item)}
            to={routes.project({ id: item.Id })}
          >
            <ProjectItem projectInfo={item} />
          </NavLink>
        )
      })}
    </Flex>
  )
}
