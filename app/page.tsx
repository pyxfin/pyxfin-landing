// app/page.tsx
import Image from "next/image";

type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

const bullets = [
  "AI chart & pattern detection for breakouts, trend shifts, and momentum.",
  "Portfolio optimization across risk, factor exposures, and asset classes.",
  "Actionable financial summaries that explain what changed — and why.",
];

export default function Home({ searchParams }: PageProps) {
  const subscribed = searchParams?.subscribed === "1";
  const error = searchParams?.error === "1";

  return (
    <main className="flex min-h-screen flex-col">
      {/* Top nav */}
      <header className="w-full border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/pyxfin-logo-horizontal-light.png"
              alt="Pyxfin"
              width={180}
              height={60}
              className="h-auto w-40"
            />
          </div>
          <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em]">
            Decode the markets.
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-1 items-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-10 md:py-16">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#FFB400] via-[#FF6B1A] to-[#FF3B23]" />
            Pyxfin is coming soon · Early access 2026
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
            {/* Left: copy */}
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                <span className="block text-white">
                  Decode the markets.
                </span>
                <span className="mt-2 block bg-gradient-to-r from-[#FFB400] via-[#FF6B1A] to-[#FF3B23] bg-clip-text text-transparent">
                  Turn raw market noise into insight.
                </span>
              </h1>

              <p className="max-w-xl text-sm text-white/70 md:text-base">
                Pyxfin is an AI-powered investment intelligence platform for
                serious investors, traders, and funds. We combine market data,
                patterns, and portfolio math to surface the signals that matter.
              </p>

              <ul className="space-y-2 text-sm text-white/75">
                {bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[#FFB400] via-[#FF6B1A] to-[#FF3B23]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Email form */}
              <div className="mt-6 space-y-3">
                <form
                  method="POST"
                  action="/api/subscribe"
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@fund.com"
                    className="h-11 flex-1 rounded-xl border border-white/15 bg-white/5 px-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#FFB400] focus:ring-1 focus:ring-[#FFB400]"
                  />
                  <button
                    type="submit"
                    className="h-11 rounded-xl bg-gradient-to-r from-[#FFB400] via-[#FF6B1A] to-[#FF3B23] px-5 text-sm font-medium text-[#0A1A33] shadow-lg shadow-black/30 transition hover:brightness-110"
                  >
                    Join early access
                  </button>
                </form>
                <p className="text-xs text-white/45">
                  No spam. Just early access, product updates, and market
                  insights from Pyxfin.
                </p>

                {subscribed && (
                  <p className="text-xs text-emerald-300/90">
                    You’re in. We’ll let you know when Pyxfin is ready.
                  </p>
                )}
                {error && (
                  <p className="text-xs text-red-300/90">
                    Please enter a valid email and try again.
                  </p>
                )}
              </div>
            </div>

            {/* Right: abstract “phoenix-X” panel */}
            <div className="relative hidden h-full min-h-[260px] rounded-3xl border border-white/10 bg-gradient-to-br from-[#111A33] via-[#0A1A33] to-[#1A1A1A] p-6 shadow-2xl shadow-black/40 md:block">
              <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_0%_0%,#FFB400_0,#0A1A33_55%),radial-gradient(circle_at_100%_100%,#FF3B23_0,#0A1A33_55%)]" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    Preview
                  </div>
                  <h2 className="mt-2 text-lg font-medium text-white/90">
                    AI-native market intelligence
                  </h2>
                  <p className="mt-2 text-xs text-white/60">
                    Imagine instant chart pattern detection, factor-aware
                    screeners, and portfolio optimization — all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-3 text-xs text-white/70">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>AI chart insights</span>
                    <span className="text-[10px] uppercase tracking-wide text-emerald-300">
                      Coming soon
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>Portfolio optimizer</span>
                    <span className="text-[10px] uppercase tracking-wide text-emerald-300">
                      In design
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                    <span>Factor-based screener</span>
                    <span className="text-[10px] uppercase tracking-wide text-emerald-300">
                      In research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/40">
            <span>© {new Date().getFullYear()} Pyxfin. All rights reserved.</span>
            <span>Built for investors who think in basis points.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}