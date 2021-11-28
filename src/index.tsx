import React from 'react'
import ReactDOM from 'react-dom'
import { ChainId, DAppProvider } from '@usedapp/core'
import { App } from './App'
import './styles.css'

const config = {
  readOnlyChainId:
    process.env.REACT_APP_IS_MAINNET === 'true'
      ? ChainId.Mainnet
      : ChainId.Rinkeby,
  readOnlyUrls: {
    [ChainId.Rinkeby]:
      'https://rinkeby.infura.io/v3/7b5aa8e0c2d44880ad8ed76c0a799df6',
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/7b5aa8e0c2d44880ad8ed76c0a799df6'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
