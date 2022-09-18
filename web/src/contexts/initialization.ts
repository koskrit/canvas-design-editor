import { createGlobalState } from 'react-hooks-global-state'

import currentProject from './currentProject'
import user from './user'

const { useGlobalState } = createGlobalState({ user, currentProject })

export default useGlobalState
