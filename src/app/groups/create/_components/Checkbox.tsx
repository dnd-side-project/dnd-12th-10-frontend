import { cn } from '@/utils/cn'
import CheckIcon from '@/assets/icons/check.svg'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  description: string
}

/**
 * 모임 공개 여부를 체크하는 checkbox 타입의 필드
 */
const Checkbox = ({ label, description, ...props }: Props) => {
  return (
    <label className='cursor-pointer select-none group'>
      <input type='checkbox' className='hidden' {...props} />
      <div className='flex items-center gap-x-2'>
        <div
          className={cn(
            'flex items-center justify-center',
            'bg-white',
            'border border-blue-500',
            'w-5 h-5',
            'rounded-full',
            'group-has-[:checked]:bg-blue-500',
          )}
        >
          <CheckIcon
            className='stroke-blue-500 group-has-[:checked]:stroke-white'
            width='12'
            height='12'
          />
        </div>
        <span className='text-title02'>{label}</span>
      </div>

      <div className='text-gray-500 text-body02 font-normal mt-3'>
        {description}
      </div>
    </label>
  )
}

export default Checkbox
