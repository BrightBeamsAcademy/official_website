import Image from "next/image";

export default function Facility() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: photo */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image src="/images/bba_facility.jpg" alt="Bright Beams Academy Facility" fill className="object-cover" />
        </div>

        {/* Right: text */}
        <div>
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
        </div>
      </div>
    </section>
  );
}
