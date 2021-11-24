import React from 'react'
import { Story, Meta } from '@storybook/react'
import MainPage, { IMainPageProps } from './MainPage'

export default {
  title: 'Project/MainPage',
  component: MainPage
} as Meta

const Template: Story<IMainPageProps> = args => <MainPage {...args} />

export const NOTLOGIN = Template.bind({})
NOTLOGIN.args = {
  isLogin: false,
  remain: 500
}

export const MINTOVER = Template.bind({})
MINTOVER.args = {
  remain: 0
}

export const CANMINT = Template.bind({})
CANMINT.args = {
  isLogin: true,
  etherBalance: 3.23324243,
  mintedCount: 0,
  remain: 500
}

export const BALANCENOTENOUGH = Template.bind({})
BALANCENOTENOUGH.args = {
  ...CANMINT.args,
  etherBalance: 0.01
}
