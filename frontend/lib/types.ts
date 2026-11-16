export type Contact = {
  name: string;
  telephoneNumber: string;
  email: string;
  dateOfBirth: string;
  school: string;
  grade: string;
  headline: string;
  bio: string;
  location: string;
  targetPrograms: string[];
  socials: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  highlights: string[];
  skills: string[];
  link: string;
  image: string;
};

export type ProjectsData = {
  projects: Project[];
};
