import type { Meta, StoryObj } from '@storybook/react'
import ToastContent from './ToastContent'

const meta = {
  title: 'components/ToastContent',
  component: ToastContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
    isShowCloseButton: { control: 'boolean' },
  },
  args: {
    message: 'Success',
    isShowCloseButton: false,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          borderRadius: '4px',
          padding: '12px 16px',
          background: '#303030',
          color: '#fff',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToastContent>

export default meta
type Story = StoryObj<typeof meta>

export const BasicCustomToast: Story = {
  args: {
    message: 'Success',
    isShowCloseButton: true,
    toastId: '1',
  },
}
