"use client";

type StepProps = {
  label: string;
  index: number;
  currentStep: number;
};

export default function Step({ label, index, currentStep }: StepProps) {
  const stepNumber = index + 1;
  const isActive = currentStep === stepNumber;
  const isCompleted = currentStep > stepNumber;

  return (
    <div className="flex items-center gap-2">
      {/* Circle */}
      <div
        className={`
          flex h-9 w-9 items-center justify-center rounded-full border
          text-sm font-semibold transition-all duration-300
          ${
            isCompleted
              ? "bg-green-500 border-green-500 text-white"
              : isActive
              ? "bg-orange-500 border-orange-500 text-white scale-110"
              : "bg-white border-gray-300 text-gray-400"
          }
        `}
      >
        {isCompleted ? "✓" : stepNumber}
      </div>

      {/* Label */}
      <span
        className={`
          hidden sm:block text-sm transition-colors duration-300
          ${
            isActive
              ? "text-gray-900 font-medium"
              : isCompleted
              ? "text-gray-600"
              : "text-gray-400"
          }
        `}
      >
        {label}
      </span>
    </div>
  );
}
