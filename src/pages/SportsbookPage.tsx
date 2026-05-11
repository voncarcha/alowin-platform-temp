import { useMemo, useState, type ComponentType, type ReactNode } from "react";
import {
  Bell,
  ChevronDown,
  Clock3,
  Grid3X3,
  ListFilter,
  Search,
  Settings,
  SlidersHorizontal,
  Star,
  Ticket,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import {
  featuredMatch,
  leagues,
  matches,
  sports,
  type League,
  type Match,
  type Market,
  type Sport,
} from "../data/sportsbook";

type StatusFilter = "All" | Match["status"];
type MarketTab = "All" | "Match" | "Totals" | "Handicaps" | "Players";
type MarketCategory = Exclude<MarketTab, "All">;

type SportsbookMarket = Market & {
  category: MarketCategory;
};

type SelectedBet = {
  id: string;
  matchId: string;
  matchLabel: string;
  label: string;
  market: string;
  odds: string;
};

const marketTabs: MarketTab[] = ["All", "Match", "Totals", "Handicaps", "Players"];
const statusFilters: StatusFilter[] = ["All", "Live", "Prematch"];

const selectedMatch = featuredMatch;

function formatCurrency(value: number) {
  return `${value.toLocaleString("en-PH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} PHP`;
}

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function sanitizeStake(value: string) {
  const normalized = value.replace(/[^\d.]/g, "");
  const [integer = "", ...decimals] = normalized.split(".");

  return decimals.length > 0 ? `${integer}.${decimals.join("").slice(0, 2)}` : integer;
}

function buildMarkets(match: Match): SportsbookMarket[] {
  const homeShort = match.home.split(" ").slice(-1)[0] ?? match.home;
  const awayShort = match.away.split(" ").slice(-1)[0] ?? match.away;
  const hasDraw = Boolean(match.odds.draw);
  const totalLine = Number(match.odds.over);
  const readableTotal = Number.isFinite(totalLine) ? totalLine.toString() : "213";

  return [
    {
      id: "winner",
      title: "Match Winner",
      category: "Match",
      columns: [match.home, match.away],
      prices: [match.odds.home, match.odds.away],
      featured: true,
    },
    {
      id: "regular",
      title: "Match Result (Regular Time)",
      category: "Match",
      columns: hasDraw ? [match.home, "Draw", match.away] : [match.home, match.away],
      prices: hasDraw ? [match.odds.home, match.odds.draw ?? "-", match.odds.away] : [match.odds.home, match.odds.away],
      featured: true,
    },
    {
      id: "halftime",
      title: "1st Half/Full Time",
      category: "Match",
      columns: [
        `${homeShort}/${homeShort}`,
        `Draw/${homeShort}`,
        `${awayShort}/${homeShort}`,
        `${homeShort}/${awayShort}`,
        `Draw/${awayShort}`,
        `${awayShort}/${awayShort}`,
      ],
      prices: ["3.05", "51.00", "7.30", "5.80", "34.00", "1.97"],
    },
    {
      id: "total-points",
      title: "Total Points",
      category: "Totals",
      columns: [`Over ${readableTotal}`, `Under ${readableTotal}`],
      prices: [match.odds.under, hasDraw ? "2.04" : "1.89"],
    },
    {
      id: "home-total",
      title: `${match.home} Total Odd/Even`,
      category: "Totals",
      columns: ["Even", "Odd"],
      prices: ["1.93", "1.88"],
    },
    {
      id: "away-total",
      title: `${match.away} Total Odd/Even`,
      category: "Totals",
      columns: ["Even", "Odd"],
      prices: ["1.89", "1.92"],
    },
    {
      id: "wire",
      title: "Wire To Wire",
      category: "Match",
      columns: [match.home, "Any Other Result", match.away],
      prices: ["5.00", "1.75", "2.95"],
    },
  ];
}

function IconBadge({
  icon: Icon,
  label,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

function OddsButton({
  value,
  selected = false,
  compact = false,
  onClick,
  label,
}: {
  value: string;
  selected?: boolean;
  compact?: boolean;
  onClick?: () => void;
  label?: string;
}) {
  const disabled = value === "-";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      aria-label={label}
      className={`inline-flex w-full items-center justify-center rounded-xl border text-center font-black leading-none transition-all duration-200 active:scale-95 ${
        compact ? "min-h-10 min-w-0 px-2 py-2 text-xs" : "min-h-10 px-3 py-2.5 text-sm"
      } ${
        disabled
          ? "cursor-not-allowed border-border-light bg-bg-alt text-tertiary/50"
          : selected
            ? "border-[#b30012] bg-gradient-to-br from-[#c40017] to-[#e1334f] text-white shadow-[0_14px_30px_rgba(225,51,79,0.25)]"
            : "border-accent/10 bg-accent-bg text-accent hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent hover:text-white"
      }`}
    >
      {value}
    </button>
  );
}

function SportsbookSidebar({
  activeSport,
  activeLeague,
  statusFilter,
  searchQuery,
  onSportChange,
  onLeagueChange,
  onStatusChange,
  onSearchChange,
}: {
  activeSport: string;
  activeLeague: string;
  statusFilter: StatusFilter;
  searchQuery: string;
  onSportChange: (sportId: string) => void;
  onLeagueChange: (leagueId: string) => void;
  onStatusChange: (status: StatusFilter) => void;
  onSearchChange: (value: string) => void;
}) {
  const activeLeagues = leagues.filter((league) => league.sportId === activeSport);

  return (
    <aside className="hidden min-w-0 lg:block">
      <div className="sticky top-[130px] space-y-3">
        <div className="rounded-[1.35rem] border border-border bg-white p-3 shadow-[0_22px_70px_rgba(19,49,112,0.06)]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search competition or team"
              className="w-full rounded-xl border border-border bg-bg-alt/70 py-2.5 pl-9 pr-3 text-sm font-medium text-primary placeholder:text-tertiary focus:border-accent/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10"
            />
          </div>

          <div className="mt-3 grid grid-cols-3 overflow-hidden rounded-xl border border-border bg-bg-alt p-1">
            {statusFilters.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => onStatusChange(tab)}
                className={`rounded-lg px-3 py-2 text-xs font-black transition ${
                  statusFilter === tab ? "bg-[#b30012] text-white shadow-sm" : "text-secondary hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_22px_70px_rgba(19,49,112,0.06)]">
          <div className="border-b border-border-light bg-bg-alt/70 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-tertiary">Sports</p>
          </div>
          <div className="p-2">
            {sports.map((sport) => (
              <button
                key={sport.id}
                type="button"
                onClick={() => onSportChange(sport.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  sport.id === activeSport ? "bg-accent-bg text-accent" : "text-secondary hover:bg-bg-alt"
                }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                    sport.id === activeSport ? "bg-accent text-white" : "bg-bg-alt text-secondary"
                  }`}
                >
                  {sport.icon}
                </span>
                <span className="min-w-0 flex-1 truncate text-sm font-bold">{sport.name}</span>
                <span className="text-xs font-black text-tertiary">{sport.live}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_22px_70px_rgba(19,49,112,0.06)]">
          <div className="flex items-center justify-between border-b border-border-light bg-bg-alt/70 px-4 py-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-tertiary">Competitions</p>
            <ChevronDown className="h-4 w-4 text-secondary" />
          </div>
          <div className="p-2">
            <button
              type="button"
              onClick={() => onLeagueChange("all")}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                activeLeague === "all" ? "bg-[#b30012] text-white" : "text-secondary hover:bg-bg-alt"
              }`}
            >
              <span className="min-w-0 flex-1 truncate text-sm font-bold">All competitions</span>
              <span className={`text-xs font-black ${activeLeague === "all" ? "text-white/75" : "text-tertiary"}`}>
                {activeLeagues.reduce((total, league) => total + league.count, 0)}
              </span>
            </button>
            {activeLeagues.map((league: League) => (
              <button
                key={league.id}
                type="button"
                onClick={() => onLeagueChange(league.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  league.id === activeLeague ? "bg-[#b30012] text-white" : "text-secondary hover:bg-bg-alt"
                }`}
              >
                <span className="min-w-0 flex-1 truncate text-sm font-bold">{league.name}</span>
                <span className={`text-xs font-black ${league.id === activeLeague ? "text-white/75" : "text-tertiary"}`}>
                  {league.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

function MobileSportStrip({
  activeSport,
  statusFilter,
  onSportChange,
  onStatusChange,
}: {
  activeSport: string;
  statusFilter: StatusFilter;
  onSportChange: (sportId: string) => void;
  onStatusChange: (status: StatusFilter) => void;
}) {
  return (
    <div className="space-y-3 lg:hidden">
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
        {sports.map((sport: Sport) => (
          <button
            key={sport.id}
            type="button"
            onClick={() => onSportChange(sport.id)}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${
              sport.id === activeSport
                ? "border-transparent bg-gradient-to-r from-[#e1334f] to-[#1f5eff] text-white shadow-[0_14px_34px_rgba(31,94,255,0.2)]"
                : "border-border bg-white text-secondary"
            }`}
          >
            <span>{sport.name}</span>
            <span className={sport.id === activeSport ? "text-white/70" : "text-tertiary"}>{sport.live}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 rounded-full border border-border bg-white p-1 shadow-sm">
        {statusFilters.map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => onStatusChange(status)}
            className={`rounded-full px-3 py-2 text-xs font-black transition ${
              statusFilter === status ? "bg-[#b30012] text-white" : "text-secondary"
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

function MatchBoard({
  boardTitle,
  matches,
  selectedId,
  selectedBetIds,
  onSelect,
  onToggleBet,
}: {
  boardTitle: string;
  matches: Match[];
  selectedId: string;
  selectedBetIds: Set<string>;
  onSelect: (match: Match) => void;
  onToggleBet: (selection: SelectedBet) => void;
}) {
  const grouped = matches.reduce<Record<string, Match[]>>((acc, match) => {
    acc[match.date] = [...(acc[match.date] ?? []), match];
    return acc;
  }, {});

  return (
    <section className="min-w-0 overflow-hidden rounded-[1.45rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.06)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-light bg-white px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-bg text-accent">
            <Trophy className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-black text-primary">{boardTitle}</p>
            <p className="text-xs font-medium text-secondary">Select matches and add picks to your bet slip</p>
          </div>
        </div>
        <span className="rounded-full border border-border bg-bg-alt px-3 py-1.5 text-xs font-bold text-secondary">
          {matches.length} matches
        </span>
      </div>

      {matches.length === 0 ? (
        <div className="px-5 py-14 text-center">
          <p className="text-base font-black text-primary">No matches found</p>
          <p className="mt-1 text-sm font-medium text-secondary">Try another sport, competition, status, or search term.</p>
        </div>
      ) : (
        <div>
          {Object.entries(grouped).map(([date, dateMatches]) => (
            <div key={date}>
              <div className="flex items-center justify-between bg-bg-alt/45 px-4 py-2 text-xs font-black text-secondary">
                <span>{date}</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              {dateMatches.map((match) => {
                const isSelected = match.id === selectedId;
                const quickSelections = [
                  { key: "home", label: match.home, odds: match.odds.home },
                  { key: "away", label: match.away, odds: match.odds.away },
                  { key: "over", label: `Over ${match.odds.over}`, odds: match.odds.under },
                  { key: "under", label: `Under ${match.odds.over}`, odds: match.odds.under },
                ];

                return (
                  <div
                    key={match.id}
                    className={`border-t border-border-light px-4 py-4 transition ${
                      isSelected ? "bg-accent-bg/80" : "bg-white hover:bg-bg-alt/60"
                    }`}
                  >
                    <button type="button" onClick={() => onSelect(match)} className="block w-full text-left">
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="mb-2 flex items-center gap-2">
                            <span
                              className={`rounded-full px-2 py-1 text-[10px] font-black leading-none ${
                                match.status === "Live" ? "bg-accent-warm-bg text-[#d12d49]" : "bg-bg-alt text-secondary"
                              }`}
                            >
                              {match.status}
                            </span>
                            <span className="text-xs font-semibold leading-none text-tertiary">{match.time}</span>
                          </div>
                          <p className="truncate text-sm font-black text-primary">{match.home}</p>
                          <p className="truncate text-sm font-black text-primary">{match.away}</p>
                        </div>
                        <span className="hidden rounded-full bg-white/80 px-2.5 py-1 text-xs font-black text-secondary ring-1 ring-border sm:inline-flex">
                          +{match.markets}
                        </span>
                      </div>
                    </button>

                    <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-2">
                      {quickSelections.map((selection) => {
                        const selectionId = `${match.id}:board:${selection.key}`;

                        return (
                          <OddsButton
                            key={selectionId}
                            value={selection.odds}
                            selected={selectedBetIds.has(selectionId)}
                            compact
                            label={`${selection.label} ${selection.odds}`}
                            onClick={() => {
                              onSelect(match);
                              onToggleBet({
                                id: selectionId,
                                matchId: match.id,
                                matchLabel: `${match.home} - ${match.away}`,
                                label: selection.label,
                                market: selection.key === "home" || selection.key === "away" ? "Match Winner" : "Total Points",
                                odds: selection.odds,
                              });
                            }}
                          />
                        );
                      })}
                      <span className="inline-flex min-h-10 items-center justify-center gap-1 rounded-xl border border-border bg-white px-2 py-2 text-xs font-black text-secondary sm:hidden">
                        +{match.markets}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function MatchHero({ match }: { match: Match }) {
  return (
    <section className="relative overflow-hidden rounded-[1.45rem] border border-border bg-[#101827] text-white shadow-[0_24px_80px_rgba(19,49,112,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(225,51,79,0.55),transparent_24%),radial-gradient(circle_at_86%_16%,rgba(31,94,255,0.45),transparent_26%),linear-gradient(135deg,#101827_0%,#1b2b48_52%,#41131a_100%)]" />
      <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border-[28px] border-white/8" />
      <div className="absolute right-12 top-12 h-28 w-28 rounded-full bg-orange-500/20 blur-2xl" />
      <div className="relative p-5 sm:p-6">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            <IconBadge icon={Trophy} label={match.league} />
            <IconBadge icon={Clock3} label={`${match.date}, ${match.time}`} />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            {match.status}
          </span>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.22em] text-white/60">{match.venue}</p>
        <h1 className="mt-2 max-w-xl text-3xl font-black leading-tight tracking-tight sm:text-4xl">
          {match.home}
          <span className="mx-3 text-white/40">vs</span>
          {match.away}
        </h1>
        <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-white/72">{match.headline}</p>
      </div>
    </section>
  );
}

function MarketTabs({
  activeTab,
  onChange,
}: {
  activeTab: MarketTab;
  onChange: (tab: MarketTab) => void;
}) {
  return (
    <div className="flex items-center gap-1 overflow-x-auto rounded-[1.1rem] border border-border bg-white p-1 shadow-sm scrollbar-none">
      {marketTabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`shrink-0 rounded-xl px-4 py-2 text-sm font-bold transition ${
            activeTab === tab ? "bg-[#b30012] text-white shadow-sm" : "text-secondary hover:bg-bg-alt hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

function MarketAccordion({
  market,
  match,
  selectedBetIds,
  onToggleBet,
}: {
  market: SportsbookMarket;
  match: Match;
  selectedBetIds: Set<string>;
  onToggleBet: (selection: SelectedBet) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <article className="overflow-hidden rounded-[1.15rem] border border-border bg-white shadow-[0_18px_60px_rgba(19,49,112,0.05)]">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between border-b border-border-light bg-white px-4 py-3 text-left"
      >
        <div className="flex min-w-0 items-center gap-2">
          <Star className="h-4 w-4 shrink-0 text-secondary" />
          <p className="truncate text-sm font-black text-primary">{market.title}</p>
        </div>
        <div className="flex items-center gap-2 text-secondary">
          {market.featured && <Zap className="h-4 w-4 text-[#e1334f]" />}
          <ChevronDown className={`h-4 w-4 transition ${open ? "" : "-rotate-90"}`} />
        </div>
      </button>
      {open && (
        <div className={`grid gap-2 p-2 ${market.columns.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
          {market.columns.map((column, index) => {
            const selectionId = `${match.id}:${market.id}:${index}`;

            return (
              <div key={`${market.id}-${column}`} className="min-w-0 rounded-xl bg-bg-alt p-1">
                <div className="truncate px-2 pb-2 pt-1.5 text-center text-[11px] font-semibold leading-none text-secondary">
                  {column}
                </div>
                <OddsButton
                  value={market.prices[index]}
                  selected={selectedBetIds.has(selectionId)}
                  label={`${market.title} ${column} ${market.prices[index]}`}
                  onClick={() =>
                    onToggleBet({
                      id: selectionId,
                      matchId: match.id,
                      matchLabel: `${match.home} - ${match.away}`,
                      label: column,
                      market: market.title,
                      odds: market.prices[index],
                    })
                  }
                />
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}

function EmptyMarketState({ tab }: { tab: MarketTab }) {
  return (
    <div className="rounded-[1.15rem] border border-dashed border-border bg-white px-5 py-10 text-center shadow-[0_18px_60px_rgba(19,49,112,0.04)]">
      <p className="text-sm font-black text-primary">No {tab.toLowerCase()} markets yet</p>
      <p className="mt-1 text-sm font-medium text-secondary">This prototype only includes match and totals markets for now.</p>
    </div>
  );
}

function BetSlip({
  selections,
  stake,
  totalOdds,
  possibleWin,
  compact = false,
  onStakeChange,
  onQuickStake,
  onRemove,
  onClear,
}: {
  selections: SelectedBet[];
  stake: string;
  totalOdds: string;
  possibleWin: number;
  compact?: boolean;
  onStakeChange: (value: string) => void;
  onQuickStake: (value: number) => void;
  onRemove: (selectionId: string) => void;
  onClear: () => void;
}) {
  const hasSelections = selections.length > 0;
  const canSubmit = hasSelections && Number(stake) > 0;

  return (
    <aside className="min-w-0">
      <div className={`${compact ? "" : "sticky top-[130px]"} overflow-hidden rounded-[1.45rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.08)]`}>
        <div className="border-b-2 border-[#b30012] bg-bg-alt/70 px-4 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-primary">BetSlip</p>
            <Ticket className="h-4 w-4 text-accent" />
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-border-light px-4 py-3">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary">
            <Settings className="h-4 w-4" />
            Always ask
          </span>
          <ChevronDown className="h-4 w-4 text-secondary" />
        </div>
        <div className="border-b border-border-light bg-bg-alt/50 px-4 py-3">
          <div className="flex items-center justify-between text-xs font-bold text-secondary">
            <span>Multiple</span>
            <button
              type="button"
              onClick={onClear}
              disabled={!hasSelections}
              className="text-accent underline underline-offset-2 disabled:cursor-not-allowed disabled:text-tertiary"
            >
              Remove All
            </button>
          </div>
        </div>

        {hasSelections ? (
          <div className="divide-y divide-border-light">
            {selections.map((selection) => (
              <div key={selection.id} className="relative p-4">
                <button
                  type="button"
                  onClick={() => onRemove(selection.id)}
                  aria-label={`Remove ${selection.label}`}
                  className="absolute right-3 top-3 text-tertiary hover:text-[#d12d49]"
                >
                  <X className="h-4 w-4" />
                </button>
                <p className="pr-7 text-sm font-black text-primary">{selection.label}</p>
                <p className="mt-1 text-xs font-medium leading-5 text-secondary">{selection.market}</p>
                <p className="text-xs font-semibold text-tertiary">{selection.matchLabel}</p>
                <p className="mt-2 text-right text-sm font-black text-[#d12d49]">{selection.odds}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-4 py-10 text-center">
            <p className="text-sm font-black text-primary">Your bet slip is empty</p>
            <p className="mt-1 text-xs font-semibold leading-5 text-secondary">Select odds from the match board or market cards.</p>
          </div>
        )}

        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-secondary">Odds</span>
            <span className="font-black text-[#d12d49]">{totalOdds}</span>
          </div>
          <input
            type="text"
            inputMode="decimal"
            value={stake}
            onChange={(event) => onStakeChange(event.target.value)}
            placeholder="Enter stake"
            className="w-full rounded-xl border border-border bg-bg-alt px-3 py-3 text-sm font-bold text-primary placeholder:text-secondary focus:border-accent/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10"
          />
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-secondary">Possible win:</span>
            <span className="font-black text-[#d12d49]">{formatCurrency(possibleWin)}</span>
          </div>
          <div className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-semibold leading-5 text-amber-800 ring-1 ring-amber-200">
            To place your bet, please sign in or register.
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 50, 100].map((quickStake) => (
              <button
                key={quickStake}
                type="button"
                onClick={() => onQuickStake(quickStake)}
                className="rounded-lg bg-bg-alt px-2 py-2 text-sm font-bold text-secondary hover:bg-accent-bg hover:text-accent"
              >
                {quickStake}
              </button>
            ))}
          </div>
          <button
            type="button"
            disabled={!canSubmit}
            className={`w-full rounded-xl px-4 py-3 text-sm font-black uppercase tracking-[0.12em] transition ${
              canSubmit
                ? "bg-gradient-to-r from-[#e1334f] to-[#1f5eff] text-white shadow-[0_12px_30px_rgba(31,94,255,0.2)]"
                : "bg-border text-tertiary"
            }`}
          >
            Bet Now
          </button>
        </div>
      </div>
    </aside>
  );
}

function MobileBetBar({
  pickCount,
  totalOdds,
  onOpen,
}: {
  pickCount: number;
  totalOdds: string;
  onOpen: () => void;
}) {
  if (pickCount === 0) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
      <div className="flex items-center gap-3 rounded-2xl border border-border bg-white/95 p-3 shadow-[0_20px_70px_rgba(19,49,112,0.22)] backdrop-blur-xl">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#b30012] text-white">
          <Ticket className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-black text-primary">
            {pickCount} {pickCount === 1 ? "pick" : "picks"} in BetSlip
          </p>
          <p className="text-xs font-semibold text-secondary">Total odds {totalOdds}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="rounded-xl bg-gradient-to-r from-[#e1334f] to-[#1f5eff] px-4 py-2.5 text-sm font-black text-white"
        >
          Review
        </button>
      </div>
    </div>
  );
}

function MobileBetSheet({
  open,
  children,
  onClose,
}: {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button type="button" aria-label="Close bet slip" className="absolute inset-0 bg-black/35" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-y-auto rounded-t-[1.6rem] bg-bg p-3 shadow-[0_-24px_80px_rgba(0,0,0,0.22)]">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-secondary">Review Bet Slip</p>
          <button type="button" onClick={onClose} className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-secondary">
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function SportsbookPage() {
  const [activeSport, setActiveSport] = useState(selectedMatch.sportId);
  const [activeLeague, setActiveLeague] = useState(selectedMatch.leagueId);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMatch, setActiveMatch] = useState<Match>(selectedMatch);
  const [activeMarketTab, setActiveMarketTab] = useState<MarketTab>("Match");
  const [selectedBets, setSelectedBets] = useState<SelectedBet[]>([]);
  const [stake, setStake] = useState("");
  const [mobileSlipOpen, setMobileSlipOpen] = useState(false);

  const filteredMatches = useMemo(() => {
    const query = normalizeText(searchQuery);

    return matches.filter((match) => {
      const matchesSport = match.sportId === activeSport;
      const matchesLeague = activeLeague === "all" || match.leagueId === activeLeague;
      const matchesStatus = statusFilter === "All" || match.status === statusFilter;
      const haystack = normalizeText(`${match.home} ${match.away} ${match.league} ${match.venue} ${match.headline}`);
      const matchesSearch = query.length === 0 || haystack.includes(query);

      return matchesSport && matchesLeague && matchesStatus && matchesSearch;
    });
  }, [activeLeague, activeSport, searchQuery, statusFilter]);

  const activeSportName = sports.find((sport) => sport.id === activeSport)?.name ?? "Sports";
  const currentMatch = filteredMatches.find((match) => match.id === activeMatch.id) ?? filteredMatches[0] ?? activeMatch;
  const activeMarkets = useMemo(() => buildMarkets(currentMatch), [currentMatch]);
  const visibleMarkets = activeMarketTab === "All" ? activeMarkets : activeMarkets.filter((market) => market.category === activeMarketTab);
  const selectedBetIds = useMemo(() => new Set(selectedBets.map((bet) => bet.id)), [selectedBets]);
  const numericTotalOdds = selectedBets.reduce((total, selection) => total * Number(selection.odds), selectedBets.length ? 1 : 0);
  const totalOdds = numericTotalOdds > 0 ? numericTotalOdds.toFixed(2) : "0.00";
  const possibleWin = Number(stake) > 0 && numericTotalOdds > 0 ? Number(stake) * numericTotalOdds : 0;

  function handleSportChange(sportId: string) {
    const nextLeague = leagues.find((league) => league.sportId === sportId)?.id ?? "all";
    const nextMatch = matches.find((match) => match.sportId === sportId && (nextLeague === "all" || match.leagueId === nextLeague));

    setActiveSport(sportId);
    setActiveLeague(nextLeague);
    if (nextMatch) setActiveMatch(nextMatch);
  }

  function handleLeagueChange(leagueId: string) {
    const nextMatch = matches.find((match) => match.sportId === activeSport && (leagueId === "all" || match.leagueId === leagueId));

    setActiveLeague(leagueId);
    if (nextMatch) setActiveMatch(nextMatch);
  }

  function handleToggleBet(selection: SelectedBet) {
    setSelectedBets((current) => {
      if (current.some((bet) => bet.id === selection.id)) {
        return current.filter((bet) => bet.id !== selection.id);
      }

      return [...current, selection];
    });
  }

  function handleStakeChange(value: string) {
    setStake(sanitizeStake(value));
  }

  function handleQuickStake(value: number) {
    setStake((current) => String((Number(current) || 0) + value));
  }

  const betSlip = (
    <BetSlip
      selections={selectedBets}
      stake={stake}
      totalOdds={totalOdds}
      possibleWin={possibleWin}
      onStakeChange={handleStakeChange}
      onQuickStake={handleQuickStake}
      onRemove={(selectionId) => setSelectedBets((current) => current.filter((bet) => bet.id !== selectionId))}
      onClear={() => setSelectedBets([])}
    />
  );

  return (
    <main className="mx-auto mt-[50px] max-w-[1540px] px-4 pb-28 pt-12 sm:px-6 lg:px-8 lg:pb-16 lg:pt-16" aria-label="Sportsbook">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-accent">Sportsbook</p>
          <h1 className="mt-1 text-3xl font-black tracking-tight text-primary sm:text-4xl">Live odds command center</h1>
        </div>
        <div className="flex items-center gap-2">
          {[ListFilter, Grid3X3, SlidersHorizontal, Bell].map((Icon, index) => (
            <button
              key={index}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-secondary shadow-sm transition hover:border-accent/25 hover:text-accent"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <MobileSportStrip
        activeSport={activeSport}
        statusFilter={statusFilter}
        onSportChange={handleSportChange}
        onStatusChange={setStatusFilter}
      />

      <div className="mt-4 grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)_380px] xl:grid-cols-[270px_minmax(390px,1fr)_410px_320px]">
        <SportsbookSidebar
          activeSport={activeSport}
          activeLeague={activeLeague}
          statusFilter={statusFilter}
          searchQuery={searchQuery}
          onSportChange={handleSportChange}
          onLeagueChange={handleLeagueChange}
          onStatusChange={setStatusFilter}
          onSearchChange={setSearchQuery}
        />

        <div className="min-w-0 space-y-4">
          <div className="relative lg:hidden">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-tertiary" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search competition or team"
              className="w-full rounded-2xl border border-border bg-white py-3 pl-9 pr-3 text-sm font-medium text-primary placeholder:text-tertiary shadow-sm focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/10"
            />
          </div>
          <MatchBoard
            boardTitle={`${activeSportName} Match Board`}
            matches={filteredMatches}
            selectedId={currentMatch.id}
            selectedBetIds={selectedBetIds}
            onSelect={setActiveMatch}
            onToggleBet={handleToggleBet}
          />
        </div>

        <div className="min-w-0 space-y-4">
          <MatchHero match={currentMatch} />
          <MarketTabs activeTab={activeMarketTab} onChange={setActiveMarketTab} />
          <div className="space-y-3">
            {visibleMarkets.length > 0 ? (
              visibleMarkets.map((market) => (
                <MarketAccordion
                  key={market.id}
                  market={market}
                  match={currentMatch}
                  selectedBetIds={selectedBetIds}
                  onToggleBet={handleToggleBet}
                />
              ))
            ) : (
              <EmptyMarketState tab={activeMarketTab} />
            )}
          </div>
        </div>

        <div className="hidden xl:block">{betSlip}</div>
      </div>

      <div className="mt-4 hidden lg:block xl:hidden">{betSlip}</div>

      <MobileBetBar pickCount={selectedBets.length} totalOdds={totalOdds} onOpen={() => setMobileSlipOpen(true)} />
      <MobileBetSheet open={mobileSlipOpen} onClose={() => setMobileSlipOpen(false)}>
        <BetSlip
          selections={selectedBets}
          stake={stake}
          totalOdds={totalOdds}
          possibleWin={possibleWin}
          compact
          onStakeChange={handleStakeChange}
          onQuickStake={handleQuickStake}
          onRemove={(selectionId) => setSelectedBets((current) => current.filter((bet) => bet.id !== selectionId))}
          onClear={() => setSelectedBets([])}
        />
      </MobileBetSheet>
    </main>
  );
}
