import { cn } from '@/utils/cn'
import LogoutIcon from '@/assets/icons/sidebar/logout.svg'

const LogoutButton = () => {
  return (
    <button className={cn('flex gap-2', 'mt-auto', 'text-title03')}>
      <LogoutIcon />
      <span className='text-white'>로그아웃</span>
    </button>
  )
}

export default LogoutButton
