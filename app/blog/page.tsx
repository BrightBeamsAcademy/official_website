import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const posts = [
  {
    category: "Bilingual Education",
    date: "March 28, 2025",
    title: "Why Bilingual Education Matters in Early Childhood",
    excerpt: "Research consistently shows that children who learn two languages simultaneously develop stronger cognitive flexibility, problem-solving skills, and cultural empathy. Here's what the science says.",
    bg: "bg-[#dceeff]",
    slug: "#",
  },
  {
    category: "Child Development",
    date: "March 14, 2025",
    title: "The Power of Play: How Unstructured Time Builds Brains",
    excerpt: "Play isn't just fun — it's the primary vehicle through which young children learn. Discover how Bright Beams integrates purposeful play into every part of our day.",
    bg: "bg-[#fde8e5]",
    slug: "#",
  },
  {
    category: "Family Tips",
    date: "February 28, 2025",
    title: "5 Ways to Support Mandarin at Home",
    excerpt: "You don't need to speak Mandarin yourself to reinforce what your child learns at school. Try these five simple, fun activities to keep the language alive at home.",
    bg: "bg-[#dceeff]",
    slug: "#",
  },
  {
    category: "Academy News",
    date: "February 14, 2025",
    title: "Spring Showcase: A Celebration of Our Little Learners",
    excerpt: "Last week's Spring Showcase was a beautiful reminder of how far our students have come. Songs, artwork, and so many proud families filled our halls.",
    bg: "bg-[#fde8e5]",
    slug: "#",
  },
  {
    category: "Child Development",
    date: "January 30, 2025",
    title: "Transitions: Helping Your Child Move Between Programs",
    excerpt: "Moving from the Toddler program to Music Lessons or preparing for kindergarten can feel daunting. Our teachers share their top strategies for smooth, confident transitions.",
    bg: "bg-[#dceeff]",
    slug: "#",
  },
  {
    category: "Bilingual Education",
    date: "January 15, 2025",
    title: "Songs, Stories, and Syntax: How We Teach Mandarin",
    excerpt: "At Bright Beams, Mandarin isn't a class — it's woven into every moment of the day. From morning greeting songs to lunchtime conversations, here's how immersion really works.",
    bg: "bg-[#fde8e5]",
    slug: "#",
  },
];

const categories = ["All", "Bilingual Education", "Child Development", "Family Tips", "Academy News"];

export default function BlogPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <img src="/logo.png" alt="" className="w-96 opacity-5" />
      </div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-[#ff7162] text-sm font-semibold uppercase tracking-widest">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-gray-800">News & Insights</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            Tips for families, updates from the classroom, and research on early childhood education.
          </p>
        </div>
      </section>

      {/* Category filter (static display) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex gap-4 flex-wrap">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-[#ff7162] text-white"
                  : "border border-gray-300 text-gray-600 hover:border-[#ff7162] hover:text-[#ff7162]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col">
              <div className={`${p.bg} h-48`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#ff7162] text-xs font-semibold uppercase tracking-wide">{p.category}</span>
                  <span className="text-gray-400 text-xs">{p.date}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 leading-snug">{p.title}</h2>
                <p className="text-gray-600 text-sm flex-1">{p.excerpt}</p>
                <Link href={p.slug} className="mt-4 text-[#ff7162] text-sm font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
