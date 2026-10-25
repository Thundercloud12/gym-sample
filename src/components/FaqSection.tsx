"use client";

import { useState } from "react";
import { FAQS } from "@/data/gymData";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="scroll-mt-24 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#eadfc9]/30 relative border-t border-[#d2cbc0]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffbf3] border border-[#d2cbc0] text-xs font-mono-code text-[#283f7d] uppercase tracking-wider mb-3 shadow-sm font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-[#ec633d]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#212121] leading-tight">
            CLEAR ANSWERS. <br />
            <span className="text-[#283f7d]">ZERO GUESSWORK.</span>
          </h2>
        </div>

        {/* Accordion in Paper White */}
        <div className="space-y-3.5">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#fffbf3] border border-[#d2cbc0] overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#eadfc9]/20 transition-colors cursor-pointer"
                >
                  <span className="font-display text-xl sm:text-2xl font-bold uppercase text-[#212121] tracking-tight">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#eadfc9]/60 border border-[#d2cbc0] text-[#283f7d] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4 text-[#ec633d]" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#5b5b5b] font-light leading-relaxed border-t border-[#d2cbc0]/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
