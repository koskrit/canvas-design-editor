// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProjectItem> = (args) => {
//   return <ProjectItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProjectItem from './ProjectItem'

export const generated = () => {
  return <ProjectItem />
}

export default {
  title: 'Components/ProjectItem',
  component: ProjectItem,
} as ComponentMeta<typeof ProjectItem>
