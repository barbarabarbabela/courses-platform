import { Review } from "./review";

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  category: string;
  duration: string;
  curriculum: string[];
  reviews: Review[];
}
