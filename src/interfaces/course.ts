import { Review } from "./review";

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: {
    name: string;
    image: string;
  };
  category: string;
  duration: string;
  image: string;
  curriculum: string[];
  reviews: Review[];
}
