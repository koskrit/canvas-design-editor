import { render } from '@redwoodjs/testing/web'

import CanvasTopMenuOpacity from './CanvasTopMenuOpacity'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CanvasTopMenuOpacity', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasTopMenuOpacity />)
    }).not.toThrow()
  })
})
