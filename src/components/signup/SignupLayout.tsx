import { useRouter } from "next/navigation";
import SignupStepper from "./SignupStepper";

export default function SignupLayout({
  step,
  title,
  backTo,
  children,
}: {
  step: number;
  title: string;
  backTo?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center pt-10 px-4">
      <SignupStepper currentStep={step} />

      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 mt-8">
        {backTo && (
          <button
            type="button"
            onClick={() => router.push(backTo)}
            className="text-md text-gray-500 mb-4 hover:underline"
          >
            ← Back
          </button>
        )}

        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        {children}
      </div>
    </div>
  );
}
