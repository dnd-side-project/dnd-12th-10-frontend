import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'

const LogoutButton = () => {
  return (
    <button className={cn('flex gap-2', 'mt-auto', 'text-title03')}>
      <Icon name='logout' className='stroke-white' />
      <span className='text-white'>로그아웃</span>
    </button>
  )
}

export default LogoutButton
