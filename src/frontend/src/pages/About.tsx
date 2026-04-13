import { Link } from "@tanstack/react-router";
import { Award, Eye, Handshake, MapPin, Scale, Target } from "lucide-react";
import { useEffect, useRef } from "react";

/* ── Intersection Observer hook ── */
function useFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      for (const child of el.querySelectorAll<HTMLElement>(".fade-in-up")) {
        child.classList.add("visible");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            for (const child of entry.target.querySelectorAll<HTMLElement>(
              ".fade-in-up",
            )) {
              child.classList.add("visible");
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Stat item ── */
interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: "500+", label: "Properties Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "Delhi Locations" },
];

/* ── Trust items ── */
interface TrustItem {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const trustItems: TrustItem[] = [
  {
    icon: <Scale className="w-8 h-8 text-[#C9A84C]" />,
    title: "Complete Transparency",
    text: "No hidden costs, clear agreements, and straightforward dealings at every step of your property journey.",
  },
  {
    icon: <Award className="w-8 h-8 text-[#C9A84C]" />,
    title: "18+ Years Experience",
    text: "Deep market expertise across all Delhi localities, built through decades of trusted client relationships.",
  },
  {
    icon: <MapPin className="w-8 h-8 text-[#C9A84C]" />,
    title: "Local Market Experts",
    text: "Unmatched knowledge of Delhi NCR property trends, pricing, and neighbourhood dynamics.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#C9A84C]" />,
    title: "After-Sale Support",
    text: "We stay with you even after the deal is done — for documentation, registration, and beyond.",
  },
];

/* ── Page component ── */
export default function About() {
  const storyRef = useFadeIn<HTMLElement>();
  const missionRef = useFadeIn<HTMLElement>();
  const statsRef = useFadeIn<HTMLElement>();
  const trustRef = useFadeIn<HTMLElement>();

  return (
    <div className="pt-20">
      {/* ─── 1. PAGE BANNER ─────────────────────────────────────── */}
      <section
        className="relative bg-[#0B1D3A] py-16 overflow-hidden"
        aria-label="Page Banner"
      >
        {/* Gold dot pattern overlay */}
        <div className="absolute inset-0 gold-dot-pattern opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story
          </h1>
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-sm text-gray-300"
          >
            <Link
              to="/"
              className="hover:text-[#C9A84C] transition-colors duration-200"
              data-ocid="about-breadcrumb-home"
            >
              Home
            </Link>
            <span className="text-gray-500">&rsaquo;</span>
            <span className="text-[#C9A84C]">About</span>
          </nav>
        </div>
      </section>

      {/* ─── 2. STORY SECTION ───────────────────────────────────── */}
      <section
        ref={storyRef}
        className="bg-[#FAF7F2] py-20"
        aria-label="Our Story"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <div className="fade-in-up">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C9A84C] mb-3">
                Established 2008
              </p>
              <h2 className="font-display text-3xl font-bold text-[#1A1A2E] mb-6 leading-snug">
                Building Delhi's Real Estate Legacy
              </h2>
              <p className="text-[#4A5568] leading-relaxed mb-5">
                Founded in 2008, Aggarwal Properties has helped over 1,200
                families find their perfect homes across Delhi and NCR. What
                started as a small office in Connaught Place has grown into one
                of Delhi's most trusted real estate agencies, with expertise in
                residential, commercial, and rental properties. Our commitment
                to transparency, integrity, and client satisfaction has made us
                a household name in Delhi's real estate market.
              </p>
              {/* Gold separator */}
              <div className="w-16 h-0.5 bg-[#C9A84C] mb-5" />
              <p className="text-[#4A5568] leading-relaxed">
                We specialize in premium properties across South Delhi, Dwarka,
                Rohini, Vasant Kunj, and Connaught Place. Our team of
                experienced consultants provides end-to-end support — from
                property search and site visits to documentation and
                registration.
              </p>
            </div>

            {/* Right — image */}
            <div className="fade-in-up" data-delay="2">
              <img
                src="https://placehold.co/500x400?text=Aggarwal+Team"
                alt="Aggarwal Properties Team"
                className="w-full rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MISSION & VISION CARDS ──────────────────────────── */}
      <section
        ref={missionRef}
        className="bg-[#F7EDD0] py-16"
        aria-label="Mission and Vision"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              className="fade-in-up bg-white rounded-xl border-2 border-[#C9A84C] p-8 shadow-sm"
              data-ocid="about-mission-card"
            >
              <Target className="w-10 h-10 text-[#C9A84C] mb-4" />
              <h3 className="font-display text-2xl font-bold text-[#1A1A2E] mb-3">
                Our Mission
              </h3>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                To empower every client with expert real estate guidance,
                transparent processes, and unmatched service — helping them make
                the best property decisions in Delhi NCR.
              </p>
            </div>

            {/* Vision */}
            <div
              className="fade-in-up bg-white rounded-xl border-2 border-[#C9A84C] p-8 shadow-sm"
              data-delay="2"
              data-ocid="about-vision-card"
            >
              <Eye className="w-10 h-10 text-[#C9A84C] mb-4" />
              <h3 className="font-display text-2xl font-bold text-[#1A1A2E] mb-3">
                Our Vision
              </h3>
              <p className="text-[#4A5568] leading-relaxed text-sm">
                To be Delhi's most trusted real estate partner — a brand
                synonymous with integrity, excellence, and a deep commitment to
                transforming the property buying experience for every family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. STATS ROW ───────────────────────────────────────── */}
      <section
        ref={statsRef}
        className="bg-[#0B1D3A] py-16"
        aria-label="Statistics"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="fade-in-up"
                data-delay={String(i + 1) as "1" | "2" | "3" | "4"}
                data-ocid={`about-stat-${i}`}
              >
                <p className="font-display text-4xl font-bold text-[#C9A84C] mb-1">
                  {stat.value}
                </p>
                <p className="text-white text-sm font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. WHY TRUST US ────────────────────────────────────── */}
      <section
        ref={trustRef}
        className="bg-white py-20"
        aria-label="Why Our Clients Trust Us"
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section heading */}
          <div className="fade-in-up text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
              Why Our Clients Trust Us
            </h2>
            {/* Gold underline accent */}
            <div className="mx-auto w-20 h-1 rounded-full bg-[#C9A84C]" />
          </div>

          {/* Trust grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item, i) => (
              <div
                key={item.title}
                className="fade-in-up bg-[#FAF7F2] border border-[#C9A84C]/20 rounded-xl p-6 shadow-sm card-hover"
                data-delay={String(i + 1) as "1" | "2" | "3" | "4"}
                data-ocid={`about-trust-${i}`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-display font-semibold text-[#1A1A2E] text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-[#4A5568] text-sm leading-relaxed font-body">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
