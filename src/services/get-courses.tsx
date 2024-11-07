import { Course } from "../interfaces/course.";

export async function getCourses(): Promise<Course[]> {
  const response = await fetch("../data/courses.json");

  if (!response.ok) {
    throw new Error("Courses not found");
  }

  const data: Course[] = await response.json();

  return data;
}
