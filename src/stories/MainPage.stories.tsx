import React from 'react'
import { Story, Meta } from '@storybook/react'
import MainPage, { IMainPageProps } from './MainPage'

export default {
  title: 'Project/MainPage',
  component: MainPage
} as Meta

const Template: Story<IMainPageProps> = args => <MainPage {...args} />

export const NOTLOGIN = Template.bind({})
