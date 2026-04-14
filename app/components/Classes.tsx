const classes = [
  { age: "6 weeks to 8 months", name: "Infant", desc: "English & Mandarin Immersion; play-based curriculum introducing world cultures & traditions through daily explorations.", bg: "bg-[#fde8e5]", href: "#" },
  { age: "9 months to 13 months", name: "Waddle", desc: "English & Mandarin Immersion; play-based curriculum introducing world cultures & traditions through daily explorations.", bg: "bg-[#dceeff]", href: "#" },
  { age: "12 to 24 months", name: "Toddler", desc: "Variety of learning activities focused on preparing your child for preschool.", bg: "bg-[#fde8e5]", href: "#" },
  { age: "2–4 Years · 12 Seats", name: "Music Lessons", desc: "Engaging music curriculum designed to develop rhythm, creativity, and expression in young learners.", price: "$480", bg: "bg-[#dceeff]", href: "#" },
];

export default function Classes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Education for Your Children</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((c) => (
            <div key={c.name} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              <div className={`${c.bg} h-48`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs text-[#ff7162] font-semibold uppercase tracking-wide mb-1">{c.age}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{c.name}</h3>
                <p className="text-gray-600 text-sm flex-1">{c.desc}</p>
                {c.price && <div className="text-[#ff7162] font-bold mt-3">{c.price}</div>}
                <a href={c.href} className="mt-4 border border-[#ff7162] text-[#ff7162] text-center py-2 rounded-full text-sm hover:bg-[#ff7162] hover:text-white transition-colors">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
