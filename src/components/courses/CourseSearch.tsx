"use client";

export default function CourseSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search courses, instructors, or categories..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-96 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  );
}
