import { Box, Button, Image } from '@chakra-ui/react'

import { addImageListener } from 'src/plugins/fabricJSCanvas'

interface Props {
  CreatedAt: string
  ImageUrl: string
}

const UploadedImage = ({ CreatedAt, ImageUrl }: Props) => {
  const itemRef = addImageListener(ImageUrl)

  return (
    <Box
      key={CreatedAt}
      ref={itemRef}
      border="4px solid white"
      cursor={'pointer'}
    >
      <Image src={ImageUrl || '/defaults/image-icon.jpg'} />
    </Box>
  )
}

export default UploadedImage
