import { useCoursesQuery } from "../hooks/use-courses-query";
import { CourseCard } from "./ui/CourseCard";

export const CourseList = () => {
  const { data } = useCoursesQuery();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-10">Todos os Cursos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((course) => {
          return (
            <CourseCard
              title={course.title}
              instructor={course.instructor}
              description={course.description}
              img={course.image}
              key={course.id}
            />
          );
        })}
      </div>
    </div>
  );
};
