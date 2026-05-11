import {
  CalendarDays,
  ChevronRight,
  Clock3,
  Flame,
  Gauge,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Ticket,
  Trophy,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredMatch, matches as sportsbookMatches, sports } from "../data/sportsbook";

/* ─── Mock Data ─────────────────────────────────────────────────────────── */

const paymentMethods = [
  { name: "GCash", bg: "#0070BA", abbr: "G" },
  { name: "Maya", bg: "#00A651", abbr: "M" },
  { name: "UnionBank", bg: "#E31837", abbr: "UB" },
  { name: "BDO", bg: "#003087", abbr: "BDO" },
  { name: "BPI", bg: "#CC0000", abbr: "BPI" },
  { name: "Coins.ph", bg: "#FF6B00", abbr: "C" },
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

const sportsbookPreviewMatches = sportsbookMatches.slice(0, 5);

const sabongRooms = [
  {
    id: "sbng-1",
    title: "Sabong Traditional Worldwide",
    viewers: "12.4K",
    handle: "₱1.8M",
    momentum: 92,
    status: "LIVE NOW",
    entryWindow: "Open",
    tone: "from-[#e1334f] via-[#f97316] to-[#1f5eff]",
  },
  {
    id: "sbng-2",
    title: "Sabong World Cup",
    viewers: "8.7K",
    handle: "₱980K",
    momentum: 74,
    status: "HEATING UP",
    entryWindow: "3 min",
    tone: "from-[#1f5eff] via-[#2563eb] to-[#0f172a]",
  },
  {
    id: "sbng-3",
    title: "Sabong Grand Finals",
    viewers: "15.1K",
    handle: "₱2.3M",
    momentum: 88,
    status: "TRENDING",
    entryWindow: "Open",
    tone: "from-[#111827] via-[#334155] to-[#e1334f]",
  },
];

const sabongStats = [
  { label: "Rooms live", value: "4", icon: Radio },
  { label: "Peak crowd", value: "15.1K", icon: Users },
  { label: "Total handle", value: "₱5.5M", icon: Trophy },
  { label: "Stream uptime", value: "98%", icon: ShieldCheck },
];

const lottoJackpots = [
  {
    game: "Grand Lotto",
    numbers: ["15", "43", "07", "40", "52", "29"],
    prize: "₱120M",
    drawTime: "8:00 PM",
    date: "May 11, 2026",
  },
  {
    game: "Mega Lotto",
    numbers: ["17", "27", "21", "30", "15", "12"],
    prize: "₱100M",
    drawTime: "9:00 PM",
    date: "May 11, 2026",
  },
  {
    game: "6D Lotto",
    numbers: ["7", "8", "0", "2", "3", "2"],
    prize: "₱80M",
    drawTime: "9:00 PM",
    date: "May 11, 2026",
  },
];

const drawSchedule = [
  { game: "2D Lotto", time: "2:00 PM", live: true },
  { game: "3D Lotto", time: "5:00 PM", live: true },
  { game: "Grand Lotto", time: "8:00 PM", live: false },
  { game: "6D Lotto", time: "9:00 PM", live: false },
  { game: "Mega Lotto", time: "9:00 PM", live: false },
  { game: "4D Lotto", time: "9:00 PM", live: false },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
              Power Up Your
              <br />
              <span className="text-[#e1334f]">alo</span>
              <span className="relative">
                <span
                  className="underline decoration-[#1f5eff]/50 underline-offset-4 text-[#1f5eff]"
                  style={{ textDecorationStyle: "wavy" }}
                >
                  pit
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

function SportsSection() {
  return (
    <section className="overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.06)]">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative overflow-hidden bg-[#101827] p-6 text-white sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(225,51,79,0.48),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(31,94,255,0.48),transparent_25%),linear-gradient(135deg,#101827_0%,#1c2c49_48%,#4a121c_100%)]" />
          <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border-[24px] border-white/10" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                Live board
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/85 backdrop-blur-md">
                <Trophy className="h-3.5 w-3.5" />
                {featuredMatch.league}
              </span>
            </div>

            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">Featured sportsbook match</p>
            <h2 className="mt-2 max-w-lg text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {featuredMatch.home}
              <span className="mx-2 text-white/35">vs</span>
              {featuredMatch.away}
            </h2>
            <p className="mt-3 max-w-md text-sm font-medium leading-6 text-white/70">{featuredMatch.headline}</p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {[
                { label: featuredMatch.home, odd: featuredMatch.odds.home },
                { label: featuredMatch.away, odd: featuredMatch.odds.away },
              ].map((pick) => (
                <button
                  key={pick.label}
                  type="button"
                  className="rounded-2xl border border-white/14 bg-white/12 p-3 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/18"
                >
                  <p className="truncate text-xs font-bold text-white/65">{pick.label}</p>
                  <p className="mt-1 text-2xl font-black text-white">{pick.odd}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <div className="mb-4 flex gap-2 overflow-x-auto scrollbar-none">
            {sports.slice(0, 6).map((sport, index) => (
              <button
                key={sport.id}
                type="button"
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${
                  index === 0
                    ? "border-transparent bg-gradient-to-r from-[#e1334f] to-[#1f5eff] text-white shadow-[0_12px_30px_rgba(31,94,255,0.18)]"
                    : "border-border bg-white text-secondary hover:border-accent/25 hover:text-accent"
                }`}
              >
                {sport.name}
                <span className={index === 0 ? "text-white/70" : "text-tertiary"}>{sport.live}</span>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="grid grid-cols-[1fr_58px_58px_58px] gap-1.5 bg-bg-alt/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-secondary sm:grid-cols-[1fr_70px_70px_70px] sm:gap-2">
              <span>Match</span>
              <span className="text-center">1</span>
              <span className="text-center">X</span>
              <span className="text-center">2</span>
            </div>

            {sportsbookPreviewMatches.map((match, index) => (
              <div
                key={match.id}
                className={`grid grid-cols-[1fr_58px_58px_58px] items-center gap-1.5 border-t border-border-light px-4 py-3 transition hover:bg-accent-bg/45 sm:grid-cols-[1fr_70px_70px_70px] sm:gap-2 ${
                  index % 2 === 0 ? "bg-white" : "bg-bg-alt/45"
                }`}
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-accent-bg px-1.5 py-0.5 text-[10px] font-black uppercase text-accent">
                      {match.league}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary">
                      {match.status === "Live" && <Flame className="h-3 w-3 text-[#e1334f]" />}
                      {match.date} {match.time}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm font-black text-primary">
                    {match.home}
                    <span className="mx-1 font-medium text-tertiary">vs</span>
                    {match.away}
                  </p>
                </div>
                {[match.odds.home, match.odds.draw ?? "-", match.odds.away].map((odd, oddIndex) => (
                  <button
                    key={`${match.id}-${oddIndex}`}
                    type="button"
                    disabled={odd === "-"}
                    className={`inline-flex min-h-10 w-full items-center justify-center rounded-xl border px-2 py-2 text-xs font-black leading-none transition active:scale-95 sm:text-sm ${
                      odd === "-"
                        ? "cursor-not-allowed border-border-light bg-bg-alt text-tertiary/45"
                        : oddIndex === 0 && index === 0
                          ? "border-[#b30012] bg-[#b30012] text-white"
                          : "border-accent/10 bg-accent-bg text-accent hover:bg-accent hover:text-white"
                    }`}
                  >
                    {odd}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ESabongHomeSection() {
  const navigate = useNavigate();
  const featured = sabongRooms[0];

  return (
    <section className="overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.06)]">
      <div className="grid lg:grid-cols-[1fr_1.1fr]">
        <div className="relative overflow-hidden min-h-[380px] bg-[linear-gradient(135deg,#fff5f7_0%,#ffffff_40%,#eff5ff_100%)] p-6 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(225,51,79,0.12),transparent_45%),radial-gradient(ellipse_at_80%_70%,rgba(31,94,255,0.10),transparent_45%)]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[24px] border-[#e1334f]/[0.06]" />
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full border-[20px] border-[#1f5eff]/[0.06]" />
          <div className="absolute top-1/2 right-8 h-32 w-32 rounded-full bg-[#e1334f]/[0.05] blur-2xl" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  Live Arena
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-warm-bg px-3 py-1.5 text-[11px] font-bold text-[#e1334f] ring-1 ring-[#e1334f]/10">
                  <Flame className="h-3 w-3" />
                  4 rooms active
                </span>
              </div>

              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-tertiary">E-Sabong</p>
              <h2 className="mt-2 text-3xl font-black leading-[0.95] tracking-tight text-primary sm:text-4xl">
                Live Rooms,
                <br />
                <span className="bg-gradient-to-r from-[#e1334f] to-[#1f5eff] bg-clip-text text-transparent">
                  Real Action
                </span>
              </h2>
              <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-secondary">
                Follow active broadcasts, compare room momentum, and enter the battle with the clearest signal.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-tertiary">Featured Room</p>
              <div className="rounded-2xl border border-border-light bg-white/80 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-primary">{featured.title}</p>
                    <div className="mt-2 flex items-center gap-3 text-[11px] font-semibold text-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3 w-3 text-accent" />
                        {featured.viewers}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Gauge className="h-3 w-3 text-accent" />
                        {featured.handle}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3 w-3 text-accent" />
                        {featured.entryWindow}
                      </span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-accent-warm-bg px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#e1334f] ring-1 ring-[#e1334f]/10">
                    {featured.status}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold text-tertiary">
                    <span>Momentum</span>
                    <span className="text-primary">{featured.momentum}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-bg-alt ring-1 ring-border-light">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#e1334f] via-[#f97316] to-[#1f5eff]"
                      style={{ width: `${featured.momentum}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t border-border-light bg-white p-5 sm:p-6 lg:border-t-0 lg:border-l">
          <div className="space-y-3 flex-1">
            {sabongRooms.map((room) => (
              <button
                key={room.id}
                type="button"
                onClick={() => navigate("/e-sabong")}
                className="group w-full rounded-2xl border border-border-light bg-bg-alt/40 p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/15 hover:shadow-[0_12px_40px_rgba(31,94,255,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      <p className="truncate text-sm font-bold text-primary">{room.title}</p>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-[11px] font-semibold text-secondary">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3 w-3 text-accent" />
                        {room.viewers}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Gauge className="h-3 w-3 text-accent" />
                        {room.handle}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3 w-3 text-accent" />
                        Entry: {room.entryWindow}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-black uppercase tracking-wider ${
                      room.status === "LIVE NOW"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                        : room.status === "TRENDING"
                          ? "bg-accent-warm-bg text-[#e1334f] ring-1 ring-[#e1334f]/10"
                          : "bg-accent-bg text-accent ring-1 ring-accent/10"
                    }`}
                  >
                    {room.status}
                  </span>
                </div>

                <div className="mt-3">
                  <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold text-tertiary">
                    <span>Momentum</span>
                    <span className="text-primary">{room.momentum}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-bg-alt ring-1 ring-border-light">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${room.tone} transition-all duration-500`}
                      style={{ width: `${room.momentum}%` }}
                    />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2">
            {sabongStats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-border-light bg-bg-alt/60 px-2 py-3 text-center"
                >
                  <StatIcon className="h-3.5 w-3.5 text-accent" />
                  <p className="text-sm font-black leading-none text-primary">{stat.value}</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-tertiary">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => navigate("/e-sabong")}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(31,94,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <Play className="h-4 w-4 fill-current" />
            Enter the Arena
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ELottoHomeSection() {
  const navigate = useNavigate();

  return (
    <section className="overflow-hidden rounded-[1.8rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.06)]">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden min-h-[420px] bg-[linear-gradient(135deg,#fff5f7_0%,#ffffff_40%,#eff5ff_100%)] p-6 sm:p-7 lg:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(225,51,79,0.12),transparent_45%),radial-gradient(ellipse_at_80%_80%,rgba(31,94,255,0.12),transparent_45%)]" />
          <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full border-[24px] border-[#e1334f]/[0.06]" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full border-[20px] border-[#1f5eff]/[0.06]" />
          <div className="absolute top-1/2 right-8 h-32 w-32 rounded-full bg-[#1f5eff]/[0.06] blur-2xl" />

          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e1334f]/[0.08] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#e1334f] ring-1 ring-[#e1334f]/10">
                <Ticket className="h-3 w-3" />
                Draw Board
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1f5eff]/[0.08] px-3 py-1.5 text-[11px] font-bold text-[#1f5eff] ring-1 ring-[#1f5eff]/10">
                <Sparkles className="h-3 w-3" />
                {drawSchedule.filter((d) => d.live).length} live draws
              </span>
            </div>

            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-tertiary">E-Lotto</p>
            <h2 className="mt-2 text-3xl font-black leading-[0.95] tracking-tight text-primary sm:text-4xl">
              Winning Numbers,
              <br />
              <span className="bg-gradient-to-r from-[#e1334f] to-[#1f5eff] bg-clip-text text-transparent">
                Ready at a Glance
              </span>
            </h2>
            <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-secondary">
              Check the latest lottery results, track jackpot prizes, and never miss a draw schedule.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.18em] text-tertiary">Latest Grand Lotto</p>
              <div className="flex flex-wrap gap-2">
                {lottoJackpots[0].numbers.map((num) => (
                  <span
                    key={num}
                    className="flex h-11 min-w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#ff8a9c] to-[#1f5eff] text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_20px_rgba(31,94,255,0.2)]"
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="rounded-2xl border border-[#e1334f]/10 bg-[#e1334f]/[0.05] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#e1334f]/70">Grand Jackpot</p>
                <p className="mt-0.5 text-2xl font-black text-[#e1334f]">{lottoJackpots[0].prize}</p>
              </div>
              <div className="rounded-2xl border border-[#1f5eff]/10 bg-[#1f5eff]/[0.05] px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#1f5eff]/70">Draws Today</p>
                <p className="mt-0.5 text-2xl font-black text-[#1f5eff]">{drawSchedule.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col border-t border-border-light bg-white p-5 sm:p-6 lg:border-t-0 lg:border-l">
          <div className="space-y-3 flex-1">
            {lottoJackpots.map((jackpot) => (
              <div
                key={jackpot.game}
                className="group rounded-2xl border border-border-light bg-bg-alt/50 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/15 hover:shadow-[0_12px_40px_rgba(31,94,255,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-[10px] font-black text-white">
                        {jackpot.game.charAt(0)}
                      </span>
                      <p className="truncate text-sm font-bold text-primary">{jackpot.game}</p>
                    </div>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {jackpot.numbers.map((num, i) => (
                        <span
                          key={`${jackpot.game}-${num}-${i}`}
                          className="flex h-7 min-w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ff667d] to-[#1f5eff] px-1.5 text-[11px] font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]"
                        >
                          {num}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-black text-[#e1334f]">{jackpot.prize}</p>
                    <p className="text-[10px] font-bold text-tertiary">{jackpot.drawTime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-border-light bg-bg-alt/40 p-4">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-tertiary">
              <CalendarDays className="mr-1.5 inline h-3.5 w-3.5 text-accent" />
              Draw Schedule
            </p>
            <div className="grid grid-cols-3 gap-2">
              {drawSchedule.slice(0, 6).map((draw) => (
                <div
                  key={draw.game}
                  className="flex items-center gap-2 rounded-xl bg-white px-2.5 py-2 ring-1 ring-border-light"
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${draw.live ? "bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.5)]" : "bg-tertiary/40"}`}
                  />
                  <div className="min-w-0">
                    <p className="truncate text-[11px] font-bold text-primary">{draw.game}</p>
                    <p className="text-[10px] font-medium text-tertiary">{draw.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/e-lotto")}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] px-5 py-3 text-sm font-black text-white shadow-[0_12px_30px_rgba(31,94,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <Sparkles className="h-4 w-4" />
            Play E-Lotto
            <ChevronRight className="h-4 w-4" />
          </button>
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
  const footerLinks = {
    About: ["About Us", "Careers", "Press", "Partners"],
    Help: ["FAQ", "Contact Support", "Responsible Gaming", "Self Exclusion"],
    Regulations: ["Terms & Conditions", "Privacy Policy", "Cookie Policy", "AML Policy"],
    "Gaming Rules": ["Casino Rules", "Sports Betting", "Live Casino", "General Rules"],
  };

  return (
    <footer className="border-t border-border bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] text-secondary">
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
            <img src="/logo.png" alt="Alopit" className="h-6 w-auto opacity-75" />
          </div>
          <p className="text-center text-xs text-tertiary">
            © 2026 Alopit. All rights reserved. Play Responsibly. 18+
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
  const navigate = useNavigate();
  return (
    <div className="bg-bg" style={{ paddingTop: "50px" }}>
      <HeroBanner />

      {/* Sports Section */}
      <section className="border-t border-border bg-bg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-sm text-white shadow-[0_10px_24px_rgba(31,94,255,0.18)]">
                <Radio className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-bold text-primary">Sportsbook</h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/sportsbook")}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-bg px-4 py-2 text-sm font-black text-accent transition hover:bg-accent hover:text-white"
            >
              Show All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <SportsSection />
        </div>
      </section>

      {/* E-Sabong Section */}
      <section className="border-t border-border bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-sm text-white shadow-[0_10px_24px_rgba(31,94,255,0.18)]">
                <Radio className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-bold text-primary">E-Sabong</h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/e-sabong")}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-bg px-4 py-2 text-sm font-black text-accent transition hover:bg-accent hover:text-white"
            >
              Show All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <ESabongHomeSection />
        </div>
      </section>

      {/* E-Lotto Section */}
      <section className="border-t border-border bg-bg py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e1334f] to-[#1f5eff] text-sm text-white shadow-[0_10px_24px_rgba(31,94,255,0.18)]">
                <Trophy className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-bold text-primary">E-Lotto</h2>
            </div>
            <button
              type="button"
              onClick={() => navigate("/e-lotto")}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-bg px-4 py-2 text-sm font-black text-accent transition hover:bg-accent hover:text-white"
            >
              Show All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <ELottoHomeSection />
        </div>
      </section>

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
