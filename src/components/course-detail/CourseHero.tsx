import Link from "next/link";

export default function CourseHero({ course }: { course: any }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
        {/* LEFT: Course Info */}
        <div className="space-y-6">
          <Link href="/courses">
            <p className="text-sm text-gray-400">← Back to Courses</p>
          </Link>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-teal-100 text-teal-700">
              {course.category}
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700">
              {course.level}
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
              {course.mode}
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight">{course.title}</h1>

          <p className="text-gray-600 leading-relaxed">
            Learn from industry experts and build strong fundamentals through
            structured lessons and practical application.
          </p>

          <div className="flex items-center gap-3 text-sm">
            <span className="text-orange-500">★★★★★</span>
            <span>{course.rating} rating</span>
            {course.certificate && (
              <span className="text-gray-500">• Certificate Included</span>
            )}
          </div>
        </div>

        {/* RIGHT: Sticky Pricing Card */}
        <div className="lg:sticky lg:top-24">
          <div className="bg-[#FFF1E6] rounded-2xl p-6 space-y-6 shadow-sm">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Duration</span>
              <span>{course.duration}</span>
            </div>

            <div className="border-t pt-4">
              <p className="text-3xl font-bold">₹{course.price}</p>
              <p className="text-sm text-gray-600">Full course access</p>
            </div>

            <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition">
              Enroll Now
            </button>

            <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full border border-teal-400 text-teal-600 py-3 rounded-full">
              Book Demo Slot
            </button>

            <p className="text-xs text-gray-500 text-center">
              Secure payment • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
