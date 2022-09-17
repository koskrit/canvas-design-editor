// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CreateProjectModal> = (args) => {
//   return <CreateProjectModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CreateProjectModal from './CreateProjectModal'

export const generated = () => {
  return <CreateProjectModal />
}

export default {
  title: 'Components/CreateProjectModal',
  component: CreateProjectModal,
} as ComponentMeta<typeof CreateProjectModal>
