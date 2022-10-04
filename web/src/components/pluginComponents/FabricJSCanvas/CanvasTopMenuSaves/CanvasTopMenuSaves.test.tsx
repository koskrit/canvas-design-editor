import { render } from '@redwoodjs/testing/web'

import CanvasTopMenuSaves from './CanvasTopMenuSaves'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CanvasTopMenuSaves', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CanvasTopMenuSaves />)
    }).not.toThrow()
  })
})
