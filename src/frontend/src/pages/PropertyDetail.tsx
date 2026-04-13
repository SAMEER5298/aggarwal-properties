import { Link, useParams } from "@tanstack/react-router";
import {
  Bath,
  BedDouble,
  Car,
  Home,
  Layers,
  MapPin,
  Maximize2,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";
import EnquiryForm from "../components/EnquiryForm";
import { properties } from "../data/properties";

const statusConfig = {
  Available: { label: "Available", className: "badge-available" },
  Sold: { label: "Sold", className: "badge-sold" },
  Rented: { label: "Rented", className: "badge-rented" },
} as const;

interface DetailCell {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function PropertyDetail() {
  const { id } = useParams({ from: "/properties/$id" });
  const enquiryRef = useRef<HTMLDivElement>(null);

  const property = properties.find((p) => String(p.id) === id);

  if (!property) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
        <h1 className="font-display text-3xl font-bold text-navy mb-4">
          Property Not Found
        </h1>
        <p className="text-text-mid mb-8">
          The property you're looking for doesn't exist.
        </p>
        <Link
          to="/properties"
          className="btn-press inline-block px-8 py-3 rounded-lg bg-gold text-navy font-bold text-sm hover:bg-gold-light transition-colors duration-200"
          data-ocid="not-found-back-link"
        >
          Back to Properties
        </Link>
      </div>
    );
  }

  const statusInfo = statusConfig[property.status];

  const detailCells: DetailCell[] = [
    {
      icon: <BedDouble size={20} className="text-gold" />,
      label: "Bedrooms",
      value: property.bhk !== null ? `${property.bhk} BHK` : "N/A",
    },
    {
      icon: <Bath size={20} className="text-gold" />,
      label: "Bathrooms",
      value: property.bathrooms !== null ? String(property.bathrooms) : "N/A",
    },
    {
      icon: <Maximize2 size={20} className="text-gold" />,
      label: "Area",
      value: property.area,
    },
    {
      icon: <Home size={20} className="text-gold" />,
      label: "Type",
      value: property.type,
    },
    {
      icon: <Layers size={20} className="text-gold" />,
      label: "Furnished",
      value: property.furnished ?? "Not Applicable",
    },
    {
      icon: <Car size={20} className="text-gold" />,
      label: "Parking",
      value: property.parking ? "Available" : "Not Available",
    },
  ];

  return (
    <div className="bg-cream min-h-screen" data-ocid="property-detail-page">
      {/* Hero Image */}
      <div className="w-full h-64 md:h-96 overflow-hidden bg-navy/10">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
          data-ocid="property-detail-hero-image"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Back link (top) */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-1.5 text-gold hover:underline text-sm font-medium mb-6 transition-colors duration-200"
          data-ocid="property-detail-back-top"
        >
          ← Back to Properties
        </Link>

        {/* Title + Price Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
          <h1
            className="font-display text-3xl md:text-4xl font-bold text-text-dark leading-tight"
            data-ocid="property-detail-title"
          >
            {property.title}
          </h1>
          <div
            className="text-2xl md:text-3xl font-bold text-gold whitespace-nowrap"
            data-ocid="property-detail-price"
          >
            {property.price}
          </div>
        </div>

        {/* Location + Status */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <div className="flex items-center gap-1.5 text-text-mid text-sm">
            <MapPin size={16} className="text-gold flex-shrink-0" />
            <span>{property.location}</span>
          </div>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusInfo.className}`}
            data-ocid="property-detail-status-badge"
          >
            {statusInfo.label}
          </span>
        </div>

        {/* Details Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          data-ocid="property-detail-grid"
        >
          {detailCells.map((cell) => (
            <div
              key={cell.label}
              className="bg-[#FAF7F2] rounded-lg p-4 border border-gold/15 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                {cell.icon}
                <span className="text-xs font-medium text-text-light uppercase tracking-wide">
                  {cell.label}
                </span>
              </div>
              <p className="text-sm font-semibold text-text-dark">
                {cell.value}
              </p>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="font-display text-xl font-semibold text-text-dark mb-3">
            About This Property
          </h2>
          <p className="text-text-mid leading-relaxed text-base">
            {property.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          data-ocid="property-detail-actions"
        >
          <button
            type="button"
            onClick={() =>
              enquiryRef.current?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-press flex-1 py-3.5 px-6 rounded-lg bg-gold text-navy text-sm font-bold hover:bg-gold-light transition-colors duration-200 shadow-gold text-center"
            data-ocid="property-detail-enquire-btn"
          >
            Enquire Now
          </button>
          <a
            href="https://wa.me/919XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#22c55e] text-white text-sm font-bold hover:bg-[#16a34a] transition-colors duration-200 text-center"
            data-ocid="property-detail-whatsapp-btn"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Enquiry Form */}
        <div
          ref={enquiryRef}
          className="bg-[#FAF7F2] p-6 md:p-8 rounded-xl border border-gold/20 mt-10"
          data-ocid="property-detail-enquiry-section"
        >
          <h2 className="font-display text-2xl font-bold text-text-dark mb-6">
            Enquire About This Property
          </h2>
          <EnquiryForm />
        </div>

        {/* Back link (bottom) */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-1.5 text-gold hover:underline text-sm font-medium mt-8 block transition-colors duration-200"
          data-ocid="property-detail-back-bottom"
        >
          ← Back to Properties
        </Link>
      </div>
    </div>
  );
}
