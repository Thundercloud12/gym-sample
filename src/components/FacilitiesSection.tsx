"use client";

import { useState } from "react";
import { AMENITIES } from "@/data/gymData";
import {
  Activity,
  Dumbbell,
  Wind,
  Lock,
  Droplets,
  Flame,
  Car,
  Users,
  CheckCircle2,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

interface FacilitiesProps {
  onOpenEnquiry: (serviceId?: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Lock: <Lock className="w-5 h-5" />,
  Droplets: <Droplets className="w-5 h-5" />,
  Flame: <Flame className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

export default function FacilitiesSection({ onOpenEnquiry }: FacilitiesProps) {
  const [filter, setFilter] = useState<"all" | "training" | "amenity" | "recovery">("all");

  const filteredAmenities =
    filter === "all"
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === filter);

  return (
    <section id="facilities" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fdf8f0] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (De-Textified) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#a19d94]/30">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ec633d]"></span>
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#283f7d] font-bold">
                // Floor Inventory
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#212121] leading-none">
              FACILITIES &amp; <span className="text-[#283f7d]">AMENITIES.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${filter === "all"
                  ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                  : "bg-[#fffbf3] text-[#5b5b5b] hover:text-[#212121] border border-[#d2cbc0]"
                }`}
            >
              All ({AMENITIES.length})
            </button>
            <button
              onClick={() => setFilter("training")}
              className={`px-3.5 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${filter === "training"
                  ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                  : "bg-[#fffbf3] text-[#5b5b5b] hover:text-[#212121] border border-[#d2cbc0]"
                }`}
            >
              Training
            </button>
            <button
              onClick={() => setFilter("amenity")}
              className={`px-3.5 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${filter === "amenity"
                  ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                  : "bg-[#fffbf3] text-[#5b5b5b] hover:text-[#212121] border border-[#d2cbc0]"
                }`}
            >
              Locker &amp; Comfort
            </button>
            <button
              onClick={() => setFilter("recovery")}
              className={`px-3.5 py-1.5 rounded-full font-mono-code text-xs uppercase tracking-wider transition-all cursor-pointer ${filter === "recovery"
                  ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                  : "bg-[#fffbf3] text-[#5b5b5b] hover:text-[#212121] border border-[#d2cbc0]"
                }`}
            >
              Recovery
            </button>
          </div>
        </div>

        {/* De-Textified Architectural Spec Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] hover:border-[#283f7d] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#eadfc9] border border-[#d2cbc0] text-[#283f7d] flex items-center justify-center group-hover:bg-[#283f7d] group-hover:text-[#fffbf3] transition-all">
                    {iconMap[amenity.icon] || <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono-code uppercase text-[#8b8b8b] px-2 py-0.5 rounded-full bg-[#fdf8f0] border border-[#d2cbc0] font-medium">
                    {amenity.category}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-[#212121] tracking-tight mb-1 group-hover:text-[#283f7d] transition-colors">
                  {amenity.name}
                </h3>
              </div>

              {amenity.note && (
                <div className="pt-3 border-t border-[#d2cbc0]/60 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono-code text-[#283f7d] font-semibold mt-3">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#ec633d]" />
                  <span>{amenity.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Compact WhatsApp Verification Strip */}
        <div className="mt-8 p-5 rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-4 h-4 text-[#283f7d] shrink-0" />
            <span className="text-xs text-[#5b5b5b] font-medium">
              Want to check steam room slots or class timing today?
            </span>
          </div>

          <button
            onClick={() => onOpenEnquiry()}
            className="shrink-0 px-4 py-2 rounded-full bg-[#283f7d] hover:bg-[#1f3568] text-[#fffbf3] font-mono-code text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#ec633d]" />
            <span>Confirm on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
