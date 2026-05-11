import { useState, type ComponentType } from "react";
import {
  CalendarDays,
  Search,
  Sparkles,
  Ticket,
} from "lucide-react";

type LottoResult = {
  game: string;
  numbers: string[];
  date: string;
  prize: string;
  drawTime: string;
};

type DrawResult = {
  game: string;
  combination: string;
  date: string;
};

const lottoResults: LottoResult[] = [
  { game: "2D Lotto", numbers: ["08", "30"], date: "2025-08-19", prize: "₱20M", drawTime: "2:00 PM" },
  { game: "3D Lotto", numbers: ["4", "5", "9"], date: "2025-08-19", prize: "₱35M", drawTime: "5:00 PM" },
  { game: "4D Lotto", numbers: ["0", "4", "1", "7"], date: "2025-08-18", prize: "₱50M", drawTime: "9:00 PM" },
  {
    game: "6D Lotto",
    numbers: ["7", "8", "0", "2", "3", "2"],
    date: "2025-08-19",
    prize: "₱80M",
    drawTime: "9:00 PM",
  },
  {
    game: "Grand Lotto",
    numbers: ["15", "43", "07", "40", "52", "29"],
    date: "2025-08-19",
    prize: "₱120M",
    drawTime: "8:00 PM",
  },
  {
    game: "Mega Lotto",
    numbers: ["17", "27", "21", "30", "15", "12"],
    date: "2025-08-19",
    prize: "₱100M",
    drawTime: "9:00 PM",
  },
];

const drawResults: DrawResult[] = [
  { game: "Lotto", combination: "15-43-07-40-52-29", date: "19/08/2025" },
  { game: "6/49", combination: "17-27-21-30-15-12", date: "19/08/2025" },
  { game: "6/42", combination: "24-28-26-05-35-20", date: "19/08/2025" },
  { game: "6D Lotto", combination: "7-8-0-2-3-2", date: "19/08/2025" },
  { game: "3D Lotto", combination: "4-5-9", date: "19/08/2025" },
  { game: "2D Lotto", combination: "08-30", date: "19/08/2025" },
  { game: "3D Lotto", combination: "2-6-0", date: "19/08/2025" },
];

const heroBalls = ["25", "20", "22", "09", "10", "11"];

function LottoMark({ label = "L", compact = false }: { label?: string; compact?: boolean }) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-xl bg-white shadow-[0_10px_30px_rgba(19,49,112,0.08)] ring-1 ring-accent/10 ${
        compact ? "h-10 w-10" : "h-14 w-14"
      }`}
    >
      <div className="absolute inset-1 rounded-lg bg-gradient-to-br from-red-50 to-blue-50" />
      <div
        className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#e1334f] to-[#1f5eff] font-black text-white shadow-inner ${
          compact ? "h-7 w-7 text-[10px]" : "h-10 w-10 text-sm"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function NumberBall({ value, large = false }: { value: string; large?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff667d] to-[#1f5eff] font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.36),0_10px_18px_rgba(31,94,255,0.2)] ${
        large ? "h-11 min-w-11 px-3 text-sm" : "h-8 min-w-8 px-2 text-xs"
      }`}
    >
      {value}
    </span>
  );
}

function PageTabs({
  activeScreen,
  onChange,
}: {
  activeScreen: "results" | "drawDate";
  onChange: (screen: "results" | "drawDate") => void;
}) {
  const tabs = [
    { id: "results" as const, label: "Lotto Results", icon: Ticket },
    { id: "drawDate" as const, label: "Draw Date Results", icon: CalendarDays },
  ];

  return (
    <nav className="flex w-full gap-1 overflow-x-auto rounded-full border border-border bg-white p-1 shadow-[0_16px_45px_rgba(19,49,112,0.06)] sm:w-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeScreen === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-r from-[#e1334f] to-[#1f5eff] text-white shadow-[0_10px_28px_rgba(31,94,255,0.22)]"
                : "text-secondary hover:bg-accent-bg hover:text-accent"
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? "text-white/80" : "text-tertiary"}`} />
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
}

function LottoHero() {
  return (
    <section className="relative overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-[0_22px_70px_rgba(19,49,112,0.08)]">
      <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_15%_20%,rgba(225,51,79,0.16),transparent_28%),radial-gradient(circle_at_88%_14%,rgba(37,99,235,0.2),transparent_28%),linear-gradient(135deg,#fff6f8_0%,#ffffff_45%,#eff5ff_100%)]" />
      <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-bg px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e1334f]" />
              Lotto Results
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-[0.98] tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Winning numbers, ready at a glance.
            </h1>
            <p className="mt-4 max-w-xl text-sm font-medium leading-6 text-secondary sm:text-base">
              Recent lottery results
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {heroBalls.map((ball) => (
              <span
                key={ball}
                className="flex h-12 min-w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd6de] via-[#ff8a9c] to-[#1f5eff] px-3 text-sm font-black text-white shadow-[inset_0_2px_0_rgba(255,255,255,0.4),0_14px_24px_rgba(31,94,255,0.18)]"
              >
                {ball}
              </span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-[#e1334f] via-[#b44391] to-[#1f5eff] p-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)]">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_18%_20%,#ffffff_0_2px,transparent_3px),radial-gradient(circle_at_40%_72%,#ffffff_0_1px,transparent_2px),radial-gradient(circle_at_76%_36%,#ffffff_0_2px,transparent_3px)] [background-size:58px_58px]" />
          <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full border-[24px] border-white/10" />
          <div className="absolute right-7 top-8 h-36 w-28 rotate-6 rounded-2xl bg-white/90 p-4 text-blue-950 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
            <div className="h-4 w-16 rounded-full bg-red-200" />
            <div className="mt-3 h-3 w-12 rounded-full bg-blue-100" />
            <div className="mt-5 grid grid-cols-3 gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((dot) => (
                <span key={dot} className="h-5 rounded-md bg-white/80" />
              ))}
            </div>
            <div className="absolute -left-3 top-1/2 h-6 w-6 rounded-full bg-[#e1334f]" />
            <div className="absolute -right-3 top-1/2 h-6 w-6 rounded-full bg-[#1f5eff]" />
          </div>
          <div className="relative z-10 flex h-full flex-col justify-end">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-100">Winning Numbers</p>
            <p className="mt-2 max-w-[14rem] text-3xl font-black uppercase leading-none">Lotto Draw Board</p>
            <div className="mt-5 flex max-w-[17rem] flex-wrap gap-2">
              {["15", "43", "07", "40", "52", "29"].map((ball) => (
                <span
                  key={ball}
                  className="flex h-9 min-w-9 items-center justify-center rounded-full bg-white px-2 text-xs font-black text-accent"
                >
                  {ball}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  helper,
  icon: Icon,
}: {
  title: string;
  helper: string;
  icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div>
      <div className="inline-flex items-center gap-2 rounded-md bg-accent-bg px-3 py-1.5 text-sm font-bold text-accent">
        <Icon className="h-4 w-4" />
        {title}
      </div>
      <p className="mt-2 text-sm font-medium text-secondary">{helper}</p>
    </div>
  );
}

function LottoResultCard({ result }: { result: LottoResult }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(31,94,255,0.12)]">
      <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[210px] overflow-hidden bg-gradient-to-br from-[#ffe0e6] via-[#ffd1db] to-[#dbe6ff] p-5">
          <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white sm:bg-[#f3f7ff]" />
          <div className="absolute bottom-0 right-0 h-28 w-32 rounded-tl-full bg-white/18" />
          <div className="absolute left-5 right-5 top-5 border-t border-dashed border-accent/15" />

          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-4 pt-4">
              <div>
                <h3 className="text-2xl font-black tracking-tight text-primary">{result.game}</h3>
                <p className="mt-2 max-w-[15rem] text-xs font-semibold leading-5 text-secondary">
                  Online Lotto Jackpot Latest {result.game} Results
                </p>
              </div>
              <LottoMark label={result.game.charAt(0)} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-secondary">Current Prize</p>
              <p className="mt-1 text-3xl font-black text-red-600">{result.prize}</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-[210px] flex-col justify-between bg-[#f4f7ff] p-5">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-black tracking-tight text-primary">{result.game}</h3>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-secondary">Winner Number:</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/10">
                {result.drawTime}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {result.numbers.map((number, index) => (
                <NumberBall key={`${result.game}-${number}-${index}`} value={number} />
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-accent/10 pt-4">
            <p className="text-sm font-semibold text-secondary">{result.date}</p>
            <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-primary ring-1 ring-accent/10 transition hover:ring-accent/25">
              Details
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function MainResultsScreen() {
  return (
    <div className="space-y-8">
      <LottoHero />

      <section className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading title="Lotto Type :" helper="Recent lottery results" icon={Ticket} />
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-secondary ring-1 ring-border">
            <Sparkles className="h-3.5 w-3.5 text-[#e1334f]" />
            Latest draw set
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-2">
          {lottoResults.map((result) => (
            <LottoResultCard key={result.game} result={result} />
          ))}
        </div>
      </section>
    </div>
  );
}

function DrawDateScreen() {
  return (
    <div className="space-y-6">
      <section className="rounded-[1.6rem] border border-border bg-white p-5 shadow-[0_22px_70px_rgba(19,49,112,0.06)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title="Draw Date :"
            helper="Check the lottery results of a certain time period"
            icon={CalendarDays}
          />

          <div className="grid gap-3 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
            <input
              type="date"
              defaultValue="2025-07-20"
              aria-label="Start date"
              className="h-11 rounded-full border border-border bg-bg px-4 text-sm font-semibold text-primary shadow-sm transition focus:border-accent/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10"
            />
            <input
              type="date"
              defaultValue="2025-08-20"
              aria-label="End date"
              className="h-11 rounded-full border border-border bg-bg px-4 text-sm font-semibold text-primary shadow-sm transition focus:border-accent/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10"
            />
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(239,68,68,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700 active:scale-95">
              <Search className="h-4 w-4" />
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-[0_22px_70px_rgba(19,49,112,0.06)]">
        <div className="overflow-x-auto">
          <div className="grid min-w-[520px] grid-cols-[92px_minmax(160px,1fr)_110px] gap-3 border-b border-border bg-bg-alt px-4 py-3 text-[11px] font-bold uppercase tracking-wide text-secondary sm:min-w-0 sm:grid-cols-[1fr_1.4fr_1fr] sm:px-6">
            <div>GAME</div>
            <div>COMBINATION</div>
            <div>DATE</div>
          </div>

          <div className="divide-y divide-white bg-white">
            {drawResults.map((result, index) => (
              <div
                key={`${result.game}-${result.combination}-${index}`}
                className="grid min-w-[520px] grid-cols-[92px_minmax(160px,1fr)_110px] items-center gap-3 bg-[#f4f7ff] px-4 py-3 text-sm font-semibold text-primary transition hover:bg-accent-bg/70 sm:min-w-0 sm:grid-cols-[1fr_1.4fr_1fr] sm:px-6"
              >
                <div className="flex items-center gap-3">
                  <LottoMark label={result.game.charAt(0)} compact />
                  <span className="hidden sm:inline">{result.game}</span>
                </div>
                <div className="font-black tracking-tight text-primary">{result.combination}</div>
                <div className="text-secondary">{result.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ELottoPage() {
  const [activeScreen, setActiveScreen] = useState<"results" | "drawDate">("results");

  return (
    <main className="mx-auto mt-[50px] max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12" aria-label="E-Lotto">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">E-Lotto</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-primary sm:text-3xl">Lotto Draw Center</h2>
        </div>
        <PageTabs activeScreen={activeScreen} onChange={setActiveScreen} />
      </div>

      {activeScreen === "results" ? (
        <MainResultsScreen />
      ) : (
        <DrawDateScreen />
      )}
    </main>
  );
}
