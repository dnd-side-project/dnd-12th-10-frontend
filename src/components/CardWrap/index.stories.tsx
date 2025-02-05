import type { Meta, StoryObj } from '@storybook/react'
import CardWrap from '.'

const meta = {
  title: 'components/CardWrap',
  component: CardWrap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    path: { control: 'text' },
    size: { control: 'radio' },
  },
  args: {
    children: 'Card Wrap',
  },
} satisfies Meta<typeof CardWrap>

export default meta
type Story = StoryObj<typeof meta>

export const BasicCardWrap: Story = {
  args: {
    path: '/',
    size: 'medium',
  },
}
