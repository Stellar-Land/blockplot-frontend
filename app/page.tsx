import ConnectButton from "@/components/ConnectButton"

const stats = [
  { label: "Total Assets Tokenized", value: "24" },
  { label: "Total Value Locked", value: "$4.2M" },
  { label: "Verified Investors", value: "1,800+" },
  { label: "Yield Distributed", value: "$320K" },
];

const assets = [
  {
    id: "1",
    name: "Lagos Commercial Tower A",
    type: "Real Estate",
    apy: "11.2%",
    minInvestment: "$1",
    funded: 78,
  },
  {
    id: "2",
    name: "Nairobi Infrastructure Fund",
    type: "Infrastructure",
    apy: "9.5%",
    minInvestment: "$1",
    funded: 55,
  },
  {
    id: "3",
    name: "US Treasury Yield Basket",
    type: "Fixed Income",
    apy: "5.8%",
    minInvestment: "$1",
    funded: 91,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            Block<span className="text-blue-400">plot</span>
          </span>
          <div className="hidden gap-8 text-sm text-gray-400 sm:flex">
            <a href="#" className="hover:text-white transition-colors">Assets</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">Governance</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </div>
          <ConnectButton />
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Powered by Soroban · Stellar Network
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Own a piece of the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              real world
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
            Invest in fractionalized real estate, infrastructure, and
            treasury-backed assets from as little as $1 — fully compliant,
            on-chain, globally accessible.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold hover:bg-blue-500 transition-colors">
              Explore Assets
            </button>
            <button className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-gray-300 hover:border-white/20 hover:text-white transition-colors">
              Read the Docs
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/2 px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Asset cards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-2xl font-bold">Featured Assets</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className="rounded-2xl border border-white/5 bg-white/3 p-6 hover:border-blue-500/30 transition-colors"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                    {asset.type}
                  </span>
                  <span className="text-sm text-green-400">{asset.apy} APY</span>
                </div>
                <h3 className="mb-2 font-semibold">{asset.name}</h3>
                <p className="mb-4 text-sm text-gray-400">
                  Min. investment: {asset.minInvestment}
                </p>
                <div className="mb-1 flex justify-between text-xs text-gray-400">
                  <span>Funded</span>
                  <span>{asset.funded}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${asset.funded}%` }}
                  />
                </div>
                <button className="mt-5 w-full rounded-xl border border-blue-500/30 py-2.5 text-sm text-blue-400 hover:bg-blue-500/10 transition-colors">
                  Invest Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-gray-500">
        © 2025 Blockplot. Built on Stellar · Soroban.
      </footer>
    </div>
  );
}
