import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from '.'

const OPTIONS = ['인기순', '최신순']

const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const BasicDropdown: Story = {
  args: {
    options: OPTIONS,
  },
}
