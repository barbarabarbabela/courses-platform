import coursesData from "../data/courses.json";
import { Course } from "../interfaces";

export async function getCourses(): Promise<Course[]> {
  return new Promise((resolve) => setTimeout(() => resolve(coursesData), 1000));
}
