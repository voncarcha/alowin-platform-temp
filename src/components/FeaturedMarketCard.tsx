import { TrendingUp, MessageSquare } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import type { Market, Comment } from "../data/markets";
import CommentFeed from "./CommentFeed";

function CustomTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number; dataKey: string }> }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-border rounded-xl px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
      {payload.map((p) => (
        <p key={p.dataKey} className="text-xs font-medium text-primary">
          {p.dataKey}: {p.value}%
        </p>
      ))}
    </div>
  );
}

export default function FeaturedMarketCard({
  market,
  comments,
}: {
  market: Market;
  comments: Comment[];
}) {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-[0_24px_80px_rgba(19,49,112,0.08)]">
      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-accent-warm-bg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#d12d49]">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                Live
              </span>
              <span className="rounded-md bg-accent-bg px-2.5 py-1 text-xs font-medium text-accent">
                {market.category}
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-primary leading-tight tracking-tight mb-6">
              {market.title}
            </h2>

            <div className="flex flex-wrap gap-3 mb-6">
              <button className="group flex items-center gap-3 px-5 py-3 bg-yes-bg border border-yes/15 rounded-full hover:border-yes/30 transition-all duration-200 active:scale-95">
                <span className="text-sm font-semibold text-yes">YES</span>
                <span className="text-lg font-bold text-yes">{market.probability_yes}%</span>
              </button>
              <button className="group flex items-center gap-3 px-5 py-3 bg-no-bg border border-no/15 rounded-full hover:border-no/30 transition-all duration-200 active:scale-95">
                <span className="text-sm font-semibold text-no">NO</span>
                <span className="text-lg font-bold text-no">{market.probability_no}%</span>
              </button>
              {market.probability_draw !== undefined && (
                <button className="group flex items-center gap-3 px-5 py-3 bg-bg border border-border rounded-full hover:border-neutral-400 transition-all duration-200 active:scale-95">
                  <span className="text-sm font-semibold text-primary">DRAW</span>
                  <span className="text-lg font-bold text-primary">{market.probability_draw}%</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-6 text-sm text-secondary">
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span>Volume: <span className="font-semibold text-primary">{market.volume}</span></span>
              </div>
              <div>
                Ends in: <span className="font-semibold text-primary">{market.end_time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#d12d49]" />
                <span>{comments.length}</span>
              </div>
            </div>
          </div>

          <div className="lg:w-[380px] shrink-0">
            <div className="h-48 lg:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={market.chartData} margin={{ top: 5, right: 5, bottom: 0, left: 5 }}>
                  <defs>
                    <linearGradient id="gradYes" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity={0.12} />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="gradNo" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity={0.08} />
                      <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" hide />
                  <Tooltip content={<CustomTooltip />} />
                  <Area type="monotone" dataKey="yes" stroke="#22c55e" strokeWidth={2} fill="url(#gradYes)" dot={false} />
                  <Area type="monotone" dataKey="no" stroke="#ef4444" strokeWidth={2} fill="url(#gradNo)" dot={false} />
                  {market.probability_draw !== undefined && (
                    <Area type="monotone" dataKey="draw" stroke="#171717" strokeWidth={1.5} fill="none" dot={false} strokeDasharray="4 2" />
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 flex items-center justify-center gap-4 rounded-full bg-bg-alt/60 px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-yes" />
                <span className="text-xs font-medium text-secondary">YES {market.probability_yes}%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-no" />
                <span className="text-xs font-medium text-secondary">NO {market.probability_no}%</span>
              </div>
              {market.probability_draw !== undefined && (
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-secondary">DRAW {market.probability_draw}%</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <CommentFeed comments={comments} />
        </div>
      </div>
    </div>
  );
}
