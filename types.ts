export interface Property {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface SectionProps {
  id?: string;
  className?: string;
}