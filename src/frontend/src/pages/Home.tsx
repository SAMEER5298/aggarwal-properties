import { Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  ChevronDown,
  HeartHandshake,
  Home as HomeIcon,
  Key,
  MapPin,
  MessageCircle,
  Search,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import EnquiryForm from "../components/EnquiryForm";
import PropertyCard from "../components/PropertyCard";
import TestimonialCard from "../components/TestimonialCard";
import { properties } from "../data/properties";
import { testimonials } from "../data/testimonials";

/* ---------- Scroll animation hook ---------- */
function useFadeInSections() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = document.querySelectorAll<HTMLElement>(".fade-in-up");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);
}

/* ---------- Stats data ---------- */
const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "1,200+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "20+", label: "Delhi Locations" },
];

/* ---------- Services data ---------- */
const services = [
  {
    icon: HomeIcon,
    title: "Buy Property",
    desc: "Find your dream home from our curated selection of premium properties across Delhi NCR.",
  },
  {
    icon: TrendingUp,
    title: "Sell Property",
    desc: "Get the best market price for your property with our expert valuation and marketing.",
  },
  {
    icon: Key,
    title: "Rent Property",
    desc: "Hassle-free rentals with verified listings and transparent agreements.",
  },
  {
    icon: MessageCircle,
    title: "Free Consultation",
    desc: "Expert guidance on every step of your real estate journey — at no cost.",
  },
];

/* ---------- Why Choose Us data ---------- */
const reasons = [
  {
    icon: Shield,
    title: "Trusted Since 2008",
    desc: "Over 15 years of proven excellence in Delhi's competitive real estate market.",
  },
  {
    icon: MapPin,
    title: "Delhi Market Experts",
    desc: "Deep local knowledge of every neighbourhood, from Vasant Kunj to Rohini.",
  },
  {
    icon: HeartHandshake,
    title: "End-to-End Support",
    desc: "From property search to key handover — we're with you at every step.",
  },
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    desc: "We negotiate hard to ensure you buy, sell, or rent at the most competitive price.",
  },
];

/* ---------- Location options ---------- */
const locations = [
  "Vasant Kunj",
  "Dwarka",
  "Rohini",
  "South Delhi",
  "Connaught Place",
  "Saket",
];

/* ========== Home Page ========== */
export default function Home() {
  useFadeInSections();

  const [searchType, setSearchType] = useState("Buy");
  const [searchLocation, setSearchLocation] = useState("");
  const enquiryRef = useRef<HTMLDivElement>(null);

  const featuredProperties = properties.filter((p) => p.isFeatured);

  function scrollToEnquiry() {
    enquiryRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #0B1D3A 0%, #0e2347 60%, #1a3060 100%)",
        }}
        data-ocid="hero-section"
      >
        {/* Gold dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none gold-dot-pattern opacity-60"
          aria-hidden="true"
        />

        {/* Right radial gold glow */}
        <div
          className="absolute right-0 top-1/4 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(201,168,76,0.18) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6 pt-24 pb-16">
          <div className="fade-in-up visible">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-6">
              Delhi&apos;s Premier Real Estate Agency
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Find Your Dream Home{" "}
              <span className="text-[#C9A84C]">in Delhi</span>
            </h1>
            <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Trusted Real Estate Experts — Buy, Sell &amp; Rent with Confidence
            </p>
          </div>

          {/* Search Bar */}
          <div className="fade-in-up w-full max-w-3xl mt-2" data-delay="1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex flex-col sm:flex-row gap-2 border border-white/20 shadow-xl">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="flex-shrink-0 px-4 py-3 rounded-xl bg-[#0B1D3A] border border-white/20 text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/60 sm:w-32 cursor-pointer"
                data-ocid="hero-type-select"
                aria-label="Property type"
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </select>
              <input
                type="text"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Enter location (e.g. Vasant Kunj)..."
                className="flex-1 px-4 py-3 rounded-xl bg-[#0B1D3A] border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/60"
                data-ocid="hero-location-input"
                aria-label="Property location"
                list="location-suggestions"
              />
              <datalist id="location-suggestions">
                {locations.map((loc) => (
                  <option key={loc} value={loc} />
                ))}
              </datalist>
              <Link
                to="/properties"
                className="btn-press flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C9A84C] text-[#0B1D3A] text-sm font-bold hover:bg-[#E5C97A] transition-colors duration-200 shadow-md whitespace-nowrap"
                data-ocid="hero-search-btn"
              >
                <Search size={16} aria-hidden="true" />
                Search
              </Link>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="fade-in-up flex flex-col sm:flex-row gap-4 mt-2"
            data-delay="2"
          >
            <Link
              to="/properties"
              className="btn-press px-8 py-3.5 rounded-xl bg-[#C9A84C] text-[#0B1D3A] font-bold text-sm hover:bg-[#E5C97A] transition-colors duration-200 shadow-md"
              data-ocid="hero-browse-btn"
            >
              Browse Properties
            </Link>
            <button
              type="button"
              onClick={scrollToEnquiry}
              className="btn-press px-8 py-3.5 rounded-xl border-2 border-white/60 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-200"
              data-ocid="hero-consultation-btn"
            >
              Book Consultation
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce"
          aria-hidden="true"
        >
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        className="bg-[#0B1D3A] py-10"
        aria-label="Key statistics"
        data-ocid="stats-section"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x divide-[#C9A84C]/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-6 px-4 text-center"
              >
                <span className="font-display text-3xl font-bold text-[#C9A84C]">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-300 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section
        className="bg-[#FAF7F2] py-20 px-6"
        aria-labelledby="featured-heading"
        data-ocid="featured-properties-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-12">
            <h2
              id="featured-heading"
              className="font-display text-4xl font-bold text-[#1A1A2E] mb-4"
            >
              Featured Properties
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A84C]" />
            <p className="text-[#4A5568] text-base max-w-xl mx-auto">
              Handpicked premium properties in Delhi&apos;s finest locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, idx) => (
              <div
                key={property.id}
                className="fade-in-up"
                data-delay={String((idx + 1) as 1 | 2 | 3)}
              >
                <PropertyCard
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  bhk={property.bhk}
                  area={property.area}
                  type={property.type}
                  status={property.status}
                  image={property.image}
                  isFeatured={property.isFeatured}
                />
              </div>
            ))}
          </div>

          <div className="fade-in-up text-center mt-12">
            <Link
              to="/properties"
              className="btn-press inline-block px-8 py-3.5 rounded-xl bg-[#C9A84C] text-[#0B1D3A] font-bold text-sm hover:bg-[#E5C97A] transition-colors duration-200 shadow-md"
              data-ocid="view-all-properties-btn"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section
        className="bg-[#0B1D3A] py-20 px-6"
        aria-labelledby="services-heading"
        data-ocid="services-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-14">
            <h2
              id="services-heading"
              className="font-display text-4xl font-bold text-white mb-4"
            >
              Our Services
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A84C]" />
            <p className="text-gray-300 text-base max-w-xl mx-auto">
              Comprehensive real estate solutions tailored for Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className="fade-in-up group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C9A84C]/40 transition-all duration-300 cursor-default"
                data-delay={String((idx + 1) as 1 | 2 | 3 | 4)}
              >
                <service.icon
                  className="text-[#C9A84C] mb-5 group-hover:-translate-y-1 transition-transform duration-300"
                  size={40}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section
        className="bg-[#F7EDD0] py-20 px-6"
        aria-labelledby="why-heading"
        data-ocid="why-choose-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-14">
            <h2
              id="why-heading"
              className="font-display text-4xl font-bold text-[#1A1A2E] mb-4"
            >
              Why Choose Us
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A84C]" />
            <p className="text-[#4A5568] text-base">
              Delhi&apos;s most trusted real estate agency since 2008
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={reason.title}
                className="fade-in-up bg-white rounded-xl p-6 shadow-sm border border-[#C9A84C]/20 flex gap-4 items-start hover:shadow-md transition-shadow duration-200"
                data-delay={String((idx + 1) as 1 | 2 | 3 | 4)}
              >
                <div className="flex-shrink-0 mt-1">
                  <reason.icon
                    className="text-[#C9A84C]"
                    size={32}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[#1A1A2E] mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="bg-[#FAF7F2] py-20 px-6"
        aria-labelledby="testimonials-heading"
        data-ocid="testimonials-section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-up text-center mb-14">
            <h2
              id="testimonials-heading"
              className="font-display text-4xl font-bold text-[#1A1A2E] mb-4"
            >
              What Our Clients Say
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A84C]" />
            <p className="text-[#4A5568] text-base">
              Real stories from families we&apos;ve helped across Delhi
            </p>
          </div>

          <div
            className="fade-in-up"
            style={
              {
                "--swiper-pagination-color": "#C9A84C",
                "--swiper-navigation-color": "#C9A84C",
                "--swiper-pagination-bullet-inactive-color": "#C9A84C",
                "--swiper-pagination-bullet-inactive-opacity": "0.3",
              } as React.CSSProperties
            }
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{ clickable: true }}
              navigation={true}
              className="pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id} className="h-auto">
                  <TestimonialCard
                    name={t.name}
                    location={t.location}
                    review={t.review}
                    rating={t.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY ===== */}
      <section
        ref={enquiryRef}
        className="bg-[#0B1D3A] py-20 px-6"
        aria-labelledby="enquiry-heading"
        data-ocid="enquiry-section"
        id="enquiry"
      >
        <div className="max-w-2xl mx-auto">
          <div className="fade-in-up text-center mb-10">
            <h2
              id="enquiry-heading"
              className="font-display text-4xl font-bold text-white mb-3"
            >
              Get In Touch
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-[#C9A84C]" />
            <p className="text-gray-300 text-base">
              Ready to find your dream property? Let us help you.
            </p>
          </div>

          <div className="fade-in-up bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <EnquiryFormNavy />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Navy-styled enquiry form wrapper ---------- */
function EnquiryFormNavy() {
  return (
    <div className="enquiry-navy">
      <style>{`
        .enquiry-navy input,
        .enquiry-navy textarea,
        .enquiry-navy select {
          background-color: rgba(255,255,255,0.07) !important;
          color: white !important;
          border-color: rgba(201,168,76,0.3) !important;
        }
        .enquiry-navy input::placeholder,
        .enquiry-navy textarea::placeholder {
          color: rgba(255,255,255,0.4) !important;
        }
        .enquiry-navy label {
          color: rgba(255,255,255,0.85) !important;
        }
        .enquiry-navy input:focus,
        .enquiry-navy textarea:focus {
          border-color: #C9A84C !important;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.25) !important;
        }
        .enquiry-navy p.mt-1 {
          color: #fca5a5 !important;
        }
      `}</style>
      <EnquiryForm />
    </div>
  );
}
