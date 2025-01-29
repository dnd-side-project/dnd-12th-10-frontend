import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'

const meta = {
  title: 'components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'radio' },
    size: { control: 'radio' },
  },
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const BasicChip: Story = {
  args: {
    color: 'gray',
    size: 'medium',
    label: 'label',
  },
}
