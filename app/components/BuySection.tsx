"use client";

import { useEffect, useState, FormEvent } from "react";

/* ─── Configuration ────────────────────────────────────────────────────
 * PRICE_PER_USDT must match your server-side pricing.
 *
 * CHECKOUT_ENDPOINT is where the browser asks the server to create a
 * Stripe Checkout Session. Leave it empty for sandbox/demo mode.
 *
 *   NEXT_PUBLIC_CHECKOUT_ENDPOINT="https://your-api.example.com/checkout"
 *
 * The endpoint must accept  POST { usdtAmount: number }
 * and reply        200 { url: string }   ← Stripe Checkout URL to redirect to
 */
const PRICE_PER_USDT = 1.0;
const CHECKOUT_ENDPOINT = process.env.NEXT_PUBLIC_CHECKOUT_ENDPOINT ?? "";

const PRESET_AMOUNTS = [100, 500, 1000, 5000, 10000];
const MIN_AMOUNT = 10;
const MAX_AMOUNT = 100000;

type Step = "amount" | "checkout" | "success";

/* ─── Component ────────────────────────────────────────────────────── */
export default function BuySection() {
  const [step, setStep] = useState<Step>("amount");
  const [usdtAmount, setUsdtAmount] = useState<string>("500");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const usdtNum = parseFloat(usdtAmount) || 0;
  const totalUSD = (usdtNum * PRICE_PER_USDT).toFixed(2);
  const isDemo = CHECKOUT_ENDPOINT === "";

  /* Handle the redirect back from Stripe Checkout (?checkout=success). */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      setOrderId(params.get("order") ?? "");
      setStep("success");
    }
  }, []);

  /* Ask the server for a Checkout Session, then hand off to Stripe. */
  async function startCheckout(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (usdtNum < MIN_AMOUNT || usdtNum > MAX_AMOUNT) {
      setError(
        `Enter an amount between ${MIN_AMOUNT} and ${MAX_AMOUNT.toLocaleString()} USDT.`
      );
      return;
    }

    // Demo mode: no server configured — show the sandbox checkout screen.
    if (isDemo) {
      setStep("checkout");
      return;
    }

    // Live mode: create the session server-side (secret key never hits the browser).
    try {
      setLoading(true);
      const res = await fetch(CHECKOUT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usdtAmount: usdtNum }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        throw new Error(data.error || "Unable to start checkout.");
      }
      window.location.href = data.url; // redirect to Stripe-hosted payment page
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout.");
      setLoading(false);
    }
  }

  /* ── Success screen ─────────────────────────────────────────────── */
  if (step === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15 text-accent">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-fg">Order received!</h3>
        <p className="max-w-sm text-fg-muted">
          Your purchase of{" "}
          <span className="font-semibold text-accent">
            {usdtNum.toLocaleString()} USDT
          </span>{" "}
          is being processed. You&apos;ll receive a confirmation shortly.
        </p>
        {orderId && (
          <p className="font-mono text-xs text-fg-subtle">Order {orderId}</p>
        )}
        <button
          onClick={() => {
            setStep("amount");
            setError("");
          }}
          className="mt-4 rounded-full border border-line-strong bg-surface px-6 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
        >
          Buy more
        </button>
      </div>
    );
  }

  /* ── Sandbox checkout (demo mode) ───────────────────────────────── */
  if (step === "checkout") {
    return (
      <div className="mx-auto max-w-lg space-y-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-300">
            Sandbox · demo mode
          </span>
          <button
            type="button"
            onClick={() => setStep("amount")}
            className="text-xs font-semibold text-fg-subtle transition-colors hover:text-fg"
          >
            ← Change amount
          </button>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6">
          <p className="text-xs uppercase tracking-widest text-fg-subtle">Pay</p>
          <p className="mt-1 font-mono text-3xl font-bold text-fg">
            ${totalUSD}
          </p>

          <div className="mt-5 space-y-2 rounded-xl border border-line bg-surface-2 px-4 py-3 text-sm">
            <div className="flex justify-between text-fg-muted">
              <span>{usdtNum.toLocaleString()} USDT</span>
              <span className="font-mono text-fg">${totalUSD}</span>
            </div>
            <div className="flex justify-between text-fg-muted">
              <span>Rate</span>
              <span className="font-mono text-fg">${PRICE_PER_USDT.toFixed(2)} / USDT</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setOrderId("demo_" + Date.now().toString(36));
              setStep("success");
            }}
            className="mt-6 w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400"
          >
            Simulate payment
          </button>

          <p className="mt-3 text-center text-[11px] text-fg-subtle">
            No real charge is made. Set{" "}
            <code className="font-mono text-fg-muted">
              NEXT_PUBLIC_CHECKOUT_ENDPOINT
            </code>{" "}
            to enable live Stripe Checkout.
          </p>
        </div>
      </div>
    );
  }

  /* ── Step 1: Amount ─────────────────────────────────────────────── */
  return (
    <div className="mx-auto max-w-lg">
      <form onSubmit={startCheckout} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-fg-muted">
            Preset amounts
          </label>
          <div className="grid grid-cols-5 gap-2">
            {PRESET_AMOUNTS.map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => setUsdtAmount(String(a))}
                className={`rounded-xl border py-2.5 text-sm font-semibold transition-colors ${
                  usdtAmount === String(a)
                    ? "border-brand-500 bg-brand-500/15 text-accent"
                    : "border-line bg-surface text-fg-muted hover:border-brand-500/40 hover:text-fg"
                }`}
              >
                {a.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="usdt-amount" className="mb-2 block text-sm font-medium text-fg-muted">
            Custom amount (USDT)
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-fg-subtle">
              USDT
            </span>
            <input
              id="usdt-amount"
              type="number"
              min={MIN_AMOUNT}
              max={MAX_AMOUNT}
              step="1"
              value={usdtAmount}
              onChange={(e) => setUsdtAmount(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface py-3.5 pl-16 pr-4 font-mono text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30"
              placeholder="0"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl border border-line bg-surface-2 p-4 text-sm">
          <div className="flex justify-between text-fg-muted">
            <span>USDT amount</span>
            <span className="font-mono text-fg">{usdtNum.toLocaleString()} USDT</span>
          </div>
          <div className="mt-2 flex justify-between text-fg-muted">
            <span>Rate</span>
            <span className="font-mono text-fg">${PRICE_PER_USDT.toFixed(2)} / USDT</span>
          </div>
          <div className="mt-3 flex justify-between border-t border-line pt-3 font-semibold">
            <span className="text-fg">Total (USD)</span>
            <span className="font-mono text-accent">${totalUSD}</span>
          </div>
        </div>

        {error && (
          <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-600 dark:text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || usdtNum <= 0}
          className="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? "Starting checkout…" : "Continue to Secure Checkout →"}
        </button>

        <p className="text-center text-[11px] text-fg-subtle">
          🔒 Payments are handled by Stripe. Card details never touch our servers.
        </p>
      </form>
    </div>
  );
}
