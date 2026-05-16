<div align="center">

# Blockplot Frontend

**Next.js investor dashboard for the Blockplot Soroban permissioned RWA tokenization protocol.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://typescriptlang.org)
[![Built on Stellar](https://img.shields.io/badge/Built%20on-Stellar-blue)](https://stellar.org)

</div>

---

## Overview

`blockplot-frontend` is the investor-facing web application for Blockplot Soroban — a compliant, permissioned platform for fractionalizing and distributing real-world yield-bearing assets on the Stellar network.

The app gives investors, asset managers, and DAO communities a clean interface to:

- **Browse tokenized assets** — real estate, infrastructure, treasury products
- **Complete KYC verification** — connect wallet and pass compliance checks
- **Invest fractionally** — purchase asset tokens from as little as $1
- **Track portfolio** — view holdings, allocation scores, and unclaimed yield
- **Claim yield** — withdraw earned rewards on-chain
- **Participate in governance** — vote on asset proposals

Built with [Next.js 16](https://nextjs.org) App Router and [Tailwind CSS](https://tailwindcss.com).

---

## Pages & Features

```
/                  Landing + featured asset cards + protocol stats
/assets            Full asset catalog with filters
/assets/[id]       Individual asset detail: metrics, funding progress, buy
/dashboard         Portfolio overview: holdings, yield, allocation score
/kyc               KYC submission flow (wallet connect → identity form → status)
/governance        Active proposals + voting interface
/claim             Unclaimed yield summary + one-click claim
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Wallet | Freighter SDK (Stellar) |
| Blockchain | Soroban JS SDK |
| State | React Context + Server Components |
| Data fetching | Server Components + Route Handlers |

---

## Repository Structure

```
blockplot-frontend/
├── app/
│   ├── layout.tsx              # Root layout — metadata, fonts, dark theme
│   ├── page.tsx                # Landing page — hero, stats, asset cards
│   ├── globals.css             # Tailwind base styles
│   └── (future pages)
│       ├── assets/
│       │   ├── page.tsx        # Asset catalog
│       │   └── [id]/page.tsx   # Asset detail
│       ├── dashboard/page.tsx  # Investor portfolio
│       ├── kyc/page.tsx        # KYC flow
│       ├── governance/page.tsx # DAO voting
│       └── claim/page.tsx      # Yield claiming
├── components/                 # Shared UI components (future)
├── lib/                        # Stellar / Soroban SDK helpers (future)
├── public/                     # Static assets
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9
- [Freighter wallet extension](https://www.freighter.app/) (for wallet connection)

### Install & run

```bash
git clone https://github.com/Stellar-Land/blockplot-frontend.git
cd blockplot-frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file at the root:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_STELLAR_NETWORK` | `testnet` or `mainnet` |
| `NEXT_PUBLIC_SOROBAN_RPC_URL` | Soroban RPC endpoint URL |
| `NEXT_PUBLIC_BLOCKPLOT_ID_CONTRACT` | BlockplotID contract address |
| `NEXT_PUBLIC_FRACTIONAL_ASSET_CONTRACT` | FractionalAsset contract address |
| `NEXT_PUBLIC_PUBLIC_SALE_CONTRACT` | PublicSale contract address |
| `NEXT_PUBLIC_YIELD_DISTRIBUTOR_CONTRACT` | YieldDistributor contract address |
| `NEXT_PUBLIC_BACKEND_URL` | Blockplot backend API base URL |

---

## Wallet Integration

Blockplot Frontend integrates with **Freighter** — the leading Stellar browser wallet.

```ts
import freighter from "@stellar/freighter-api";

// Check if installed
const isConnected = await freighter.isConnected();

// Request wallet access
const { address } = await freighter.requestAccess();

// Sign a transaction
const signedXDR = await freighter.signTransaction(xdr, { network: "TESTNET" });
```

See [Freighter docs](https://docs.freighter.app) for full integration details.

---

## Soroban Integration

Contract calls are made through the [Stellar SDK](https://stellar.github.io/js-stellar-sdk/):

```ts
import { Contract, SorobanRpc, TransactionBuilder, Networks } from "@stellar/stellar-sdk";

const server = new SorobanRpc.Server(process.env.NEXT_PUBLIC_SOROBAN_RPC_URL!);

// Call is_verified on BlockplotID
const contract = new Contract(process.env.NEXT_PUBLIC_BLOCKPLOT_ID_CONTRACT!);
const operation = contract.call("is_verified", nativeToScVal(walletAddress, { type: "address" }));
```

---

## User Flows

### Onboarding
```
Connect Freighter wallet
        │
        ▼
Submit KYC form (/kyc)
        │
        ▼
Admin approves on-chain
        │
        ▼
Wallet verified — protocol access granted
```

### Investing
```
Browse /assets → select asset
        │
        ▼
Enter amount → confirm compliance check
        │
        ▼
Sign transaction in Freighter
        │
        ▼
Asset tokens appear in /dashboard
```

### Claiming Yield
```
/claim shows claimable balance
        │
        ▼
Click Claim → sign transaction
        │
        ▼
Rewards land in wallet
```

---

## Roadmap

- [ ] Freighter wallet connection
- [ ] KYC submission form + status polling
- [ ] Asset catalog page with filters (type, APY, funded %)
- [ ] Asset detail page with live funding progress
- [ ] Dashboard: holdings, allocation score, yield breakdown
- [ ] Yield claim page with one-click UX
- [ ] Governance: proposal list + on-chain voting
- [ ] Mobile-responsive layout
- [ ] Dark/light mode toggle
- [ ] Testnet demo deployment

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Follow the existing page/component structure
4. Open a PR with screenshots or a screen recording for UI changes

---

## License

[MIT](LICENSE) © Stellar-Land / Blockplot
