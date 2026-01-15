export type Instructor = {
  id: string;
  name: string;
  experience: number; // years
  certification?: string;
  bio: string;
  introVideoUrl?: string;
};

export const instructors: Instructor[] = [
  {
    id: "alex-rodriguez",
    name: "Alex Rodriguez",
    experience: 15,
    certification: "Trinity College London Certified",
    bio: "Alex Rodriguez is a professional guitarist with over 15 years of experience. He has performed with various bands and taught at prestigious music schools. His teaching style focuses on building strong fundamentals while keeping lessons engaging and fun.",
    introVideoUrl: "https://youtube.com/watch?v=example1",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    experience: 10,
    certification: "Trinity College London Certified",
    bio: "Priya specializes in structured learning and student confidence building. With over a decade of experience, she helps learners progress at a comfortable yet challenging pace.",
    introVideoUrl: "https://youtube.com/watch?v=example2",
  },
  {
    id: "aditya-rao",
    name: "Aditya Rao",
    experience: 7,
    certification: "Trinity College London Certified",
    bio: "Aditya brings energy and modern techniques into his classes. His approach blends theory with real-world application for faster learning outcomes.",
    introVideoUrl: "https://youtube.com/watch?v=example3",
  },
];
