"use client";

import { useState, useEffect } from "react";
import { GYM_DETAILS, getLiveGymStatus } from "@/data/gymData";
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from "lucide-react";

interface LocationHoursPanelProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const DEFAULT_STATUS = {
  isOpen: true,
  statusText: "Open Mon–Sat 6:00 AM – 11:00 PM",
  badgeColor: "bg-[#ec633d]",
  timeStringIST: "IST (UTC+5:30)",
  weekday: "Today",
};

export default function LocationHoursPanel({ onOpenEnquiry }: LocationHoursPanelProps) {
  const [status, setStatus] = useState(DEFAULT_STATUS);

  useEffect(() => {
    setStatus(getLiveGymStatus());
    const timer = setInterval(() => {
      setStatus(getLiveGymStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="location" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#eadfc9]/40 relative border-t border-[#d2cbc0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#a19d94]/30">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ec633d]"></span>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#283f7d] font-bold">
                // Address &amp; Schedule
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#212121] leading-none">
              LOCATION &amp; <span className="text-[#283f7d]">OPENING HOURS.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
            <span className="relative flex h-2 w-2">
              {status.isOpen && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec633d] opacity-75"></span>
              )}
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  status.isOpen ? "bg-[#ec633d]" : "bg-[#8b8b8b]"
                }`}
              ></span>
            </span>
            <span className="text-xs font-mono-code text-[#212121] font-bold">
              {status.statusText}
            </span>
            <span className="text-[11px] font-mono-code text-[#5b5b5b] pl-2 border-l border-[#a19d94]/40">
              IST: {status.timeStringIST}
            </span>
          </div>
        </div>

        {/* Location & Hours Architectural Spec Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Address & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#fffbf3] border border-[#d2cbc0] p-7 sm:p-9 flex flex-col justify-between shadow-md">
            <div>
              <span className="font-mono-code text-xs text-[#283f7d] uppercase tracking-wider block mb-2 font-bold">
                Facility Address
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-[#212121] tracking-tight mb-2">
                Suite 201, Fitness Boulevard
              </h3>
              <p className="text-sm sm:text-base text-[#5b5b5b] font-medium leading-relaxed mb-6">
                Pleasant District, Central Metro Link, <br />
                Mira Road East, Mumbai 401107.
              </p>

              {/* Transit & Commute Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-5 border-t border-[#d2cbc0]/60">
                <div className="flex items-center gap-2.5 text-xs text-[#5b5b5b]">
                  <Navigation className="w-4 h-4 text-[#ec633d] shrink-0" />
                  <span>Central Metro District Access</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-[#5b5b5b]">
                  <MapPin className="w-4 h-4 text-[#283f7d] shrink-0" />
                  <span>5–7 mins from Station Link</span>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#d2cbc0]">
              <a
                href={GYM_DETAILS.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#283f7d] text-[#fffbf3] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#1f3568] transition-all group shadow-md shadow-[#283f7d]/20"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#fffbf3]/70" />
              </a>

              <a
                href={GYM_DETAILS.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fffbf3] hover:bg-[#eadfc9] border border-[#a19d94]/50 text-[#212121] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#283f7d]" />
                <span>Call {GYM_DETAILS.phone}</span>
              </a>

              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#fffbf3] hover:bg-[#ec633d] border border-[#ec633d] text-[#ec633d] hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire Timing</span>
              </button>
            </div>
          </div>

          {/* Right Column: Confirmed Opening Hours Table (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#fffbf3] border border-[#d2cbc0] p-7 sm:p-9 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono-code text-xs text-[#283f7d] uppercase tracking-wider block font-bold">
                  Operating Hours
                </span>
                <Clock className="w-4 h-4 text-[#ec633d]" />
              </div>

              <div className="space-y-3.5">
                {/* Mon - Sat Row */}
                <div className="p-4 rounded-xl bg-[#fdf8f0] border border-[#d2cbc0]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#212121] text-xs uppercase tracking-wider">
                      Monday – Saturday
                    </span>
                    <span className="text-[10px] font-mono-code text-[#283f7d] px-2 py-0.5 rounded-full bg-[#283f7d]/10 uppercase font-bold">
                      17 Hours
                    </span>
                  </div>
                  <div className="font-display text-3xl font-black text-[#283f7d] tracking-tight">
                    6:00 AM – 11:00 PM
                  </div>
                </div>

                {/* Sunday Row */}
                <div className="p-4 rounded-xl bg-[#fdf8f0] border border-[#d2cbc0]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#212121] text-xs uppercase tracking-wider">
                      Sunday
                    </span>
                    <span className="text-[10px] font-mono-code text-[#5b5b5b] px-2 py-0.5 rounded-full bg-[#eadfc9] uppercase font-bold">
                      Weekend
                    </span>
                  </div>
                  <div className="font-display text-3xl font-black text-[#373737] tracking-tight">
                    9:00 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-5 pt-4 border-t border-[#d2cbc0] text-[11px] text-[#8b8b8b] font-mono-code">
              * Holiday slots or personal training reservations can be confirmed via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
