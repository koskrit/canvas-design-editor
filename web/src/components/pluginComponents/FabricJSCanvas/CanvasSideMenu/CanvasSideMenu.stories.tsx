// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CanvasSideMenu> = (args) => {
//   return <CanvasSideMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CanvasSideMenu from './CanvasSideMenu'

export const generated = () => {
  return <CanvasSideMenu />
}

export default {
  title: 'Components/CanvasSideMenu',
  component: CanvasSideMenu,
} as ComponentMeta<typeof CanvasSideMenu>
