import netlifyIdentityWidget from 'netlify-identity-widget'

import useGlobalState from 'src/contexts/initialization'
import { User } from 'src/contexts/user'

export default function useNetlifyWidget() {
  const [currentUser, setCurrentUser] = useGlobalState('user')

  netlifyIdentityWidget.on('login', (e) => {
    const user = {} as User

    user.name = e.user_metadata.full_name
    user.id = e.id
    user.email = e.email

    setCurrentUser(user)
    console.log(e)
  })

  netlifyIdentityWidget.on('logout', (e) => {
    // alert(JSON.stringify(e))
  })
  return netlifyIdentityWidget
}
