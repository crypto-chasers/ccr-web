import React, { useEffect, useState } from 'react'
import {
  useContractFunction,
  useEthers,
  useContractCalls,
  useContractCall
} from '@usedapp/core'
import { Contract } from '@ethersproject/contracts'
import MainPage from './components/MainPage'
import CCR_ABI from './abi/CCR.json'
import { Falsy } from '@usedapp/core/dist/esm/src/model/types'
import { utils } from 'ethers'

const ccrInterface = new utils.Interface(CCR_ABI.abi)
// const ccrContractAddress = '0xd0a9bc1F6D47e777950CF5dB032886FB779aAAC1'
const ccrContractAddress = '0x81Ca1F6608747285c9c001ba4f5ff6ff2b5f36F8'
const contract = new Contract(ccrContractAddress, ccrInterface)

function useRemainSupply(ccrAddress: string | Falsy) {
  return (
    useContractCall(
      ccrAddress && {
        abi: ccrInterface, // ABI interface of the called contract
        address: ccrAddress, // On-chain address of the deployed contract
        method: 'getRemainingSupply', // Method to be called
        args: []
      }
    ) ?? []
  )
}

function useMintData(account?: string | null) {
  return useContractCalls(
    account
      ? [
          {
            abi: ccrInterface,
            address: ccrContractAddress,
            method: 'getMintedCount',
            args: [account!]
          },
          {
            abi: ccrInterface,
            address: ccrContractAddress,
            method: 'isInWhitelist',
            args: [account!]
          }
        ]
      : []
  )
}

export function App() {
  const [isMainnet] = useState<boolean>(true)
  const { activateBrowserWallet, account } = useEthers()
  const remainSupply = useRemainSupply(ccrContractAddress)
  const [mintedCount, isInWhitelist] = useMintData(account)

  const [isLogin, setLogin] = useState<boolean>(false)
  const [tx, setTx] = useState<string | null>(null)

  const { state, send } = useContractFunction(contract, 'mint', {
    transactionName: 'Mint'
  })

  const spendEther = (ethAmount: string) => {
    send({ value: utils.parseEther(ethAmount) })
  }

  const onError = (error: Error) => {
    console.log('connect wallet error: ', error.message)
  }

  useEffect(() => {
    if (
      state.status !== 'None' &&
      state.errorMessage !== undefined &&
      state.errorMessage !== ''
    ) {
      alert(state.errorMessage)
      return
    }
    if (state.status === 'Mining') {
      setTx(state.transaction!.hash)
    }
  }, [state]) // state.status === 'None' | 'Exception' | 'Mining' | 'Success', and has errorMessage

  return (
    <div>
      <MainPage
        isMainnet={isMainnet}
        isLogin={isLogin}
        canMint={isLogin && Number(mintedCount!) !== 2}
        nextSpend={
          isInWhitelist && isInWhitelist[0] && Number(mintedCount!) === 0
            ? '0'
            : Number(mintedCount!) !== 2
            ? '0.04'
            : '∞'
        }
        remain={
          remainSupply[0] === undefined ? undefined : remainSupply[0].toNumber()
        }
        pending={state.status === 'Mining'}
        tx={tx}
        address={account === null ? undefined : account}
        inWhilteList={isInWhitelist && isInWhitelist[0]}
        connectWallet={() => {
          activateBrowserWallet(onError)
          setLogin(true)
        }}
        send={() =>
          spendEther(
            isInWhitelist && isInWhitelist[0] && Number(mintedCount!) === 0
              ? '0.00'
              : '0.04'
          )
        }
      />
    </div>
  )
}
