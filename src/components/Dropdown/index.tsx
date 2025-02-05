import { cn } from '@/utils/cn'
import {
  Dropdown as DropdownHero,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  SharedSelection,
} from '@heroui/react'
import { useMemo, useState } from 'react'
import ArrowDownIcon from '@/assets/icons/arrow/arrow-down.svg'

interface Props {
  options: string[]
}

const Dropdown = ({ options }: Props) => {
  const [selectedKeys, setSelectedKeys] = useState<SharedSelection>(
    new Set([options[0]]),
  )
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replace(/_/g, ''),
    [selectedKeys],
  )

  return (
    <DropdownHero
      className={cn(
        '[&_*]:text-body02',
        '[&_*]:font-normal',
        '[&_*]:text-gray-700',
        'data-[slot=content]:min-w-0',
      )}
    >
      <DropdownTrigger
        className={cn(
          'rounded-lg',
          'border-gray-700 border',
          'h-[38px] px-[18px]',
          'bg-white',
        )}
      >
        <Button className='flex items-center gap-x-2.5'>
          {selectedValue}
          <ArrowDownIcon
            className='stroke-gray-700'
            width={16}
            height={16}
            viewBox='0 0 24 24' // TODO: 제거가능할지 확인
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        selectedKeys={selectedKeys}
        selectionMode='single'
        onSelectionChange={setSelectedKeys}
      >
        {options.map((option) => (
          <DropdownItem
            key={option}
            className='data-[hover]:bg-gray-50 text-center'
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownHero>
  )
}

export default Dropdown
