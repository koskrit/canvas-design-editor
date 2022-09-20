// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FilestackWidget> = (args) => {
//   return <FilestackWidget {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FilestackWidget from './FilestackWidget'

export const generated = () => {
  return <FilestackWidget />
}

export default {
  title: 'Components/FilestackWidget',
  component: FilestackWidget,
} as ComponentMeta<typeof FilestackWidget>
