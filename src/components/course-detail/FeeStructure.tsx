export default function FeeStructure({ course }: { course: any }) {
  return (
    <div className="max-w-md">
      <h3 className="text-xl font-semibold mb-4">Course Fee</h3>

      <div className="bg-[#FFF7EF] p-6 rounded-xl">
        <p className="text-3xl font-bold mb-2">₹{course.price}</p>
        <p className="text-sm text-gray-600 mb-6">
          Full course access • Certificate included
        </p>

        <button className="transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] w-full bg-black text-white py-3 rounded-full">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
