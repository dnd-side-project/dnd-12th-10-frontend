import Switch from '.'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'

const OPTIONS = { GROUP: '모임회고', PERSONAL: '개인회고' }

const meta = {
  title: 'components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    options: OPTIONS,
    value: '',
    onChange: () => {},
  },
  argTypes: {},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

const BasicSwitchComponent = () => {
  const [type, setType] = useState('GROUP')

  return (
    <>
      <Switch
        options={OPTIONS}
        onChange={(value) => {
          setType(value)
        }}
        value={type}
      />
    </>
  )
}

export const BasicSwitch: Story = {
  render: BasicSwitchComponent,
}
