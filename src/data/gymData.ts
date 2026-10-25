export interface GymService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  whatsappMessage: string;
}

export interface Amenity {
  id: string;
  name: string;
  category: "training" | "amenity" | "recovery";
  description: string;
  icon: string;
  verified: boolean;
  note?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  source: "Verified Member" | "Member Review";
  relativeDate: string;
  highlight: string;
  text: string;
  tag: string;
}

export const GYM_DETAILS = {
  name: "Urban Fitness Culture",
  brandMark: "UFC",
  tagline: "Unisex fitness centre · Pleasant District, Mira Road East",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  phoneHref: "tel:+919876543210",
  instagram: "@fitnessculture.demo",
  instagramHref: "https://instagram.com",
  googleRating: "4.6",
  googleReviewsCount: "150+",
  justdialRating: "4.6",
  justdialReviewsCount: "100+",
  address: {
    line1: "Suite 201, Fitness Boulevard",
    line2: "Pleasant District, Central Metro Link",
    area: "Mira Road East, Mumbai 401107",
    full: "Suite 201, Fitness Boulevard, Pleasant District, Mira Road East, Mumbai 401107, India",
    landmark: "Central Metro District Link",
    city: "Mira Road East, Mumbai MMR",
  },
  mapsHref: "https://maps.google.com/?q=Mira+Road+East+Mumbai",
  hours: {
    monSat: {
      days: "Monday – Saturday",
      open: "06:00",
      close: "23:00",
      display: "6:00 AM – 11:00 PM",
    },
    sunday: {
      days: "Sunday",
      open: "09:00",
      close: "18:00",
      display: "9:00 AM – 6:00 PM",
    },
  },
};

export const SERVICES: GymService[] = [
  {
    id: "weight-training",
    number: "01",
    title: "Weight Training",
    subtitle: "Heavy Iron & Precision Resistance",
    category: "Core Strength",
    description: "The core foundation of physical transformation. Free weights, Olympic barbells, dumbbells, and biomechanically aligned machines built for raw strength and progressive overload.",
    image: "/images/weights.jpg",
    tags: ["Olympic Barbells", "Resistance Machines", "Progressive Overload", "Free Weights Zone"],
    whatsappMessage: "Hi! I would like to enquire about your Weight Training facilities and membership plans.",
  },
  {
    id: "personal-training",
    number: "02",
    title: "Personal Training",
    subtitle: "Trainer-Led 1-on-1 Guidance",
    category: "Dedicated Coaching",
    description: "One-on-one coaching calibrated to your posture, biomechanics, and target goals. Form correction, personalized programming, and relentless accountability.",
    image: "/images/personal-training.jpg",
    tags: ["1-on-1 Coaching", "Form Correction", "Periodised Plans", "Progress Tracking"],
    whatsappMessage: "Hi! I would like to enquire about Personal Training availability and coaching packages.",
  },
  {
    id: "nutrition-counselling",
    number: "03",
    title: "Nutrition & Diet Planning",
    subtitle: "Sustainable Fuel Architecture",
    category: "Macro Guidance",
    description: "No crash fads or extreme starvation. Evidence-based nutritional roadmaps designed around balanced food routines, daily macronutrients, and metabolic health.",
    image: "/images/nutrition.jpg",
    tags: ["Custom Meal Guidance", "Macronutrient Split", "Habit-Based", "Body Recomposition"],
    whatsappMessage: "Hi! I would like to enquire about Nutrition Counselling and Diet Planning support.",
  },
  {
    id: "lifestyle-coaching",
    number: "04",
    title: "Lifestyle & Wellness",
    subtitle: "Consistency & Recovery Architecture",
    category: "Mind & Habit",
    description: "Sustainable health requires habit discipline outside the gym. Guidance on sleep hygiene, mobility, stress reduction, and building unbreakable daily movement habits.",
    image: "/images/lifestyle-wellness.jpg",
    tags: ["Habit Building", "Mobility Routine", "Recovery Protocols", "Mental Resilience"],
    whatsappMessage: "Hi! I would like to enquire about Lifestyle Coaching and Wellness guidance.",
  },
  {
    id: "express-workouts",
    number: "05",
    title: "Express 30-Min Workouts",
    subtitle: "High-Density Targeted Output",
    category: "Maximum Efficiency",
    description: "Engineered for working professionals and tight schedules. High-output metabolic conditioning and concentrated hypertrophy circuits finished in 30 intense minutes.",
    image: "/images/express-workout.jpg",
    tags: ["30-Min High Output", "Metabolic Conditioning", "Time Efficient", "Targeted Circuits"],
    whatsappMessage: "Hi! I would like to enquire about the Express 30-Minute Workout sessions.",
  },
];

export const AMENITIES: Amenity[] = [
  {
    id: "cardio-equipment",
    name: "Cardio Equipment Zone",
    category: "training",
    description: "Treadmills, elliptical cross-trainers, and stationary bikes for conditioning and cardiovascular endurance.",
    icon: "Activity",
    verified: true,
    note: "Modern stamina & warmup floor",
  },
  {
    id: "free-weights",
    name: "Free Weights & Machines",
    category: "training",
    description: "Dumbbell racks, Olympic benches, squat racks, and multi-station cable machines.",
    icon: "Dumbbell",
    verified: true,
    note: "Central heavy training section",
  },
  {
    id: "air-conditioning",
    name: "Climate Controlled Floor",
    category: "amenity",
    description: "Climate-controlled workout floors to maintain optimal core temperature and endurance.",
    icon: "Wind",
    verified: true,
    note: "Maintained climate control",
  },
  {
    id: "lockers",
    name: "Secure Locker Facilities",
    category: "amenity",
    description: "Dedicated personal storage lockers to keep your valuables and workout gear secure while training.",
    icon: "Lock",
    verified: true,
    note: "Secure member lockers",
  },
  {
    id: "showers",
    name: "Fresh Shower Cubicles",
    category: "amenity",
    description: "Clean shower cubicles allowing you to refresh immediately before commuting or heading to work.",
    icon: "Droplets",
    verified: true,
    note: "Post-workout hygiene",
  },
  {
    id: "steam-room",
    name: "Steam Room & Sauna",
    category: "recovery",
    description: "Warm steam therapy for muscle relaxation, circulation, and post-session restorative care.",
    icon: "Flame",
    verified: true,
    note: "Recovery suite · Check session timing",
  },
  {
    id: "parking",
    name: "Member Parking Space",
    category: "amenity",
    description: "Dedicated two-wheeler and vehicle parking space around the premises.",
    icon: "Car",
    verified: true,
    note: "Convenient parking area",
  },
  {
    id: "structured-classes",
    name: "Yoga & Group Classes",
    category: "training",
    description: "Group mobility, core conditioning, and structured classes led by qualified instructors.",
    icon: "Users",
    verified: true,
    note: "Check weekly schedule",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Alex M.",
    rating: 5,
    source: "Verified Member",
    relativeDate: "Strength Member",
    highlight: "Spotless cleanliness & top-notch equipment",
    text: "Easily one of the best training environments in the district. The cleanliness, proper spacing between machine rows, and maintenance of weights is top tier. Zero overcrowding issues if you come at the right slots.",
    tag: "Cleanliness & Space",
  },
  {
    id: "rev-2",
    author: "Jordan F.",
    rating: 5,
    source: "Verified Member",
    relativeDate: "Coaching Client",
    highlight: "Trainers who genuinely pay attention to your form",
    text: "Trainers are attentive and correct your posture right away. The atmosphere is focused and motivating. Very comfortable environment for both men and women.",
    tag: "Trainer Support",
  },
  {
    id: "rev-3",
    author: "Sam K.",
    rating: 5,
    source: "Verified Member",
    relativeDate: "Morning Lifter",
    highlight: "Heavy lifting area & air conditioning are on point",
    text: "Great dumbbells range, solid barbells, and the AC is genuinely strong so you don't suffocate during intense leg sets. Central location makes it super convenient to access daily.",
    tag: "Equipment & Vibe",
  },
];

export const FAQS = [
  {
    q: "Can I do a trial workout before joining?",
    a: "Yes! Prospective members can request a trial session to inspect the equipment, cleanliness, and overall atmosphere in person. Tap the WhatsApp enquiry button and ask our team for trial availability.",
  },
  {
    q: "What membership plans are available?",
    a: "We offer flexible membership tiers including Monthly, Quarterly, Half-Yearly, and Annual packages. Since packages are tailored to individual goals and personal training options, message us on WhatsApp for the current tariff and ongoing seasonal offers.",
  },
  {
    q: "Is personal training mandatory?",
    a: "Not at all. You can train independently using all equipment and facilities. However, if you want accelerated results, accountability, or technique refinement, 1-on-1 personal coaching is available with our certified trainers.",
  },
  {
    q: "What are your peak and off-peak hours?",
    a: "Peak hours are typically 6:30 AM–9:30 AM and 7:00 PM–10:00 PM. If you prefer a quieter floor with immediate machine availability, mid-mornings (11:00 AM–4:00 PM) are ideal.",
  },
  {
    q: "Is there parking available nearby?",
    a: "Yes, dedicated parking is available around the commercial complex.",
  },
];

/**
 * Calculates live opening status based on Indian Standard Time (IST = UTC + 5:30)
 */
export function getLiveGymStatus(testDate?: Date) {
  if (typeof window === "undefined" && !testDate) {
    return {
      isOpen: true,
      statusText: "Mon–Sat 6:00 AM – 11:00 PM · Sun 9:00 AM – 6:00 PM",
      badgeColor: "bg-[#ec633d]",
      timeStringIST: "IST (UTC+5:30)",
      weekday: "Today",
    };
  }

  const now = testDate || new Date();
  
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour12: false,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
  });
  
  const parts = formatter.formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value || "";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
  const currentTotalMins = hour * 60 + minute;

  const isSunday = weekday === "Sun";
  const openMins = isSunday ? 9 * 60 : 6 * 60;
  const closeMins = isSunday ? 18 * 60 : 23 * 60;

  const isOpen = currentTotalMins >= openMins && currentTotalMins < closeMins;

  let statusText = "";
  let badgeColor = "bg-[#ec633d]";

  if (isOpen) {
    const minsLeft = closeMins - currentTotalMins;
    const hoursLeft = Math.floor(minsLeft / 60);
    const closeDisplay = isSunday ? "6:00 PM" : "11:00 PM";
    statusText = `Open Now · Closes at ${closeDisplay} (${hoursLeft > 0 ? `${hoursLeft}h ` : ""}${minsLeft % 60}m left)`;
    badgeColor = "bg-[#ec633d]";
  } else {
    if (currentTotalMins < openMins) {
      const openDisplay = isSunday ? "9:00 AM" : "6:00 AM";
      statusText = `Closed Now · Opens today at ${openDisplay}`;
    } else {
      const nextOpenDisplay = isSunday ? "6:00 AM (Monday)" : "6:00 AM";
      statusText = `Closed for the night · Opens at ${nextOpenDisplay}`;
    }
    badgeColor = "bg-[#8b8b8b]";
  }

  const timeStringIST = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  return {
    isOpen,
    statusText,
    badgeColor,
    timeStringIST,
    weekday,
  };
}

/**
 * Builds prefilled WhatsApp enquiry URL with sample number
 */
export function buildWhatsAppLink(serviceId?: string, planType?: string, customNote?: string): string {
  const base = `https://wa.me/${GYM_DETAILS.phoneRaw}`;
  let message = "Hi! I saw your website and would like to enquire about membership options.";
  
  if (serviceId) {
    const s = SERVICES.find((item) => item.id === serviceId);
    if (s) {
      message = `Hi! I'm interested in *${s.title}*. Could you share details, timing, and membership options?`;
    }
  }

  if (planType) {
    message += ` (Interest: ${planType} plan)`;
  }

  if (customNote) {
    message += ` Note: ${customNote}`;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}
