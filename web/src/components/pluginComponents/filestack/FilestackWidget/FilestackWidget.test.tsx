import { render } from '@redwoodjs/testing/web'

import FilestackWidget from './FilestackWidget'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FilestackWidget', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FilestackWidget />)
    }).not.toThrow()
  })
})
