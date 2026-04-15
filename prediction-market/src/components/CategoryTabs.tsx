import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Flame, Radio, Trophy, Crown, Tv, Dice5, UserRound, Gamepad2, MonitorPlay, Tag, Users } from "lucide-react";

interface TabItem {
  label: string;
  badge?: { text: string; color: string };
  icon: React.ComponentType<{ className?: string }>;
}

const categories: TabItem[] = [
  { label: "Trending", icon: Flame },
  { label: "Live", icon: Radio },
  { label: "Sportsbook", icon: Trophy },
  { label: "aloKingz Arena", badge: { text: "Free", color: "bg-emerald-500" }, icon: Crown },
  { label: "PinoyPlay", badge: { text: "New", color: "bg-blue-500" }, icon: Tv },
  { label: "Casino", icon: Dice5 },
  { label: "Live Dealer Casino", icon: UserRound },
  { label: "Esports", icon: Gamepad2 },
  { label: "Virtual Games", icon: MonitorPlay },
  { label: "Promotions", icon: Tag },
  { label: "Community Hub", badge: { text: "Exclusive", color: "bg-amber-500" }, icon: Users },
];

export default function CategoryTabs({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <div className="sticky top-[57px] sm:top-[73px] z-40 bg-white/90 backdrop-blur-xl border-b border-border-light/70 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/95 to-transparent z-10 flex items-center pl-1 hover:from-white"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>
        )}

        <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-none py-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => onChange(cat.label)}
                className={`
                  relative shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                  transition-all duration-200 rounded-full whitespace-nowrap border
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-gray-900 to-gray-800 border-gray-900 shadow-md shadow-gray-900/20"
                      : "text-secondary bg-white border-gray-200 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50"
                  }
                `}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white/80" : "text-gray-400"}`} />
                {cat.label}
                {cat.badge && (
                  <span
                    className={`
                      ml-0.5 inline-flex items-center px-1.5 py-0 rounded-full text-[10px] font-bold uppercase tracking-wide text-white
                      ${cat.badge.color}
                      ${isActive ? "opacity-90 ring-1 ring-white/30" : "ring-1 ring-black/5"}
                    `}
                  >
                    {cat.badge.text}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/95 to-transparent z-10 flex items-center justify-end pr-1 hover:from-white"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
        )}
      </div>
    </div>
  );
}
