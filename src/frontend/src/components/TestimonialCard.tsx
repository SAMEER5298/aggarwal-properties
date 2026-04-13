import { MapPin, Star } from "lucide-react";
import type { Testimonial } from "../data/testimonials";

type TestimonialCardProps = Omit<Testimonial, "id">;

export default function TestimonialCard({
  name,
  location,
  review,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="bg-cream rounded-xl p-6 shadow-card border border-gold/10 flex flex-col gap-4 h-full">
      {/* Stars */}
      <div
        className="flex items-center gap-1"
        aria-label={`${rating} out of 5 stars`}
      >
        {(["1", "2", "3", "4", "5"] as const).map((n) => (
          <Star
            key={n}
            size={16}
            className={
              Number(n) <= rating ? "text-gold fill-gold" : "text-text-light"
            }
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review */}
      <blockquote className="text-text-mid text-sm leading-relaxed italic flex-1">
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Client */}
      <div className="pt-3 border-t border-gold/10">
        <p className="font-display text-base font-semibold text-text-dark">
          {name}
        </p>
        <div className="flex items-center gap-1.5 mt-0.5 text-text-light text-xs">
          <MapPin size={12} className="text-gold" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
