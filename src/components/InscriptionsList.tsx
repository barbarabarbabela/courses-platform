import { useInscription, useSearchContext } from "../hooks";
import { Button } from "./Button";
import { CourseCard } from "./CourseCard";

export const InscriptionsList = () => {
  const { inscriptions } = useInscription();
  const { searchTerm, handleClearSearch } = useSearchContext();

  const searchItemsLength = inscriptions?.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).length;

  return (
    <div className="p-10">
      <div className="flex justify-between mb-10">
        <h2 className="text-3xl font-bold">
          {searchTerm.length > 0
            ? `Resultados (${searchItemsLength})`
            : `Inscrições (${inscriptions?.length})`}
        </h2>
        {searchTerm && (
          <div className="w-32">
            <Button onClick={handleClearSearch} variant="filled">
              Voltar
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {searchTerm.length > 0
          ? inscriptions
              ?.filter((course) =>
                course.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((course) => <CourseCard key={course.id} data={course} />)
          : inscriptions?.map((course) => (
              <CourseCard key={course.id} data={course} />
            ))}
      </div>
    </div>
  );
};
