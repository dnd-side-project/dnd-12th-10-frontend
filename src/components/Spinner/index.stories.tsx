import type { Meta, StoryObj } from '@storybook/react'
import Spinner from '.'

const meta = {
  title: 'components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const BasicSpinner: Story = {}
