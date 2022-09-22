// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CanvasSideMenuShapes> = (args) => {
//   return <CanvasSideMenuShapes {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CanvasSideMenuShapes from './CanvasSideMenuShapes'

export const generated = () => {
  return <CanvasSideMenuShapes />
}

export default {
  title: 'Components/CanvasSideMenuShapes',
  component: CanvasSideMenuShapes,
} as ComponentMeta<typeof CanvasSideMenuShapes>
