import React from 'react'

export interface IMainPageProps {
  isMainnet: boolean
  isLogin?: boolean
  canMint?: boolean
  nextSpend: '0' | '0.04' | '∞'
  remain?: number
  pending?: boolean
  tx?: string | null
  address?: string
  inWhilteList?: boolean
  connectWallet?: (
    onError?: (error: Error) => void,
    throwErrors?: boolean
  ) => void
  send?: any
}

const MainPage = ({
  isMainnet,
  isLogin,
  canMint,
  nextSpend,
  remain,
  pending,
  tx,
  address,
  inWhilteList,
  connectWallet,
  send
}: IMainPageProps) => {
  return (
    <div>
      <img
        className="fixed top-0 left-0 z-0 bg-yellow-700 bg-repeat-y"
        src="/background.png"
      />
      {/* modal */}
      {pending ? (
        <div className="overflow-y-auto fixed inset-0 z-30 w-full h-full bg-gray-600 bg-opacity-50">
          <div className="relative top-52 p-5 mx-auto w-60 lg:w-1/2 bg-yellow-500 border-4 border-yellow-100 border-dashed shadow-lg">
            <div className="mt-3 text-center">
              <h3 className="font-pix text-2xl text-dark text-md">确认中</h3>
              <div className="py-3 px-7 mt-2">
                <a
                  href={`https://${
                    isMainnet ? '' : 'rinkeby.'
                  }etherscan.io/tx/${tx}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="overflow-auto font-pix text-dark text-md">
                    TX: <span className="underline"> {tx}</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="absolute top-0 left-0 z-10 p-2 lg:mx-72">
        <div className="flex p-2 h-12 md:h-20">
          <img src="/logo.png" />

          <p className="mt-2 mr-2 ml-auto main-text">
            {isMainnet ? '主网' : 'Rinkey测试网'}
          </p>

          <a
            target="_blank"
            href="https://discord.gg/UdqpSwAF2e"
            rel="noreferrer"
          >
            <img className="max-h-9 md:max-h-36" src="/discord.png" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/cryptochasersco"
            rel="noreferrer"
          >
            <img className="h-14 max-h-9 md:max-h-36" src="/twitter.png" />
          </a>
          <a
            target="_blank"
            href="https://opensea.io/collection/cryptochasers-robot"
            rel="noreferrer"
          >
            <img className="ml-1 h-14 max-h-9 md:max-h-36" src="/opensea.png" />
          </a>
        </div>
        {/* introduction */}
        <div className="grid md:grid-cols-2 gap-2 px-2">
          <p className="md:text-3xl main-text">
            CryptoChasers Robot
            是CryptoChasers社区的第一个NFT。社区主要由经验丰富的薅毛玩家和技术娴熟的科学家组成，进入社区享有最新活动信息、赚钱经验分享和实战技术指导。
          </p>
          <div className="flex justify-center">
            <img className="block py-2 w-80 h-80" src="robot.png" />
          </div>
        </div>

        {/* mint button */}
        <div className="flex justify-center px-2 my-4">
          <div className="flex-col md:w-96 lg:w-auto">
            {isLogin ? (
              <a
                href={`https://${
                  isMainnet ? '' : 'testnets.'
                }opensea.io/${address}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="font-pix text-sm leading-none text-left text-light underline align-top">
                  当前账户: {address}
                </span>
              </a>
            ) : (
              <></>
            )}

            <div className="my-2 font-pix text-2xl md:text-3xl text-main">
              <span className="mr-12 text-light">剩余: {remain}</span>
              {remain === 0 ? (
                <></>
              ) : !isLogin === undefined ? (
                <></>
              ) : canMint ? (
                <span className="text-light overflow-clip">
                  价格: {nextSpend ?? '0.04'}E
                </span>
              ) : !isLogin ? (
                <></>
              ) : (
                <span className=" text-light">限购2个</span>
              )}
            </div>
            {remain === 0 ? (
              <></>
            ) : !inWhilteList && Date.now() <= 1_638_345_600_000 ? (
              <p className="my-2 font-pix text-2xl md:text-3xl text-main">
                mint时间 2021年12月1日16:00 UTC+8
              </p>
            ) : !isLogin ? (
              <img
                src="/button_metamask.png"
                onClick={() => {
                  console.log('connect to metamask')
                  connectWallet!()
                }}
              />
            ) : canMint ? (
              <img src="/mint.png" onClick={send} />
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* distribution plan */}
        <div className="p-2">
          <p className="title-text">发行计划</p>
          <p className="main-text">
            售价 0.04 ETH，每个地址限购 2 个，总量500，其中 100 个左右用于空投。
            销售收入将进入社区金库，除去支付NFT制作发行的费用，其余由未来社区使用。
          </p>
        </div>
        {/* background story */}
        <div className="p-2">
          <p className="title-text">背景故事</p>
          <p className="main-text">
            疫情后抹杀不同国家、人类之间缺少信任，科技的载体——智能机器人“讯”们成为人与人仅有的维系；一只以情感联结为名研发的老旧机器人，执行着很多年前研发者的指令，在陌生的世界面对“关闭了真实情感”的人，继续生存和“觉醒”。
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
              <img className="avatar" src="/bigplayer.jpg" />
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
