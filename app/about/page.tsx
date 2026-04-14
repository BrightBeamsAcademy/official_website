import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const values = [
  { title: "Bilingual Education", desc: "Immersive Chinese and English curriculum that builds linguistic agility and cultural appreciation from the earliest age." },
  { title: "Play-Based Learning", desc: "We believe children learn best through exploration and play, with structured activities that spark curiosity and creativity." },
  { title: "Experienced Educators", desc: "Our teachers hold early childhood education degrees and are passionate about creating nurturing, joyful classrooms." },
  { title: "Family Partnership", desc: "We keep families closely involved through regular updates, events, and open-door communication." },
];

const team = [
  { name: "Ms. Jennifer Lin", role: "Founder & Director", bg: "bg-[#dceeff]" },
  { name: "Ms. Amy Chen", role: "Lead Mandarin Teacher", bg: "bg-[#fde8e5]" },
  { name: "Ms. Sarah Park", role: "Infant & Toddler Specialist", bg: "bg-[#dceeff]" },
  { name: "Mr. David Wu", role: "Music & Arts Educator", bg: "bg-[#fde8e5]" },
];

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero banner */}
      <section className="bg-[#F4EDD0] py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-800">Our Story & Mission</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We are a premier bilingual kindergarten in Redmond, WA, dedicated to giving children
            aged 0–5 the strongest possible start through joyful, culturally rich early education.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden bg-[#dceeff] aspect-[4/3]" />
          <div>
            <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-3xl font-bold mt-2 mb-5 text-gray-800">Welcome to Bright Beams Academy</h2>
            <p className="text-gray-600 mb-4">
              Bright Beams Academy was founded with a simple belief: every child deserves a warm, stimulating
              environment where they can grow, laugh, and learn. Located in the heart of Redmond, Washington,
              we serve families across Redmond, Bellevue, and Kirkland.
            </p>
            <p className="text-gray-600 mb-4">
              Our bilingual curriculum integrates both Mandarin Chinese and English, allowing children to
              develop linguistic abilities at a young age while fostering cognitive flexibility and
              cultural appreciation.
            </p>
            <p className="text-gray-600">
              From infants to pre-kindergarteners, every program is thoughtfully designed to meet
              developmental milestones while celebrating each child's unique personality.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Our Values</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#fff0ee] flex items-center justify-center mb-4">
                  <span className="text-[#ff7162] text-lg">✦</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Our Team</span>
            <h2 className="text-3xl font-bold mt-2 text-gray-800">Meet the Educators</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center">
                <div className={`${t.bg} w-32 h-32 rounded-full mx-auto mb-4`} />
                <h3 className="font-bold text-gray-800">{t.name}</h3>
                <p className="text-[#ff7162] text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#ff7162] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
        <p className="mb-8 text-white/90">Schedule a tour and see Bright Beams Academy in person.</p>
        <Link href="/contact" className="bg-white text-[#ff7162] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Contact Us
        </Link>
      </section>

      <Footer />
    </main>
  );
}
