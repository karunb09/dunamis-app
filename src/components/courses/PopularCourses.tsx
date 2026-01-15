import CourseCard from "./CourseCard";
import { popularCourses } from "@/data/courses";

export default function PopularCourses() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      
      <p className="text-orange-500 font-medium mb-2 text-center">
        Popular Courses
      </p>

      <h2 className="text-3xl font-bold text-center mb-12">
        Start Your Creative Journey
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
