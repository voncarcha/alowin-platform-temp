import { ArrowUp, ArrowDown, TrendingUp, ArrowRight } from "lucide-react";
import type { BreakingItem, HotTopic } from "../data/markets";

function BreakingNewsList({ items }: { items: BreakingItem[] }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-primary">Breaking News</h3>
        <span className="text-[11px] font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-md uppercase">
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
              <p className="text-sm font-medium text-primary truncate group-hover:text-black transition-colors">
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
            <span className="w-6 h-6 rounded-lg bg-bg text-primary text-xs font-bold flex items-center justify-center shrink-0">
              {item.rank}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-primary truncate group-hover:text-black transition-colors">
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
      <div className="bg-white rounded-[1.4rem] border border-border shadow-[0_24px_80px_rgba(0,0,0,0.04)] p-5">
        <BreakingNewsList items={breaking} />
      </div>

      <div className="bg-white rounded-[1.4rem] border border-border shadow-[0_24px_80px_rgba(0,0,0,0.04)] p-5">
        <HotTopicsList items={hotTopics} />
      </div>

      <button className="w-full group flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-black hover:bg-neutral-900 rounded-full shadow-[0_18px_60px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-200">
        Explore all markets
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  );
}
