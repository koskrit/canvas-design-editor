import { render } from '@redwoodjs/testing/web'

import FabricCanvas from './FabricCanvas'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FabricCanvas', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FabricCanvas />)
    }).not.toThrow()
  })
})
