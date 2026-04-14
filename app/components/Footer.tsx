"use client";
import { CONTACT } from "../config";

export default function Footer() {
  return (
    <footer className="bg-[#F4EDD0] text-gray-600 pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg mb-4">Bright Beams Academy</h4>
          <p className="text-sm leading-relaxed mb-4">
            Bright Beams Academy is a premier bilingual kindergarten located in Redmond, Washington,
            dedicated to nurturing the growth and development of children aged 0 to 5 years.
          </p>
          <div className="flex gap-3">
            {["f", "𝕏", "📷", "▶"].map((icon) => (
              <a key={icon} href="#" className="w-8 h-8 bg-[#ff7162] text-white rounded-full flex items-center justify-center text-xs hover:bg-[#e55a4a] transition-colors">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg mb-4">Useful Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Our Programs", "Blog", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-[#ff7162] transition-colors">→ {l}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg mb-4">Get in Touch</h4>
          <div className="space-y-3 text-sm">
            <p>📍 {CONTACT.address}</p>
            <p><a href={`tel:${CONTACT.phoneTel}`} className="hover:text-[#ff7162]">📞 {CONTACT.phone}</a></p>
            <p><a href={`mailto:${CONTACT.email}`} className="hover:text-[#ff7162]">✉ {CONTACT.email}</a></p>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg mb-4">Subscribe Now</h4>
          <p className="text-sm mb-4">Stay updated with the latest news and events from Bright Beams Academy.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff7162] border border-gray-300"
            />
            <button
              type="submit"
              className="bg-[#ff7162] text-white py-2 rounded-full text-sm font-medium hover:bg-[#e55a4a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        Copyright © Bright Beams Academy 2024. All Rights Reserved
      </div>
    </footer>
  );
}
