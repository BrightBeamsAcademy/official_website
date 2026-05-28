"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "../programs/data";

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const stepWidth = () => {
    const el = scrollRef.current;
    if (!el) return 0;
    const card = el.firstElementChild as HTMLElement | null;
    return card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
  };

  const scrollByCard = (direction: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: stepWidth() * direction, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const step = stepWidth();
    if (step > 0) setActiveIdx(Math.round(el.scrollLeft / step));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Pagination dots */}
        <div className="flex gap-2 mb-6">
          {programs.map((p, i) => (
            <span
              key={p.slug}
              className={`h-2 rounded-full transition-all ${
                i === activeIdx ? "w-6 bg-[#ff7162]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Title + arrow buttons */}
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Gallery</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl leading-none"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-xl leading-none"
            >
              ›
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-8 px-8 scroll-smooth scrollbar-hide"
        >
          {programs.map((p) => (
            <Link
              key={p.slug}
              href={`/programs/${p.slug}`}
              className="snap-start shrink-0 w-[85%] md:w-[420px] group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={p.img}
                  alt={`${p.name} classroom`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 85vw, 420px"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#ff7162] transition-colors">
                Our {p.name} Classroom ({p.age})
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {p.desc.split("\n\n")[0]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
