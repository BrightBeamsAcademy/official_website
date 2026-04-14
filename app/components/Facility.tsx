export default function Facility() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: photo */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden bg-[#dceeff] aspect-[4/3]" />
          {/* Moon decoration */}
          <div className="absolute -top-4 right-8 text-4xl">🌙</div>
        </div>

        {/* Right: text */}
        <div className="relative">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Facility</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-5 text-gray-800">Great Facility for Kids</h1>
          <p className="text-gray-600 mb-4">
            Located in the heart of Downtown Redmond, our 4,600-square-foot facility offers a spacious,
            secure, and welcoming environment where your child can learn, play, and grow.
          </p>
          <p className="text-gray-600">
            Our classrooms are thoughtfully designed with age-appropriate furniture, learning stations,
            and natural light to inspire curiosity and support every stage of development.
          </p>
          {/* Clock decoration */}
          <div className="absolute -bottom-8 right-0 text-4xl">⏰</div>
        </div>
      </div>
    </section>
  );
}
