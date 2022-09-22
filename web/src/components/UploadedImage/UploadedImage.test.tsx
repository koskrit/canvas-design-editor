import { render } from '@redwoodjs/testing/web'

import UploadedImage from './UploadedImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UploadedImage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadedImage />)
    }).not.toThrow()
  })
})
