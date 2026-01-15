const values = [
  {
    title: "Community",
    description:
      "We teach, collaborate, perform, and grow together — building a space where everyone belongs.",
  },
  {
    title: "Excellence",
    description:
      "We uphold the highest standards while making learning structured, engaging, and accessible.",
  },
  {
    title: "Growth",
    description:
      "We encourage continuous personal and artistic development at every level of learning.",
  },
];

export default function ValuesGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Values
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {values.map((value) => (
          <div
            key={value.title}
            className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg mb-2">
              {value.title}
            </h3>
            <p className="text-sm text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
