// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CanvasTopMenuSaves> = (args) => {
//   return <CanvasTopMenuSaves {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CanvasTopMenuSaves from './CanvasTopMenuSaves'

export const generated = () => {
  return <CanvasTopMenuSaves />
}

export default {
  title: 'Components/CanvasTopMenuSaves',
  component: CanvasTopMenuSaves,
} as ComponentMeta<typeof CanvasTopMenuSaves>
