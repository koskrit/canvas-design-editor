import { client as filestackClient } from 'faqta-filestack-react'

import FilestackWidget from 'src/components/pluginComponents/filestack/FilestackWidget/FilestackWidget'

export { FilestackWidget }

export const deleteUploadedImage = async (imgUrl: string) => {
  const handle = imgUrl.split('/').pop()
  const client = filestackClient.init(process.env.FILESTACK_API_KEY)

  const response = await client.remove(handle, {
    signature: process.env.FILESTACK_SIGNATURE,
    policy: process.env.FILESTACK_POLICY,
  })
  console.log({ response })

  return response
}

export const uploadImage = async (dataUrl: string, previousImage: string) => {
  console.log(process.env.FILESTACK_API_KEY, 'key')

  const client = filestackClient.init(process.env.FILESTACK_API_KEY)
  console.log({ client })

  const response = await client.upload(
    dataUrl,
    undefined,
    undefined,
    undefined,
    {
      signature: process.env.FILESTACK_SIGNATURE,
      policy: process.env.FILESTACK_POLICY,
    }
  )
  console.log({ response })

  return response?.url
}
