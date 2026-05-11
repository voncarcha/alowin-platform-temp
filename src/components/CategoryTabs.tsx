import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Ticket,
  Radio,
  Trophy,
  Crown,
  Dice5,
  Tag,
} from "lucide-react";

interface TabItem {
  label: string;
  badge?: { text: string; color: string };
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const categories: TabItem[] = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Sportsbook", icon: Trophy, href: "/sportsbook" },
  { label: "E-Sabong", badge: { text: "New", color: "bg-rose-500" }, icon: Crown, href: "/e-sabong" },
  { label: "E-Lotto", badge: { text: "New", color: "bg-rose-500" }, icon: Ticket, href: "/e-lotto" },
  { label: "Prediction", icon: Crosshair, href: "/trending" },
  { label: "Casino", icon: Dice5, href: "/casino" },
  { label: "Live Casino", icon: Radio, href: "/live-casino" },
  { label: "Promotions", icon: Tag },
];

const activeTabByPath: Record<string, string> = {
  "/": "Home",
  "/trending": "Prediction",
  "/e-lotto": "E-Lotto",
  "/sportsbook": "Sportsbook",
  "/e-sabong": "E-Sabong",
  "/arena-console": "E-Sabong",
  "/casino": "Casino",
  "/live-casino": "Live Casino",
};

export default function CategoryTabs() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const activeTab = activeTabByPath[location.pathname] ?? "";

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

  const handleTabClick = (cat: TabItem) => {
    if (cat.href) navigate(cat.href);
  };

  return (
    <div className="sticky top-[57px] sm:top-[73px] z-40 border-b border-border-light/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/95 to-transparent z-10 flex items-center pl-1"
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>
        )}

        <div ref={scrollRef} className="flex gap-2 overflow-x-auto scrollbar-none py-2.5">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => handleTabClick(cat)}
                className={`
                  relative shrink-0 flex items-center gap-1.5 px-4 py-2 text-sm font-medium
                  transition-all duration-200 rounded-full whitespace-nowrap border
                  ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#e1334f] via-[#d74059] to-[#1f5eff] border-transparent shadow-md shadow-[#1f5eff]/20"
                      : cat.href
                      ? "text-secondary bg-white/90 border-border hover:text-accent hover:border-accent/20 hover:bg-accent-bg/70 cursor-pointer"
                      : "text-secondary bg-white/90 border-border opacity-60 cursor-not-allowed"
                  }
                `}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white/80" : "text-tertiary"}`} />
                {cat.label}
                {cat.badge && (
                  <span
                    className={`
                      ml-0.5 inline-flex items-center px-1.5 py-0 rounded-full text-[10px] font-bold uppercase tracking-wide text-white
                      ${cat.badge.color}
                      ${isActive ? "opacity-90 ring-1 ring-white/30" : "ring-1 ring-accent/10"}
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
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/95 to-transparent z-10 flex items-center justify-end pr-1"
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
        )}
      </div>
    </div>
  );
}
