import { FaWhatsapp } from 'react-icons/fa'

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Chat with ProjectsforU on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl text-white shadow-2xl shadow-emerald-500/30 transition hover:-translate-y-1 hover:shadow-emerald-500/50"
      href="https://wa.me/919876543210"
      rel="noreferrer"
      target="_blank"
    >
      <FaWhatsapp aria-hidden="true" />
    </a>
  )
}
