import type { Image } from '@prisma/client'

import { images, image, createImage, updateImage, deleteImage } from './images'
import type { StandardScenario } from './images.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('images', () => {
  scenario('returns all images', async (scenario: StandardScenario) => {
    const result = await images()

    expect(result.length).toEqual(Object.keys(scenario.image).length)
  })

  scenario('returns a single image', async (scenario: StandardScenario) => {
    const result = await image({ id: scenario.image.one.id })

    expect(result).toEqual(scenario.image.one)
  })

  scenario('creates a image', async (scenario: StandardScenario) => {
    const result = await createImage({
      input: { userId: scenario.image.two.userId, ImageUrl: 'String' },
    })

    expect(result.userId).toEqual(scenario.image.two.userId)
    expect(result.ImageUrl).toEqual('String')
  })

  scenario('updates a image', async (scenario: StandardScenario) => {
    const original = (await image({ id: scenario.image.one.id })) as Image
    const result = await updateImage({
      id: original.id,
      input: { ImageUrl: 'String2' },
    })

    expect(result.ImageUrl).toEqual('String2')
  })

  scenario('deletes a image', async (scenario: StandardScenario) => {
    const original = (await deleteImage({ id: scenario.image.one.id })) as Image
    const result = await image({ id: original.id })

    expect(result).toEqual(null)
  })
})
