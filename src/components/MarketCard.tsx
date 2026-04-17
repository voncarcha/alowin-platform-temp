import { Clock, TrendingUp } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import type { Market } from "../data/markets";

function MiniChart({ data, color }: { data: { time: string; yes: number }[]; color: string }) {
  const chartData = data.map((d) => ({ v: d.yes }));
  return (
    <div className="w-20 h-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`mc-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.1} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} fill={`url(#mc-${color})`} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function MarketCard({ market }: { market: Market }) {
  const chartColor = market.probability_yes >= 50 ? "#22c55e" : "#ef4444";

  return (
    <div className="group bg-white rounded-[1.4rem] border border-border shadow-[0_24px_80px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 p-5 flex flex-col">
      <div className="flex items-start gap-2 mb-3">
        {market.tag && (
          <span
            className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
              market.tag === "LIVE"
                ? "bg-red-50 text-red-600"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {market.tag === "LIVE" && (
              <span className="inline-block w-1.5 h-1.5 bg-red-500 rounded-full mr-1 animate-pulse" />
            )}
            {market.tag}
          </span>
        )}
        <span className="text-[11px] font-medium text-secondary bg-bg px-2 py-0.5 rounded-md shrink-0">
          {market.category}
        </span>
      </div>

      <h3 className="text-base font-semibold text-primary leading-snug mb-4 line-clamp-2 min-h-[2.75rem]">
        {market.title}
      </h3>

      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-2xl font-bold text-primary">{market.probability_yes}%</p>
          <p className="text-[11px] text-secondary font-medium mt-0.5">Probability YES</p>
        </div>
        <MiniChart data={market.chartData} color={chartColor} />
      </div>

      <div className="flex items-center gap-4 text-xs text-secondary mb-4">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5" />
          <span className="font-medium">{market.volume}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          <span>{market.end_time}</span>
        </div>
      </div>

      <div className="flex gap-2 mt-auto">
        <button className="flex-1 py-2.5 text-sm font-semibold text-green-800 bg-green-100 hover:bg-green-200 border border-green-200 rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_12px_rgba(34,197,94,0.15)]">
          YES {market.probability_yes}%
        </button>
        <button className="flex-1 py-2.5 text-sm font-semibold text-red-800 bg-red-100 hover:bg-red-200 border border-red-200 rounded-full transition-all duration-200 active:scale-95 shadow-[0_4px_12px_rgba(239,68,68,0.15)]">
          NO {market.probability_no}%
        </button>
      </div>
    </div>
  );
}
