import Logo from "./components/Logo";
import CopyButton from "./components/CopyButton";
import CurrentYear from "./components/CurrentYear";
import BuySection from "./components/BuySection";
import ContactForm from "./components/ContactForm";
import ThemeToggle from "./components/ThemeToggle";

const TOKEN = {
  name: "Tether USDT",
  symbol: "USDT",
  contract: "0x6988D3cdDBB6Bd695D5c01d5229B1628B94E1FEB",
  chain: "Ethereum",
  standard: "ERC-20",
  decimals: 6,
  maxSupply: "560,015,276",
  holders: "2",
  transfers: "—",
  marketCap: "$175B–$176.8B",
  compiler: "v0.8.34+commit.80d5c536",
  license: "MIT",
  optimization: "Yes · 200 runs",
  evmVersion: "default",
  verified: "Exact Match",
};

const shortContract = `${TOKEN.contract.slice(0, 6)}…${TOKEN.contract.slice(-4)}`;
const etherscanUrl = `https://etherscan.io/token/${TOKEN.contract}`;

/* ─── "Why use Tether?" content ────────────────────────────────────── */
type WhyFeature = { title: string; desc: string; icon: React.ReactNode };

const WHY_FEATURES: WhyFeature[] = [
  {
    title: "Multiple blockchains support",
    desc: "Tether tokens are built on multiple blockchains — offering easy integration and adoption. Supported blockchains are Algorand, Avalanche, Bitcoin, Ethereum, EOS, Kava, Polka, Polygon, Solana, TRON and Tezos.",
    icon: (
      <>
        <circle cx="9" cy="9" r="6" />
        <circle cx="15" cy="9" r="6" />
        <circle cx="12" cy="14.5" r="6" />
      </>
    ),
  },
  {
    title: "Unparalleled liquidity",
    desc: "Tether tokens are among the most traded tokens in terms of daily volume, offering unequalled liquidity.",
    icon: (
      <>
        <ellipse cx="12" cy="5.5" rx="8" ry="3" />
        <path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        <path d="M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </>
    ),
  },
  {
    title: "Widespread Adoption",
    desc: "From exchanges and digital wallet apps to decentralised finance (DeFi) protocols and payment services, Tether tokens offer a smart alternative to fiat gateways.",
    icon: (
      <>
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16.5z" />
        <path d="M20 11h-3.2a1.8 1.8 0 0 0 0 3.6H20" />
        <circle cx="17.2" cy="12.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "100% backed by Tether's reserves",
    desc: "All Tether tokens are pegged at 1-to-1 with a matching fiat currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by Tether's reserves. The reserves match or exceed the amount required to redeem all Tether tokens in circulation.",
    icon: (
      <>
        <path d="M12 3l8 3.5v5.2c0 4.8-3.4 8.3-8 9.3-4.6-1-8-4.5-8-9.3V6.5L12 3z" />
        <path d="M9 11.8l2.2 2.2 4-4.2" />
      </>
    ),
  },
  {
    title: "Fully transparent",
    desc: "Tether tokens' issued and reserve assets are publicly available and updated.",
    icon: (
      <>
        <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    title: "Available in different currencies",
    desc: "Tether supports US dollar (USD) and Mexican Peso (MXN). Represented by ₮, Tether tokens are denoted as USD₮, MXN₮.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <ellipse cx="12" cy="12" rx="4.2" ry="9" />
      </>
    ),
  },
  {
    title: "Regulatory-compliant",
    desc: "Tether maintains world-class standardised compliance measures for anti-money laundering (AML), countering the financing of terrorism (CFT), sanctions, and know your customer (KYC) laws and regulations.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.4 12.4l2.5 2.5 4.7-5.2" />
      </>
    ),
  },
  {
    title: "Best-in-class customer support",
    desc: "A highly-trained customer support team is ready to help you 24/7.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.6a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.6v.3" />
        <circle cx="12" cy="17.4" r="0.7" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg text-fg">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 h-[380px] w-[380px] rounded-full bg-brand-400/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <Logo size={36} />
            <span className="text-lg font-semibold tracking-tight">
              Tether<span className="text-accent">USDT</span>
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-fg-muted md:flex">
            <a href="#about" className="transition-colors hover:text-fg">
              About
            </a>
            <a href="#why" className="transition-colors hover:text-fg">
              Why Tether
            </a>
            <a href="#tokenomics" className="transition-colors hover:text-fg">
              Tokenomics
            </a>
            <a href="#buy" className="transition-colors hover:text-fg">
              How to Buy
            </a>
            <a href="#contract" className="transition-colors hover:text-fg">
              Contract
            </a>
            <a href="#contact" className="transition-colors hover:text-fg">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={etherscanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/40"
            >
              <span className="hidden sm:inline">View on Etherscan</span>
              <span className="sm:hidden">Etherscan</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="animate-fade-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
                </span>
                {TOKEN.standard} · {TOKEN.chain} Mainnet
              </div>

              <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Tether <span className="text-accent">USDT</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
                A verified ERC-20 token on the Ethereum network. Fixed maximum
                supply of {TOKEN.maxSupply} tokens with 6 decimals — built for
                transparency, speed, and seamless DeFi integration.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={etherscanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-xl shadow-brand-500/30 transition-all hover:bg-brand-400 hover:shadow-brand-400/50"
                >
                  Buy on Etherscan
                </a>
                <a
                  href="#buy"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-7 py-3.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
                >
                  How to Buy
                </a>
              </div>

              {/* Contract chip */}
              <div className="mt-10 inline-flex max-w-full items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3">
                <span className="text-xs uppercase tracking-wider text-fg-subtle">
                  Contract
                </span>
                <code className="font-mono text-sm text-fg">
                  <span className="hidden sm:inline">{TOKEN.contract}</span>
                  <span className="sm:hidden">{shortContract}</span>
                </code>
                <CopyButton value={TOKEN.contract} />
              </div>
            </div>

            {/* Logo visual */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-brand-500/30 blur-[80px]" />
                <div className="animate-float">
                  <Logo size={340} className="drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            <StatCard label="Max Total Supply" value={TOKEN.maxSupply} />
            <StatCard label="Holders" value={TOKEN.holders} />
            <StatCard label="Decimals" value={String(TOKEN.decimals)} />
            <StatCard label="24h Transfers" value={TOKEN.transfers} />
            <StatCard
              label="Onchain Market Cap"
              value={TOKEN.marketCap}
              accent
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                A token engineered for the <span className="text-accent">real economy</span>
              </h2>
            </div>
            <div className="space-y-6 text-fg-muted">
              <p className="text-lg leading-relaxed">
                Tether USDT is an ERC-20 token deployed on Ethereum with a fixed
                maximum supply of {TOKEN.maxSupply}. The contract inherits from
                the battle-tested OpenZeppelin v5.0.2 implementation, providing
                a secure and standard-compliant foundation.
              </p>
              <p className="leading-relaxed">
                With 6 decimal places — matching leading USD-pegged tokens —
                Tether USDT is optimized for everyday transactions,
                remittances, and integration into decentralized applications.
                Ownership and minting rights are restricted to the contract
                owner, while any holder can burn their own tokens.
              </p>
              <div className="grid gap-3 pt-2 sm:grid-cols-2">
                <Feature
                  title="Verified Source"
                  desc="Exact-match source code verified on-chain."
                />
                <Feature
                  title="Ownable"
                  desc="Owner-gated minting for controlled supply."
                />
                <Feature
                  title="Burnable"
                  desc="Holders can permanently reduce supply."
                />
                <Feature
                  title="6 Decimals"
                  desc="Optimized for USD-style transactions."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why use Tether? */}
        <section id="why" className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel center>Why use Tether?</SectionLabel>
          <h2 className="mt-4 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            The most stable, liquid and trusted stablecoin
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-fg-muted">
            Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin
            model and are the most widely traded. Tether tokens offer the
            stability and simplicity of fiat currencies coupled with the
            innovative nature of blockchain technology, representing a perfect
            combination of both worlds.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-fg-subtle">
            Whether it is for personal use or business purposes, Tether tokens
            offer many benefits as the most stable, liquid and trusted
            stablecoin.
          </p>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_FEATURES.map((f) => (
              <article
                key={f.title}
                className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand-500/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/12 text-accent transition-colors group-hover:bg-brand-500/20">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-base font-semibold text-fg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel center>Tokenomics</SectionLabel>
          <h2 className="mt-4 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Supply at a glance
          </h2>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface p-8 backdrop-blur">
              <div className="text-5xl font-bold text-accent">
                {TOKEN.maxSupply}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-fg-subtle">
                Max Total Supply
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                Hard cap minted at deployment. No inflation beyond the owner's
                mint function.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-8 backdrop-blur">
              <div className="text-5xl font-bold text-accent">
                {TOKEN.decimals}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-fg-subtle">
                Decimal Places
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                Aligned with major USD stablecoins for familiar value
                representation.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-8 backdrop-blur">
              <div className="text-5xl font-bold text-accent">
                {TOKEN.standard}
              </div>
              <div className="mt-2 text-sm uppercase tracking-wider text-fg-subtle">
                Token Standard
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                Full ERC-20 compatibility ensures support across wallets, DEXs,
                and DeFi protocols.
              </p>
            </div>
          </div>

          {/* Supply bar */}
          <div className="mt-12 rounded-2xl border border-line bg-surface p-8 backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-fg-muted">Max Supply Distribution</span>
              <span className="font-mono text-accent">
                {TOKEN.maxSupply} {TOKEN.symbol}
              </span>
            </div>
            <div className="h-4 w-full overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300"
                style={{ width: "100%" }}
              />
            </div>
            <p className="mt-3 text-xs text-fg-subtle">
              Initial supply minted to the contract owner at deployment.
            </p>
          </div>
        </section>

        {/* Buy / Secure Checkout */}
        <section id="buy" className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel center>Buy USDT</SectionLabel>
          <h2 className="mt-4 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Purchase {TOKEN.symbol} instantly
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-fg-muted">
            Choose your amount and continue to our secure checkout. Payments are
            handled by Stripe, and {TOKEN.symbol} tokens are sent to your wallet.
          </p>

          {/* How it works — quick 3-step row */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Step
              n="01"
              title="Choose amount"
              desc="Pick a preset or enter a custom USDT quantity."
            />
            <Step
              n="02"
              title="Secure checkout"
              desc="You're redirected to a PCI-compliant Stripe payment page."
            />
            <Step
              n="03"
              title="Receive tokens"
              desc="Once payment clears, tokens are sent to your wallet."
            />
          </div>

          {/* Checkout flow */}
          <div className="mt-16 rounded-2xl border border-line bg-surface p-8 backdrop-blur">
            <BuySection />
          </div>
        </section>

        {/* Contract Info */}
        <section id="contract" className="mx-auto max-w-7xl px-6 py-24">
          <SectionLabel center>Contract</SectionLabel>
          <h2 className="mt-4 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Verified &amp; transparent
          </h2>

          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-line bg-surface backdrop-blur">
            <div className="flex items-center justify-between border-b border-line bg-surface-2 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15 text-accent">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold">{TOKEN.name}</div>
                  <div className="font-mono text-xs text-fg-subtle">
                    {shortContract}
                  </div>
                </div>
              </div>
              <span className="rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold text-accent">
                {TOKEN.verified}
              </span>
            </div>

            <dl className="divide-y divide-line">
              <ContractRow label="Contract Name" value="TetherUSDT" />
              <ContractRow label="Compiler Version" value={TOKEN.compiler} />
              <ContractRow label="Optimization" value={TOKEN.optimization} />
              <ContractRow label="EVM Version" value={TOKEN.evmVersion} />
              <ContractRow label="License" value={TOKEN.license} />
              <ContractRow label="Standard" value={`${TOKEN.standard} (${TOKEN.chain})`} />
              <ContractRow label="Decimals" value={String(TOKEN.decimals)} />
              <ContractRow
                label="Max Supply"
                value={`${TOKEN.maxSupply} ${TOKEN.symbol}`}
              />
            </dl>

            <div className="border-t border-line p-6">
              <a
                href={etherscanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-brand-400"
              >
                View Verified Source on Etherscan
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Chat with us */}
        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <SectionLabel center>Chat with us</SectionLabel>
          <h2 className="mt-4 text-center text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Send us a message
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-fg-muted">
            Leave your email and a short note — we&apos;ll get back to you by
            email, so you never have to wait on a call.
          </p>

          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-line bg-surface p-8 backdrop-blur">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-bg/80">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <Logo size={36} />
                <span className="text-lg font-semibold tracking-tight">
                  Tether<span className="text-accent">USDT</span>
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-fg-subtle">
                A verified ERC-20 token on Ethereum. Built on OpenZeppelin v5
                with fixed supply and 6 decimals.
              </p>
              <div className="mt-5 space-y-2 text-sm text-fg-subtle">
                <p>
                  <a
                    href="mailto:tethrusdt@gmail.com"
                    className="transition-colors hover:text-accent"
                  >
                    tethrusdt@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+5511957654881"
                    className="transition-colors hover:text-accent"
                  >
                    +55 11 95765-4881
                  </a>
                </p>
                <p className="leading-relaxed">
                  Praça dos Três Poderes<br />
                  Brasília - DF, Brazil
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
              <FooterCol
                title="Token"
                links={[
                  { label: "About", href: "#about" },
                  { label: "Why Tether", href: "#why" },
                  { label: "Tokenomics", href: "#tokenomics" },
                  { label: "How to Buy", href: "#buy" },
                  { label: "Contract", href: "#contract" },
                ]}
              />
              <FooterCol
                title="Resources"
                links={[
                  { label: "Etherscan", href: etherscanUrl, external: true },
                  {
                    label: "OpenZeppelin",
                    href: "https://www.openzeppelin.com/",
                    external: true,
                  },
                  {
                    label: "Ethereum",
                    href: "https://ethereum.org/",
                    external: true,
                  },
                ]}
              />
              <FooterCol
                title="Contract"
                links={[
                  { label: shortContract, href: etherscanUrl, external: true },
                ]}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row">
            <p>
              © <CurrentYear /> {TOKEN.name}. All rights reserved.
            </p>
            <p className="font-mono">
              {TOKEN.contract}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 backdrop-blur transition-colors hover:border-brand-500/30">
      <div
        className={`text-3xl font-bold tracking-tight ${
          accent ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </div>
      <div className="mt-1.5 text-xs uppercase tracking-wider text-fg-subtle">
        {label}
      </div>
    </div>
  );
}

function SectionLabel({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
        {children}
      </span>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-4">
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="font-semibold text-fg">{title}</span>
      </div>
      <p className="mt-1.5 text-sm text-fg-muted">{desc}</p>
    </div>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="relative rounded-2xl border border-line bg-surface p-8 backdrop-blur">
      <div className="text-5xl font-bold text-fg/10">{n}</div>
      <h3 className="mt-2 text-xl font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">{desc}</p>
    </div>
  );
}

function ContractRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-3.5">
      <dt className="text-sm text-fg-subtle">{label}</dt>
      <dd className="font-mono text-sm text-fg">{value}</dd>
    </div>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm text-fg-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
