import { createGlobalState } from 'react-hooks-global-state'

import currentProject from './currentProject'
import fabricJSApi from './fabricJSApi'
import general from './general'
import user from './user'

const { useGlobalState } = createGlobalState({
  user,
  currentProject,
  fabricJSApi,
  ...general,
})

export default useGlobalState
