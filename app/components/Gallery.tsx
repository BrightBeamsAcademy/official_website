"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type GalleryItem = {
  id: string;
  img: string;
  title: string;
  description: string;
  href?: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "infant",
    img: "/images/bba_infant.jpg",
    title: "Our Infant Classroom (6 weeks – 8 months)",
    description:
      "English & Mandarin immersion setting and kindergarten readiness preparation through our play-based curriculum that introduces world cultures and traditions through daily explorations.",
    href: "/programs/infant",
  },
  {
    id: "waddle",
    img: "/images/bba_waddler.jpg",
    title: "Our Waddle Classroom (9 – 13 months)",
    description:
      "English & Mandarin immersion setting and kindergarten readiness preparation through our play-based curriculum that introduces world cultures and traditions through daily explorations.",
    href: "/programs/waddle",
  },
  {
    id: "toddler",
    img: "/daycare_photos/121.JPG",
    title: "Our Toddler Classroom (12 – 24 months)",
    description:
      "Our toddler classroom is spacious, giving little ones plenty of room to move and explore. Daily activities support gross motor development, cognitive balance, classroom routines, and play-based exploration. We use the Experience Curriculum, enriched with music, movement, bilingual language immersion, literacy concepts, and emergent preschool skills.",
    href: "/programs/toddler",
  },
  {
    id: "early-preschool",
    img: "/images/bba_pschool.jpg",
    title: "Our Early Preschool Classroom (2 – 4 years)",
    description:
      "The preschool program at Bright Beams Academy is focused on preparing your child for kindergarten through emerging language, social, and self-care skills in a structured yet playful setting.",
    href: "/programs/early-preschool",
  },
];

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
          {galleryItems.map((item, i) => (
            <span
              key={item.id}
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
          {galleryItems.map((item) => {
            const card = (
              <>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 85vw, 420px"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#ff7162] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </>
            );
            return item.href ? (
              <Link
                key={item.id}
                href={item.href}
                className="snap-start shrink-0 w-[85%] md:w-[420px] group"
              >
                {card}
              </Link>
            ) : (
              <div key={item.id} className="snap-start shrink-0 w-[85%] md:w-[420px] group">
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

