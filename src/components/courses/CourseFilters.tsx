"use client";

type Category = "All" | "Music" | "Dance" | "Language";

export default function CourseFilters({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  const categories: Category[] = ["All", "Music", "Dance", "Language"];

  return (
    <div className="flex gap-4 w-full md:w-96 py-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] px-4 py-2 rounded-full text-sm ${
            active === cat
              ? "bg-black text-white"
              : "border border-gray-300"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
