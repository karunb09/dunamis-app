const items = [
  {
    title: "Our Story",
    description:
      "Dunamis is a vibrant creative learning community where curiosity is nurtured, confidence is built, and individuals are encouraged to explore, express, and grow.",
    bg: "bg-emerald-50",
  },
  {
    title: "Our Mission",
    description:
      "To deliver mentor-led creative education that builds skill, self-belief, and artistic discipline within a supportive learning environment.",
    bg: "bg-orange-50",
  },
  {
    title: "Our Vision",
    description:
      "To build a globally connected platform where creative education is accessible, inspiring, and rooted in community.",
    bg: "bg-sky-50",
  },
];

export default function StoryCards() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className={`${item.bg} rounded-xl p-6 border`}
        >
          <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}
