import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/10000000000?text=Hi%20Wanderlust!%20I'd%20like%20to%20know%20more%20about%20your%20trips."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all hover:scale-110 pulse-ring"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
