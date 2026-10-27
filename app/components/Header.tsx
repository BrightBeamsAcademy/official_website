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
];

const getCurrentMonth = () =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "America/Los_Angeles",
  }).format(new Date());

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentMonth = getCurrentMonth();

  return (
    <header className="bg-[#F4EDD0] shadow-sm sticky top-0 z-50">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-6 py-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <Link href="/" className="justify-self-start">
          <Image src="/logo.png" alt="Bright Beams Academy" width={307} height={96} priority className="h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex gap-10">
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
        <div className="flex justify-self-end items-center gap-4">
          <div className="hidden xl:flex flex-col items-end text-sm text-gray-500 gap-1">
            <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-[#ff7162] transition-colors">📞 {CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-[#ff7162] transition-colors">✉ {CONTACT.email}</a>
          </div>
          <button
            className="xl:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="xl:hidden bg-[#F4EDD0] border-t px-4 pb-4">
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

      {/* Notification banner */}
      <a
        href="/BBA%20Flyer%20-%20OPEN%20HOUSE.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#ff7162] text-white text-sm md:text-base hover:opacity-90 transition-opacity"
      >
        <div className="max-w-5xl mx-auto px-8 py-2 text-center">
          🌟 Open House every Sunday 11am – 12pm for the Month of {currentMonth}
          <span className="ml-2 underline underline-offset-2">View details ↗</span>
        </div>
      </a>
      <a
        href="/images/winter-discount.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-t-4 border-[#F4EDD0] bg-[#ff7162] text-white text-sm md:text-base hover:opacity-90 transition-opacity"
      >
        <div className="max-w-5xl mx-auto px-8 py-2 text-center">
          🌟 Checkout our winter holiday season discount
          <span className="ml-2 underline underline-offset-2">View details ↗</span>
        </div>
      </a>
    </header>
  );
}
