import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    age: "6 weeks – 8 months",
    name: "Infant Program",
    desc: "A gentle, nurturing environment designed for the youngest learners. Caregivers build secure attachments through responsive care, sensory play, and soft introduction to both English and Mandarin through songs and stories.",
    highlights: ["1:3 caregiver-to-infant ratio", "Sensory exploration stations", "Daily Mandarin songs & stories", "Parent daily reports"],
    img: "/images/bba_infant.jpg",
    price: "Contact for pricing",
  },
  {
    age: "9 months – 13 months",
    name: "Waddle Program",
    desc: "As babies begin to discover their mobility, our Waddle program supports every crawl and first step. Play-based activities introduce world cultures through music, movement, and tactile exploration.",
    highlights: ["Low-to-the-ground safe environment", "Gross motor skill development", "Bilingual storytime daily", "Music & movement sessions"],
    img: "/images/bba_waddler.jpg",
    price: "Contact for pricing",
  },
  {
    age: "12 – 24 months",
    name: "Toddler Program",
    desc: "Our toddler curriculum is packed with variety — art, sensory bins, outdoor play, and language-rich activities — all carefully designed to build independence and prepare children for preschool.",
    highlights: ["Language-rich classroom", "Art & sensory activities daily", "Outdoor exploration time", "Social-emotional skill building"],
    img: "/images/bba_toddler.jpg",
    price: "Contact for pricing",
  },
  {
    age: "2 – 4 years",
    name: "Preschool",
    desc: "An engaging curriculum for young children that develops rhythm, pitch awareness, creativity, and expression. Children explore instruments, movement, and collaborative musical play.",
    highlights: ["Orff-inspired methodology", "Instruments for every child", "Performance opportunities"],
    img: "/images/bba_pschool.jpg",
    price: "Contact for pricing",
  },
];

export default function ProgramsPage() {
  return (
    <main>
      <Header />

      {/* Hero banner */}
      <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <img src="/logo.png" alt="" className="w-96 opacity-5" />
      </div>
        <div className="max-w-7xl mx-auto px-8 text-center">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-800">Education for Your Children</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From infancy through pre-kindergarten, every Bright Beams program blends bilingual immersion
            with play-based learning to build confident, curious children.
          </p>
        </div>
      </section>

      {/* Program cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-16">
          {programs.map((p, i) => (
            <div
              key={p.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image src={p.img} alt={p.name} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">{p.age}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-4 text-gray-800">{p.name}</h2>
                <p className="text-gray-600 mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-[#ff7162]">✦</span> {h}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="bg-[#4A90D9] text-white px-6 py-2 rounded-full text-sm hover:bg-[#2d6fa8] transition-colors">
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#4A90D9] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Schedule a Tour</h2>
        <p className="mb-8 text-white/90">Come see our classrooms and meet our teachers in person.</p>
        <Link href="/contact" className="bg-white text-[#4A90D9] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Contact Us
        </Link>
      </section>

      <Footer />
    </main>
  );
}
