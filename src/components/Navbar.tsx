import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-border-light/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="Alopit Markets" className="h-8 sm:h-9 w-auto" />
          </a>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tertiary" />
              <input
                type="text"
                placeholder="Search markets..."
                className="w-full pl-10 pr-4 py-2 bg-bg-alt/70 border border-border rounded-full text-sm text-primary placeholder:text-tertiary shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] focus:outline-none focus:border-accent/40 focus:bg-white focus:ring-2 focus:ring-accent/10 transition-all duration-200"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <button className="px-4 py-2 text-sm font-medium text-secondary hover:text-accent transition-colors duration-200 rounded-full">
              How it works
            </button>
            <button className="px-4 py-2 text-sm font-medium text-secondary hover:text-accent transition-colors duration-200 rounded-full">
              Log in
            </button>
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#e1334f] to-[#1f5eff] hover:from-[#d62d49] hover:to-[#174ee0] rounded-full shadow-[0_16px_45px_rgba(31,94,255,0.24)] transition-all duration-200 active:scale-95">
              Sign up
            </button>
          </div>

          <button
            className="md:hidden rounded-full border border-border-light/80 bg-white/80 w-8 h-8 flex items-center justify-center text-primary shadow-sm transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border-light/50 bg-white/95 px-4 pb-4 pt-2 space-y-1 backdrop-blur-xl">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-tertiary" />
            <input
              type="text"
              placeholder="Search markets..."
              className="w-full pl-10 pr-4 py-2 bg-bg-alt/70 border border-border rounded-full text-sm text-primary placeholder:text-tertiary focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10"
            />
          </div>
          <button className="block w-full text-left px-4 py-2.5 text-sm font-medium text-secondary hover:text-accent hover:bg-accent-bg rounded-full transition-colors">
            How it works
          </button>
          <button className="block w-full text-left px-4 py-2.5 text-sm font-medium text-secondary hover:text-accent hover:bg-accent-bg rounded-full transition-colors">
            Log in
          </button>
          <button className="block w-full mt-2 px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#e1334f] to-[#1f5eff] rounded-full text-center shadow-[0_16px_45px_rgba(31,94,255,0.24)]">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
}
