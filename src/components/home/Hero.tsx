export default function Hero() {
  return (
    <section className="bg-[#6E6E6E] text-white py-32 text-center">
      <h1 className="text-5xl font-bold mb-6">Discover Your Creative Potential</h1>
      <p className="max-w-2xl mx-auto mb-10 text-gray-200">
        Learn music, dance, and languages with expert guidance.
      </p>
      <div className="flex justify-center gap-4">
        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] border px-6 py-3 rounded-full">Join Free Demo</button>
        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] bg-orange-500 px-6 py-3 rounded-full">Explore Courses</button>
      </div>
    </section>
  );
}
