"use client";

import { useState } from "react";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Instructors from "./Instructors";
import FeeStructure from "./FeeStructure";

const tabs = ["Overview", "Curriculum", "Instructors", "Fee Structure"];

export default function CourseTabs({ course }: { course: any }) {
  const [active, setActive] = useState("Overview");

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      
      {/* Sticky Tab Bar */}
      <div className="sticky top-20 z-30 bg-[#FFF7EF]/90 backdrop-blur border-b mb-12">
        <div className="flex gap-8 text-sm max-w-7xl mx-auto px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`transition hover:-translate-y-[1px] hover:shadow-md active:scale-[0.98] mt-2 pb-2 transition ${
                active === tab
                  ? "border-b-2 border-orange-500 font-medium"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl space-y-16">
        {active === "Overview" && <Overview course={course} />}
        {active === "Curriculum" && <Curriculum course={course} />}
        {active === "Instructors" && <Instructors course={course} />}
        {active === "Fee Structure" && <FeeStructure course={course} />}
      </div>
    </section>
  );
}
