"use client";
import { CONTACT } from "../config";

export default function Footer() {
  return (
    <footer className="bg-[#F4EDD0] text-gray-600 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h4 className="text-gray-800 font-bold text-lg mb-4">Bright Beams Academy</h4>
          <p className="text-sm leading-relaxed mb-4">
            Bright Beams Academy is a premier bilingual kindergarten located in Redmond, Washington,
            dedicated to nurturing the growth and development of children aged 0 to 5 years.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-[#ff7162] hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-gray-600 flex items-center justify-center hover:bg-[#ff7162] hover:text-white transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.55-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14c-.29.76-.49 1.63-.55 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.55 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.29 1.63.49 2.91.55C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.55.79-.31 1.46-.72 2.13-1.38.67-.67 1.08-1.34 1.38-2.13.29-.76.49-1.63.55-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.55-2.91a5.85 5.85 0 0 0-1.38-2.13A5.85 5.85 0 0 0 19.86.63c-.76-.29-1.63-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
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
              className="bg-[#4A90D9] text-white py-2 rounded-full text-sm font-medium hover:bg-[#2d6fa8] transition-colors"
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
