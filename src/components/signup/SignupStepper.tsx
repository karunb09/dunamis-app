"use client";

import Step from "./Step";

const steps = ["Account", "Personal Info", "Verification"];

export default function SignupStepper({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-8">
      {steps.map((label, index) => (
        <div key={label} className="flex items-center gap-4">
          <Step
            label={label}
            index={index}
            currentStep={currentStep}
          />

          {/* Connector line (except last) */}
          {index < steps.length - 1 && (
            <div
              className={`
                hidden sm:block h-[2px] w-12 transition-colors duration-300
                ${
                  currentStep > index + 1
                    ? "bg-green-500"
                    : "bg-gray-300"
                }
              `}
            />
          )}
        </div>
      ))}
    </div>
  );
}
