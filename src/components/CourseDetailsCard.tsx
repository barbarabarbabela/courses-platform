import { useNavigate, useParams } from "react-router-dom";
import { useCoursesQuery, useInscription } from "../hooks";
import { Comments } from "./Comments";
import { Curriculum } from "./Curriculum";
import { InstructorInfo } from "./InstructorInfo";
import { CourseDescription } from "./CourseDescription";
import { CourseCover } from "./CourseCover";
import { Button } from "./Button";

export const CourseDetailsCard = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCoursesQuery();
  const {
    handleCourseInscription,
    isCourseInscribed,
    inscriptionButtonText,
    handleRemoveCourseInscription,
  } = useInscription();
  const navigate = useNavigate();

  const selectedCourse = data?.find((course) => course.id === Number(id));

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Curso não encontrado</div>;

  if (!selectedCourse) return <div>Curso não encontrado</div>;

  return (
    <div>
      <CourseCover course={selectedCourse} />

      <div className="p-10 bg-gray800">
        <div className="w-full flex justify-end">
          <div className="w-32 p-2">
            <Button onClick={() => navigate("/")} variant="filled">
              Voltar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CourseDescription course={selectedCourse} />

          <InstructorInfo instructor={selectedCourse.instructor} />
        </div>

        <Curriculum curriculum={selectedCourse.curriculum} />

        <Comments reviews={selectedCourse.reviews} />

        <div className="w-full mt-10 flex flex-col gap-5">
          {selectedCourse && isCourseInscribed(selectedCourse.id) ? (
            <Button
              variant="outline"
              onClick={() =>
                selectedCourse &&
                handleRemoveCourseInscription(selectedCourse.id)
              }
            >
              Cancelar Inscrição
            </Button>
          ) : (
            <Button
              variant="filled"
              disabled={selectedCourse && isCourseInscribed(selectedCourse.id)}
              onClick={() =>
                selectedCourse && handleCourseInscription(selectedCourse)
              }
            >
              {inscriptionButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
