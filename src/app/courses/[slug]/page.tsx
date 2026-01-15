import { getCourseBySlug, courses } from "@/data/courses";
import CourseHero from "@/components/course-detail/CourseHero";
import CourseTabs from "@/components/course-detail/CourseTabs";
import { notFound } from "next/navigation";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <main>
      <CourseHero course={course} />
      <CourseTabs course={course} />
    </main>
  );
}

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}
