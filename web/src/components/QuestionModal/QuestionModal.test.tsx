import { render } from '@redwoodjs/testing/web'

import QuestionModal from './QuestionModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('QuestionModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionModal />)
    }).not.toThrow()
  })
})
