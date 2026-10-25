"use client";

import { GYM_DETAILS } from "@/data/gymData";
import { MessageCircle, Phone, Navigation } from "lucide-react";

interface FloatingActionBarProps {
  onOpenEnquiry: () => void;
}

export default function FloatingActionBar({ onOpenEnquiry }: FloatingActionBarProps) {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-md pointer-events-auto"
    >
      <div className="flex items-center justify-between gap-2 p-2 rounded-full bg-[#fffbf3]/95 backdrop-blur-xl border border-[#d2cbc0] shadow-2xl">
        {/* Primary WhatsApp Action in Blueprint Indigo with Terracotta dot */}
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 px-4 rounded-full bg-[#283f7d] text-[#fffbf3] font-display text-sm font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1f3568] transition-all shadow-md shadow-[#283f7d]/20 cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec633d] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec633d]"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-[#ec633d]" />
          <span>Enquire on WhatsApp</span>
        </button>

        {/* Quick Call */}
        <a
          href={GYM_DETAILS.phoneHref}
          aria-label="Call gym"
          className="w-11 h-11 rounded-full bg-[#eadfc9]/60 hover:bg-[#eadfc9] text-[#283f7d] flex items-center justify-center transition-all shrink-0 border border-[#d2cbc0]"
        >
          <Phone className="w-4 h-4 text-[#283f7d]" />
        </a>

        {/* Quick Maps Direction */}
        <a
          href={GYM_DETAILS.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get directions in Google Maps"
          className="w-11 h-11 rounded-full bg-[#eadfc9]/60 hover:bg-[#eadfc9] text-[#283f7d] flex items-center justify-center transition-all shrink-0 border border-[#d2cbc0]"
        >
          <Navigation className="w-4 h-4 text-[#ec633d]" />
        </a>
      </div>
    </aside>
  );
}
