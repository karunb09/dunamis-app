export type CurriculumModule = {
  title: string;
  duration: string; // e.g. "4 weeks"
  items: string[];
};

export const guitarFundamentalsCurriculum: CurriculumModule[] = [
  {
    title: "Module 1: Getting Started",
    duration: "4 weeks",
    items: [
      "Introduction to the Guitar",
      "Proper Posture and Hand Positioning",
      "Basic Open Chords (G, C, D, Em)",
      "Simple Strumming Patterns",
    ],
  },
  {
    title: "Module 2: Building Skills",
    duration: "6 weeks",
    items: [
      "More Open Chords (A, Am, E, F)",
      "Chord Transitions and Progressions",
      "Advanced Strumming Techniques",
      "Introduction to Fingerpicking",
    ],
  },
  {
    title: "Module 3: Song Application",
    duration: "8 weeks",
    items: [
      "Playing Popular Songs",
      "Barre Chords Introduction",
      "Scale Patterns and Lead Guitar",
      "Rhythm vs Lead Guitar",
    ],
  },
  {
    title: "Module 4: Performance Ready",
    duration: "6 weeks",
    items: [
      "Advanced Techniques",
      "Music Theory Fundamentals",
      "Performance Skills",
      "Final Project and Assessment",
    ],
  },
];
