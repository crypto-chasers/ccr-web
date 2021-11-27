import React from 'react'
import { Story, Meta } from '@storybook/react'
import MainPage, { IMainPageProps } from './MainPage'
import { BigNumber } from '@ethersproject/bignumber'

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
  canMint: true,
  nextSpend: '0.04',
  remain: 342,
  address: '0x1234567890123456789012345678901234567890'
}

export const CANNOTMINT = Template.bind({})
CANNOTMINT.args = {
  ...CANMINT.args,
  canMint: false,
  nextSpend: '∞'
}

export const PENDING = Template.bind({})
PENDING.args = {
  ...CANMINT.args,
  pending: true,
  tx: '0x35fb8fdbebddab1b707fd79c395cef25d7a88080c6790079d77d630657a394bc'
}
