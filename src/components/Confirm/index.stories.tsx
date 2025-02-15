import type { Meta, StoryObj } from '@storybook/react'
import Confirm from '.'
import useConfirm from '@/hooks/useConfirm'

const meta = {
  title: 'components/Confirm',
  component: Confirm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: false,
    title: '선택한 임시저장된 회고글을 삭제하시겠습니까?',
    message: '삭제된 글은 복구되지 않습니다.',
    returnTrue: () => {},
    returnFalse: () => {},
  },
} satisfies Meta<typeof Confirm>

export default meta
type Story = StoryObj<typeof meta>

const BasicConfirmComponent = () => {
  const { isOpen, openConfirm, returnTrue, returnFalse } = useConfirm()

  return (
    <>
      <Confirm
        isOpen={isOpen}
        title='선택한 임시저장된 회고글을 삭제하시겠습니까?'
        message='삭제된 글은 복구되지 않습니다.'
        returnFalse={returnFalse}
        returnTrue={returnTrue}
      />
      <button onClick={openConfirm}>오픈</button>
    </>
  )
}

export const BasicConfirm: Story = {
  render: BasicConfirmComponent,
}
