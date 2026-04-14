import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
          <Image src="/images/bba_welcome.jpg" alt="Welcome to Bright Beams Academy" fill className="object-cover" />
        </div>
        <div>
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-5 text-gray-800">Welcome to Bright Beams Academy</h1>
          <p className="text-gray-600 mb-4">
            Bright Beams Academy is a premier bilingual kindergarten located in Redmond, Washington,
            dedicated to nurturing the growth and development of children aged 0 to 5 years. In a
            region characterized by the increasing number of dual-income families in Redmond, Bellevue,
            and Kirkland, the need for high-quality early education is more essential than ever.
          </p>
          <p className="text-gray-600 mb-4">
            Bright Beams Academy offers an immersive learning environment that combines bilingual
            education, creative activities, and early cognitive development to give children the strongest
            possible start to their educational journey.
          </p>
          <p className="text-gray-600 mb-8">
            Our curriculum integrates both Chinese and English, allowing children to develop linguistic
            abilities at a young age while fostering cognitive flexibility and cultural appreciation.
          </p>
          <Link
            href="/contact"
            className="bg-[#4A90D9] text-white px-8 py-3 rounded-full hover:bg-[#2d6fa8] transition-colors font-medium"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
