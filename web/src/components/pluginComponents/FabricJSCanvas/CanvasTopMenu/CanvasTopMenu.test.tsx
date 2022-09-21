import { render } from '@redwoodjs/testing/web'

import CanvasTopMenu from './CanvasTopMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CanvasTopMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasTopMenu />)
    }).not.toThrow()
  })
})
