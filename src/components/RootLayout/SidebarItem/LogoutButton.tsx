import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'
import { removeLocalStorage } from '@/utils/storage'
import { ACCESS_TOKEN_STORAGE_KEY } from '@/utils/auth'

const LogoutButton = () => {
  return (
    <button
      className={cn('flex gap-2', 'mt-auto', 'text-title03')}
      onClick={() => {
        removeLocalStorage(ACCESS_TOKEN_STORAGE_KEY)
        window.location.reload()
      }}
    >
      <Icon name='logout' className='stroke-white' />
      <span className='text-white'>로그아웃</span>
    </button>
  )
}

export default LogoutButton
