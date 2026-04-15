import { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import FeaturedMarketCard from "./components/FeaturedMarketCard";
import MarketCard from "./components/MarketCard";
import Sidebar from "./components/Sidebar";
import {
  markets,
  breakingNews,
  hotTopics,
  comments,
} from "./data/markets";

const categoryFilters = ["All", "Politics", "Crypto", "Sports", "Tech", "Economy"];

export default function App() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [activeFilter, setActiveFilter] = useState("All");

  const featured = markets[0];

  const filteredMarkets = useMemo(() => {
    const rest = markets.slice(1);
    if (activeFilter === "All") return rest;
    return rest.filter((m) => m.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <CategoryTabs active={activeTab} onChange={setActiveTab} />

      <main className="mx-auto mt-[50px] max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12 pb-16">
        <section className="mb-10 lg:mb-14 mt-4">
          <FeaturedMarketCard market={featured} comments={comments} />
        </section>

        <section className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-xl font-semibold text-primary tracking-tight">All Markets</h2>
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {categoryFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`shrink-0 px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-black text-white"
                      : "text-secondary hover:text-primary hover:bg-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 min-w-0">
            {filteredMarkets.length === 0 ? (
              <div className="text-center py-16 text-secondary">
                <p className="text-lg font-medium">No markets found</p>
                <p className="text-sm mt-1">Try selecting a different category</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredMarkets.map((market) => (
                  <MarketCard key={market.id} market={market} />
                ))}
              </div>
            )}
          </div>

          <aside className="w-full lg:w-[320px] shrink-0">
            <Sidebar breaking={breakingNews} hotTopics={hotTopics} />
          </aside>
        </div>
      </main>

      <footer className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="Alowin Markets" className="h-7 w-auto" />
            </div>
            <p className="text-xs text-tertiary">
              Prediction markets for informed decision-making. Not financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
