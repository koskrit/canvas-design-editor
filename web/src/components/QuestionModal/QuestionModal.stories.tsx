// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof QuestionModal> = (args) => {
//   return <QuestionModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import QuestionModal from './QuestionModal'

export const generated = () => {
  return <QuestionModal />
}

export default {
  title: 'Components/QuestionModal',
  component: QuestionModal,
} as ComponentMeta<typeof QuestionModal>
