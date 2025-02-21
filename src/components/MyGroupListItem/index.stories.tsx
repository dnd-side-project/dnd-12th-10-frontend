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
    groupName: { control: 'text' },
    description: { control: 'text' },
    userCount: { control: 'number' },
    retrospectCount: { control: 'number' },
  },
  args: {
    groupName: 'Card Wrap',
    description: 'Card Wrap',
    userCount: 1,
    retrospectCount: 1,
    categoryNames: ['tag1', 'tag2'],
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
    groupName: 'Card Wrap',
    description: 'Card Wrap',
    userCount: 1,
    retrospectCount: 1,
    categoryNames: ['tag1', 'tag2'],
    groupId: 1,
  },
}
