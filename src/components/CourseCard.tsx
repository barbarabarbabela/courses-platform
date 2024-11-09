import { Link } from "react-router-dom";
import { Course } from "../interfaces/course";
import { useInscription } from "../contexts/inscription-context";
import Button from "./Button";

interface CourseCardProps {
  data: Course;
}

export const CourseCard = ({ data }: CourseCardProps) => {
  const { handleCourseInscription, isCourseInscribed } = useInscription();

  const handleClick = () => {
    handleCourseInscription(data);
  };

  const shortDescription =
    data.description.length > 150
      ? data.description.slice(0, 150) + "..."
      : data.description;

  return (
    <div className="bg-gray800 shadow-lg rounded-lg">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray100 mb-2">
          {data.title}
        </h3>
        <p className="text-gray300 mb-4 h-14">{shortDescription}</p>
        <span className="font-medium">
          Instrutor(a): {data.instructor.name}
        </span>
        <div className="flex gap-3 mt-5 ">
          <Link to={`/detalhes/${data.id}`} className="w-full">
            <Button variant="outline">Detalhes</Button>
          </Link>
          <Button onClick={handleClick} disabled={isCourseInscribed(data.id)}>
            {isCourseInscribed(data.id) ? "Inscrito!" : "Inscrever-se"}
          </Button>
        </div>
      </div>
    </div>
  );
};
