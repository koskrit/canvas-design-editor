import type { ProjectsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
    <ul>
      {Project?.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
