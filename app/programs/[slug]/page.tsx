import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { programs, getProgramBySlug } from "../data";

export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== slug);

  return (
    <main>
      <Header />

      {/* Banner */}
      <section className="relative bg-white py-16 overflow-hidden">
        <div className="absolute top-0 right-0 pointer-events-none select-none">
          <img src="/logo.png" alt="" className="w-96 opacity-5" />
        </div>
        <div className="relative max-w-6xl mx-auto px-8 text-center">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800">{program.name}</h1>
          <p className="text-gray-500 mt-2">{program.age}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
            <Image src={program.img} alt={program.name} fill className="object-cover" />
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{program.name} Program</h2>
            <div className="text-gray-600 leading-relaxed mb-6 space-y-3">
              {program.desc.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm text-gray-500">Age:</span>
              <span className="bg-[#dceeff] text-[#4A90D9] text-sm font-semibold px-3 py-1 rounded-full">{program.age}</span>
            </div>
            <Link
              href="/contact"
              className="bg-[#4A90D9] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d6fa8] transition-colors"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">Program Details</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {program.details.map((d) => (
              <div key={d.heading} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{d.heading}</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                  {d.body.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related programs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Programs</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/programs/${p.slug}`} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                <div className="relative h-40">
                  <Image src={p.img} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#ff7162] font-semibold uppercase tracking-wide mb-1">{p.age}</div>
                  <h3 className="font-bold text-gray-800 group-hover:text-[#4A90D9] transition-colors">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
