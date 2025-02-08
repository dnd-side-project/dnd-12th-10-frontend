import type { Meta, StoryObj } from '@storybook/react'
import { cn } from '@/utils/cn'
import { Icon, ICON_NAMES } from '.'

const meta = {
  title: 'components/Icons',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicIcons: Story = {
  render: (args) => (
    <div className='grid grid-cols-4 gap-6'>
      {ICON_NAMES.map((name) => {
        return (
          <div
            key={`icon-${name}`}
            className={cn(
              'flex flex-col justify-center items-center',
              'py-4 pt-4 pb-2',
            )}
          >
            <div className='p-4'>
              <Icon {...args} name={name} />
            </div>
            <div className='text-grey-700 mt-2 px-2'>{name}</div>
          </div>
        )
      })}
    </div>
  ),
}
