import { cn } from '@/utils/cn'

interface Props {
  label: string
  color: 'gray' | 'blue' | 'black' | 'green' | 'orange'
  size: 'small' | 'medium'
}

const CHIP_COLOR: Record<Props['color'], string> = {
  gray: 'bg-[#F7F7F7] text-[#474747]',
  blue: 'bg-[#3881F1] text-white',
  black: 'bg-[#474747] text-white',
  green: 'bg-[#04C770] text-white',
  orange: 'bg-[#FF530A] text-white',
}

const Chip = ({ size, color, label }: Props) => {
  return (
    <div
      className={cn(
        'text-[#474747]',
        'text-sm',
        'font-medium',
        'flex',
        'items-center',
        'justify-center',
        'rounded-lg',
        'px-3',
        {
          'h-7': size === 'small',
        },
        { 'h-8': size === 'medium' },
        CHIP_COLOR[color],
      )}
    >
      {label}
    </div>
  )
}

export default Chip
