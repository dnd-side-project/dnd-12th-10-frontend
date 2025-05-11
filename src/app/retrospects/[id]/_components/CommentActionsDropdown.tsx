import { Icon } from '@/components/Icon'
import { Dropdown as DropdownHero } from '@heroui/dropdown'
import { DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react'

/** 댓글 수정,삭제 드롭다운 */
const CommentActionsDropdown = ({
  onShowInput,
  onOpenDeleteModal,
}: {
  onShowInput: () => void
  onOpenDeleteModal: () => void
}) => {
  return (
    <DropdownHero>
      <DropdownTrigger>
        <button className='ml-auto h-fit'>
          <Icon name='more' className='fill-gray-400' size={20} />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label='Leader Actions Menu'>
        <DropdownItem key='update-comment'>
          <button
            type='button'
            onClick={onShowInput}
            className='flex items-center gap-x-2'
          >
            <Icon name='pencil' size={18} />
            수정하기
          </button>
        </DropdownItem>
        <DropdownItem key='delete-comment' color='danger'>
          <button
            onClick={onOpenDeleteModal}
            className='flex items-center gap-x-2 text-orange-500'
          >
            <Icon name='trash' className='stroke-orange-500' size={18} />
            삭제하기
          </button>
        </DropdownItem>
      </DropdownMenu>
    </DropdownHero>
  )
}

export default CommentActionsDropdown
