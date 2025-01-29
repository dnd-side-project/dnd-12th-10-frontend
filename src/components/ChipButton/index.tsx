import { cn } from '@/utils/cn'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

/**
 * 일반 Chip과 다르게, 유저가 토글할 수 있는 checkbox 성격의 버튼
 * @param label 칩에 표시될 문구
 */
const ChipButton = ({ label, ...restProps }: Props) => {
  return (
    <label>
      <input type='checkbox' className='hidden peer' {...restProps} />
      <span
        className={cn(
          'text-[#474747]',
          'text-sm',
          'font-medium',
          'flex',
          'items-center',
          'justify-center',
          'rounded-lg',
          'px-3',
          'cursor-pointer',
          'rounded-lg',
          'h-10',
          'px-4',
          'select-none',
          'border border-[#303030]',
          'shadow-[0px_2px_0px_0px_#000000]',
          'peer-checked:bg-[#04C770]',
          'peer-checked:text-white',
        )}
      >
        {label}
      </span>
    </label>
  )
}

export default ChipButton
