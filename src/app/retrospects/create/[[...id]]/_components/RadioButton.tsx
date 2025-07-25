import { cn } from '@/utils/cn'
import { RADIO_BUTTON_SIZE } from '../_consts'

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  title: string
  description?: string
  size: 'small' | 'medium' | 'large'
}

/** 회고 템플릿을 선택하는 radio 성격의 버튼 */
const RadioButton = ({
  title,
  description = '',
  size = 'small',
  ...props
}: Props) => {
  return (
    <label className='cursor-pointer group'>
      <div
        className={cn(
          'bg-white',
          'border',
          'border-gray-100',
          'py-5',
          'px-6',
          'rounded-lg',
          'cursor-pointer',
          'flex',
          'flex-col',
          'justify-center',
          'group-has-[:checked]:border-blue-500',
          'group-has-[:checked]:bg-blue-50',
          RADIO_BUTTON_SIZE[size],
        )}
      >
        <input type='radio' className='hidden' {...props} />
        <span className='text-body01 font-semibold'>{title}</span>
        {description && (
          <p className='h-full text-body03 text-gray-700 font-normal pt-2 line-clamp-2'>
            {description}
          </p>
        )}
      </div>
    </label>
  )
}

export default RadioButton
