// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CloudinaryWidget> = (args) => {
//   return <CloudinaryWidget {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CloudinaryWidget from './CloudinaryWidget'

export const generated = () => {
  return <CloudinaryWidget />
}

export default {
  title: 'Components/CloudinaryWidget',
  component: CloudinaryWidget,
} as ComponentMeta<typeof CloudinaryWidget>
