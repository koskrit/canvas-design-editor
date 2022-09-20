import { createGlobalState } from 'react-hooks-global-state'

import currentProject from './currentProject'
import general from './general'
import user from './user'

const { useGlobalState } = createGlobalState({
  user,
  currentProject,
  ...general,
})

export default useGlobalState
