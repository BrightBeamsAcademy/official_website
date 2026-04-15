const events = [
  { day: "10", month: "July", year: "2019", title: "Imagination Classes", location: "New York" },
  { day: "12", month: "July", year: "2019", title: "Music Classes", location: "New York" },
  { day: "13", month: "July", year: "2019", title: "Paper Plates Art", location: "New York" },
  { day: "14", month: "July", year: "2019", title: "Numbers Matching", location: "New York" },
];

export default function Events() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Our Events</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm border border-[#f4edd0]">
              <div className="bg-[#ff7162] text-white rounded-xl px-5 py-4 text-center min-w-[72px]">
                <div className="text-2xl font-bold">{e.day}</div>
                <div className="text-xs uppercase">{e.month}</div>
                <div className="text-xs">{e.year}</div>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">{e.title}</h3>
                <span className="text-gray-500 text-sm">📍 {e.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
