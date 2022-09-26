export const uploadImageCloudinary = async (imgString: string) => {
  const formData = generateFormData(imgString)

  const raw = await fetch('https://api.cloudinary.com/v1_1/kosk/image/upload', {
    method: 'POST',
    body: formData,
  })
  const data = await raw.json()
  console.log({ data })

  return data.url
}

function generateFormData(imgString: string) {
  const formData = new FormData()
  formData.append('file', imgString)
  formData.append('upload_preset', 'jx7kvdob')
  formData.append('api_key', '295561351251534')

  return formData
}
