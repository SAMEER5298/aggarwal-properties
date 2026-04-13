import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileOpen
            ? "bg-navy shadow-elevated"
            : "bg-transparent"
        }`}
        data-ocid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav-logo"
            >
              <span className="font-display text-xl lg:text-2xl font-bold text-gold leading-tight">
                Aggarwal Properties
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link text-sm font-medium text-cream/90 hover:text-gold pb-1 ${
                    currentPath === link.to ? "active text-gold" : ""
                  }`}
                  data-ocid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="btn-press inline-flex items-center px-5 py-2.5 rounded-lg bg-gold text-navy text-sm font-semibold hover:bg-gold-light transition-colors duration-200 shadow-gold"
                data-ocid="nav-cta"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className="md:hidden text-cream p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              data-ocid="nav-hamburger"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div
            className="md:hidden bg-navy border-t border-gold/20 animate-slide-down"
            data-ocid="nav-mobile-drawer"
          >
            <nav
              className="flex flex-col px-4 py-4 gap-1"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    currentPath === link.to
                      ? "text-gold bg-gold/10"
                      : "text-cream/90 hover:text-gold hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav-mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-press mt-3 mx-4 py-3 rounded-lg bg-gold text-navy text-center text-sm font-semibold hover:bg-gold-light transition-colors"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav-mobile-cta"
              >
                Get Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
