import { render } from '@redwoodjs/testing/web'

import CreateProjectModal from './CreateProjectModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateProjectModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateProjectModal />)
    }).not.toThrow()
  })
})
