import { Center, Container, Flex, Wrap, WrapItem } from '@chakra-ui/react'
import type { ProjectsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
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

  return (
    <Flex display={'inline-flex'} flexWrap="wrap">
      {Project?.map((item) => {
        return <ProjectItem key={item.Id} projectInfo={item} />
      })}
    </Flex>
  )
}
