import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryForm from "../components/EnquiryForm";

interface ContactInfoItemProps {
  icon: React.ReactNode;
  heading: string;
  children: React.ReactNode;
}

function ContactInfoItem({ icon, heading, children }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-text-dark mb-0.5">{heading}</p>
        <div className="text-text-mid text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      {/* Page Banner */}
      <section
        className="relative py-16 bg-navy overflow-hidden"
        aria-label="Contact page banner"
      >
        {/* Gold dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A84C 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg mb-4">
            We'd love to hear from you
          </p>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center justify-center gap-2 text-sm text-gray-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-gold transition-colors duration-200"
                  data-ocid="breadcrumb-home"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-gray-500 mx-1">›</span>
              </li>
              <li aria-current="page" className="text-gold font-medium">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="bg-[#FAF7F2] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column — Enquiry Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-dark mb-6">
              Send Us a Message
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <EnquiryForm />
            </div>
          </div>

          {/* Right Column — Contact Information */}
          <div>
            <h2 className="font-display text-2xl font-bold text-text-dark mb-6">
              Get in Touch
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 space-y-6">
              {/* Address */}
              <ContactInfoItem
                icon={<MapPin size={18} className="text-gold" />}
                heading="Our Office"
              >
                Connaught Place, New Delhi — 110001
              </ContactInfoItem>

              <hr className="border-gray-100" />

              {/* Phone */}
              <ContactInfoItem
                icon={<Phone size={18} className="text-gold" />}
                heading="Call Us"
              >
                <a
                  href="tel:+919800000000"
                  className="hover:text-gold transition-colors duration-200"
                  data-ocid="contact-phone"
                >
                  +91 98XXX XXXXX
                </a>
              </ContactInfoItem>

              <hr className="border-gray-100" />

              {/* Email */}
              <ContactInfoItem
                icon={<Mail size={18} className="text-gold" />}
                heading="Email Us"
              >
                <a
                  href="mailto:info@aggarwalproperties.com"
                  className="hover:text-gold transition-colors duration-200"
                  data-ocid="contact-email"
                >
                  info@aggarwalproperties.com
                </a>
              </ContactInfoItem>

              <hr className="border-gray-100" />

              {/* Office Hours */}
              <ContactInfoItem
                icon={<Clock size={18} className="text-gold" />}
                heading="Office Hours"
              >
                <p>Monday–Saturday: 9:00 AM – 7:00 PM</p>
                <p>Sunday: 10:00 AM – 5:00 PM</p>
              </ContactInfoItem>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-200 mt-2"
                data-ocid="contact-whatsapp"
                aria-label="Chat with us on WhatsApp"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-white pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-text-dark text-center mb-6 pt-16">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <iframe
              title="Aggarwal Properties Location — Connaught Place, New Delhi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.674!2d77.2195!3d28.6328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47b776e8!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
