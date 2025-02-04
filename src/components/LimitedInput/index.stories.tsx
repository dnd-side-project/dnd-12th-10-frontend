import type { Meta, StoryObj } from '@storybook/react'
import LimitedInput from '.'

const meta = {
  title: 'components/LimitedInput',
  component: LimitedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: { type: 'number' },
  },
} satisfies Meta<typeof LimitedInput>

export default meta
type Story = StoryObj<typeof meta>

export const Limited_Input: Story = {
  args: {
    placeholder: '텍스트를 입력하세요.',
    multiline: false,
  },
}

export const Limited_Textfield: Story = {
  args: {
    placeholder: '텍스트를 입력하세요.',
    multiline: true,
  },
}
