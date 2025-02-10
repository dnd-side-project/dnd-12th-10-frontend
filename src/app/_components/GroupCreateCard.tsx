import CardWrap from '@/components/CardWrap'
import { Icon } from '@/components/Icon'
import { URL_PATH } from '@/consts/urls'
import { cn } from '@/utils/cn'

/** 모임 생성 페이지로 이동하는 카드 컴포넌트 */
const GroupCreateCard = () => {
  return (
    <CardWrap path={URL_PATH.GroupCreate} size='medium'>
      <div
        className={cn(
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'w-full',
          'gap-y-2',
        )}
      >
        <div
          className={cn(
            'flex',
            'items-center',
            'justify-center',
            'rounded-xl',
            'bg-orange-500',
            'w-[25px] h-[25px]',
          )}
        >
          <Icon name='add' className='stroke-white' size={12} />
        </div>
        <span className='text-title02'>모임 만들기</span>
      </div>
    </CardWrap>
  )
}

export default GroupCreateCard
