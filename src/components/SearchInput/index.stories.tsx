import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import SearchInput from '.'

const meta = {
  title: 'components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    showSearchButton: { type: 'boolean' },
  },
} satisfies Meta<typeof SearchInput>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    placeholder: '텍스트를 입력하세요.',
    showSearchButton: false,
    onSearch: fn(),
  },
}
