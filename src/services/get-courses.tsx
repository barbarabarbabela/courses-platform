// src/services/courseService.ts
import { Course } from "../interfaces/course";
import coursesData from "../data/courses.json";

export async function getCourses(): Promise<Course[]> {
  return new Promise((resolve) => setTimeout(() => resolve(coursesData), 500));
}
