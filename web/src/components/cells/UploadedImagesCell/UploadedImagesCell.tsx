import { Box, Image, Wrap } from '@chakra-ui/react'
import type { UploadedImagesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
    refetchQueries: [{ query: QUERY, variables: props }],
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (data: CellSuccessProps<UploadedImagesQuery>) => {
  const uploadedImages = data?.user?.Image

  return (
    <Wrap overflowY={'auto'} overflowX="hidden">
      {uploadedImages.map(({ ImageUrl }) => (
        <Box key={ImageUrl} border="8px">
          <Image src={ImageUrl || '/defaults/image-icon.jpg'} />
        </Box>
      ))}
    </Wrap>
  )
}
