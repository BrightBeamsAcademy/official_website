const teachers = [
  { name: "Kevin Spacey", role: "Teacher" },
  { name: "Catherine Jones", role: "Teacher" },
  { name: "John Travolta", role: "Teacher" },
];

export default function Teachers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">World Best Teacher Will Teach</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((t) => (
            <div key={t.name} className="text-center">
              <div className="w-40 h-40 rounded-full bg-[#fde8e5] mx-auto mb-4 flex items-center justify-center text-5xl">👩‍🏫</div>
              <h3 className="text-xl font-bold text-gray-800">{t.name}</h3>
              <span className="text-[#ff7162] text-sm font-medium">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
