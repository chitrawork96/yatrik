import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { InquiryForm } from "@/components/InquiryForm";
import {
  Mountain,
  Users,
  ShieldCheck,
  Compass,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Globe,
  Calendar,
  ArrowRight,
  Tent,
  Flame,
  Star,
} from "lucide-react";

import logo from "@/assets/yatrik-logo.png.asset.json";
import hero from "@/assets/hero-mountains.jpg";
import everest from "@/assets/trek-everest.jpg";
import spiti from "@/assets/trek-spiti.jpg";
import bhutan from "@/assets/trek-bhutan.jpg";
import ladakh from "@/assets/trek-ladakh.jpg";
import kedarnath from "@/assets/trek-kedarnath.jpg";
import kashmir from "@/assets/trek-kashmir.jpg";
import posterCollection from "@/assets/yatrik-poster-collection.png.asset.json";
import posterEverest from "@/assets/yatrik-everest-poster.png.asset.json";
import posterAnnapurna from "@/assets/yatrik-annapurna-poster.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yatrik — Explore Beyond Boundaries | Himalayan Treks & Travel" },
      { name: "description", content: "Curated treks across Himalayas — Everest, Spiti, Ladakh, Bhutan, Kashmir, Kedarnath. Small groups, expert local guides, real stories. Book your adventure with Yatrik." },
      { property: "og:title", content: "Yatrik — Explore Beyond Boundaries" },
      { property: "og:description", content: "Curated Himalayan treks across India and nearby. Small groups. Expert guides. Real stories." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const treks = [
  {
    name: "Everest Base Camp",
    region: "Nepal",
    img: everest,
    duration: "12 Days",
    altitude: "5,364 m",
    price: "₹24,999",
    tagline: "A journey to the roof of the world.",
    season: "Mar–May · Sep–Nov",
  },
  {
    name: "Spiti Valley",
    region: "Himachal Pradesh",
    img: spiti,
    duration: "8 Days",
    altitude: "4,551 m",
    price: "₹18,999",
    tagline: "Wild. Raw. Magical.",
    season: "Jun–Sep",
  },
  {
    name: "Bhutan",
    region: "Land of Happiness",
    img: bhutan,
    duration: "6 Days",
    altitude: "3,120 m",
    price: "₹21,999",
    tagline: "Peace. Culture. Serenity.",
    season: "Oct–Apr",
  },
  {
    name: "Ladakh Circuit",
    region: "India",
    img: ladakh,
    duration: "9 Days",
    altitude: "5,359 m",
    price: "₹19,499",
    tagline: "The high desert calls.",
    season: "Jun–Sep",
  },
  {
    name: "Kashmir Great Lakes",
    region: "Jammu & Kashmir",
    img: kashmir,
    duration: "8 Days",
    altitude: "4,200 m",
    price: "₹16,499",
    tagline: "Seven alpine lakes, one unforgettable trail.",
    season: "Jul–Sep",
  },
  {
    name: "Kedarnath Yatra",
    region: "Uttarakhand",
    img: kedarnath,
    duration: "5 Days",
    altitude: "3,583 m",
    price: "₹12,499",
    tagline: "A pilgrimage through the clouds.",
    season: "May–Oct",
  },
];

const promises = [
  { icon: Mountain, title: "Curated Itineraries", desc: "Hand-built routes from people who've actually walked them." },
  { icon: Users, title: "Small Groups", desc: "Max 12 travelers — keeps it personal and the trails calm." },
  { icon: Compass, title: "Expert Local Guides", desc: "Certified mountain leaders from the regions you'll explore." },
  { icon: Tent, title: "Comfort Stay & Food", desc: "Cozy stays, hot meals, and a warm cup waiting at camp." },
  { icon: ShieldCheck, title: "Safety First", desc: "Medical kits, oxygen, and 24/7 support on every trail." },
  { icon: Flame, title: "Epic Experiences", desc: "Bonfires, prayer flags, sunrise summits — the moments stay." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster richColors position="top-center" />

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl container-px flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="Yatrik logo" className="h-10 w-10 object-contain" />
            <span className="font-extrabold tracking-tight text-primary text-lg">YATRIK</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#treks" className="hover:text-primary transition">Treks</a>
            <a href="#why" className="hover:text-primary transition">Why Yatrik</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-[var(--shadow-cta)]"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            Book Now <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Himalayan peaks at sunrise with prayer flags and a lone trekker"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-hero)" }} />
        <div className="mx-auto max-w-7xl container-px py-28 md:py-44 lg:py-56">
          <p className="font-[Caveat] text-2xl md:text-3xl text-secondary mb-3">Let's pack our bags!</p>
          <h1 className="max-w-3xl text-5xl md:text-7xl font-black leading-[1.05] text-white">
            Explore <span className="text-secondary italic" style={{ fontFamily: "Caveat, cursive", fontWeight: 700 }}>Beyond</span>
            <br />Boundaries
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/90">
            Epic journeys. New friendships. Unforgettable <span className="text-secondary font-semibold">memories</span>.
            Curated Himalayan treks across India and nearby.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#treks"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold uppercase tracking-wide text-secondary-foreground shadow-[var(--shadow-cta)] transition hover:translate-y-[-1px]"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              Our Trek Packages <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-7 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              Book Your Adventure
            </a>
          </div>
        </div>
      </section>

      {/* PROMISES STRIP */}
      <section id="why" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {promises.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="mx-auto inline-flex size-12 items-center justify-center rounded-full bg-secondary/15 text-secondary mb-3">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide">{title}</h3>
                <p className="mt-1 text-xs text-primary-foreground/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREKS */}
      <section id="treks" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">Our Trek Packages</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary">More Than Destinations.<br />Stories That Stay.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Handpicked Himalayan journeys built for the curious, the wandering, and the slightly stubborn.
              Pick a trail — we'll handle everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treks.map((t) => (
              <article
                key={t.name}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] ring-1 ring-border transition hover:translate-y-[-4px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.name} trek`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 right-4 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
                    {t.region}
                  </span>
                  <div className="absolute bottom-4 left-5 right-5">
                    <h3 className="text-2xl font-extrabold text-white">{t.name}</h3>
                    <p className="text-sm text-white/85">{t.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground mb-5">
                    <div className="flex items-center gap-1.5"><Calendar className="size-3.5 text-secondary" />{t.duration}</div>
                    <div className="flex items-center gap-1.5"><Mountain className="size-3.5 text-secondary" />{t.altitude}</div>
                    <div className="flex items-center gap-1.5"><Compass className="size-3.5 text-secondary" />{t.season}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="text-2xl font-extrabold text-primary">{t.price}<span className="text-sm font-medium text-muted-foreground"> /-</span></p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition"
                    >
                      Enquire <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL / POSTERS */}
      <section id="journal" className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${posterCollection.url})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative mx-auto max-w-7xl container-px">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">From The Yatrik Journal</p>
              <h2 className="text-4xl md:text-5xl font-extrabold">Postcards from the Trail</h2>
            </div>
            <p className="max-w-md text-primary-foreground/80">
              Real journeys, real moments. A peek into what awaits when you walk with Yatrik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#contact" className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[var(--shadow-card)] block">
              <img src={posterEverest.url} alt="Everest Base Camp — 12 days, 5,364m, ex Kathmandu" loading="lazy" className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs uppercase tracking-wider text-secondary font-bold">Nepal · 12 Days</p>
                <p className="text-white font-extrabold">Everest Base Camp</p>
              </div>
            </a>
            <a href="#contact" className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[var(--shadow-card)] block">
              <img src={posterAnnapurna.url} alt="Annapurna Base Camp — 10 days, 4,130m, ex Pokhara" loading="lazy" className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs uppercase tracking-wider text-secondary font-bold">Nepal · 10 Days</p>
                <p className="text-white font-extrabold">Annapurna Base Camp</p>
              </div>
            </a>
            <a href="#contact" className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-[var(--shadow-card)] block">
              <img src={posterCollection.url} alt="Yatrik trek collection — Everest, Annapurna, Bhutan & Spiti" loading="lazy" className="w-full h-auto object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs uppercase tracking-wider text-secondary font-bold">The Collection</p>
                <p className="text-white font-extrabold">All Yatrik Adventures</p>
              </div>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold uppercase tracking-wide text-secondary-foreground shadow-[var(--shadow-cta)]"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              Book Your Adventure <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 md:py-28 bg-muted">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-secondary mb-3">About Yatrik</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
              We don't just plan trips — we create stories that stay with you forever.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Yatrik is a home-grown travel and trek company built by mountain people, for mountain people.
              We're still small, still local, and that's exactly the point — every traveler gets attention,
              every itinerary gets care, and every trail gets the respect it deserves.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We focus on India and nearby regions — the Himalayas, Bhutan, Nepal — places we know
              by name, by season, and by stories told around the campfire.
            </p>
            <div className="flex flex-wrap gap-6">
              <Stat n="500+" label="Happy travelers" />
              <Stat n="25+" label="Trails curated" />
              <Stat n="4.9★" label="Average rating" />
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={kashmir} alt="Trekkers in Kashmir meadows" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl bg-card p-5 shadow-[var(--shadow-card)] ring-1 ring-border hidden md:block">
              <div className="flex gap-1 text-secondary mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-sm text-foreground italic">
                "The best views come after the hardest climbs. Yatrik made every step worth it."
              </p>
              <p className="mt-2 text-xs font-semibold text-muted-foreground">— Ananya, Spiti '25</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-6xl container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-[Caveat] text-2xl md:text-3xl text-secondary mb-2" style={{ fontFamily: "Caveat, cursive" }}>
                Mountains are calling.
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">Will you answer?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us where you'd like to go — even if it's just an idea. We'll get back within 24 hours with
                a tailored plan and honest pricing.
              </p>
              <ul className="space-y-4 text-sm">
                <ContactRow icon={Phone} label="+91 80108 80991" href="tel:+918010880991" />
                <ContactRow icon={Mail} label="hello@yatrik.in" href="mailto:hello@yatrik.in" />
                <ContactRow icon={Instagram} label="@yatrik.india" href="https://instagram.com/yatrik.india" />
                <ContactRow icon={Globe} label="www.yatrik.in" href="#" />
                <ContactRow icon={MapPin} label="India · Operating across the Himalayas" />
              </ul>
            </div>
            <div className="rounded-2xl bg-card p-6 md:p-8 shadow-[var(--shadow-card)] ring-1 ring-border">
              <h3 className="text-xl font-extrabold text-primary mb-1">Plan my trip</h3>
              <p className="text-sm text-muted-foreground mb-6">Quick form — no spam, ever.</p>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl container-px py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src={logo.url} alt="" className="h-10 w-10 object-contain bg-white/10 rounded-full p-1" />
              <span className="font-extrabold tracking-tight text-lg">YATRIK</span>
            </div>
            <p className="text-sm text-primary-foreground/70">Travel • Trek • Discover.<br />Explore Beyond Boundaries.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-3 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#treks" className="hover:text-secondary">Trek Packages</a></li>
              <li><a href="#why" className="hover:text-secondary">Why Yatrik</a></li>
              <li><a href="#about" className="hover:text-secondary">About Us</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-xs mb-3 text-secondary">Reach Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>+91 80108 80991</li>
              <li>hello@yatrik.in</li>
              <li>@yatrik.india</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl container-px py-5 text-xs text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Yatrik. All rights reserved. · Made with love in the Himalayas.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-extrabold text-primary">{n}</p>
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href?: string }) {
  const Tag = href ? "a" : "div";
  return (
    <li>
      <Tag href={href} className="flex items-center gap-3 text-foreground hover:text-secondary transition">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <Icon className="size-4" />
        </span>
        <span className="font-medium">{label}</span>
      </Tag>
    </li>
  );
}
