import { cn } from '@/utils/cn'

const SectionTitleChip = ({ label }: { label: string }) => {
  return (
    <div
      className={cn(
        'w-fit',
        'mx-auto',
        'flex',
        'text-gray-800',
        'text-xl',
        'font-semibold',
        'leading-[150%]',
        'py-4',
        'px-10',
        'rounded-[20px]',
        'border border-gray-900',
        'shadow-[0px_4px_0px_0px_#000000]',
        'bg-white',
      )}
    >
      {label}
    </div>
  )
}

export default SectionTitleChip
