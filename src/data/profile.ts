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
  name: "Yiyang Xiong",
  role: "Computer Science Undergraduate",
  introduction:
    "Computer Science undergraduate interested in building thoughtful software and learning how systems work.",
  about: [
    "I am a second-year Computer Science undergraduate who enjoys learning how software works and turning that understanding into small, useful programs.",
    "This site is a concise record of what I build and learn. More specific interests and experience can be added here as they develop.",
  ],
  githubUrl: "https://github.com/yiyangbear",
  websiteUrl: "https://yiyangbear.github.io",
  email: "yiyang.xiong.dev@gmail.com",
  location: "Shenzhen, China",
  timezone: "Asia/Shanghai",
  typingPhrases: [
    "Computer Science Student",
    "Building things with code",
    "Learning how software works",
  ],
};
