import { createGlobalState } from 'react-hooks-global-state'

import currentProject from './currentProject'
import user from './user'

const globalState = createGlobalState({ ...user, currentProject })

export default globalState
