import { useNavigate, useParams } from "react-router-dom";
import { useCoursesQuery } from "../hooks/use-courses-query";
import { useInscription } from "../contexts/inscription-context";
import Button from "./Button";
import StarRating from "./Rating";

export const CourseDetailsCard = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCoursesQuery();
  const { handleCourseInscription, isCourseInscribed } = useInscription();
  const navigate = useNavigate();

  const course = data?.find((course) => course.id === Number(id));

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Curso não encontrado</div>;

  return (
    <div>
      <div className="relative border">
        <img
          src={course?.image}
          className="w-full h-96 object-cover"
          alt={`Imagem de capa do curso ${course?.title}`}
        />
        <h1 className="absolute bottom-5 left-5 text-6xl font-bold text-white bg-black/50 px-4 py-2 rounded-md">
          {course?.title}
        </h1>
      </div>

      <div className="p-10 bg-gray800">
        <div className="w-full flex justify-end">
          <div className="w-32 p-2">
            <Button onClick={() => navigate("/")} variant="filled">
              Voltar
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Descrição do Curso</h2>
            <p className="text-xl">{course?.description}</p>
          </div>
          <div className="flex flex-col space-y-4 mb-10">
            <div className="flex items-center gap-4">
              <img
                src={course?.instructor.image}
                className="w-28 h-28 rounded-full object-cover border-2 border-green500"
                alt={`Foto do instrutor ${course?.instructor.name}`}
              />
              <div>
                <span className="text-2xl font-semibold">
                  {course?.instructor.name}
                </span>
                <p className="text-green500">Instrutor</p>
              </div>
            </div>
            <span className="text-lg">
              Categoria:{" "}
              <a className="hover:text-green300" href="https://google.com">
                {" "}
                {course?.category}
              </a>
            </span>
            <span className="text-lg">Duração: {course?.duration}</span>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">
            O que você vai aprender neste curso:
          </h2>
          <ul className="text-xl flex flex-col gap-4">
            {course?.curriculum.map((topic, index) => (
              <li key={index}>👉 {topic}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-5">
            Avaliações ({course?.reviews.length})
          </h2>
          <ul className="flex flex-col gap-5 max-w-[70%]">
            {course?.reviews.map((review, index) => (
              <li
                key={index}
                className="border border-gray-600 bg-gray700 p-5 rounded-lg"
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={review.image}
                    className="w-20 h-20 rounded-full object-cover shadow-md"
                    alt={`Foto de ${review.user}`}
                  />
                  <div className="flex gap-10">
                    <span className="font-bold text-lg">{review.user}</span>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <div className="mt-5 text-xl">
                  <p className="mb-1">"{review.comment}"</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

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
