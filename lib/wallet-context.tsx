"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"
import {
  getAddress,
  isConnected,
  requestAccess,
} from "@stellar/freighter-api"

interface WalletState {
  address: string | null
  connecting: boolean
  freighterInstalled: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletState>({
  address: null,
  connecting: false,
  freighterInstalled: false,
  connect: async () => {},
  disconnect: () => {},
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [connecting, setConnecting] = useState(false)
  const [freighterInstalled, setFreighterInstalled] = useState(false)

  useEffect(() => {
    isConnected().then(({ isConnected: installed }) => {
      setFreighterInstalled(installed)
      if (installed) {
        getAddress().then(({ address: addr }) => {
          if (addr) setAddress(addr)
        })
      }
    })
  }, [])

  const connect = useCallback(async () => {
    if (!freighterInstalled) {
      window.open("https://www.freighter.app", "_blank")
      return
    }
    setConnecting(true)
    try {
      const { address: addr, error } = await requestAccess()
      if (error) throw new Error(error)
      setAddress(addr)
    } catch (err) {
      console.error("Wallet connection failed:", err)
    } finally {
      setConnecting(false)
    }
  }, [freighterInstalled])

  const disconnect = useCallback(() => {
    setAddress(null)
  }, [])

  return (
    <WalletContext.Provider
      value={{ address, connecting, freighterInstalled, connect, disconnect }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  return useContext(WalletContext)
}

export function shortenAddress(addr: string) {
  return `${addr.slice(0, 4)}…${addr.slice(-4)}`
}
