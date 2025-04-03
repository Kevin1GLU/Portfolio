export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageSrc: string;
  alt: string;
}

export interface ProjectDetail extends PortfolioItem {
  description: string;
  videoSrc: string;
  images: string[];
  technologies: string[];
  client?: string;
  date: string;
}
