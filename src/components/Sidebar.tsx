import { ArrowUp, ArrowDown, TrendingUp, ArrowRight } from "lucide-react";
import type { BreakingItem, HotTopic } from "../data/markets";

function BreakingNewsList({ items }: { items: BreakingItem[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-primary">Breaking News</h3>
        <span className="rounded-md bg-accent-warm-bg px-2 py-0.5 text-[11px] font-semibold uppercase text-[#d12d49]">
          Live
        </span>
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-bg transition-colors duration-200 group text-left"
          >
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-primary transition-colors group-hover:text-accent">
                {item.title}
              </p>
              <span className="text-[11px] text-tertiary">{item.category}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-sm font-semibold text-primary">{item.probability}%</span>
              {item.trend === "up" ? (
                <ArrowUp className="w-3.5 h-3.5 text-yes" />
              ) : (
                <ArrowDown className="w-3.5 h-3.5 text-no" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function HotTopicsList({ items }: { items: HotTopic[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-primary" />
        <h3 className="text-base font-semibold text-primary">Hot Topics</h3>
      </div>
      <div className="space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-bg transition-colors duration-200 group text-left"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-accent-bg text-xs font-bold text-accent">
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-primary transition-colors group-hover:text-accent">
                {item.title}
              </p>
            </div>
            <span className="text-xs font-semibold text-secondary shrink-0">{item.volume}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Sidebar({
  breaking,
  hotTopics,
}: {
  breaking: BreakingItem[];
  hotTopics: HotTopic[];
}) {
  return (
    <div className="space-y-6">
      <div className="rounded-[1.4rem] border border-border bg-white p-5 shadow-[0_24px_80px_rgba(19,49,112,0.05)]">
        <BreakingNewsList items={breaking} />
      </div>

      <div className="rounded-[1.4rem] border border-border bg-white p-5 shadow-[0_24px_80px_rgba(19,49,112,0.05)]">
        <HotTopicsList items={hotTopics} />
      </div>

      <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e1334f] to-[#1f5eff] py-3 text-sm font-medium text-white shadow-[0_18px_60px_rgba(31,94,255,0.28)] transition-all duration-200 hover:-translate-y-1 hover:from-[#d62d49] hover:to-[#174ee0]">
        Explore all markets
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}
