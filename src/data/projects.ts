export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Used Car Price Prediction",
    description:
      "An end-to-end machine learning workflow for predicting used-car prices, from data exploration and feature engineering to model evaluation.",
    technologies: ["Python", "Jupyter", "scikit-learn"],
    githubUrl: "https://github.com/yiyangbear/used-car-price-prediction",
  },
  {
    title: "Koku",
    description:
      "A desktop Gomoku game built with JavaFX, with match controls, timers, themes, language switching, and configurable board details.",
    technologies: ["Java", "JavaFX", "Maven"],
    githubUrl: "https://github.com/yiyangbear/koku",
  },
];
