import type { ComponentMeta } from '@storybook/react'

import ProjectPage from './ProjectPage'

export const generated = () => {
  return <ProjectPage />
}

export default {
  title: 'Pages/ProjectPage',
  component: ProjectPage,
} as ComponentMeta<typeof ProjectPage>
