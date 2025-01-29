import type { Meta, StoryObj } from '@storybook/react'
import ChipButton from '.'

const meta = {
  title: 'components/ChipButton',
  component: ChipButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipButton>

export default meta
type Story = StoryObj<typeof meta>

export const BasicChipButton: Story = {
  args: {
    label: '레이블',
  },
}
