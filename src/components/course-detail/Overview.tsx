export default function Overview({ course }: { course: any }) {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="text-xl font-semibold mb-4">About the Course</h3>
        <p className="text-gray-600 leading-relaxed">
          This course is designed to help learners build a strong foundation
          and gain confidence through structured lessons and hands-on practice.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-4">What you will learn</h3>
        <ul className="grid md:grid-cols-2 gap-3 text-sm">
          <li>• Strong fundamentals</li>
          <li>• Practical application</li>
          <li>• Technique improvement</li>
          <li>• Performance confidence</li>
        </ul>
      </section>
    </div>
  );
}
