import { cn } from '@/utils/cn'

const BUTTON_STYLE =
  'border border-gray-100 shadow-[0px_1px_2px_0px_#0000000D] rounded-sm w-6 h-6 flex items-center justify-center'

/**
 * 인원 수 설정 인풋 필드
 */
const NumberInput = ({
  value,
  onChange,
}: {
  value: number
  onChange: (num: number) => void
}) => {
  const handleIncrement = () => onChange(value + 1)
  const handleDecrement = () => onChange(Math.max(0, value - 1))

  return (
    <label>
      <div
        className={cn(
          'border border-gray-900',
          'shadow-black',
          'w-[156px]',
          'py-4 px-6',
          'rounded-[10px]',
          'flex gap-x-2',
        )}
      >
        {/* TODO 최대 100으로 설정 필요 */}
        <input
          type='number'
          value={value}
          className={cn(
            'w-full',
            '[appearance:textfield]',
            '[&::-webkit-outer-spin-button]:appearance-none',
            '[&::-webkit-inner-spin-button]:appearance-none',
            'outline-none',
            'text-body02 font-normal',
          )}
          onChange={(e) => onChange(Number(e.target.value))}
        />

        <div className='flex gap-x-1.5'>
          <button
            type='button'
            onClick={handleDecrement}
            className={BUTTON_STYLE}
          >
            {/* TODO 아이콘으로 변경 */}-
          </button>
          <button
            type='button'
            onClick={handleIncrement}
            className={BUTTON_STYLE}
          >
            +
          </button>
        </div>
      </div>
    </label>
  )
}

export default NumberInput
