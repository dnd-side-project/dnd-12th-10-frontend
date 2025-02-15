import type { Meta, StoryObj } from '@storybook/react'
import Modal from '.'
import useModal from '@/hooks/useModal'

const meta = {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    isOpen: false,
    onClose: () => {},
    children: 'Modal Content',
  },
  argTypes: {
    isOpen: {
      control: false,
    },
    onClose: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

const BasicModalComponent = () => {
  const { isOpen, openModal, closeModal } = useModal()

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </>
  )
}

export const BasicModal: Story = {
  render: BasicModalComponent,
}
