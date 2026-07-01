// ═══════════════════════════════════════════════════════════
//  NATEMBEA EXPEDITIONS — STATIC DATA
//  Edit this file to update all site content.
//  No build tools needed. Push to GitHub → auto-deploys via Cloudflare.
// ═══════════════════════════════════════════════════════════

const DATA = {

  brand: {
    name:     "Natembea Expeditions",
    tagline:  "Your Journey of a\nLifetime Begins Here",
    sub:      "At Natembea Expeditions, we believe that the world is meant to be explored. With every flight and every adventure, we open doors to new possibilities, unforgettable memories, and the sheer joy of discovery.",
    email:    "talk2us.natembeaexpeditions@gmail.com",
    phone:    "+254 718 586 381",
    phone2:   "+254 101 586 381",
    whatsapp: "254718586381",
    location: "Nairobi, Kenya",
    social: {
      instagram: "https://instagram.com/natembeaexpeditions",
      tiktok:    "https://tiktok.com/@natembeaexpeditions",
      twitter:   "https://x.com/natembeaexpeditions",
    }
  },

  nav: [
    { label: "Home",           href: "#hero" },
    { label: "Destinations",   href: "#destinations" },
    { label: "Special Offers", href: "#offers" },
    { label: "Blog",           href: "#blog" },
    { label: "About Us",       href: "#about" },
    { label: "Contact Us",     href: "#contact" },
  ],

  heroStats: [
    { num: "150+",   label: "Destinations" },
    { num: "2,400+", label: "Happy Travellers" },
    { num: "38",     label: "Curated Packages" },
    { num: "★ 4.9",  label: "Average Rating" },
  ],

  // ── TOUR PACKAGES ────────────────────────────────────────
  tours: [
    {
      id: "mara",
      badge: "Flagship Safari",
      name: "Maasai Mara Classic",
      tagline: "The Great Migration. Up Close.",
      desc: "Five days tracking lions, leopards, and wildebeest across the golden savannah with a senior Maasai field guide.",
      price: "From KES 85,000",
      duration: "5 Days · 4 Nights",
      highlights: ["Big Five game drives", "Mara River crossing", "Maasai village visit", "Hot air balloon option"],
      image: "assets/photos/maasai-mara-zebras.jpg",
    },
    {
      id: "amboseli",
      badge: "Wildlife",
      name: "Amboseli & Tsavo",
      tagline: "Giants Under Kilimanjaro",
      desc: "Photograph enormous elephant herds with Africa's highest peak as your backdrop — iconic East African imagery.",
      price: "From KES 74,000",
      duration: "4 Days · 3 Nights",
      highlights: ["Elephant herds", "Kilimanjaro views", "Tsavo red elephants", "Observation Hill sundowners"],
      image: "assets/photos/nanyuki-elephants.jpg",
    },
    {
      id: "lamu",
      badge: "Cultural",
      name: "Lamu Island Escape",
      tagline: "A UNESCO World Adrift in Time",
      desc: "Dhow sailing, Swahili rooftop dinners, and centuries of living culture on Kenya's most unspoiled coast.",
      price: "From KES 58,000",
      duration: "4 Days · 3 Nights",
      highlights: ["Dhow sunset cruise", "Old Town walking tour", "Swahili cooking class", "Shela Beach"],
      image: "assets/photos/lamu-waterfront.jpg",
    },
    {
      id: "rift",
      badge: "Scenic",
      name: "Rift Valley Lakes",
      tagline: "Flamingo Horizons & Hippo Pools",
      desc: "Pink horizons at Nakuru, hippos at Naivasha, and the soda shores of Bogoria — Kenya's geological wonder in three days.",
      price: "From KES 42,000",
      duration: "3 Days · 2 Nights",
      highlights: ["Flamingo flocks", "Lake Naivasha boat ride", "Hell's Gate cycling", "Hot springs at Bogoria"],
      image: "assets/photos/nakuru-flamingos-buffalo.webp",
    },
    {
      id: "diani",
      badge: "Beach",
      name: "Diani & Kilifi Beach Retreat",
      tagline: "Paradise on the South Coast",
      desc: "White sands, crystal waters, and swaying palms. The ultimate coastal escape along Kenya's Indian Ocean coast.",
      price: "From KES 38,000",
      duration: "3 Days · 2 Nights",
      highlights: ["Snorkelling & diving", "Colobus monkey sanctuary", "Dhow sunset cruise", "Marine park visit"],
      image: "assets/photos/kilifi-beach.jpg",
    },
    {
      id: "samburu",
      badge: "Northern",
      name: "Samburu Wilderness",
      tagline: "Kenya's Hidden Northern Gem",
      desc: "Encounter the 'Northern Special Five' with spectacular rock dining experiences and vibrant Maasai cultural encounters.",
      price: "From KES 67,000",
      duration: "4 Days · 3 Nights",
      highlights: ["Northern Special Five", "Rock outcrop dining", "Maasai cultural evening", "Ewaso Ng'iro River drives"],
      image: "assets/photos/samburu-dining.jpg",
    },
  ],

  // ── SAFARI DESTINATIONS ──────────────────────────────────
  safariDests: [
    { name: "Maasai Mara",  tag: "Wildlife Reserve",     image: "assets/photos/maasai-mara-zebras.jpg" },
    { name: "Samburu",      tag: "Northern Reserve",     image: "assets/photos/samburu-maasai.jpg" },
    { name: "Nanyuki",      tag: "Mt. Kenya Region",    image: "assets/photos/nanyuki-mountain.jpg" },
    { name: "Laikipia",     tag: "Conservancy",          image: "assets/photos/samburu-landscape.jpg" },
    { name: "Lewa",         tag: "Wildlife Conservancy", image: "assets/photos/lewa-elephants.jpg" },
    { name: "Amboseli",     tag: "National Park",        image: "assets/photos/nanyuki-elephants.jpg" },
    { name: "Meru",         tag: "National Park",        image: "assets/photos/meru-giraffe.jpg" },
    { name: "Nakuru",       tag: "Rift Valley",          image: "assets/photos/nakuru-rhinos-birds.jpg" },
    { name: "Naivasha",     tag: "Lake Destination",     image: "assets/photos/naivasha-hippo.jpg" },
    { name: "Ol Pejeta",    tag: "Conservancy",          image: "assets/photos/olpejeta-rhino.jpg" },
  ],

  // ── BEACH DESTINATIONS ───────────────────────────────────
  beachDests: [
    { name: "Diani",   tag: "South Coast",    image: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=600&q=80" },
    { name: "Watamu",  tag: "Marine Reserve", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80" },
    { name: "Malindi", tag: "Heritage Coast", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&q=80" },
    { name: "Lamu",    tag: "UNESCO Island",  image: "assets/photos/lamu-waterfront.jpg" },
    { name: "Kilifi",  tag: "Creek & Coast",  image: "assets/photos/kilifi-beach.jpg" },
  ],

  // ── SPECIAL OFFERS ───────────────────────────────────────
  offers: [
    {
      badge: "🔥 Limited Time",
      badgeClass: "offer-badge-hot",
      title: "Honeymoon Safari Package",
      desc: "A romantic journey through the Maasai Mara and Diani Beach — champagne sundowners, private lodge, and sunset dhow cruise included.",
      original: "KES 145,000",
      price: "KES 118,000",
      saving: "Save KES 27,000",
      duration: "7 Days · 6 Nights",
      tags: ["Romantic", "Beach & Safari", "Private Lodge"],
      image: "assets/photos/samburu-dining.jpg",
      expires: "Offer valid through September 2026",
    },
    {
      badge: "👨‍👩‍👧‍👦 Family Deal",
      badgeClass: "offer-badge-family",
      title: "Family Safari Adventure",
      desc: "Kids explore wildlife with dedicated family guides. Amboseli elephants, Naivasha boat ride, and a Nairobi Giraffe Centre visit.",
      original: "KES 92,000",
      price: "KES 74,000",
      saving: "Save KES 18,000",
      duration: "5 Days · 4 Nights",
      tags: ["Family", "Kids Welcome", "Educational"],
      image: "assets/photos/nanyuki-elephants.jpg",
      expires: "Valid for groups of 4+",
    },
    {
      badge: "🌦️ Low Season",
      badgeClass: "offer-badge-seasonal",
      title: "Green Season Mara Deal",
      desc: "Experience lush, rain-kissed landscapes and dramatically reduced rates. Fewer crowds, more wildlife, epic photography conditions.",
      original: "KES 78,000",
      price: "KES 55,000",
      saving: "Save KES 23,000",
      duration: "4 Days · 3 Nights",
      tags: ["Budget-Friendly", "Photography", "Low Season"],
      image: "assets/photos/maasai-mara-gate.jpg",
      expires: "April – June 2026 travel dates",
    },
    {
      badge: "👥 Group Rate",
      badgeClass: "offer-badge-group",
      title: "Group Travel Discount",
      desc: "Travel with 8 or more and unlock exclusive group pricing on any expedition. Perfect for corporates, clubs, and extended families.",
      original: "",
      price: "Up to 25% Off",
      saving: "Group Exclusive",
      duration: "Any itinerary",
      tags: ["Groups 8+", "Corporate", "Flexible Dates"],
      image: "assets/photos/samburu-maasai.jpg",
      expires: "Contact us for a custom group quote",
    },
    {
      badge: "✈️ Early Bird",
      badgeClass: "offer-badge-early",
      title: "Early Bird Expedition",
      desc: "Book your 2026 safari 90 days in advance and receive a 15% discount plus complimentary airport transfer and welcome kit.",
      original: "",
      price: "15% Off",
      saving: "+ Free Transfer",
      duration: "Any 2026 expedition",
      tags: ["Early Booking", "Bonus Perks", "All Destinations"],
      image: "assets/photos/meru-mountain.jpg",
      expires: "Book 90+ days before travel",
    },
    {
      badge: "🏖️ Beach Escape",
      badgeClass: "offer-badge-beach",
      title: "Coastal Combo Package",
      desc: "Combine any safari with a Diani or Kilifi beach extension for a seamless bush-to-beach experience at a special combined rate.",
      original: "KES 96,000",
      price: "KES 79,000",
      saving: "Save KES 17,000",
      duration: "6 Days · 5 Nights",
      tags: ["Safari + Beach", "Best of Both", "Coastal"],
      image: "assets/photos/kilifi-beach.jpg",
      expires: "Year-round availability",
    },
  ],

  // ── BLOG POSTS ───────────────────────────────────────────
  blog: [
    {
      category: "Destination Guide",
      title: "Why the Maasai Mara Should Be Your First Kenya Safari",
      excerpt: "From the thundering Great Migration to resident prides of lions, the Mara offers Africa's most iconic wildlife spectacle. Here's everything you need to know before you go.",
      image: "assets/photos/maasai-mara-zebras.jpg",
      author: "Natembea Team",
      date: "June 10, 2026",
      readTime: "6 min read",
    },
    {
      category: "Travel Tips",
      title: "10 Things to Pack for a Kenya Safari (And 5 to Leave at Home)",
      excerpt: "Packing for a safari is an art. Too little and you're unprepared; too much and you're weighed down. Our guides share the definitive packing list.",
      image: "assets/photos/lewa-rhinos.jpg",
      author: "Natembea Team",
      date: "May 28, 2026",
      readTime: "4 min read",
    },
    {
      category: "Customer Story",
      title: "\"We Saw 4 of the Big Five on Day One\" — A Family's Mara Experience",
      excerpt: "The Ochieng family from Nairobi shares their unforgettable five-day Maasai Mara Classic safari — including an unexpected lion sighting at sunrise.",
      image: "assets/photos/olpejeta-rhino.jpg",
      author: "Guest Story",
      date: "May 15, 2026",
      readTime: "5 min read",
    },
    {
      category: "Tourism News",
      title: "Kenya Named Africa's Top Safari Destination for 2026",
      excerpt: "A major international travel awards body has recognised Kenya as the continent's leading safari destination — and the numbers are backing it up with record visitor arrivals.",
      image: "assets/photos/nakuru-flamingos-buffalo.webp",
      author: "Natembea Team",
      date: "April 30, 2026",
      readTime: "3 min read",
    },
    {
      category: "Travel Inspiration",
      title: "Lamu: Kenya's Timeless Island Where Cars Don't Exist",
      excerpt: "On Lamu Island, donkeys outnumber cars and time moves at the pace of a dhow in the breeze. Discover why this UNESCO World Heritage Site is Kenya's best-kept secret.",
      image: "assets/photos/lamu-waterfront.jpg",
      author: "Natembea Team",
      date: "April 12, 2026",
      readTime: "7 min read",
    },
    {
      category: "Destination Guide",
      title: "Diani vs Kilifi: Which Kenya Beach Should You Choose?",
      excerpt: "Two of Kenya's most beloved coastal destinations, two very different vibes. We break down the highlights, the best time to visit, and who each beach is best for.",
      image: "assets/photos/kilifi-beach.jpg",
      author: "Natembea Team",
      date: "March 25, 2026",
      readTime: "5 min read",
    },
  ],

  // ── ABOUT ────────────────────────────────────────────────
  about: {
    story: '"Natembea" means "I travel" or "I walk" in Swahili, reflecting the spirit of exploration and connection. We are a team of passionate travel enthusiasts dedicated to crafting meticulously planned expeditions that cater to our clients\' unique desires.',
    detail: "From the moment they dream of their next adventure to the moment they return home, we handle every detail with expertise and care. Our logo, featuring an aeroplane soaring through vibrant orbits, perfectly encapsulates our mission: to connect you with the world, offering seamless and inspiring travel experiences that broaden your horizons.",
    mission: "Our goal is to ensure each trip is not just a destination, but a transformative experience. Welcome to Natembea Expeditions — Your World Awaits.",
    image: "assets/photos/samburu-maasai.jpg",
    stats: [
      { num: "150+",   label: "Destinations" },
      { num: "2,400+", label: "Adventurers Guided" },
      { num: "38",     label: "Unique Packages" },
      { num: "100%",   label: "Local-Led Guiding" },
    ],
    values: [
      { icon: "🌍", title: "World at Your Doorstep", text: "We believe the world is meant to be explored. Every trip opens doors to new possibilities, cultures, and unforgettable memories." },
      { icon: "✈️", title: "Seamless Experiences",   text: "From the first inquiry to the safe return home, every detail is crafted with expertise, care, and personal attention." },
      { icon: "🤝", title: "Community & Connection", text: "We partner with local guides and communities to ensure your journey genuinely gives back to the places that make it extraordinary." },
    ],
  },

  // ── GALLERY ──────────────────────────────────────────────
  gallery: [
    { image: "assets/photos/maasai-mara-zebras.jpg",         caption: "Zebra herd at sunrise, Maasai Mara", large: true },
    { image: "assets/photos/samburu-maasai.jpg",             caption: "Maasai cultural evening, Samburu" },
    { image: "assets/photos/nanyuki-elephants.jpg",          caption: "Elephant family, Nanyuki" },
    { image: "assets/photos/lamu-waterfront.jpg",            caption: "Lamu waterfront, Shela Bahari" },
    { image: "assets/photos/nakuru-flamingos-buffalo.webp",  caption: "Buffalo & flamingos, Lake Nakuru" },
    { image: "assets/photos/olpejeta-rhino.jpg",             caption: "White rhino encounter, Ol Pejeta" },
    { image: "assets/photos/naivasha-hippo.jpg",             caption: "Hippo yawning, Lake Naivasha" },
  ],

  // ── TESTIMONIALS ─────────────────────────────────────────
  testimonials: [
    { quote: "Natembea gave us a Mara experience no big operator could match. Our guide knew every lion by name — we felt like researchers, not tourists.", name: "Sarah & Tom Whitfield", role: "London, UK · Maasai Mara Safari", stars: 5, initials: "SW" },
    { quote: "The honeymoon package was absolutely magical. From the Mara to Diani, every detail was perfect. Natembea made our dream trip a reality.", name: "David & Aisha Ochieng", role: "Nairobi, Kenya · Honeymoon Package", stars: 5, initials: "DO" },
    { quote: "Lamu was like stepping into another century. The team arranged everything — the dhow, the food, the rooftop sunset. Pure magic.", name: "Amira Hassan", role: "Dubai, UAE · Lamu Escape", stars: 5, initials: "AH" },
    { quote: "We saw over 70 bird species in three days. Natembea understands that real travel is slow, unhurried, and genuine.", name: "Prof. James Mwangi", role: "Nairobi, Kenya · Rift Valley Lakes", stars: 5, initials: "JM" },
    { quote: "From airport to final goodbye, everything was seamless. A family business that genuinely cares — you feel it in every detail.", name: "Priya Sharma", role: "Mumbai, India · Amboseli & Tsavo", stars: 5, initials: "PS" },
    { quote: "Our family of five had the most incredible week. The kids still talk about the elephants in Amboseli. Absolutely life-changing.", name: "Grace & Peter Ndung'u", role: "Nairobi, Kenya · Family Safari", stars: 5, initials: "GN" },
  ],

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    details: [
      { icon: "📍", title: "Find Us",         val: "Nairobi, Kenya" },
      { icon: "📞", title: "Call / WhatsApp", val: "+254 718 586 381\n+254 101 586 381" },
      { icon: "✉️", title: "Email",           val: "talk2us.natembeaexpeditions@gmail.com" },
      { icon: "🕐", title: "Office Hours",    val: "Mon – Sat · 8am – 6pm EAT" },
    ],
    tourOptions: [
      "Maasai Mara Classic Safari",
      "Amboseli & Tsavo Adventure",
      "Samburu Wilderness Safari",
      "Rift Valley Lakes Safari",
      "Diani & Kilifi Beach Retreat",
      "Lamu Island Cultural Escape",
      "Honeymoon Package",
      "Family Safari Adventure",
      "Group Travel Booking",
      "Custom / Private Itinerary",
    ],
  },

};

if (typeof module !== "undefined") module.exports = DATA;
