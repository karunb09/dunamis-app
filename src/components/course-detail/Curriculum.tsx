export default function Curriculum({ course }: { course: any }) {
  if (!course.curriculum || course.curriculum.length === 0) {
    return (
      <p className="text-gray-500">
        Detailed curriculum will be shared after enrollment.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {course.curriculum.map((module: any) => (
        <div
          key={module.title}
          className="bg-white p-6 rounded-xl border"
        >
          <h4 className="font-semibold mb-2">{module.title}</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {module.items.map((item: string) => (
              <li className="transition hover:text-black" key={item}>• {item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
