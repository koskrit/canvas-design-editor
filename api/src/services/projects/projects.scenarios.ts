import type { Prisma, Project } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProjectCreateArgs>({
  project: {
    one: {
      data: {
        Id: 'String',
        Name: 'String',
        PreviewImage: 'String',
        Height: 2915547,
        Width: 593932,
        BackgroundColor: 'String',
        Slug: 'String',
        Serialization: 'String',
        Creator: {
          create: {
            Id: 'String',
            Email: 'String',
            Name: 'String',
            ModifiedDate: '2022-09-17T17:29:38Z',
            Slug: 'String',
            ProfilePhoto: 'String',
          },
        },
      },
    },
    two: {
      data: {
        Id: 'String',
        Name: 'String',
        PreviewImage: 'String',
        Height: 3434531,
        Width: 9213862,
        BackgroundColor: 'String',
        Slug: 'String',
        Serialization: 'String',
        Creator: {
          create: {
            Id: 'String',
            Email: 'String',
            Name: 'String',
            ModifiedDate: '2022-09-17T17:29:38Z',
            Slug: 'String',
            ProfilePhoto: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Project, 'project'>
