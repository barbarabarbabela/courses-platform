import { CourseCard } from "./ui/CourseCard";

export const CourseList = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-10">Todos os Cursos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};
