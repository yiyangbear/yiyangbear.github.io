export interface Profile {
  name: string;
  role: string;
  introduction: string;
  about: string[];
  githubUrl: string;
  websiteUrl: string;
  email: string;
  location: string;
  timezone: string;
  typingPhrases: string[];
}

export const profile: Profile = {
  name: "Yiyang Bear",
  role: "Developer & Tech Enthusiast",
  introduction:
    "I enjoy building software, exploring algorithms, and turning ideas into useful projects.",
  about: [
    "I'm passionate about software development, artificial intelligence, and exploring how different technologies work.",
    "This website is a collection of projects, experiments, and things I've learned along the way.",
  ],
  githubUrl: "https://github.com/yiyangbear",
  websiteUrl: "https://yiyangbear.github.io",
  email: "yiyang.xiong.dev@gmail.com",
  location: "Online",
  timezone: "Etc/UTC",
  typingPhrases: [
    "Building things with code",
    "Exploring AI and software",
    "Learning through projects",
  ],
};
