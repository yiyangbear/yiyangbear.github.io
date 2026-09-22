export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Languages", skills: ["Python", "Java", "TypeScript"] },
  { category: "Tools", skills: ["Git", "GitHub", "Maven", "Jupyter"] },
  { category: "Technologies", skills: ["JavaFX", "scikit-learn", "Astro", "Tailwind CSS"] },
];
