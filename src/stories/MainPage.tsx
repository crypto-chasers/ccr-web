import React from 'react'

export interface IMainPageProps {
  isLogin?: boolean
  etherBalance?: number
  mintedCount?: 0 | 1 | 2
  remain?: number
}

const MainPage = ({
  isLogin,
  etherBalance,
  mintedCount,
  remain
}: IMainPageProps) => {
  return (
    <div>
      <img
        className="fixed top-0 left-0 z-0 bg-yellow-700 bg-repeat-y"
        src="/background.png"
      />
      <div className="absolute top-0 left-0 z-10 p-2 lg:mx-72">
        <div className="flex p-2 h-12 md:h-20">
          <img src="/logo.png" />
          <a className="ml-auto" href="https://discord.gg/UdqpSwAF2e">
            <img src="/discord.png" />
          </a>
          <a href="https://twitter.com/cryptochasersco">
            <img src="/twitter.png" />
          </a>
        </div>
        {/* introduction */}
        <div className="grid md:grid-cols-2 gap-2 px-2">
          <p className="md:text-3xl main-text">
            CryptoChasers Robot
            是由随机元素生成的NFT，是CryptoChasers社区的身份证。社区主要由经验丰富的薅毛玩家和技术娴熟的科学家组成，进入社区享有最新活动信息、赚钱经验分享和实战技术指导。
          </p>
          <div className="flex justify-center">
            <img className="hidden md:block py-2 w-80 h-80" src="robot.png" />
          </div>
        </div>
        {/* mint button */}
        <div className="flex justify-center my-4">
          <div className="flex-col md:w-96 lg:w-auto">
            <div className="my-2 font-pix text-2xl md:text-4xl text-main">
              <span className="mr-4 text-light">剩余: {remain}</span>
              {remain === 0 ? (
                <></>
              ) : !isLogin ? (
                <></>
              ) : etherBalance! <= 0.04 ? (
                <span>需0.04ETH</span>
              ) : (
                <span className="text-light">可mint: {2 - mintedCount!}</span>
              )}
            </div>
            {remain === 0 ? (
              <></>
            ) : !isLogin ? (
              <img src="/button_metamask.png" />
            ) : etherBalance! <= 0.04 ? (
              <></>
            ) : (
              <img src="/mint.png" />
            )}
          </div>
        </div>
        {/* background story */}
        <div className="p-2">
          <p className="title-text">背景故事</p>
          <p className="main-text">
            疫情后抹杀不同国家、人类之间缺少信任，科技的载体——智能机器人“讯”们成为人与人仅有的维系；一只以情感联结为名研发的老旧机器人，执行着很多年前研发者的指令，在陌生的世界面对“关闭了真实情感”的人，继续生存和“觉醒”。
          </p>
        </div>
        {/* distribution plan */}
        <div className="p-2">
          <p className="title-text">发行计划</p>
          <p className="main-text">
            售价 0.04 ETH，每个地址限购 2 个，总量500，其中 100 个左右用于空投。
            销售收入将进入社区金库，除去支付NFT制作发行的费用，其余由未来社区使用。
          </p>
        </div>
        {/* community leader */}
        <div className="hidden sm:block p-2">
          <p className="p-2 title-text">社区代表</p>
          <div className="grid grid-cols-4">
            <a
              className="avatar-container"
              href="https://twitter.com/scriptdotmoney"
            >
              <img className="avatar" src="/scriptmoney.png" />
              <p className="intro-text">脚本刷钱</p>
            </a>
            <a
              className="avatar-container"
              href="https://twitter.com/huangnanlv"
            >
              <img className="avatar" src="/huangnanlv.png" />
              <p className="intro-text">huangnanlv</p>
            </a>
            <a className="avatar-container" href="https://twitter.com/wsdxbz1">
              <img className="avatar" src="/bigplayer.png" />
              <p className="intro-text">BigPlayer</p>
            </a>
            <a
              className="avatar-container"
              href="https://twitter.com/BitCloutCat"
            >
              <img className="avatar" src="/lasercat.png" />
              <p className="intro-text">LaserCat</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
