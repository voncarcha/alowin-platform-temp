import type { ComponentType } from "react";
import {
  Activity,
  ArrowRight,
  CalendarClock,
  Clock3,
  Flame,
  Gauge,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

type LiveBattle = {
  id: string;
  title: string;
  arena: string;
  round: string;
  viewers: string;
  handle: string;
  startTime: string;
  status: string;
  momentum: number;
  entryWindow: string;
  quality: string;
  tone: string;
  summary: string;
};

const liveBattles: LiveBattle[] = [
  {
    id: "sbng-1",
    title: "Sabong Traditional Worldwide",
    arena: "Main Broadcast",
    round: "Round 18",
    viewers: "12.4K",
    handle: "PHP 1.8M",
    startTime: "7:45 PM",
    status: "LIVE NOW",
    momentum: 92,
    entryWindow: "Open",
    quality: "HD stream",
    tone: "from-[#e1334f] via-[#f97316] to-[#1f5eff]",
    summary: "Largest active crowd with the fastest room movement.",
  },
  {
    id: "sbng-2",
    title: "Sabong World Cup",
    arena: "Championship Ring",
    round: "Round 12",
    viewers: "8.7K",
    handle: "PHP 980K",
    startTime: "8:10 PM",
    status: "HEATING UP",
    momentum: 74,
    entryWindow: "3 min",
    quality: "Multi-angle",
    tone: "from-[#1f5eff] via-[#2563eb] to-[#0f172a]",
    summary: "Steady championship room with strong late entries.",
  },
  {
    id: "sbng-3",
    title: "Sabong Grand Finals",
    arena: "Night Session",
    round: "Round 26",
    viewers: "15.1K",
    handle: "PHP 2.3M",
    startTime: "8:35 PM",
    status: "TRENDING",
    momentum: 88,
    entryWindow: "Open",
    quality: "Featured",
    tone: "from-[#111827] via-[#334155] to-[#e1334f]",
    summary: "Prime-time battle with the highest handle tonight.",
  },
  {
    id: "sbng-4",
    title: "Sabong Arena Cup",
    arena: "Quick Match",
    round: "Round 06",
    viewers: "5.4K",
    handle: "PHP 420K",
    startTime: "9:00 PM",
    status: "FAST PICK",
    momentum: 61,
    entryWindow: "8 min",
    quality: "Low latency",
    tone: "from-[#0f766e] via-[#10b981] to-[#1f5eff]",
    summary: "Compact room built for fast selection and quick entry.",
  },
];

const lobbyStats = [
  { label: "Rooms live", value: "4", icon: Radio },
  { label: "Peak crowd", value: "15.1K", icon: Users },
  { label: "Total handle", value: "PHP 5.5M", icon: Trophy },
  { label: "Stream uptime", value: "98%", icon: ShieldCheck },
];

const spotlight = liveBattles[0];

function LiveStatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-700 ring-1 ring-emerald-200">
      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(16,185,129,0.55)]" />
      {label}
    </span>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="min-w-0 rounded-2xl border border-border-light bg-bg-alt/70 px-4 py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm ring-1 ring-border-light">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold uppercase tracking-[0.16em] text-tertiary">
            {label}
          </p>
          <p className="mt-0.5 text-lg font-black leading-none text-primary">{value}</p>
        </div>
      </div>
    </div>
  );
}

function DetailPill({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-2 rounded-xl bg-bg px-3 py-2">
      <Icon className="h-4 w-4 shrink-0 text-accent" />
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">{label}</p>
        <p className="truncate text-sm font-black text-primary">{value}</p>
      </div>
    </div>
  );
}

function LiveBattleCard({ battle, featured = false }: { battle: LiveBattle; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col rounded-[1.4rem] border border-border bg-white p-5 shadow-[0_24px_80px_rgba(19,49,112,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-[0_30px_100px_rgba(31,94,255,0.12)] ${
        featured ? "xl:col-span-2" : ""
      }`}
    >
      <div className="mb-3 flex items-start gap-2">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-accent-warm-bg px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#d12d49]">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          {battle.status}
        </span>
        <span className="shrink-0 rounded-md bg-bg-alt px-2 py-0.5 text-[11px] font-medium text-secondary">
          {battle.quality}
        </span>
      </div>

      <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-semibold leading-snug tracking-tight text-primary">
        {battle.title}
      </h3>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-medium text-secondary">{battle.arena}</p>
          <p className="mt-0.5 text-xl font-bold text-primary">{battle.round}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent-bg px-3 py-1.5 text-xs font-semibold text-accent">
          {battle.startTime}
        </span>
      </div>

      <p className="mt-4 min-h-[3rem] text-sm font-medium leading-6 text-secondary">
        {battle.summary}
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <DetailPill icon={Users} label="Crowd" value={battle.viewers} />
        <DetailPill icon={Gauge} label="Handle" value={battle.handle} />
        <DetailPill icon={Clock3} label="Entry" value={battle.entryWindow} />
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between gap-3 text-xs text-secondary">
          <span className="inline-flex items-center gap-1.5 font-semibold">
            <Flame className="h-3.5 w-3.5 text-[#e1334f]" />
            Momentum
          </span>
          <span className="font-bold text-primary">{battle.momentum}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-bg-alt ring-1 ring-border-light">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#e1334f] via-[#f97316] to-[#1f5eff]"
            style={{ width: `${battle.momentum}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <button
          type="button"
          className="flex-1 rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(31,94,255,0.2)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
        >
          Join Battle
        </button>
        <button
          type="button"
          aria-label={`Open details for ${battle.title}`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-secondary transition hover:border-accent/25 hover:text-accent active:scale-95"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

export default function ESabongPage() {
  return (
    <main
      className="mx-auto mt-[50px] max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-16"
      aria-label="E-Sabong"
    >
      <section className="overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.08)]">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[280px] overflow-hidden bg-[#0b1020] sm:min-h-[360px] lg:min-h-[560px]">
            <img
              src="/e-sabong-thumbnail.jpg"
              alt="E-Sabong live broadcast arena"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/12 to-transparent" />
            <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center justify-between gap-2">
              <LiveStatusBadge label="Live lobby" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/14 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                <Radio className="h-3.5 w-3.5" />
                Main broadcast
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                {spotlight.arena}
              </p>
              <h2 className="mt-1 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                {spotlight.title}
              </h2>
            </div>
          </div>

          <div className="flex min-w-0 flex-col p-6 sm:p-7 lg:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-bg-alt px-3 py-1.5 text-xs font-bold text-secondary ring-1 ring-border-light">
                <CalendarClock className="h-4 w-4 text-accent" />
                Next rotation at 8:10 PM
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-warm-bg px-3 py-1.5 text-xs font-bold text-[#d12d49] ring-1 ring-[#e1334f]/10">
                <Flame className="h-4 w-4" />
                {spotlight.momentum}% top room
              </span>
            </div>

            <div className="mt-7">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-secondary">
                <Activity className="h-4 w-4 text-accent" />
                E-Sabong Arena
              </p>
              <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-5xl">
                E-Sabong Live Rooms
              </h1>
              <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-secondary sm:text-base">
                Follow active broadcasts, compare room momentum, and enter the battle with the clearest signal.
              </p>
            </div>

            <div className="mt-7 border-y border-border-light py-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-tertiary">
                    Featured room
                  </p>
                  <h2 className="mt-1 truncate text-xl font-bold text-primary">{spotlight.round}</h2>
                  <p className="mt-1 text-sm font-medium text-secondary">
                    {spotlight.summary}
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl bg-bg-alt px-4 py-3 text-left sm:text-right">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-tertiary">
                    Starts
                  </p>
                  <p className="mt-0.5 text-lg font-bold leading-none text-primary">
                    {spotlight.startTime}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <DetailPill icon={Users} label="Crowd" value={spotlight.viewers} />
                <DetailPill icon={Gauge} label="Handle" value={spotlight.handle} />
                <DetailPill icon={Clock3} label="Entry" value={spotlight.entryWindow} />
              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold text-secondary">
                  <span>Room momentum</span>
                  <span className="text-primary">{spotlight.momentum}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-bg-alt ring-1 ring-border-light">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#e1334f] via-[#f97316] to-[#1f5eff]"
                    style={{ width: `${spotlight.momentum}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {lobbyStats.map((stat) => (
                <StatTile key={stat.label} icon={stat.icon} label={stat.label} value={stat.value} />
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] px-6 text-sm font-semibold text-white shadow-[0_16px_45px_rgba(31,94,255,0.24)] transition hover:-translate-y-0.5 active:scale-95"
              >
                <Play className="h-4 w-4 fill-current" />
                Join Top Room
              </button>
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-6 text-sm font-semibold text-secondary transition hover:border-accent/25 hover:text-accent active:scale-95"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                View Lineup
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-secondary">
              <Zap className="h-4 w-4 text-[#e1334f]" />
              Live Rooms
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-primary sm:text-3xl">
              Current battles on deck
            </h2>
          </div>

          <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-secondary ring-1 ring-border">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              4 broadcasts active
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-secondary ring-1 ring-border">
              <Flame className="h-3.5 w-3.5 text-[#e1334f]" />
              Top room: {spotlight.momentum}%
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <LiveBattleCard battle={spotlight} />
          {liveBattles.slice(1).map((battle) => (
            <LiveBattleCard key={battle.id} battle={battle} />
          ))}
        </div>
      </section>
    </main>
  );
}
