import { instructors } from "@/data/instructors";

export default function Instructors({ course }: { course: any }) {
  const courseInstructors = instructors.filter((i) =>
    course.instructors?.includes(i.id)
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {instructors.map((inst) => (
        <div
          key={inst.id}
          className="bg-white p-6 rounded-2xl border transition hover:shadow-md"
        >
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />

          <h4 className="font-semibold text-lg">{inst.name}</h4>

          <div className="flex flex-wrap gap-2 mt-2 mb-4 text-xs">
            <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full">
              {inst.experience}+ yrs experience
            </span>

            {inst.certification && (
              <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                Certified
              </span>
            )}
          </div>

          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {inst.bio}
          </p>

          {inst.introVideoUrl && (
            <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] text-sm underline hover:text-orange-500 transition">
              ▶ Watch Intro
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
