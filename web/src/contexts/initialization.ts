import { createGlobalState } from 'react-hooks-global-state'

import user from './user'

const globalState = createGlobalState({ ...user })

export default globalState
