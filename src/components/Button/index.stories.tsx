import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from '.'

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio' },
    size: { control: 'radio' },
    disabled: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
    children: 'Button',
    disabled: false,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const BasicButton: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    color: 'primary',
  },
}
