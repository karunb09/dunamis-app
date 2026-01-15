"use client";

import { useState, useMemo } from "react";
import CourseCard from "./CourseCard";
import CourseFilters from "./CourseFilters";
import CourseSearch from "./CourseSearch";
import { Course } from "@/data/courses";

type Category = "All" | "Music" | "Dance" | "Language";

export default function CoursesGrid({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;

      const searchTerm = search.toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm) ||
        course.category.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [courses, search, category]);

  return (
    <>
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <CourseSearch value={search} onChange={setSearch} />
        <CourseFilters active={category} onChange={setCategory} />
      </div>

      {/* Results */}
      {filteredCourses.length === 0 ? (
        <p className="text-gray-500">No courses found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </>
  );
}
