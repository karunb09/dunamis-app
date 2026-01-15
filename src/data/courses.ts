import { CurriculumModule, guitarFundamentalsCurriculum } from "./curriculum";

export type Course = {
  id: string;
  slug: string;
  title: string;
  category: "Music" | "Dance" | "Language";
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  duration: string;
  mode: "Online" | "Offline";
  rating: number;
  price: number;
  certificate?: boolean;
  curriculum?: CurriculumModule[];
};


export const popularCourses: Course[] = [
  {
    id: "guitar-beginners",
    slug: "guitar-for-beginners",
    title: "Guitar for Beginners",
    category: "Music",
    level: "Beginner",
    instructor: "Alex Rodriguez",
    duration: "3 months",
    mode: "Online",
    rating: 4.8,
    price: 1299,
    certificate: true,
    curriculum: guitarFundamentalsCurriculum,
  },
  {
    id: "piano-mastery",
    slug: "classical-piano-mastery",
    title: "Classical Piano Mastery",
    category: "Music",
    level: "Intermediate",
    instructor: "Elena Petrov",
    duration: "6 months",
    mode: "Online",
    rating: 4.9,
    price: 2499,
    certificate: true,
  },
  {
    id: "spanish-co nvo",
    slug: "spanish-conversation",
    title: "Spanish Conversation",
    category: "Language",
    level: "Beginner",
    instructor: "Maria Santos",
    duration: "4 months",
    mode: "Online",
    rating: 4.7,
    price: 999,
  },
  {
    id: "bollywood-dance",
    slug: "bollywood-dance-basics",
    title: "Bollywood Dance Basics",
    category: "Dance",
    level: "Beginner",
    instructor: "Priya Sharma",
    duration: "3 months",
    mode: "Offline",
    rating: 4.8,
    price: 1599,
  },
];

export const courses: Course[] = [
  {
    id: "guitar-beginners",
    slug: "guitar-for-beginners",
    title: "Guitar for Beginners",
    category: "Music",
    level: "Beginner",
    instructor: "Alex Rodriguez",
    duration: "3 months",
    mode: "Online",
    rating: 4.8,
    price: 1299,
    certificate: true,
    curriculum: guitarFundamentalsCurriculum,
  },
  {
    id: "piano-mastery",
    slug: "classical-piano-mastery",
    title: "Classical Piano Mastery",
    category: "Music",
    level: "Intermediate",
    instructor: "Elena Petrov",
    duration: "6 months",
    mode: "Online",
    rating: 4.9,
    price: 2499,
    certificate: true,
  },
  {
    id: "spanish-convo",
    slug: "spanish-conversation",
    title: "Spanish Conversation",
    category: "Language",
    level: "Beginner",
    instructor: "Maria Santos",
    duration: "4 months",
    mode: "Online",
    rating: 4.7,
    price: 999,
  },
  {
    id: "bollywood-dance",
    slug: "bollywood-dance-basics",
    title: "Bollywood Dance Basics",
    category: "Dance",
    level: "Beginner",
    instructor: "Priya Sharma",
    duration: "3 months",
    mode: "Offline",
    rating: 4.8,
    price: 1599,
  },
];

export function getCourseBySlug(slug: string) {
  return courses.find((course) => course.slug === slug);
}


//Place holder for future pricing structure

// type PricingPlan = {
//   name: string;
//   price: number;
//   features: string[];
// };

// pricing: {
//   monthly: [
//     {
//       name: "Standard",
//       price: 1299,
//       features: ["Weekly classes", "Practice material"],
//     },
//   ],
//   oneTime: [
//     {
//       name: "Full Payment",
//       price: 6999,
//       features: ["All classes", "Certificate"],
//     },
//   ],
// },

// export type Course = {
//   // ...
//   pricing: {
//     monthly: PricingPlan[];
//     oneTime: PricingPlan[];
//   };
// };