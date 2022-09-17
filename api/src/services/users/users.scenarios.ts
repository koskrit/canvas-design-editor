import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        Id: 'String',
        Email: 'String',
        Name: 'String',
        ModifiedDate: '2022-09-17T15:26:24Z',
        Slug: 'String',
        ProfilePhoto: 'String',
      },
    },
    two: {
      data: {
        Id: 'String',
        Email: 'String',
        Name: 'String',
        ModifiedDate: '2022-09-17T15:26:24Z',
        Slug: 'String',
        ProfilePhoto: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
