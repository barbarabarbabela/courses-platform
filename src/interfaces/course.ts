import { Review } from "./review";

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  duration: string;
  image: string;
  curriculum: string[];
  reviews: Review[];
}
