import { render } from '@redwoodjs/testing/web'

import ProjectItem from './ProjectItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProjectItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProjectItem />)
    }).not.toThrow()
  })
})
