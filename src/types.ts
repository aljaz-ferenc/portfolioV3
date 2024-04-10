export type Project = {
  title: string;
  subtitle: string;
  paragraphs: string[];
  urls: {
    livePage: string;
    github: string;
  };
  id: number;
  image: string;
  color: string;
  technologies: string[];
};

export type MenuLink = {
  text: string;
  href: string;
};
