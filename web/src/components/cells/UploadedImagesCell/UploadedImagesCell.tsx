import { Box, Image, Wrap } from '@chakra-ui/react'
import type { UploadedImagesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UploadedImage from 'src/components/UploadedImage/UploadedImage'

export const QUERY = gql`
  query UploadedImagesQuery($userId: String!, $type: String) {
    user(id: $userId, type: $type) {
      Image {
        ImageUrl
        CreatedAt
        userId
      }
    }
  }
`

export function beforeQuery(props) {
  return {
    variables: props,
    // fetchPolicy: 'cache-and-network',
    // refetchQueries: [{ query: QUERY, variables: props }],
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (data: CellSuccessProps<UploadedImagesQuery>) => {
  const uploadedImages = [...data?.user?.Image].reverse()

  return (
    <Wrap overflowY={'auto'} overflowX="hidden" maxWidth={'200px'} pr={2}>
      {uploadedImages.map(({ ImageUrl, CreatedAt }) => (
        <UploadedImage
          key={CreatedAt}
          ImageUrl={ImageUrl}
          CreatedAt={CreatedAt}
        />
      ))}
    </Wrap>
  )
}
