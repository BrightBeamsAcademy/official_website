"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  { bg: "bg-transparent" },
  { bg: "bg-transparent" },
  { bg: "bg-transparent" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-[560px] flex items-center bg-white overflow-hidden">
      {/* Logo background */}
      <div className="absolute right-16 top-8 w-96 h-32 pointer-events-none select-none">
        <Image src="/logo.png" alt="" fill className="object-contain opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 md:w-1/2">
        <h3 className="text-[#ff7162] font-semibold uppercase tracking-widest mb-3">Best Choice</h3>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-5">
          Make Your Children&apos;s<br />Life Special
        </h1>
        <p className="text-gray-600 mb-8 max-w-lg">
          Our school uniquely focuses on developing children&apos;s abilities to prepare them for life.
          Your child will grow in social, physical, emotional, and intellectual aspects. Our trained
          educators will guide, nurture, and promote your child&apos;s development at every step.
        </p>
        <Link
          href="/contact"
          className="bg-[#4A90D9] text-white px-8 py-3 rounded-full hover:bg-[#2d6fa8] transition-colors font-medium"
        >
          Contact us
        </Link>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-[#4A90D9]" : "bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
