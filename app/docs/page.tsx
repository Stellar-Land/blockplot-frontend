import Link from "next/link"
import DocsSidebar from "@/components/DocsSidebar"

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 py-10 border-b border-white/5 last:border-0">
      {children}
    </section>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 text-2xl font-bold text-white">{children}</h2>
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-6 text-lg font-semibold text-white">{children}</h3>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 leading-7 text-gray-400">{children}</p>
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-sm text-blue-300">
      {children}
    </code>
  )
}

function Pre({ children }: { children: React.ReactNode }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-xl border border-white/5 bg-white/3 p-5 font-mono text-sm leading-relaxed text-gray-300">
      {children}
    </pre>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-white/5">
      <table className="w-full text-sm">
        <thead className="border-b border-white/5 bg-white/3">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/2">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-gray-300 font-mono text-xs">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Callout({ type, children }: { type: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const styles = {
    info: "border-blue-500/30 bg-blue-500/5 text-blue-300",
    warning: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300",
    tip: "border-green-500/30 bg-green-500/5 text-green-300",
  }
  const icons = {
    info: "ℹ",
    warning: "⚠",
    tip: "✓",
  }
  return (
    <div className={`my-4 flex gap-3 rounded-xl border p-4 text-sm leading-relaxed ${styles[type]}`}>
      <span className="mt-0.5 shrink-0">{icons[type]}</span>
      <div>{children}</div>
    </div>
  )
}

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Top nav */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#080B14]/90 px-6 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Block<span className="text-blue-400">plot</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              Docs v0.1
            </span>
            <Link href="/" className="hover:text-white transition-colors">
              ← Back to App
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto flex max-w-7xl gap-8 px-6">
        <DocsSidebar />

        {/* Main content */}
        <main className="min-w-0 flex-1 py-10">

          {/* Page header */}
          <div className="mb-12">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              Blockplot Soroban — Technical Documentation
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Blockplot Protocol Docs
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-400">
              Complete reference for the Blockplot Soroban permissioned RWA
              tokenization protocol — smart contracts, API, user flows, and
              wallet integration.
            </p>
          </div>

          {/* ── OVERVIEW ── */}
          <Section id="overview">
            <H2>Overview</H2>
            <P>
              <strong className="text-white">Blockplot Soroban</strong> is a
              compliant Real World Asset (RWA) tokenization platform that enables
              users globally to invest in fractionalized, yield-bearing assets
              such as real estate, infrastructure, and treasury-backed
              instruments.
            </P>
            <P>
              The platform uses Soroban smart contracts on the Stellar network to
              tokenize off-chain assets into transferable digital ownership units
              while enforcing compliance, identity verification, governance rules,
              and reward distribution entirely on-chain.
            </P>
            <P>
              Blockplot lowers the entry barrier to global asset ownership by
              enabling investments from as little as <strong className="text-white">$1</strong>,
              while providing liquidity, transparent reward distribution, and
              decentralized governance.
            </P>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Min. Investment", value: "$1" },
                { label: "Built On", value: "Stellar / Soroban" },
                { label: "Contract Language", value: "Rust" },
                { label: "Compliance", value: "KYC / AML" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/5 bg-white/3 p-4">
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-xs text-gray-400">{item.label}</div>
                </div>
              ))}
            </div>
          </Section>

          {/* ── PROBLEM STATEMENT ── */}
          <Section id="problem">
            <H2>Problem Statement</H2>
            <P>
              Traditional real-world asset investing suffers from structural
              barriers that exclude the majority of the world:
            </P>
            <div className="my-4 grid gap-3 sm:grid-cols-2">
              {[
                { title: "High Capital Requirements", desc: "Most real estate or infrastructure deals require tens of thousands of dollars minimum." },
                { title: "Illiquidity", desc: "Assets are locked up for years with no secondary market for exit." },
                { title: "Geographic Restrictions", desc: "Regulatory fragmentation prevents global investors from participating." },
                { title: "Lack of Transparency", desc: "Opaque structures make it difficult to verify ownership or yield." },
                { title: "Slow Settlement", desc: "Traditional settlement takes days; cross-border transfers take weeks." },
                { title: "Missing Compliance Tooling", desc: "Existing blockchain RWA systems lack built-in KYC and permissioning." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/5 bg-white/3 p-4">
                  <div className="mb-1 font-semibold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
            <P>
              Blockplot solves these challenges through compliant fractional
              ownership infrastructure built on Stellar — where transactions
              settle in seconds for fractions of a cent.
            </P>
          </Section>

          {/* ── ARCHITECTURE ── */}
          <Section id="architecture">
            <H2>Architecture</H2>
            <P>
              Blockplot is composed of three layers: on-chain contracts, an
              off-chain API, and the user-facing web application.
            </P>
            <Pre>{`┌─────────────────────────────────────────────────────────┐
│                    blockplot-frontend                    │
│        Next.js · Tailwind · Freighter SDK               │
└───────────────────────┬─────────────────────────────────┘
                        │ REST
┌───────────────────────▼─────────────────────────────────┐
│                    blockplot-backend                     │
│        NestJS · Identity · Assets · Yield modules       │
└───────────────────────┬─────────────────────────────────┘
                        │ Soroban RPC
┌───────────────────────▼─────────────────────────────────┐
│                   blockplot-contracts                    │
│                                                         │
│  BlockplotID ──► FractionalAsset ──► PublicSale         │
│                        │                                │
│                  YieldDistributor                       │
│                                                         │
│              Stellar · Soroban Runtime                  │
└─────────────────────────────────────────────────────────┘`}</Pre>

            <H3>Contract Interaction Flow</H3>
            <Pre>{`User wallet
    │
    ├─ 1. identity check  →  BlockplotID.is_verified()
    │
    ├─ 2. purchase        →  PublicSale.purchase()
    │                              │
    │                        FractionalAsset.mint()
    │
    └─ 3. claim yield     →  YieldDistributor.claim()`}</Pre>
          </Section>

          {/* ── SMART CONTRACTS ── */}
          <Section id="contracts">
            <H2>Smart Contracts</H2>
            <P>
              All contracts are written in Rust targeting the Soroban WASM
              runtime. The workspace lives at{" "}
              <Code>github.com/Stellar-Land/blockplot-contracts</Code>.
            </P>

            <Callout type="info">
              Build all contracts with:{" "}
              <Code>cargo build --target wasm32-unknown-unknown --release</Code>
            </Callout>

            {/* BlockplotID */}
            <div id="blockplot-id" className="scroll-mt-20 mt-8">
              <H3>BlockplotID</H3>
              <P>
                The identity and compliance layer. Every wallet that interacts
                with the protocol must first be verified through this contract.
                An admin (the compliance provider) controls status transitions.
              </P>

              <Table
                headers={["Function", "Access", "Description"]}
                rows={[
                  ["initialize(admin)", "Once", "Sets the compliance admin"],
                  ["set_status(user, status)", "Admin", "Sets identity state for a wallet"],
                  ["get_status(user)", "Public", "Returns current IdentityStatus"],
                  ["is_verified(user)", "Public", "Returns true if status is Verified"],
                ]}
              />

              <H3>Identity States</H3>
              <Pre>{`None ──► Pending ──► Verified
                            │
                         Revoked`}</Pre>

              <H3>Usage</H3>
              <Pre>{`// Approve a user on testnet
stellar contract invoke \\
  --id <BLOCKPLOT_ID_CONTRACT> \\
  --source admin \\
  --network testnet \\
  -- set_status \\
  --user GABC...XYZ \\
  --status Verified`}</Pre>
            </div>

            {/* FractionalAsset */}
            <div id="fractional-asset" className="scroll-mt-20 mt-8">
              <H3>FractionalAsset</H3>
              <P>
                An ownership token contract representing fractional exposure to
                an off-chain asset. Each deployed instance corresponds to one
                real-world asset. A per-wallet <Code>owner_cap</Code> prevents
                concentration and enforces ownership limits.
              </P>

              <Table
                headers={["Function", "Access", "Description"]}
                rows={[
                  ["initialize(admin, name, total_supply, owner_cap)", "Once", "Deploys and configures the asset token"],
                  ["mint(to, amount)", "Admin", "Issues tokens, enforces cap"],
                  ["transfer(from, to, amount)", "Holder", "Transfers tokens, cap-checked on recipient"],
                  ["balance_of(account)", "Public", "Returns token balance for a wallet"],
                  ["total_supply()", "Public", "Returns total issued supply"],
                  ["owner_cap()", "Public", "Returns max tokens any wallet may hold"],
                ]}
              />

              <Callout type="warning">
                Transfers do not verify KYC status — the application layer must
                call <Code>BlockplotID.is_verified()</Code> before constructing
                a transfer transaction.
              </Callout>
            </div>

            {/* PublicSale */}
            <div id="public-sale" className="scroll-mt-20 mt-8">
              <H3>PublicSale</H3>
              <P>
                The primary issuance marketplace. An admin opens and closes sale
                phases, sets the token price, and the contract tracks total funds
                raised. It returns the number of tokens to issue — token minting
                is handled by a subsequent <Code>FractionalAsset.mint()</Code> call.
              </P>

              <Table
                headers={["Function", "Access", "Description"]}
                rows={[
                  ["initialize(admin, token_price)", "Once", "Sets admin and per-token price in stroops"],
                  ["set_active(active)", "Admin", "Opens (true) or closes (false) the sale"],
                  ["purchase(buyer, payment_amount)", "Verified buyer", "Records purchase, returns token count"],
                  ["total_raised()", "Public", "Cumulative funds raised"],
                  ["is_active()", "Public", "Whether the sale is currently open"],
                  ["token_price()", "Public", "Current price per token"],
                ]}
              />

              <H3>Purchase flow</H3>
              <Pre>{`// 1. Check identity
const verified = await contract.is_verified(walletAddress)
if (!verified) throw new Error("KYC required")

// 2. Call purchase — returns token count
const tokens = await publicSale.purchase(buyer, paymentAmount)

// 3. Mint the tokens to the buyer
await fractionalAsset.mint(buyer, tokens)`}</Pre>
            </div>

            {/* YieldDistributor */}
            <div id="yield-distributor" className="scroll-mt-20 mt-8">
              <H3>YieldDistributor</H3>
              <P>
                Collects asset-generated income (rent, treasury yield, revenue
                sharing) and distributes it proportionally to token holders.
                Allocation is expressed in basis points (bps) where 10,000 bps =
                100%.
              </P>

              <Table
                headers={["Function", "Access", "Description"]}
                rows={[
                  ["initialize(admin)", "Once", "Sets the distribution admin"],
                  ["deposit(caller, amount)", "Admin", "Deposits yield into the pool"],
                  ["allocate(holder, allocation_bps)", "Admin", "Credits yield share to a holder"],
                  ["claimable(holder)", "Public", "Returns unclaimed yield for a wallet"],
                  ["claim(holder)", "Holder", "Withdraws all claimable yield, returns amount"],
                  ["total_deposited()", "Public", "Total yield deposited to date"],
                ]}
              />

              <H3>Allocation formula</H3>
              <Pre>{`claimable = (total_deposited × allocation_bps) / 10_000

// Example: holder owns 5% of the asset (500 bps)
// Total deposited: $10,000
// Claimable: (10_000 × 500) / 10_000 = $500`}</Pre>

              <Callout type="tip">
                Allocation basis points should mirror the holder's share of
                <Code>total_supply</Code>. The backend computes this off-chain
                after indexing <Code>balance_of</Code> values.
              </Callout>
            </div>
          </Section>

          {/* ── USER FLOWS ── */}
          <Section id="user-flows">
            <H2>User Flows</H2>

            <H3>1 — Onboarding</H3>
            <Pre>{`User connects Freighter wallet
        │
        ▼
User submits KYC form (name, country, ID)
        │
        ▼
Backend stores submission, status = "pending"
        │
        ▼
Compliance admin reviews and calls set_status(..., Verified)
        │
        ▼
User gains protocol access — can purchase asset tokens`}</Pre>

            <H3>2 — Investing in an Asset</H3>
            <Pre>{`User browses asset catalog → selects an asset
        │
        ▼
Protocol checks:  BlockplotID.is_verified(user) ✓
                  PublicSale.is_active()         ✓
                  payment ≥ token_price          ✓
        │
        ▼
PublicSale.purchase(buyer, amount)  →  returns token_count
        │
        ▼
FractionalAsset.mint(buyer, token_count)
        │
        ▼
Tokens appear in user's portfolio`}</Pre>

            <H3>3 — Claiming Yield</H3>
            <Pre>{`Asset generates income (rent collected, yield received)
        │
        ▼
Admin calls YieldDistributor.deposit(caller, income_amount)
        │
        ▼
Backend indexes balance_of for all holders
Computes each holder's allocation_bps
        │
        ▼
Admin calls YieldDistributor.allocate(holder, bps) for each holder
        │
        ▼
User opens /claim dashboard
User calls YieldDistributor.claim(wallet) via Freighter
        │
        ▼
Rewards land in user's Stellar wallet`}</Pre>
          </Section>

          {/* ── API REFERENCE ── */}
          <Section id="api-reference">
            <H2>API Reference</H2>
            <P>
              The backend exposes a REST API at{" "}
              <Code>http://localhost:3000</Code> in development. All endpoints
              return JSON.
            </P>

            <H3>Identity — <Code>/identity</Code></H3>
            <Table
              headers={["Method", "Endpoint", "Description"]}
              rows={[
                ["POST", "/identity/submit", "Submit KYC data for a wallet address"],
                ["GET", "/identity/:walletAddress", "Get current identity status"],
                ["PATCH", "/identity/:walletAddress/approve", "Approve and verify a wallet (admin)"],
                ["PATCH", "/identity/:walletAddress/revoke", "Revoke a wallet's verified status (admin)"],
              ]}
            />

            <Pre>{`// Submit KYC
POST /identity/submit
{
  "walletAddress": "GABC...XYZ",
  "kycData": { "name": "Alice", "country": "NG" }
}

// Response
{ "walletAddress": "GABC...XYZ", "status": "pending", "updatedAt": "..." }

// Approve (admin)
PATCH /identity/GABC...XYZ/approve
// → { "status": "verified", "updatedAt": "..." }`}</Pre>

            <H3>Assets — <Code>/assets</Code></H3>
            <Table
              headers={["Method", "Endpoint", "Description"]}
              rows={[
                ["POST", "/assets", "Register a new tokenized asset"],
                ["GET", "/assets", "List all registered assets"],
                ["GET", "/assets/:id", "Get a single asset by ID"],
              ]}
            />

            <Pre>{`// Create asset
POST /assets
{
  "name": "Lagos Commercial Tower A",
  "totalSupply": 1000000,
  "ownerCap": 100000,
  "priceUsd": 1
}

// Response
{
  "id": "uuid-here",
  "name": "Lagos Commercial Tower A",
  "totalSupply": 1000000,
  "ownerCap": 100000,
  "priceUsd": 1,
  "createdAt": "..."
}`}</Pre>

            <H3>Yield — <Code>/yield</Code></H3>
            <Table
              headers={["Method", "Endpoint", "Description"]}
              rows={[
                ["POST", "/yield/:assetId/deposit", "Deposit yield into an asset's pool"],
                ["GET", "/yield/:assetId/claimable/:walletAddress", "Get claimable amount for a holder"],
                ["POST", "/yield/:assetId/claim/:walletAddress", "Claim all yield for a holder"],
              ]}
            />

            <Pre>{`// Deposit yield
POST /yield/asset-id-123/deposit
{ "amount": 5000 }

// Check claimable
GET /yield/asset-id-123/claimable/GABC...XYZ
// → { "walletAddress": "GABC...XYZ", "claimable": 250 }

// Claim
POST /yield/asset-id-123/claim/GABC...XYZ
// → { "walletAddress": "GABC...XYZ", "claimed": 250 }`}</Pre>
          </Section>

          {/* ── WALLET INTEGRATION ── */}
          <Section id="wallet">
            <H2>Wallet Integration</H2>
            <P>
              Blockplot uses{" "}
              <a href="https://www.freighter.app" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Freighter
              </a>{" "}
              — the official Stellar browser extension wallet. Install it from{" "}
              <Code>freighter.app</Code> before connecting.
            </P>

            <H3>Connecting a wallet</H3>
            <Pre>{`import { isConnected, requestAccess, getAddress } from "@stellar/freighter-api"

// Check if Freighter is installed
const { isConnected: installed } = await isConnected()

// Request access — opens the Freighter popup
const { address, error } = await requestAccess()
if (error) throw new Error(error)

console.log("Connected:", address)
// → "GABC...XYZ"`}</Pre>

            <H3>Checking an existing session</H3>
            <Pre>{`// Silently restore a previous connection (no popup)
const { address } = await getAddress()
if (address) console.log("Already connected:", address)`}</Pre>

            <H3>Signing a transaction</H3>
            <Pre>{`import { signTransaction } from "@stellar/freighter-api"
import { Transaction } from "@stellar/stellar-sdk"

const { signedTxXdr, error } = await signTransaction(unsignedXDR, {
  networkPassphrase: Networks.TESTNET,
})
if (error) throw new Error(error)

// Submit the signed XDR to Stellar
await server.submitTransaction(TransactionBuilder.fromXDR(signedTxXdr, Networks.TESTNET))`}</Pre>

            <Callout type="info">
              Blockplot Frontend handles wallet state through the{" "}
              <Code>WalletProvider</Code> context in{" "}
              <Code>lib/wallet-context.tsx</Code>. Use the{" "}
              <Code>useWallet()</Code> hook in any client component to access{" "}
              <Code>address</Code>, <Code>connect()</Code>, and{" "}
              <Code>disconnect()</Code>.
            </Callout>

            <H3>Supported wallets</H3>
            <Table
              headers={["Wallet", "Status", "Notes"]}
              rows={[
                ["Freighter", "✓ Supported", "Primary integration"],
                ["Albedo", "Planned", "Phase 2"],
                ["WalletConnect", "Planned", "Phase 3 — mobile support"],
                ["Rabet", "Planned", "Phase 2"],
              ]}
            />
          </Section>

          {/* ── ROADMAP ── */}
          <Section id="roadmap">
            <H2>Roadmap</H2>

            <H3>Phase 1 — MVP (Current)</H3>
            <div className="space-y-2">
              {[
                ["done", "Identity system (BlockplotID contract)"],
                ["done", "Asset tokenization (FractionalAsset contract)"],
                ["done", "Primary sale marketplace (PublicSale contract)"],
                ["done", "Yield distribution (YieldDistributor contract)"],
                ["done", "NestJS backend with identity, asset, and yield modules"],
                ["done", "Frontend landing page with Freighter wallet connection"],
                ["todo", "KYC submission UI"],
                ["todo", "Asset catalog and detail pages"],
                ["todo", "Investor portfolio dashboard"],
                ["todo", "Yield claim UI"],
              ].map(([status, item]) => (
                <div key={item as string} className="flex items-start gap-3 text-sm">
                  <span className={`mt-0.5 shrink-0 text-xs ${status === "done" ? "text-green-400" : "text-gray-500"}`}>
                    {status === "done" ? "✓" : "○"}
                  </span>
                  <span className={status === "done" ? "text-gray-300" : "text-gray-500"}>{item as string}</span>
                </div>
              ))}
            </div>

            <H3>Phase 2 — Expansion</H3>
            <div className="space-y-2">
              {[
                "Governance contract — on-chain proposals and voting",
                "Secondary marketplace — peer-to-peer token transfers",
                "Albedo and Rabet wallet support",
                "PostgreSQL persistence with Prisma ORM",
                "Soroban event indexer",
                "Advanced portfolio analytics",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="mt-0.5 shrink-0 text-xs">○</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <H3>Phase 3 — Advanced RWA Infrastructure</H3>
            <div className="space-y-2">
              {[
                "AI-powered asset scoring and risk profiling",
                "Cross-chain interoperability via Stellar anchors",
                "Lending markets against tokenized collateral",
                "Institutional onboarding and white-label protocol",
                "Mobile app (React Native) with WalletConnect",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-gray-500">
                  <span className="mt-0.5 shrink-0 text-xs">○</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
              <p className="mb-4 text-gray-300">Ready to start building on Blockplot?</p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://github.com/Stellar-Land/blockplot-contracts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium hover:bg-blue-500 transition-colors"
                >
                  View Contracts on GitHub
                </a>
                <Link
                  href="/"
                  className="rounded-full border border-white/10 px-6 py-2.5 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Launch App
                </Link>
              </div>
            </div>
          </Section>

        </main>
      </div>
    </div>
  )
}
