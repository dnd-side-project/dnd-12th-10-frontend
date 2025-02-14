'use client'

import { cn } from '@/utils/cn'
import { Select, SelectItem } from '@heroui/react'
import { Icon } from '../Icon'
import React from 'react'

interface Props {
  options: { key: string; label: string }[]
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectBox = ({ options, placeholder, onChange }: Props) => {
  return (
    <Select
      aria-label='옵션을 선택하세요'
      classNames={{
        base: 'w-full [&_*]:text-body02',
        trigger: cn(
          'px-6 py-4',
          'rounded-[10px]',
          'bg-white',
          'border border-gray-900',
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
      selectorIcon={<Icon name='arrow-down' className='stroke-gray-700' />}
      onChange={onChange}
    >
      {({ label }) => <SelectItem>{label}</SelectItem>}
    </Select>
  )
}

export default SelectBox
