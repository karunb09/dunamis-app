const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Founded during the pandemic lockdown, Dunamis began as a small online initiative to make high-quality creative education affordable and accessible when human connection mattered most.",
  },
  {
    year: "2024",
    title: "Expansion & Establishment",
    description:
      "Dunamis became a private limited company and expanded into multiple Indian cities, launching physical centres and diversified programs across music, dance, and games.",
  },
  {
    year: "2025",
    title: "Digital Transformation",
    description:
      "We launched our dedicated digital learning platform, extending mentor-led instruction to homes across India and beyond.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>

      <div className="relative border-l pl-8 space-y-10">
        {timeline.map((item) => (
          <div key={item.year} className="relative">
            <span className="absolute -left-[14px] top-1 h-6 w-6 rounded-full bg-orange-500" />

            <div className="bg-white border rounded-xl p-6">
              <span className="text-sm font-semibold text-orange-600">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
