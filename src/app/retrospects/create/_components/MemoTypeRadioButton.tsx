import { cn } from '@/utils/cn'
import { Icon } from '@/components/Icon'
import { JSX } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  image: JSX.Element
}

/** 회고 유형을 선택하는 radio 성격의 버튼 */
const MemoTypeRadioButton = ({ label, image, ...props }: Props) => {
  return (
    <label className='w-full cursor-pointer select-none group'>
      <div
        className={cn(
          'border',
          'border-gray-100',
          'rounded-lg',
          'p-5',
          'text-body01',
          'font-semibold',
          'flex items-start justify-between',
          'group-has-[:checked]:border-blue-500 border-2',
          'bg-white',
          'hover:shadow-[inset_0_0_0_100vmax_rgba(0,0,0,0.05)]',
        )}
      >
        <input type='radio' className='hidden' {...props} />
        <div className='flex'>
          <Icon
            name='check'
            className='mr-1 stroke-blue-500 hidden group-has-[:checked]:block'
          />
          {label}
        </div>
        {image}
      </div>
    </label>
  )
}

export default MemoTypeRadioButton
