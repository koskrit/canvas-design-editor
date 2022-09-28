import 'react-notifications/lib/notifications.css'
import { NotificationContainer, NotificationManager } from 'react-notifications'

function notify(
  type: string,
  message: string,
  duration?: number,
  callback?: () => void
) {
  switch (type) {
    case 'info':
      NotificationManager.info(type, message, duration, callback)
      break
    case 'success':
      NotificationManager.success(type, message, duration, callback)
      break
    case 'warning':
      NotificationManager.warning(type, message, duration, callback)
      break
    case 'error':
      NotificationManager.error(type, message, duration, callback)
      break
  }
}

export { notify, NotificationContainer }
