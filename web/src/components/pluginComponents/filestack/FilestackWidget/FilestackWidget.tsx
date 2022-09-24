import { Button, Text, VStack } from '@chakra-ui/react'
import ReactFilestack, { client } from 'faqta-filestack-react'

import { useAuth } from '@redwoodjs/auth'

import useSaveImageToDatabase from 'src/workflows/useSaveImageToDatabase'

const FilestackWidget = () => {
  const options = {
    accept: 'image/*',
    maxFiles: 5,
    storeTo: {
      location: 's3',
    },
  }
  const { currentUser } = useAuth()

  const saveImageToDatabase = useSaveImageToDatabase()

  const onSuccess = (e) => {
    e.filesUploaded.forEach(({ url }) =>
      saveImageToDatabase({
        userId: currentUser.sub,
        ImageUrl: url,
      })
    )
  }

  return (
    <ReactFilestack
      apikey={process.env.FILESTACK_API_KEY}
      options={options}
      onSuccess={onSuccess}
      preload={true}
      render={({ onPick }) => (
        <VStack background={'white'} p={4} w="97%">
          <Text>Select an Image to Upload</Text>
          <Button onClick={onPick} w={'full'}>
            Upload an Image
          </Button>
        </VStack>
      )}
    />
  )
}

export default FilestackWidget
