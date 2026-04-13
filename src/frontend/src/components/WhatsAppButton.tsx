import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-elevated hover:bg-green-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
      data-ocid="whatsapp-button"
    >
      <MessageCircle size={28} className="drop-shadow" />
    </a>
  );
}
