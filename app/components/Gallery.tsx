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
    img: "/daycare_photos/126.JPG",
    title: "Our Infant Classroom (6 weeks – 8 months)",
    description:
      "Our infant classroom is calm and nurturing, giving the youngest learners a safe space to bond, explore, and rest. Daily activities support early motor development, sensory discovery, emotional attachment, and the beginnings of language. We use the Experience Curriculum, enriched with songs, gentle movement, bilingual language immersion, sensory play, and one-on-one caregiver interaction.",
    href: "/programs/infant",
  },
  {
    id: "waddle",
    img: "/daycare_photos/148.PNG",
    title: "Our Waddle Classroom (9 – 13 months)",
    description:
      "Our waddle classroom is warm and active, giving newly mobile little ones plenty of room to crawl, cruise, and take their first steps. Daily activities support gross motor development, early communication, social bonding, and curiosity-led exploration. We use the Experience Curriculum, enriched with music, movement, bilingual language immersion, picture books, and hands-on sensory play.",
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
    img: "/daycare_photos/125.JPG",
    title: "Our Pre-K Classroom (2 – 4 years)",
    description:
      "Our early preschool classroom is structured yet playful, helping growing learners build the confidence and skills they will carry into kindergarten. Daily activities support emerging language, social cooperation, self-care routines, and creative exploration. We use the Experience Curriculum, enriched with music, movement, bilingual language immersion, literacy concepts, and kindergarten readiness preparation.",
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

