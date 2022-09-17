import type { Project } from '@prisma/client'

import {
  projects,
  project,
  createProject,
  updateProject,
  deleteProject,
} from './projects'
import type { StandardScenario } from './projects.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('projects', () => {
  scenario('returns all projects', async (scenario: StandardScenario) => {
    const result = await projects()

    expect(result.length).toEqual(Object.keys(scenario.project).length)
  })

  scenario('returns a single project', async (scenario: StandardScenario) => {
    const result = await project({ id: scenario.project.one.id })

    expect(result).toEqual(scenario.project.one)
  })

  scenario('creates a project', async (scenario: StandardScenario) => {
    const result = await createProject({
      input: {
        Id: 'String',
        userId: scenario.project.two.userId,
        Name: 'String',
        PreviewImage: 'String',
        Height: 635973,
        Width: 1900084,
        BackgroundColor: 'String',
        Slug: 'String',
        Serialization: 'String',
      },
    })

    expect(result.Id).toEqual('String')
    expect(result.userId).toEqual(scenario.project.two.userId)
    expect(result.Name).toEqual('String')
    expect(result.PreviewImage).toEqual('String')
    expect(result.Height).toEqual(635973)
    expect(result.Width).toEqual(1900084)
    expect(result.BackgroundColor).toEqual('String')
    expect(result.Slug).toEqual('String')
    expect(result.Serialization).toEqual('String')
  })

  scenario('updates a project', async (scenario: StandardScenario) => {
    const original = (await project({ id: scenario.project.one.id })) as Project
    const result = await updateProject({
      id: original.id,
      input: { Id: 'String2' },
    })

    expect(result.Id).toEqual('String2')
  })

  scenario('deletes a project', async (scenario: StandardScenario) => {
    const original = (await deleteProject({
      id: scenario.project.one.id,
    })) as Project
    const result = await project({ id: original.id })

    expect(result).toEqual(null)
  })
})
