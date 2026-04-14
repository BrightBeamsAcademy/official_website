const colors = ["#fde8e5", "#dceeff", "#fde8e5", "#dceeff", "#fde8e5"];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Photo Gallery</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {colors.map((c, i) => (
            <div
              key={i}
              className="rounded-xl aspect-square hover:scale-105 transition-transform cursor-pointer"
              style={{ background: c }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
