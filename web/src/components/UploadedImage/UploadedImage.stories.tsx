// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof UploadedImage> = (args) => {
//   return <UploadedImage {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import UploadedImage from './UploadedImage'

export const generated = () => {
  return <UploadedImage />
}

export default {
  title: 'Components/UploadedImage',
  component: UploadedImage,
} as ComponentMeta<typeof UploadedImage>
