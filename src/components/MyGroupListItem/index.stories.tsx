import type { Meta, StoryObj } from '@storybook/react'
import MyGroupListItem from '.'

const meta = {
  title: 'components/MyGroupListItem',
  component: MyGroupListItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    peopleCount: { control: 'number' },
    clipCount: { control: 'number' },
  },
  args: {
    title: 'Card Wrap',
    description: 'Card Wrap',
    peopleCount: 1,
    clipCount: 1,
    tagList: ['tag1', 'tag2'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MyGroupListItem>

export default meta
type Story = StoryObj<typeof meta>

export const BasicMyGatheringListItem: Story = {
  args: {
    title: 'Card Wrap',
    description: 'Card Wrap',
    peopleCount: 1,
    clipCount: 1,
    tagList: ['tag1', 'tag2'],
    id: '1',
  },
}
