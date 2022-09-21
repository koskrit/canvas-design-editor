// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CanvasTopMenu> = (args) => {
//   return <CanvasTopMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CanvasTopMenu from './CanvasTopMenu'

export const generated = () => {
  return <CanvasTopMenu />
}

export default {
  title: 'Components/CanvasTopMenu',
  component: CanvasTopMenu,
} as ComponentMeta<typeof CanvasTopMenu>
