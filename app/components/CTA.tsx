import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 text-center bg-[#F4EDD0]">
      <div className="max-w-6xl mx-auto px-4">
        <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest block mb-2">Join Bright Beams</span>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Bright Beams is accepting new students!</h1>
        <Link
          href="/contact"
          className="bg-[#ff7162] text-white px-10 py-3 rounded-full font-bold hover:bg-[#e55a4a] transition-colors text-lg"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  );
}
