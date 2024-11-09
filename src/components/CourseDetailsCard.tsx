import { useNavigate, useParams } from "react-router-dom";
import { useCoursesQuery } from "../hooks/use-courses-query";
import { useInscription } from "../contexts/inscription-context";
import Button from "./Button";
import { Comments } from "./Comments";
import { Curriculum } from "./Curriculum";
import { InstructorInfo } from "./InstructorInfo";
import { CourseDescription } from "./CourseDescription";
import { CourseCover } from "./CourseCover";

export const CourseDetailsCard = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCoursesQuery();
  const { handleCourseInscription, isCourseInscribed } = useInscription();
  const navigate = useNavigate();

  const course = data?.find((course) => course.id === Number(id));

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Curso não encontrado</div>;

  if (!course) return <div>Curso não encontrado</div>;

  return (
    <div>
      <CourseCover course={course} />

      <div className="p-10 bg-gray800">
        <div className="w-full flex justify-end">
          <div className="w-32 p-2">
            <Button onClick={() => navigate("/")} variant="filled">
              Voltar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <CourseDescription course={course} />

          <InstructorInfo instructor={course.instructor} />
        </div>

        <Curriculum curriculum={course.curriculum} />

        <Comments reviews={course.reviews} />

        <div className="w-full mt-10 flex justify-center ">
          <div className="w-[50%]">
            <Button
              variant="filled"
              disabled={course && isCourseInscribed(course.id)}
              onClick={() => course && handleCourseInscription(course)}
            >
              {course && isCourseInscribed(course.id)
                ? "Inscrito!"
                : "Inscrever-se"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
