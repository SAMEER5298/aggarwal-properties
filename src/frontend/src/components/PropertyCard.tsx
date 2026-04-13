import { Link } from "@tanstack/react-router";
import { BedDouble, MapPin, Maximize2 } from "lucide-react";
import type { Property } from "../data/properties";

type PropertyCardProps = Pick<
  Property,
  | "id"
  | "title"
  | "location"
  | "price"
  | "bhk"
  | "area"
  | "type"
  | "status"
  | "image"
  | "isFeatured"
>;

const statusConfig = {
  Available: { label: "Available", className: "badge-available" },
  Sold: { label: "Sold", className: "badge-sold" },
  Rented: { label: "Rented", className: "badge-rented" },
} as const;

const typeColors = {
  Buy: "bg-navy/10 text-navy",
  Sell: "bg-gold/20 text-text-dark",
  Rent: "bg-blue-100 text-blue-800",
} as const;

export default function PropertyCard({
  id,
  title,
  location,
  price,
  bhk,
  area,
  type,
  status,
  image,
  isFeatured,
}: PropertyCardProps) {
  const statusInfo = statusConfig[status];

  return (
    <article
      className="card-hover bg-cream rounded-xl overflow-hidden shadow-card border border-gold/10 flex flex-col"
      data-ocid={`property-card-${id}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = `https://placehold.co/800x500/0B1D3A/C9A84C?text=${encodeURIComponent(title)}`;
          }}
        />
        {/* Status badge */}
        <span
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${statusInfo.className}`}
        >
          {statusInfo.label}
        </span>
        {/* Featured badge */}
        {isFeatured && (
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold badge-featured">
            ★ Featured
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-text-dark leading-tight min-w-0">
            {title}
          </h3>
          <span
            className={`flex-shrink-0 px-2 py-0.5 rounded text-xs font-medium ${typeColors[type]}`}
          >
            {type}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-text-light text-sm mb-3">
          <MapPin size={14} className="text-gold flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>

        <div className="text-2xl font-bold text-gold mb-4">{price}</div>

        <div className="flex items-center gap-4 text-text-mid text-sm mb-5">
          {bhk !== null && (
            <div className="flex items-center gap-1.5">
              <BedDouble size={15} className="text-text-light" />
              <span>{bhk} BHK</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Maximize2 size={15} className="text-text-light" />
            <span>{area}</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            to="/properties/$id"
            params={{ id: String(id) }}
            className="btn-press block w-full py-2.5 px-4 rounded-lg bg-navy text-cream text-sm font-semibold text-center hover:bg-navy/90 transition-colors duration-200"
            data-ocid={`property-view-details-${id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
