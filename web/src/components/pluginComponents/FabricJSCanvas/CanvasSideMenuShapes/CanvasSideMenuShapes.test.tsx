import { render } from '@redwoodjs/testing/web'

import CanvasSideMenuShapes from './CanvasSideMenuShapes'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CanvasSideMenuShapes', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasSideMenuShapes />)
    }).not.toThrow()
  })
})
