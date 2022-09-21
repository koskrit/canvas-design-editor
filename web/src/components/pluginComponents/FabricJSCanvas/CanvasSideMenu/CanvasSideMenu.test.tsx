import { render } from '@redwoodjs/testing/web'

import CanvasSideMenu from './CanvasSideMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CanvasSideMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasSideMenu />)
    }).not.toThrow()
  })
})
