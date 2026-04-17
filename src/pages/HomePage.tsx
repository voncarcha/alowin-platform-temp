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
  { name: "JILI", style: "text-yellow-400 font-black text-2xl tracking-wider" },
  { name: "Evolution", style: "text-amber-300 font-bold text-xl tracking-wide" },
  { name: "PG Soft", style: "text-white font-bold text-xl" },
  { name: "Pragmatic", style: "text-red-400 font-black text-xl tracking-wide" },
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
  { label: "Live In Game", emoji: "📺", ring: "#7c3aed" },
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
    bg: "linear-gradient(135deg,#9d174d 0%,#be185d 40%,#7c3aed 100%)",
    accent: "#fde68a",
    tag: "POPULAR",
    tagColor: "#f59e0b",
    icon: "🍬",
  },
  {
    name: "Gates of Olympus",
    provider: "Pragmatic",
    bg: "linear-gradient(135deg,#1e1b4b 0%,#4c1d95 50%,#7c3aed 100%)",
    accent: "#c4b5fd",
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
    bg: "linear-gradient(135deg,#7c3aed 0%,#db2777 50%,#dc2626 100%)",
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
    bg: "linear-gradient(135deg,#ec4899 0%,#a855f7 50%,#6366f1 100%)",
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
    bg: "linear-gradient(135deg,#1f2937 0%,#374151 50%,#4b5563 100%)",
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
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#050505 0%,#0a0f1e 40%,#0d0d0d 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-80 w-80 rounded-full bg-blue-700/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-purple-700/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-16 h-48 w-48 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left: content */}
          <div className="flex-1 text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Power Up Your
              <br />
              <span className="text-yellow-400">alo</span>
              <span className="relative">
                <span
                  className="underline decoration-yellow-400/60 underline-offset-4"
                  style={{ textDecorationStyle: "wavy" }}
                >
                  win
                </span>
              </span>{" "}
              <span className="text-gray-100">Wallet</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-300 font-medium tracking-wide">
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
              <span className="ml-1 text-sm text-gray-400 font-medium">
                and much more!
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <button className="rounded-full bg-yellow-400 px-8 py-3 text-sm font-bold text-black shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:bg-yellow-300 hover:shadow-yellow-300/40 active:scale-95">
                Sign Up Now
              </button>
              <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-95">
                Log In
              </button>
            </div>
          </div>

          {/* Right: decorative wallet visual */}
          <div className="relative hidden lg:flex shrink-0 items-center justify-center w-80 h-72">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-yellow-400/10 blur-2xl" />
            {/* Central coin */}
            <div
              className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full shadow-2xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%,#fde68a,#f59e0b 50%,#b45309)",
                boxShadow:
                  "0 0 60px rgba(251,191,36,0.4), 0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <span
                className="text-6xl font-black"
                style={{ color: "#7c2d12", textShadow: "0 2px 6px rgba(0,0,0,0.3)" }}
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
                    "radial-gradient(circle at 35% 35%,#fde68a,#d97706)",
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
                  className={`absolute ${pos} text-yellow-300 select-none`}
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
    <section className="bg-[#111111] py-4 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around gap-4 overflow-x-auto scrollbar-none">
          {providers.map((p) => (
            <button
              key={p.name}
              className={`shrink-0 cursor-pointer transition-opacity duration-150 hover:opacity-80 ${p.style}`}
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
    <section className="bg-white py-5 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 overflow-x-auto scrollbar-none pb-1">
          {gameCategories.map((cat) => (
            <button
              key={cat.label}
              className="group shrink-0 flex flex-col items-center gap-2 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-50 text-2xl shadow-sm transition-all duration-150 group-hover:shadow-md"
                style={{ border: `2px solid ${cat.ring}22`, boxShadow: `0 0 0 2px ${cat.ring}22` }}
              >
                {cat.emoji}
              </div>
              <span className="text-[11px] font-medium text-gray-600 whitespace-nowrap leading-tight text-center max-w-[64px]">
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
    <section className="bg-gray-50 py-6 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-sm">
              ⚽
            </div>
            <h2 className="text-lg font-bold text-gray-900">Sportsbook</h2>
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
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
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Upcoming Matches Table */}
        <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-0 bg-gray-800 text-white text-xs font-semibold uppercase tracking-wide px-4 py-3">
            <span>Match</span>
            <span className="w-16 text-center">1</span>
            <span className="w-16 text-center">X</span>
            <span className="w-16 text-center">2</span>
          </div>

          {upcomingMatches.map((m, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1fr_auto_auto_auto] gap-0 px-4 py-3 items-center border-b border-gray-100 last:border-0 transition-colors duration-100 hover:bg-blue-50/50 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-bold text-blue-700 uppercase">
                    {m.league}
                  </span>
                  <span className="text-[11px] text-gray-400">{m.time}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-gray-900">
                  {m.home}{" "}
                  <span className="text-gray-400 font-normal mx-1">vs</span>{" "}
                  {m.away}
                </div>
              </div>
              {[m.hOdds, m.dOdds, m.aOdds].map((odd, j) => (
                <button
                  key={j}
                  className={`w-16 rounded-lg py-2 text-sm font-bold text-center transition-all duration-150 ${
                    odd === "-"
                      ? "text-gray-300 cursor-not-allowed"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white border border-blue-100 hover:border-blue-600"
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
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white text-sm">
          {icon}
        </div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <button className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
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
    <footer className="bg-[#111111] text-gray-400">
      {/* Social row */}
      <div className="border-b border-white/10 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3 flex-wrap">
          {socialLinks.map((s) => (
            <button
              key={s.label}
              title={s.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-white transition-all duration-150 hover:scale-110"
              style={{ backgroundColor: s.color + "22" }}
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
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <button className="text-sm text-gray-400 hover:text-white transition-colors duration-150 text-left">
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
      <div className="border-t border-white/10 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <img src="/logo.png" alt="Alowin" className="h-6 w-auto opacity-60" />
          </div>
          <p className="text-xs text-gray-600 text-center">
            © 2026 Alowin. All rights reserved. Play Responsibly. 18+
          </p>
          <div className="flex items-center gap-3">
            {["GamCare", "BeGambleAware"].map((badge) => (
              <div
                key={badge}
                className="rounded border border-white/10 px-3 py-1 text-[10px] font-semibold text-gray-500 uppercase tracking-wider"
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
    <div className="bg-gray-50" style={{ paddingTop: "50px" }}>
      <HeroBanner />
      <ProviderBar />
      <CategoryIcons />

      {/* Sports Section */}
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SportsSection />
        </div>
      </div>

      {/* Casino Games */}
      <section className="bg-white py-8 border-t border-gray-100">
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
      <section className="bg-gray-50 py-8 border-t border-gray-100">
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
      <section className="bg-white py-8 border-t border-gray-100">
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
