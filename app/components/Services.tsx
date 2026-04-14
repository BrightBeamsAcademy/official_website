const services = [
  { icon: "🎵", title: "Music Training" },
  { icon: "🈶", title: "Chinese Teaching" },
  { icon: "🔢", title: "Mathematics Teaching" },
];

export default function Services() {
  return (
    <section className="py-20 bg-[#F4EDD0]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: title + arrows */}
        <div className="md:w-2/5">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Best Services for Kids</h1>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-[#4A90D9] text-white flex items-center justify-center text-xl hover:bg-[#2d6fa8] transition-colors">
              ‹
            </button>
            <button className="w-10 h-10 rounded-full bg-[#4A90D9] text-white flex items-center justify-center text-xl hover:bg-[#2d6fa8] transition-colors">
              ›
            </button>
          </div>
        </div>

        {/* Right: cards */}
        <div className="md:w-3/5 flex gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 text-center flex-1 shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-base font-bold text-gray-800 group-hover:text-[#ff7162] transition-colors">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
