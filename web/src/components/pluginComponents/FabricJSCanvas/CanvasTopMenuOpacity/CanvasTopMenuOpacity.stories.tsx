// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CanvasTopMenuOpacity> = (args) => {
//   return <CanvasTopMenuOpacity {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CanvasTopMenuOpacity from './CanvasTopMenuOpacity'

export const generated = () => {
  return <CanvasTopMenuOpacity />
}

export default {
  title: 'Components/CanvasTopMenuOpacity',
  component: CanvasTopMenuOpacity,
} as ComponentMeta<typeof CanvasTopMenuOpacity>
