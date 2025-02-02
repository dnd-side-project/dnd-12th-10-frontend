import type { Meta, StoryObj } from '@storybook/react'
import Sidebar from '.'

const meta = {
  title: 'components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/', // 기본 경로 설정
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

// 🔹 기본 사이드바
export const BasicSidebar: Story = {}
