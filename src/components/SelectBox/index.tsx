'use client'

import { cn } from '@/utils/cn'
import { Select, SelectItem } from '@heroui/react'
import ArrowDownIcon from '@/assets/icons/arrow/arrow-down.svg'

interface Props {
  options: { key: string; label: string }[]
  placeholder: string
}

const SelectBox = ({ options, placeholder }: Props) => {
  return (
    <Select
      classNames={{
        base: 'w-full [&_*]:text-body02',
        trigger: cn(
          'px-6 py-4',
          'rounded-[10px]',
          'bg-white',
          'border border-gray-900',
          'border-b-0',
          'shadow-black',
          'hover-[#0000000D]',
          'text-gray-700;',
          'data-[has-value]:text-orange-600',
          'rounded-[10px]',
          'data-[open]:rounded-b-none',
          'h-14',
        ),
        selectorIcon: 'w-6 h-6 stroke-gray-700',
        popoverContent: cn(
          'bg-white',
          'p-0',
          'rounded-none',
          'rounded-b-[10px]',
          'w-full',
          'top-0',
          '[&_li]:rounded-none',
          '[&_li]:py-[15px] [&_li]:px-6',
        ),
        listbox: 'p-0',
      }}
      items={options}
      placeholder={placeholder}
      selectorIcon={<ArrowDownIcon className='stroke-gray-700' />}
    >
      {({ label }) => <SelectItem>{label}</SelectItem>}
    </Select>
  )
}

export default SelectBox
