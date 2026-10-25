"use client";

import { useState } from "react";
import { GYM_DETAILS } from "@/data/gymData";
import { MessageCircle, Phone, Check, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

const GOALS = [
  "Weight Training",
  "Personal 1-on-1 Coaching",
  "Express 30-Min Workout",
  "Diet & Nutrition Guidance",
  "General Gym Access",
];

const DURATIONS = ["Trial Session First", "1 Month", "3 Months", "6 Months", "Annual (12 Months)"];

export default function EnquirySection() {
  const [goal, setGoal] = useState(GOALS[0]);
  const [duration, setDuration] = useState(DURATIONS[0]);
  const [includePtQuestion, setIncludePtQuestion] = useState(true);

  const message = `Hi! I saw your website and would like to ask about membership options for *${goal}* (Preference: *${duration}*).${
    includePtQuestion ? " Could you also share personal training rates and trial session details?" : ""
  } Thanks!`;

  const waUrl = `https://wa.me/${GYM_DETAILS.phoneRaw}?text=${encodeURIComponent(message)}`;

  const handleSend = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#283f7d", "#ec633d", "#eadfc9"],
      });
    } catch {
      // ignore
    }
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fdf8f0] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#283f7d]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-[#fffbf3] border border-[#d2cbc0] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Big Headline & Info */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ec633d] animate-pulse"></span>
                <span className="font-mono-code text-xs uppercase tracking-widest text-[#283f7d] font-bold">
                  // Member Consultation
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#212121] leading-[0.92] mb-6">
                READY TO JOIN <br />
                <span className="text-[#283f7d]">THE CULTURE?</span>
              </h2>

              <p className="text-base text-[#5b5b5b] font-light leading-relaxed mb-8">
                We believe in tailored consultations over generic static rate cards. Chat directly with the team
                on WhatsApp to get verified plans, trial session slots, and trainer availability.
              </p>

              {/* Fast Facts */}
              <div className="space-y-3 pt-6 border-t border-[#d2cbc0]">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#373737]">
                  <Check className="w-4 h-4 text-[#ec633d] shrink-0" />
                  <span>No obligation · Instant pricing &amp; trial details</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#373737]">
                  <Check className="w-4 h-4 text-[#ec633d] shrink-0" />
                  <span>Unisex gym with clean lockers, showers, and steam recovery</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-[#373737]">
                  <Check className="w-4 h-4 text-[#ec633d] shrink-0" />
                  <span>Suite 201, Fitness Boulevard, Pleasant District, Mira Road East</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Plan Selector in Illoca Sand/Paper */}
            <div className="lg:col-span-6 rounded-2xl bg-[#eadfc9]/50 border border-[#d2cbc0] p-6 sm:p-8 shadow-inner">
              <span className="block font-mono-code text-xs text-[#283f7d] uppercase tracking-wider mb-4 font-bold">
                Configure Your Inquiry:
              </span>

              {/* Goal Selector */}
              <div className="mb-5">
                <label className="block text-xs font-mono-code text-[#5b5b5b] uppercase mb-2 font-semibold">
                  Training Focus:
                </label>
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                        goal === g
                          ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                          : "bg-[#fffbf3] text-[#373737] hover:text-[#212121] border border-[#d2cbc0]"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selector */}
              <div className="mb-5">
                <label className="block text-xs font-mono-code text-[#5b5b5b] uppercase mb-2 font-semibold">
                  Duration Preference:
                </label>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono-code transition-all cursor-pointer ${
                        duration === d
                          ? "bg-[#283f7d] text-[#fffbf3] font-bold shadow-sm"
                          : "bg-[#fffbf3] text-[#5b5b5b] hover:text-[#212121] border border-[#d2cbc0]"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Checkbox */}
              <div className="mb-6">
                <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#373737]">
                  <input
                    type="checkbox"
                    checked={includePtQuestion}
                    onChange={(e) => setIncludePtQuestion(e.target.checked)}
                    className="w-4 h-4 rounded bg-[#fffbf3] border-[#a19d94] text-[#283f7d] focus:ring-0 accent-[#283f7d]"
                  />
                  <span>Ask about Personal Training rates &amp; current offers</span>
                </label>
              </div>

              {/* Preview Message */}
              <div className="mb-6 p-3.5 rounded-xl bg-[#fffbf3] border border-[#d2cbc0] shadow-sm">
                <span className="block font-mono-code text-[10px] uppercase text-[#283f7d] mb-1 font-bold">
                  Message sent to {GYM_DETAILS.phone}:
                </span>
                <p className="font-mono-code text-xs text-[#212121] line-clamp-3 leading-relaxed">
                  &quot;{message}&quot;
                </p>
              </div>

              {/* Action Buttons in Blueprint Indigo */}
              <div className="space-y-3">
                <button
                  onClick={handleSend}
                  className="w-full py-4 rounded-xl bg-[#283f7d] hover:bg-[#1f3568] text-[#fffbf3] font-display text-xl font-black uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#283f7d]/20 cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6 text-[#ec633d]" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono-code text-[#5b5b5b] px-1">
                  <a
                    href={GYM_DETAILS.phoneHref}
                    className="hover:text-[#283f7d] flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ec633d]" />
                    <span>Prefer calling? {GYM_DETAILS.phone}</span>
                  </a>

                  <a
                    href={GYM_DETAILS.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#283f7d] flex items-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#283f7d]" />
                    <span>View Map</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
