import { Dropdown, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'
import { Icon } from '@/components/Icon'
import ActionItem from './ActionItem'
import { ActionDropDownProps, ActionItemProps } from './types'

const ActionDropDown = <ItemListKey extends string>({
  role,
  itemList,
}: ActionDropDownProps<ItemListKey>) => {
  return (
    <Dropdown
      classNames={{
        content: 'min-w-[100px]',
      }}
    >
      <DropdownTrigger>
        <button className='ml-auto h-fit'>
          <Icon name='more' className='fill-gray-400' size={20} />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Group Actions Menu' className={'w-fit'}>
        <>
          {itemList[role].map((item: ActionItemProps) =>
            ActionItem({ ...item }),
          )}
        </>
      </DropdownMenu>
    </Dropdown>
  )
}

export default ActionDropDown
