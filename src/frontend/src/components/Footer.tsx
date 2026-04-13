import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy text-cream/80" data-ocid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <span className="font-display text-2xl font-bold text-gold block">
              Aggarwal Properties
            </span>
            <p className="text-sm leading-relaxed text-cream/70">
              Your Trusted Real Estate Partner in Delhi NCR. Over 15 years of
              helping families find their dream homes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  href: "https://youtube.com",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-cream/70 hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-gold">
                      ›
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-gold">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span>Connaught Place, New Delhi — 110001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+919XXXXXXXXX"
                  className="hover:text-gold transition-colors"
                >
                  +91 98XXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Mail size={16} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:info@aggarwalproperties.com"
                  className="hover:text-gold transition-colors break-all"
                >
                  info@aggarwalproperties.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display text-base font-semibold text-gold">
              Stay Updated
            </h3>
            <p className="text-sm text-cream/70">
              Subscribe for the latest property listings and market updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-3 py-2 text-sm rounded-lg bg-white/10 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                aria-label="Email for newsletter"
              />
              <button
                type="button"
                onClick={() => setEmail("")}
                className="btn-press px-3 py-2 rounded-lg bg-gold text-navy text-sm font-semibold hover:bg-gold-light transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>Copyright © {year} Aggarwal Properties. All Rights Reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
