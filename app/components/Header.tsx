"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "../config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Admin", href: "/admin" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#F4EDD0] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Bright Beams Academy" width={307} height={96} className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#ff7162] font-medium transition-colors text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact info + mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end text-sm text-gray-500 gap-1">
            <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-[#ff7162] transition-colors">📞 {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-[#ff7162] transition-colors">✉ {CONTACT.email}</a>
          </div>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#F4EDD0] border-t px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-[#ff7162]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t mt-2 flex flex-col gap-1 text-sm text-gray-500">
            <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-[#ff7162]">📞 {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-[#ff7162]">✉ {CONTACT.email}</a>
          </div>
        </div>
      )}
    </header>
  );
}
