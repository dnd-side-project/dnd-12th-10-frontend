import type { Meta, StoryObj } from '@storybook/react'
import SelectBox from '.'

const OPTIONS = [
  { key: '취준생', label: '취준생' },
  { key: '학생', label: '학생' },
  { key: '프론트엔드 개발자', label: '프론트엔드 개발자' },
  { key: '백엔드 개발자', label: '백엔드 개발자' },
  { key: 'UX/UI 디자이너', label: 'UX/UI 디자이너' },
]

const meta = {
  title: 'components/SelectBox',
  component: SelectBox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    options: OPTIONS,
    placeholder: '직무를 선택해주세요.',
  },
}
