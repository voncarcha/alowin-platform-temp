import { ChevronRight } from "lucide-react";

/* ─── Mock Data ─────────────────────────────────────────────────────────── */

const paymentMethods = [
  { name: "GCash", bg: "#0070BA", abbr: "G" },
  { name: "Maya", bg: "#00A651", abbr: "M" },
  { name: "UnionBank", bg: "#E31837", abbr: "UB" },
  { name: "BDO", bg: "#003087", abbr: "BDO" },
  { name: "BPI", bg: "#CC0000", abbr: "BPI" },
  { name: "Coins.ph", bg: "#FF6B00", abbr: "C" },
];

const providers = [
  { name: "JILI", style: "text-[#e1334f] font-black text-2xl tracking-wider" },
  { name: "Evolution", style: "text-[#1f5eff] font-bold text-xl tracking-wide" },
  { name: "PG Soft", style: "text-primary font-bold text-xl" },
  { name: "Pragmatic", style: "text-[#d12d49] font-black text-xl tracking-wide" },
];

const gameCategories = [
  { label: "Deposit Now", emoji: "💰", ring: "#22c55e" },
  { label: "Slots", emoji: "🎰", ring: "#3b82f6" },
  { label: "Fishing", emoji: "🎣", ring: "#06b6d4" },
  { label: "Birthday Ball", emoji: "🎂", ring: "#ec4899" },
  { label: "Mega Ball", emoji: "⚽", ring: "#f59e0b" },
  { label: "F1 Casino", emoji: "🏎️", ring: "#ef4444" },
  { label: "Panalo678", emoji: "🃏", ring: "#8b5cf6" },
  { label: "e-Gaming", emoji: "🎮", ring: "#10b981" },
  { label: "Horse Racing", emoji: "🐎", ring: "#a16207" },
  { label: "Sabong", emoji: "🐓", ring: "#dc2626" },
  { label: "Drag Race", emoji: "🏁", ring: "#1d4ed8" },
  { label: "Live In Game", emoji: "📺", ring: "#2563eb" },
];

const casinoGames = [
  {
    name: "SuperAce",
    provider: "JILI",
    bg: "linear-gradient(135deg,#0f2a6e 0%,#1a56a0 50%,#0ea5e9 100%)",
    accent: "#FFD700",
    tag: "HOT",
    tagColor: "#ef4444",
    icon: "♠",
  },
  {
    name: "Sweet Bonanza",
    provider: "Pragmatic",
    bg: "linear-gradient(135deg,#ef4444 0%,#e1334f 42%,#1f5eff 100%)",
    accent: "#ffd0d8",
    tag: "POPULAR",
    tagColor: "#f59e0b",
    icon: "🍬",
  },
  {
    name: "Gates of Olympus",
    provider: "Pragmatic",
    bg: "linear-gradient(135deg,#14316b 0%,#1f5eff 52%,#60a5fa 100%)",
    accent: "#d8e6ff",
    tag: null,
    tagColor: "",
    icon: "⚡",
  },
  {
    name: "Pharaoh's Fortune",
    provider: "JILI",
    bg: "linear-gradient(135deg,#78350f 0%,#b45309 50%,#fbbf24 100%)",
    accent: "#fef08a",
    tag: null,
    tagColor: "",
    icon: "𓂀",
  },
  {
    name: "Win Win",
    provider: "JILI",
    bg: "linear-gradient(135deg,#14532d 0%,#15803d 50%,#4ade80 100%)",
    accent: "#bbf7d0",
    tag: null,
    tagColor: "",
    icon: "🏆",
  },
  {
    name: "SunPower2",
    provider: "PG Soft",
    bg: "linear-gradient(135deg,#7c2d12 0%,#c2410c 50%,#fb923c 100%)",
    accent: "#fed7aa",
    tag: "NEW",
    tagColor: "#22c55e",
    icon: "☀",
  },
];

const liveCasinoGames = [
  {
    name: "Super Color Game",
    provider: "Evolution",
    bg: "linear-gradient(135deg,#1e3a8a 0%,#dc2626 50%,#fbbf24 100%)",
    icon: "🎨",
  },
  {
    name: "PaFabet Blackjack",
    provider: "PaFabet",
    bg: "linear-gradient(135deg,#064e3b 0%,#065f46 60%,#047857 100%)",
    icon: "🂡",
  },
  {
    name: "Crazy Time",
    provider: "Evolution",
    bg: "linear-gradient(135deg,#1f5eff 0%,#6aa6ff 32%,#ef4444 100%)",
    icon: "🎡",
  },
  {
    name: "Lightning Roulette",
    provider: "Evolution",
    bg: "linear-gradient(135deg,#713f12 0%,#92400e 50%,#d97706 100%)",
    icon: "⚡",
  },
  {
    name: "SunBet Live",
    provider: "SunBet",
    bg: "linear-gradient(135deg,#92400e 0%,#b45309 50%,#f59e0b 100%)",
    icon: "🌞",
  },
  {
    name: "Live Blackjack",
    provider: "Evolution",
    bg: "linear-gradient(135deg,#134e4a 0%,#0f766e 50%,#14b8a6 100%)",
    icon: "🃏",
  },
];

const miniGames = [
  {
    name: "Color Game",
    bg: "linear-gradient(135deg,#dc2626 25%,#fbbf24 50%,#2563eb 75%,#16a34a 100%)",
    icon: "🎨",
  },
  {
    name: "Color Hunt",
    bg: "linear-gradient(135deg,#ef4444 0%,#f97316 42%,#1f5eff 100%)",
    icon: "🔍",
  },
  {
    name: "Chicky Choice",
    bg: "linear-gradient(135deg,#f59e0b 0%,#f97316 60%,#ef4444 100%)",
    icon: "🐤",
  },
  {
    name: "Fruit Blast",
    bg: "linear-gradient(135deg,#16a34a 0%,#22c55e 50%,#4ade80 100%)",
    icon: "🍉",
  },
  {
    name: "Mines",
    bg: "linear-gradient(135deg,#15366f 0%,#1f5eff 50%,#89b2ff 100%)",
    icon: "💣",
  },
];

const upcomingMatches = [
  {
    time: "Apr 17, 11:00",
    league: "NBA",
    home: "LA Lakers",
    away: "Golden State",
    hOdds: "1.85",
    dOdds: "-",
    aOdds: "1.95",
  },
  {
    time: "Apr 17, 13:30",
    league: "NBA",
    home: "Chicago Bulls",
    away: "Miami Heat",
    hOdds: "2.10",
    dOdds: "-",
    aOdds: "1.72",
  },
  {
    time: "Apr 17, 16:00",
    league: "PBA",
    home: "San Miguel",
    away: "Ginebra",
    hOdds: "1.60",
    dOdds: "-",
    aOdds: "2.30",
  },
  {
    time: "Apr 18, 10:00",
    league: "EPL",
    home: "Man City",
    away: "Arsenal",
    hOdds: "1.75",
    dOdds: "3.50",
    aOdds: "4.20",
  },
  {
    time: "Apr 18, 12:45",
    league: "EPL",
    home: "Liverpool",
    away: "Chelsea",
    hOdds: "1.90",
    dOdds: "3.40",
    aOdds: "3.80",
  },
];

/* ─── Sub-components ────────────────────────────────────────────────────── */

function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      style={{
        background:
          "linear-gradient(135deg,#fff5f7 0%,#ffffff 36%,#f1f6ff 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-28 right-1/4 h-80 w-80 rounded-full bg-blue-500/16 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-red-400/14 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-56 w-56 rounded-full bg-sky-300/18 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent shadow-[0_12px_30px_rgba(31,94,255,0.08)] ring-1 ring-accent/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e1334f]" />
              Alowin Wallet
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Power Up Your
              <br />
              <span className="text-[#e1334f]">alo</span>
              <span className="relative">
                <span
                  className="underline decoration-[#1f5eff]/50 underline-offset-4 text-[#1f5eff]"
                  style={{ textDecorationStyle: "wavy" }}
                >
                  win
                </span>
              </span>{" "}
              <span className="text-primary">Wallet</span>
            </h1>

            <p className="mt-4 max-w-xl text-base font-medium tracking-wide text-secondary sm:text-lg">
              Quick Play.&nbsp;&nbsp;Quick Pay.&nbsp;&nbsp;Always Secure.
            </p>

            {/* Payment icons */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {paymentMethods.map((m) => (
                <div
                  key={m.name}
                  title={m.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-[11px] font-bold shadow-lg"
                  style={{ backgroundColor: m.bg }}
                >
                  {m.abbr}
                </div>
              ))}
              <span className="ml-1 text-sm font-medium text-secondary">
                and much more!
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <button className="rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:scale-95">
                Sign Up Now
              </button>
              <button className="rounded-full border border-accent/15 bg-white/80 px-8 py-3 text-sm font-semibold text-primary transition-all duration-200 hover:border-accent/30 hover:bg-white active:scale-95">
                Log In
              </button>
            </div>
          </div>

          {/* Right: decorative wallet visual */}
          <div className="relative hidden lg:flex shrink-0 items-center justify-center w-80 h-72">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-blue-500/12 blur-2xl" />
            {/* Central coin */}
            <div
              className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full shadow-2xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%,#ffffff,#dbe7ff 48%,#1f5eff)",
                boxShadow:
                  "0 0 60px rgba(31,94,255,0.22), 0 24px 60px rgba(19,49,112,0.22)",
              }}
            >
              <span
                className="text-6xl font-black"
                style={{ color: "#e1334f", textShadow: "0 2px 6px rgba(255,255,255,0.26)" }}
              >
                ₱
              </span>
            </div>

            {/* Orbiting coins */}
            {[
              { top: "-12px", left: "60px", size: 44, delay: "0s" },
              { top: "20px", right: "-16px", size: 36, delay: "0.4s" },
              { bottom: "16px", right: "40px", size: 32, delay: "0.8s" },
              { bottom: "-8px", left: "48px", size: 40, delay: "1.2s" },
            ].map((coin, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center rounded-full text-white font-bold text-xs shadow-lg"
                style={{
                  width: coin.size,
                  height: coin.size,
                  top: coin.top,
                  left: (coin as { left?: string }).left,
                  right: (coin as { right?: string }).right,
                  bottom: (coin as { bottom?: string }).bottom,
                  background:
                    i % 2 === 0
                      ? "radial-gradient(circle at 35% 35%,#ffd8df,#e1334f)"
                      : "radial-gradient(circle at 35% 35%,#dce7ff,#1f5eff)",
                  animation: `float 3s ease-in-out ${coin.delay} infinite alternate`,
                }}
              >
                ₱
              </div>
            ))}

            {/* Sparkles */}
            {["top-2 left-2", "top-6 right-10", "bottom-8 left-10", "bottom-2 right-4"].map(
              (pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} select-none ${i % 2 === 0 ? "text-[#e1334f]" : "text-[#1f5eff]"}`}
                  style={{
                    fontSize: i % 2 === 0 ? "18px" : "12px",
                    animation: `pulse 2s ease-in-out ${i * 0.5}s infinite`,
                  }}
                >
                  ✦
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          from { transform: translateY(0px); }
          to   { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function ProviderBar() {
  return (
    <section className="border-b border-border bg-white/75 py-4 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-4 overflow-x-auto scrollbar-none">
          {providers.map((p) => (
            <button
              key={p.name}
              className={`shrink-0 cursor-pointer rounded-full bg-white px-4 py-2 shadow-[0_10px_24px_rgba(19,49,112,0.05)] ring-1 ring-border transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(31,94,255,0.08)] ${p.style}`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryIcons() {
  return (
    <section className="border-b border-border bg-white py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto scrollbar-none pb-1">
          {gameCategories.map((cat) => (
            <button
              key={cat.label}
              className="group shrink-0 flex flex-col items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-bg-alt text-2xl shadow-sm transition-all duration-150 group-hover:shadow-md"
                style={{ border: `2px solid ${cat.ring}22`, boxShadow: `0 0 0 2px ${cat.ring}22` }}
              >
                {cat.emoji}
              </div>
              <span className="max-w-[64px] whitespace-nowrap text-center text-[11px] font-medium leading-tight text-secondary">
                {cat.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SportsSection() {
  return (
    <section className="overflow-hidden rounded-[1.8rem] border border-border bg-white py-6 shadow-[0_24px_80px_rgba(19,49,112,0.05)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-sm text-white">
              ⚽
            </div>
            <h2 className="text-lg font-bold text-primary">Sportsbook</h2>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-[#163fae]">
            Show All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Sport tabs */}
        <div className="flex gap-2 mb-5 overflow-x-auto scrollbar-none">
          {["🏀 NBA", "⚽ EPL", "🏀 PBA", "🥊 Boxing", "🎾 Tennis", "🏈 NFL"].map((tab, i) => (
            <button
              key={tab}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium border transition-all duration-150 ${
                i === 0
                  ? "border-transparent bg-gradient-to-r from-[#e1334f] to-[#1f5eff] text-white shadow-[0_12px_30px_rgba(31,94,255,0.18)]"
                  : "border-border bg-white text-secondary hover:border-accent/25 hover:text-accent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Upcoming Matches Table */}
        <div className="overflow-hidden rounded-xl border border-border bg-white shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-0 bg-gradient-to-r from-[#17397a] via-[#1f5eff] to-[#4f86ff] px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white">
            <span>Match</span>
            <span className="w-16 text-center">1</span>
            <span className="w-16 text-center">X</span>
            <span className="w-16 text-center">2</span>
          </div>

          {upcomingMatches.map((m, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-0 px-4 py-3 items-center border-b border-border-light last:border-0 transition-colors duration-100 hover:bg-accent-bg/50 ${
                i % 2 === 0 ? "bg-white" : "bg-bg-alt/70"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent-bg px-1.5 py-0.5 text-[10px] font-bold uppercase text-accent">
                    {m.league}
                  </span>
                  <span className="text-[11px] text-tertiary">{m.time}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-primary">
                  {m.home}{" "}
                  <span className="mx-1 font-normal text-tertiary">vs</span>{" "}
                  {m.away}
                </div>
              </div>
              {[m.hOdds, m.dOdds, m.aOdds].map((odd, j) => (
                <button
                  key={j}
                  className={`w-16 rounded-lg py-2 text-sm font-bold text-center transition-all duration-150 ${
                    odd === "-"
                      ? "cursor-not-allowed text-gray-300"
                      : "border border-accent/10 bg-accent-bg text-accent hover:bg-accent hover:text-white hover:border-accent"
                  }`}
                >
                  {odd}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameCard({
  game,
}: {
  game: { name: string; provider: string; bg: string; accent: string; tag: string | null; tagColor: string; icon: string };
}) {
  return (
    <button className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 aspect-[3/4]">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: game.bg }}
      />

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${game.accent} 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Center icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl text-3xl shadow-lg"
          style={{ backgroundColor: "rgba(0,0,0,0.25)", backdropFilter: "blur(4px)" }}
        >
          {game.icon}
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-3 py-3">
        <p className="text-white text-sm font-bold leading-tight">{game.name}</p>
        <p className="text-white/60 text-[11px] mt-0.5">{game.provider}</p>
      </div>

      {/* Tag badge */}
      {game.tag && (
        <div
          className="absolute top-2 left-2 rounded-md px-2 py-0.5 text-[10px] font-black text-white uppercase tracking-wide shadow"
          style={{ backgroundColor: game.tagColor }}
        >
          {game.tag}
        </div>
      )}

      {/* Hover play overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-200">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-200 scale-0 group-hover:scale-100">
          <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function LiveGameCard({ game }: { game: { name: string; provider: string; bg: string; icon: string } }) {
  return (
    <button className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 aspect-[4/3]">
      <div className="absolute inset-0" style={{ background: game.bg }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />

      {/* Live badge */}
      <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-red-600 px-2 py-0.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-bold text-white uppercase">Live</span>
      </div>

      {/* Center icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl">{game.icon}</span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-3">
        <p className="text-white text-sm font-bold">{game.name}</p>
        <p className="text-white/60 text-[11px]">{game.provider}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-200">
        <div className="scale-0 group-hover:scale-100 transition-transform duration-200 h-12 w-12 flex items-center justify-center rounded-full bg-white/20">
          <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function MiniGameCard({ game }: { game: { name: string; bg: string; icon: string } }) {
  return (
    <button className="group relative overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 aspect-square">
      <div className="absolute inset-0" style={{ background: game.bg }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span className="text-4xl">{game.icon}</span>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-2 text-center">
        <p className="text-white text-[11px] font-bold">{game.name}</p>
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200" />
    </button>
  );
}

function SectionHeader({ title, icon }: { title: string; icon: string }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-sm text-white shadow-[0_10px_24px_rgba(31,94,255,0.18)]">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-primary">{title}</h2>
      </div>
      <button className="flex items-center gap-1 text-sm font-medium text-secondary transition-colors hover:text-accent">
        Show All <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function HomeFooter() {
  const socialLinks = [
    { icon: "f", label: "Facebook", color: "#1877F2" },
    { icon: "in", label: "Instagram", color: "#E1306C" },
    { icon: "𝕏", label: "Twitter/X", color: "#000000" },
    { icon: "▶", label: "YouTube", color: "#FF0000" },
    { icon: "✈", label: "Telegram", color: "#2AABEE" },
    { icon: "♪", label: "TikTok", color: "#010101" },
  ];

  const footerLinks = {
    About: ["About Us", "Careers", "Press", "Partners"],
    Help: ["FAQ", "Contact Support", "Responsible Gaming", "Self Exclusion"],
    Regulations: ["Terms & Conditions", "Privacy Policy", "Cookie Policy", "AML Policy"],
    "Gaming Rules": ["Casino Rules", "Sports Betting", "Live Casino", "General Rules"],
  };

  return (
    <footer className="border-t border-border bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-secondary">
      {/* Social row */}
      <div className="border-b border-border py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 flex-wrap">
          {socialLinks.map((s) => (
            <button
              key={s.label}
              title={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-sm font-bold text-primary transition-all duration-150 hover:scale-110"
              style={{ boxShadow: `0 0 0 1px ${s.color}18 inset` }}
            >
              {s.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Links grid */}
      <div className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-tertiary">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <button className="text-left text-sm text-secondary transition-colors duration-150 hover:text-accent">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsible gaming logos */}
      <div className="border-t border-border py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <img src="/logo.png" alt="Alowin" className="h-6 w-auto opacity-75" />
          </div>
          <p className="text-center text-xs text-tertiary">
            © 2026 Alowin. All rights reserved. Play Responsibly. 18+
          </p>
          <div className="flex items-center gap-3">
            {["GamCare", "BeGambleAware"].map((badge) => (
              <div
                key={badge}
                className="rounded border border-border bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-secondary"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-bg" style={{ paddingTop: "50px" }}>
      <HeroBanner />
      <ProviderBar />
      <CategoryIcons />

      {/* Sports Section */}
      <div className="bg-bg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SportsSection />
        </div>
      </div>

      {/* Casino Games */}
      <section className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Casino Games" icon="🎰" />
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {casinoGames.map((game) => (
              <GameCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Live Casino */}
      <section className="border-t border-border bg-bg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Live Casino" icon="🎬" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {liveCasinoGames.map((game) => (
              <LiveGameCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Mini Games */}
      <section className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Games" icon="🎮" />
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
            {miniGames.map((game) => (
              <MiniGameCard key={game.name} game={game} />
            ))}
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  );
}
