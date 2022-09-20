import { Button, Text, VStack } from '@chakra-ui/react'
import ReactFilestack, { client } from 'faqta-filestack-react'

const FilestackWidget = () => {
  const options = {
    accept: 'image/*',
    maxFiles: 5,
    storeTo: {
      location: 's3',
    },
  }

  const onSuccess = (e) => {
    console.log({ e })
  }

  return (
    <ReactFilestack
      apikey={process.env.FILESTACK_API_KEY}
      options={options}
      onSuccess={onSuccess}
      preload={true}
      render={({ onPick }) => (
        <VStack background={'white'} p={4}>
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
