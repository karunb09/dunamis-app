import { Course } from "@/data/courses";
import Link from "next/link";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="transition hover:shadow-lg hover:-translate-y-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      
      {/* Tags */}
      <div className="flex gap-2 mb-3">
        <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-700">
          {course.category}
        </span>
        <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700">
          {course.level}
        </span>
        <span className="text-xs text-green-600 ml-auto">
          ● {course.mode}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-1">
        {course.title}
      </h3>

      {/* Meta */}
      <p className="text-sm text-gray-500 mb-2">
        Learn from {course.instructor} • {course.duration}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-2 text-sm mb-3">
        <span className="text-orange-500">★★★★★</span>
        <span>{course.rating}</span>
        {course.certificate && (
          <span className="ml-2 text-xs text-gray-500">
            • Certificate Course
          </span>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center justify-between mt-4">
        <span className="font-semibold">
          ₹{course.price.toLocaleString()}/mo
        </span>

        <Link
          href={`/courses/${course.slug}`}
          className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600"
        >
          View Details  
        </Link>
      </div>
    </div>
  );
}
