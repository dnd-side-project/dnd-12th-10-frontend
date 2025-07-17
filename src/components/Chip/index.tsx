import { cn } from '@/utils/cn'

interface Props {
  label: string
  color:
    | 'gray'
    | 'blue'
    | 'black'
    | 'green'
    | 'orange'
    | 'lightBlue'
    | 'lightGreen'
    | 'lightOrange'
    | 'linear'
  size: 'small' | 'medium'
}

const CHIP_COLOR: Record<Props['color'], string> = {
  gray: 'bg-gray-50',
  blue: 'bg-blue-500 text-white',
  black: 'bg-gray-800 text-white',
  green: 'bg-green-500 text-white',
  orange: 'bg-orange-500 text-white',
  lightBlue: 'bg-blue-50',
  lightGreen: 'bg-green-50',
  lightOrange: 'bg-orange-50',
  linear: 'bg-gray-50 border border-gray-100',
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
        'text-nowrap',
        'text-gray-800',
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
