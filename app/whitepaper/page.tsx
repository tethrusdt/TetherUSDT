import type { Metadata } from "next";
import Logo from "../components/Logo";
import CurrentYear from "../components/CurrentYear";
import ThemeToggle from "../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Whitepaper & Tokenomics — Tether USDT",
  description:
    "Official whitepaper and tokenomics for Tether USDT (USD₮): a verified ERC-20 token on Ethereum with a fixed maximum supply of 560,015,276 and 6 decimals.",
  keywords: [
    "Tether USDT whitepaper",
    "USDT tokenomics",
    "ERC-20",
    "Ethereum",
    "stablecoin",
  ],
};

const TOKEN = {
  name: "Tether USDT",
  symbol: "USDT",
  contract: "0x6988D3cdDBB6Bd695D5c01d5229B1628B94E1FEB",
  chain: "Ethereum",
  standard: "ERC-20",
  decimals: 6,
  maxSupply: "560,015,276",
  holders: "2",
  marketCap: "$175B–$176.8B",
  compiler: "v0.8.34+commit.80d5c536",
  license: "MIT",
  optimization: "Yes · 200 runs",
  evmVersion: "default",
  verified: "Exact Match",
  openzeppelin: "v5.0.2",
};

const etherscanUrl = `https://etherscan.io/token/${TOKEN.contract}`;

const SECTIONS = [
  { id: "summary", label: "Executive Summary" },
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why Tether" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "supply", label: "Supply Model" },
  { id: "networks", label: "Supported Networks" },
  { id: "transparency", label: "Transparency & Reserves" },
  { id: "security", label: "Compliance & Security" },
  { id: "disclaimer", label: "Disclaimer" },
];

const NETWORKS = [
  "Algorand",
  "Avalanche",
  "Bitcoin",
  "Ethereum",
  "EOS",
  "Kava",
  "Polkadot",
  "Polygon",
  "Solana",
  "TRON",
  "Tezos",
];

const BENEFITS: { title: string; text: string }[] = [
  {
    title: "Multiple blockchains support",
    text: "Tether tokens are built on multiple blockchains — offering easy integration and adoption.",
  },
  {
    title: "Unparalleled liquidity",
    text: "Tether tokens are among the most traded tokens in terms of daily volume, offering unequalled liquidity.",
  },
  {
    title: "Widespread adoption",
    text: "From exchanges and digital wallet apps to decentralised finance (DeFi) protocols and payment services, Tether tokens offer a smart alternative to fiat gateways.",
  },
  {
    title: "100% backed by Tether's reserves",
    text: "All Tether tokens are pegged at 1-to-1 with a matching fiat currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by Tether's reserves.",
  },
  {
    title: "Fully transparent",
    text: "Tether tokens' issued and reserve assets are publicly available and updated.",
  },
  {
    title: "Available in different currencies",
    text: "Tether supports US dollar (USD) and Mexican Peso (MXN). Represented by ₮, Tether tokens are denoted as USD₮, MXN₮.",
  },
  {
    title: "Regulatory-compliant",
    text: "Tether maintains world-class standardised compliance measures for anti-money laundering (AML), countering the financing of terrorism (CFT), sanctions, and know your customer (KYC) laws and regulations.",
  },
  {
    title: "Best-in-class customer support",
    text: "A highly-trained customer support team is ready to help you 24/7.",
  },
];

export default function WhitepaperPage() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-500/15 blur-[120px]" />
        <div className="bg-grid absolute inset-0" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <a href="/" className="flex items-center gap-3">
            <Logo size={32} />
            <span className="text-base font-semibold tracking-tight">
              Tether<span className="text-accent">USDT</span>
            </span>
          </a>
          <div className="flex items-center gap-2.5">
            <a
              href="/"
              className="hidden rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-semibold text-fg transition-colors hover:bg-surface-2 sm:inline-flex"
            >
              ← Home
            </a>
            <ThemeToggle />
            <a
              href={etherscanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400"
            >
              <span className="hidden sm:inline">Etherscan</span>
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

      <main className="mx-auto max-w-5xl px-6 py-16">
        {/* Title */}
        <div className="text-center">
          <span className="inline-block rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Whitepaper
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Tether <span className="text-accent">USDT</span> — Whitepaper &amp;
            Tokenomics
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-fg-muted">
            A verified {TOKEN.standard} token on {TOKEN.chain} with a fixed
            maximum supply of {TOKEN.maxSupply} and {TOKEN.decimals} decimals —
            built for transparency, speed and seamless DeFi integration.
          </p>
          <p className="mt-3 font-mono text-xs text-fg-subtle">
            Version 1.0 · Last updated {new Date().getFullYear()}
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[220px_1fr]">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              Contents
            </div>
            <ul className="mt-4 space-y-2 border-l border-line pl-4">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-fg-muted transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Document body */}
          <article className="space-y-16">
            <Section id="summary" title="1. Executive Summary">
              <p>
                {TOKEN.name} ({TOKEN.symbol}) is an {TOKEN.standard} token
                deployed on {TOKEN.chain} with a fixed maximum supply of{" "}
                {TOKEN.maxSupply} tokens and {TOKEN.decimals} decimal places.
                The contract inherits from the battle-tested OpenZeppelin{" "}
                {TOKEN.openzeppelin} implementation, providing a secure and
                standards-compliant foundation.
              </p>
              <p>
                Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin
                model and are the most widely traded. Tether tokens offer the
                stability and simplicity of fiat currencies coupled with the
                innovative nature of blockchain technology, representing a
                perfect combination of both worlds.
              </p>
            </Section>

            <Section id="overview" title="2. Overview">
              <p>
                Tether tokens are pegged at 1-to-1 with a matching fiat
                currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by Tether's
                reserves. The reserves match or exceed the amount required to
                redeem all Tether tokens in circulation.
              </p>
              <p>
                With {TOKEN.decimals} decimal places — matching leading
                USD-pegged tokens — {TOKEN.name} is optimized for everyday
                transactions, remittances and integration into decentralized
                applications. Ownership and minting rights are restricted to
                the contract owner, while any holder can burn their own
                tokens.
              </p>
              <p>
                Whether it is for personal use or business purposes, Tether
                tokens offer many benefits as the most stable, liquid and
                trusted stablecoin.
              </p>
            </Section>

            <Section id="why" title="3. Why Use Tether">
              <ul className="grid gap-4 sm:grid-cols-2">
                {BENEFITS.map((b) => (
                  <li
                    key={b.title}
                    className="rounded-xl border border-line bg-surface p-4"
                  >
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
                        className="shrink-0 text-accent"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-sm font-semibold text-fg">
                        {b.title}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                      {b.text}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            <Section id="tokenomics" title="4. Tokenomics">
              <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
                <Row label="Token Name" value={TOKEN.name} />
                <Row label="Symbol" value={TOKEN.symbol} />
                <Row label="Token Standard" value={TOKEN.standard} />
                <Row label="Blockchain" value={TOKEN.chain} />
                <Row label="Decimals" value={String(TOKEN.decimals)} />
                <Row label="Max Total Supply" value={TOKEN.maxSupply} />
                <Row label="Holders" value={TOKEN.holders} />
                <Row label="Market Capitalization" value={TOKEN.marketCap} />
                <Row
                  label="Contract Address"
                  value={TOKEN.contract}
                  mono
                  wrap
                />
                <Row label="License" value={TOKEN.license} />
                <Row label="Compiler" value={TOKEN.compiler} />
                <Row label="Optimization" value={TOKEN.optimization} />
                <Row label="Verification" value={TOKEN.verified} />
              </dl>
            </Section>

            <Section id="supply" title="5. Supply Model">
              <p>
                The total supply is capped at {TOKEN.maxSupply} {TOKEN.symbol},
                minted at deployment. There is no inflationary emission beyond
                the owner-controlled mint function.
              </p>
              <div className="overflow-hidden rounded-2xl border border-line bg-surface p-6">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="text-fg-muted">Max Supply Distribution</span>
                  <span className="font-mono text-accent">
                    {TOKEN.maxSupply} {TOKEN.symbol}
                  </span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full bg-surface-2">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-brand-600 via-brand-500 to-brand-300" />
                </div>
              </div>
              <ul className="space-y-3">
                <Bullet title="Fixed cap">
                  Maximum supply is fixed at {TOKEN.maxSupply} {TOKEN.symbol}.
                </Bullet>
                <Bullet title="Owner-gated minting">
                  New tokens can only be minted by the contract owner.
                </Bullet>
                <Bullet title="Burnable">
                  Any holder can burn their own tokens, permanently reducing
                  supply.
                </Bullet>
              </ul>
            </Section>

            <Section id="networks" title="6. Supported Networks">
              <p>
                Tether tokens are built on multiple blockchains — offering easy
                integration and adoption. Supported blockchains are:
              </p>
              <div className="flex flex-wrap gap-2">
                {NETWORKS.map((n) => (
                  <span
                    key={n}
                    className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-fg-muted"
                  >
                    {n}
                  </span>
                ))}
              </div>
            </Section>

            <Section id="transparency" title="7. Transparency & Reserves">
              <p>
                All Tether tokens are pegged at 1-to-1 with a matching fiat
                currency and are backed 100% by Tether's reserves. Tether
                tokens' issued and reserve assets are publicly available and
                updated.
              </p>
              <p>
                The {TOKEN.name} contract source code is verified on-chain with
                an <span className="text-accent">{TOKEN.verified}</span> result,
                so anyone can independently audit the deployed bytecode against
                the published source.
              </p>
              <a
                href={etherscanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400"
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
            </Section>

            <Section id="security" title="8. Compliance & Security">
              <p>
                Tether maintains world-class standardised compliance measures
                for anti-money laundering (AML), countering the financing of
                terrorism (CFT), sanctions, and know your customer (KYC) laws
                and regulations.
              </p>
              <p>
                The {TOKEN.name} contract is built on OpenZeppelin{" "}
                {TOKEN.openzeppelin}, compiled with solc {TOKEN.compiler}, and
                released under the {TOKEN.license} license with optimization
                enabled ({TOKEN.optimization}).
              </p>
              <p>
                A highly-trained customer support team is ready to help you
                24/7 at{" "}
                <a
                  href="mailto:tethrusdt@gmail.com"
                  className="text-accent hover:underline"
                >
                  tethrusdt@gmail.com
                </a>
                .
              </p>
            </Section>

            <Section id="disclaimer" title="9. Disclaimer">
              <p className="text-sm">
                This document is provided for informational purposes only and
                does not constitute financial, investment, legal or tax advice,
                nor an offer or solicitation to buy or sell any asset.
                Digital assets involve significant risk, including the
                possible loss of all capital. Past performance is not
                indicative of future results. Always conduct your own research
                and consult a qualified professional before making any
                decision.
              </p>
              <p className="text-sm">
                Figures such as market capitalization are estimates tracked
                across public data providers and may change at any time.
              </p>
            </Section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-bg/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs text-fg-subtle sm:flex-row">
          <p>
            © <CurrentYear /> {TOKEN.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/" className="transition-colors hover:text-accent">
              Home
            </a>
            <a href="#tokenomics" className="transition-colors hover:text-accent">
              Tokenomics
            </a>
            <a
              href="mailto:tethrusdt@gmail.com"
              className="transition-colors hover:text-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-fg-muted">
        {children}
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  mono,
  wrap,
}: {
  label: string;
  value: string;
  mono?: boolean;
  wrap?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-6 px-6 py-3.5">
      <dt className="shrink-0 text-sm text-fg-subtle">{label}</dt>
      <dd
        className={`text-right text-sm text-fg ${mono ? "font-mono" : ""} ${
          wrap ? "break-all" : ""
        }`}
      >
        {value}
      </dd>
    </div>
  );
}

function Bullet({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 shrink-0 text-accent"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span className="text-sm leading-relaxed text-fg-muted">
        <span className="font-semibold text-fg">{title}.</span> {children}
      </span>
    </li>
  );
}
