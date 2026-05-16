"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem Statement" },
  { id: "architecture", label: "Architecture" },
  { id: "contracts", label: "Smart Contracts" },
  { id: "blockplot-id", label: "↳ BlockplotID", indent: true },
  { id: "fractional-asset", label: "↳ FractionalAsset", indent: true },
  { id: "public-sale", label: "↳ PublicSale", indent: true },
  { id: "yield-distributor", label: "↳ YieldDistributor", indent: true },
  { id: "user-flows", label: "User Flows" },
  { id: "api-reference", label: "API Reference" },
  { id: "wallet", label: "Wallet Integration" },
  { id: "roadmap", label: "Roadmap" },
]

export default function DocsSidebar() {
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: "-20% 0px -70% 0px" }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 overflow-y-auto border-r border-white/5 py-8 pr-6 lg:block">
      <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
        Documentation
      </p>
      <nav className="space-y-0.5">
        {sections.map(({ id, label, indent }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
              indent ? "pl-5" : ""
            } ${
              active === id
                ? "bg-blue-500/10 text-blue-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="mt-8 border-t border-white/5 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Resources
        </p>
        <div className="space-y-1.5 text-sm text-gray-400">
          <a
            href="https://github.com/Stellar-Land/blockplot-contracts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://soroban.stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Soroban Docs
          </a>
          <a
            href="https://www.freighter.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </svg>
            Freighter Wallet
          </a>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-300 transition-colors"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to app
        </Link>
      </div>
    </aside>
  )
}
