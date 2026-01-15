import { courses } from "@/data/courses";
import CourseCard from "@/components/courses/CourseCard";
import CoursesGrid from "@/components/courses/CoursesGrid";

export default function CoursesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">All Courses</h1>
      <p className="text-gray-600 mb-10">
        Explore music, dance, and language courses curated by expert instructors.
      </p>

      {/* Filters are here */}
      <CoursesGrid courses={courses} />
    </section>
  );
}
