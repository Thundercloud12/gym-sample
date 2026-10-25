export default function MarqueeTicker() {
  const items = [
    "WEIGHT TRAINING",
    "PERSONAL COACHING",
    "EXPRESS 30-MIN WORKOUTS",
    "NUTRITION COUNSELLING",
    "LIFESTYLE & WELLNESS",
    "STEAM & RECOVERY",
    "4.6★ GOOGLE RATED",
    "PLEASANT PARK MIRA ROAD",
    "UNISEX FITNESS CENTRE",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#283f7d] border-y border-[#1f3568] py-3.5 select-none text-[#fffbf3] shadow-inner">
      <div className="flex w-max animate-marquee">
        {/* Render 2 passes for infinite continuous loop */}
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6 px-4">
            <span className="font-display text-lg sm:text-xl font-black uppercase tracking-wider text-[#fffbf3] hover:text-[#ec633d] transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec633d] inline-block"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
