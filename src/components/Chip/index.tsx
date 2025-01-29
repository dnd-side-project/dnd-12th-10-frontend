import { cn } from '@/utils/cn'

interface Props {
  label: string
  color: 'gray' | 'blue' | 'black' | 'green' | 'orange'
  size: 'small' | 'medium'
}

const CHIP_COLOR: Record<Props['color'], string> = {
  gray: 'bg-gray-50 text-gray-800',
  blue: 'bg-blue-500 text-white',
  black: 'bg-gray-800 text-white',
  green: 'bg-green-500 text-white',
  orange: 'bg-orange-500 text-white',
}

const Chip = ({ size, color, label }: Props) => {
  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'justify-center',
        'text-body03',
        'rounded-sm',
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
