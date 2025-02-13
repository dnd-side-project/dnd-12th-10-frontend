import { Icon } from '@/components/Icon'
import type { IconName } from '@/components/Icon'

const COUNT_COLOR = {
  gray: 'text-gray-400',
  blue: 'text-blue-400',
}

interface IconWithButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  iconName: IconName
  text?: string
  count: number
  countColor?: keyof typeof COUNT_COLOR
}

/** 좋아요, 댓글을 사용할 때 컴포넌트 */
export const IconWithButton = ({
  iconName,
  text,
  count,
  countColor = 'gray',
  ...props
}: IconWithButtonProps) => {
  return (
    <button className='flex gap-1.5 text-title03 font-semibold' {...props}>
      <Icon name={iconName} size={22} className='stroke-gray-400' />
      {text && <span className={`text-gray-400 leading-[22px]`}>{text}</span>}
      <span className={`${COUNT_COLOR[countColor]} leading-[22px]`}>
        {count}
      </span>
    </button>
  )
}

export default IconWithButton
