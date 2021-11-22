import React from 'react'

export interface IMainPageProps {
  etherBalance: number
  minted: 0 | 1 | 2
  remain: number
  isMintOver: boolean
}

const MainPage = ({
  minted,
  etherBalance,
  remain,
  isMintOver
}: IMainPageProps) => {
  return <div>hello</div>
}

export default MainPage
