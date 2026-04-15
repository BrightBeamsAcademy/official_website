const posts = [
  { date: "01 Jan, 2025", title: "Music Teaching", excerpt: "Explore how music education shapes creativity, coordination, and cognitive growth in young children.", bg: "#fde8e5" },
  { date: "01 Jan, 2025", title: "Mathematics Teaching", excerpt: "Discover our innovative approach to early math education that makes numbers fun and accessible.", bg: "#dceeff" },
  { date: "01 Jan, 2025", title: "Chinese Teaching", excerpt: "Learn how our bilingual curriculum helps children master Mandarin alongside English from an early age.", bg: "#fde8e5" },
  { date: "20 July, 2019", title: "The Indoor Activities for Everyone", excerpt: "A look at the variety of indoor activities that keep children engaged, active, and learning every day.", bg: "#dceeff" },
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">News &amp; Articles</h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="h-48" style={{ background: p.bg }} />
              <div className="p-5">
                <div className="text-xs text-gray-400 mb-2">{p.date}</div>
                <h3 className="font-bold text-gray-800 mb-2 hover:text-[#ff7162] cursor-pointer transition-colors">{p.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{p.excerpt}</p>
                <a href="#" className="text-[#ff7162] text-sm font-medium hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
