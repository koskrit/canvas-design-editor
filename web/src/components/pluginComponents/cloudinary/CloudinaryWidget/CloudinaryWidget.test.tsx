import { render } from '@redwoodjs/testing/web'

import CloudinaryWidget from './CloudinaryWidget'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CloudinaryWidget', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CloudinaryWidget />)
    }).not.toThrow()
  })
})
