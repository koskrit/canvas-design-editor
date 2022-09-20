import type { Prisma, Image } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ImageCreateArgs>({
  image: {
    one: {
      data: {
        ImageUrl: 'String',
        Creator: {
          create: {
            Id: 'String',
            Email: 'String',
            Name: 'String',
            ModifiedDate: '2022-09-20T01:34:49Z',
            Slug: 'String',
            ProfilePhoto: 'String',
          },
        },
      },
    },
    two: {
      data: {
        ImageUrl: 'String',
        Creator: {
          create: {
            Id: 'String',
            Email: 'String',
            Name: 'String',
            ModifiedDate: '2022-09-20T01:34:49Z',
            Slug: 'String',
            ProfilePhoto: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Image, 'image'>
