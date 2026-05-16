"use client"

import { shortenAddress, useWallet } from "@/lib/wallet-context"

export default function ConnectButton() {
  const { address, connecting, freighterInstalled, connect, disconnect } =
    useWallet()

  if (address) {
    return (
      <div className="flex items-center gap-2">
        <span className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          {shortenAddress(address)}
        </span>
        <button
          onClick={disconnect}
          className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-red-500/40 hover:text-red-400"
        >
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={connect}
      disabled={connecting}
      className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium transition-colors hover:bg-blue-500 disabled:opacity-60"
    >
      {connecting
        ? "Connecting…"
        : freighterInstalled
          ? "Connect Wallet"
          : "Install Freighter"}
    </button>
  )
}
