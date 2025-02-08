import Calendar from '@/assets/icons/calendar.svg'
import Clipboard from '@/assets/icons/clipboard-export.svg'
import CloseCircle from '@/assets/icons/close-circle.svg'
import Close from '@/assets/icons/close.svg'
import DocumentText from '@/assets/icons/document-text.svg'
import Edit from '@/assets/icons/edit.svg'
import Home from '@/assets/icons/home.svg'
import Like from '@/assets/icons/like.svg'
import Lock from '@/assets/icons/lock.svg'
import Login from '@/assets/icons/login.svg'
import Logout from '@/assets/icons/logout.svg'
import Message from '@/assets/icons/message.svg'
import Notification from '@/assets/icons/notification.svg'
import ProfileAdd from '@/assets/icons/profile-add.svg'
import ProfileUser from '@/assets/icons/profile-user.svg'
import Profile from '@/assets/icons/profile.svg'
import Search from '@/assets/icons/search.svg'
import Send from '@/assets/icons/send.svg'
import Trash from '@/assets/icons/trash.svg'
import Unlock from '@/assets/icons/unlock.svg'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Add from '@/assets/icons/add.svg'
import CalendarFilled from '@/assets/icons/filled/calendar-fiiled.svg'
import ClipboardExportFilled from '@/assets/icons/filled/clipboard-export-filled.svg'
import ClipboardTextFilled from '@/assets/icons/filled/clipboard-text-filled.svg'
import DocumentTextFilled from '@/assets/icons/filled/document-text-filled.svg'
import EditFilled from '@/assets/icons/filled/edit-filled.svg'
import HomeFilled from '@/assets/icons/filled/home-fiiled.svg'
import NotificationFilled from '@/assets/icons/filled/notification-filled.svg'
import ProfileFilled from '@/assets/icons/filled/profile-filled.svg'
import ProfileUserFilled from '@/assets/icons/filled/profile-user-filled.svg'
import LikeFilled from '@/assets/icons/filled/like-filled.svg'
import LockFilled from '@/assets/icons/filled/lock-filled.svg'
import MessageFilled from '@/assets/icons/filled/message-filled.svg'
import ProfileAddFilled from '@/assets/icons/filled/profile-add-filled.svg'
import StarFilled from '@/assets/icons/filled/star-fill.svg'
import UnlockFilled from '@/assets/icons/filled/unlock-filled.svg'

export const icons = {
  calendar: Calendar,
  clipboard: Clipboard,
  close_circle: CloseCircle,
  close: Close,
  document_text: DocumentText,
  edit: Edit,
  home: Home,
  like: Like,
  lock: Lock,
  login: Login,
  logout: Logout,
  message: Message,
  notification: Notification,
  profile_add: ProfileAdd,
  profile_user: ProfileUser,
  profile: Profile,
  search: Search,
  send: Send,
  trash: Trash,
  unlock: Unlock,
  add: Add,
  'arrow-down': ArrowDown,
  'edit-filled': EditFilled,
  'home-filled': HomeFilled,
  'notification-filled': NotificationFilled,
  'profile-filled': ProfileFilled,
  'profile-user-filled': ProfileUserFilled,
  'calendar-filled': CalendarFilled,
  'clipboard-export-filled': ClipboardExportFilled,
  'clipboard-text-filled': ClipboardTextFilled,
  'document-text-filled': DocumentTextFilled,
  'like-filled': LikeFilled,
  'lock-filled': LockFilled,
  'message-filled': MessageFilled,
  'profile-add-filled': ProfileAddFilled,
  'star-filled': StarFilled,
  'unlock-filled': UnlockFilled,
} as const

export type IconName = keyof typeof icons

interface SVGProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: IconName
  size?: number
}

export const Icon = ({ name, size = 24, ...props }: SVGProps) => {
  const SVGComponent = icons[name]
  return (
    <SVGComponent
      width={size}
      height={size}
      className={name.endsWith('-filled') ? 'fill-gray-900' : 'stroke-gray-900'}
      {...props}
    />
  )
}

export const ICON_NAMES = Object.keys(icons) as IconName[]
