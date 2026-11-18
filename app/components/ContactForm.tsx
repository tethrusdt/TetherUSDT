"use client";

import { useState, FormEvent } from "react";

/* ─── Configuration ────────────────────────────────────────────────────
 * Messages are delivered to your inbox via Web3Forms.
 *
 *   1. Create a free key at https://web3forms.com using the SAME email you
 *      want to receive mail at (e.g. tethrusdt@gmail.com).
 *   2. Paste the key below (or set NEXT_PUBLIC_WEB3FORMS_KEY).
 *
 * Web3Forms access keys are designed to be public, so they are safe here.
 * Every submission is emailed to the inbox that owns the key.
 *
 * Fallbacks, in order:
 *   1. Web3Forms key          → emails your inbox directly.
 *   2. NEXT_PUBLIC_CONTACT_ENDPOINT → POSTs to your own API.
 *   3. Neither set            → opens the visitor's mail client.
 */
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
const SUPPORT_EMAIL = "tethrusdt@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!EMAIL_RE.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    const payload = {
      email: email.trim(),
      message: message.trim(),
      subject: "New enquiry — Tether USDT site",
      from_name: "Tether USDT Website",
    };

    // 1) Web3Forms — straight to your inbox.
    if (WEB3FORMS_KEY) {
      try {
        setStatus("sending");
        const res = await fetch(WEB3FORMS_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
        });
        const data = await res.json();
        if (!res.ok || !data.success) {
          throw new Error(data.message || "Could not send your message.");
        }
        setStatus("sent");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setStatus("error");
      }
      return;
    }

    // 2) Custom backend.
    if (CONTACT_ENDPOINT) {
      try {
        setStatus("sending");
        const res = await fetch(CONTACT_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Could not send your message.");
        setStatus("sent");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong.");
        setStatus("error");
      }
      return;
    }

    // 3) Fallback — hand off to the visitor's mail client.
    const subject = encodeURIComponent("Enquiry from Tether USDT site");
    const body = encodeURIComponent(`${payload.message}\n\n— ${payload.email}`);
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15 text-accent">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-fg">
          {WEB3FORMS_KEY || CONTACT_ENDPOINT ? "Message sent" : "Message ready"}
        </h3>
        <p className="max-w-xs text-sm text-fg-muted">
          {WEB3FORMS_KEY || CONTACT_ENDPOINT
            ? "Thanks — we've received your message and will reply by email."
            : `Your mail app should now be open. If not, email us at ${SUPPORT_EMAIL}.`}
        </p>
        <button
          type="button"
          onClick={() => {
            setEmail("");
            setMessage("");
            setStatus("idle");
          }}
          className="mt-2 rounded-full border border-line-strong bg-surface px-6 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-surface-2"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-fg-muted">
          Your email
        </label>
        <input
          id="contact-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:ring-1 ${
            error
              ? "border-red-500/60 focus:border-red-500/80 focus:ring-red-500/20"
              : "border-line focus:border-brand-500/60 focus:ring-brand-500/30"
          }`}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-fg-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={3}
          placeholder="How can we help?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-subtle outline-none transition-colors focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30"
        />
      </div>

      {error && (
        <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-600 dark:text-red-300">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-brand-500 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <p className="text-center text-[11px] text-fg-subtle">
        We reply by email — no phone calls.
      </p>
    </form>
  );
}
