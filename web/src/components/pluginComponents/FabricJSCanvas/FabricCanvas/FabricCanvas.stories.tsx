// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FabricCanvas> = (args) => {
//   return <FabricCanvas {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FabricCanvas from './FabricCanvas'

export const generated = () => {
  return <FabricCanvas />
}

export default {
  title: 'Components/FabricCanvas',
  component: FabricCanvas,
} as ComponentMeta<typeof FabricCanvas>
