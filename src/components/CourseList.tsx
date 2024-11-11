import { useCoursesQuery, useSearchContext } from "../hooks";
import { Button } from "./Button";
import { CourseCard } from "./CourseCard";

export const CourseList = () => {
  const { data, isLoading, isError } = useCoursesQuery();
  const { searchTerm, handleClearSearch } = useSearchContext();

  const searchItemsLength = data?.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;

  if (isLoading) return <div>Carregando...</div>;

  if (isError) return <div>Erro ao carregar os cursos</div>;

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold">
          {searchTerm.length > 0
            ? `Resultados (${searchItemsLength})`
            : `Todos os Cursos (${data?.length})`}
        </h2>
        {searchTerm && (
          <div className="w-32">
            <Button onClick={handleClearSearch}>Voltar</Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {searchTerm.length > 0
          ? data
              ?.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((course) => <CourseCard key={course.id} data={course} />)
          : data?.map((course) => <CourseCard key={course.id} data={course} />)}
      </div>
    </div>
  );
};
