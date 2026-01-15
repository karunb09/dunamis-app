import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6">
      <div className="rounded-2xl bg-gradient-to-r from-teal-400 to-orange-400 p-12 text-center text-white">
        <h2 className="text-3xl font-bold">
          Join a learning community that turns passion into progress
        </h2>

        <p className="mt-4 text-sm opacity-90">
          Discover mentor-led creative programs designed to build confidence and skill.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/courses"
            className="bg-white text-black px-6 py-3 rounded-full font-medium"
          >
            Explore Courses
          </Link>

          <Link
            href="/contact"
            className="border border-white px-6 py-3 rounded-full font-medium"
          >
            Talk to an Advisor
          </Link>
        </div>
      </div>
    </section>
  );
}
