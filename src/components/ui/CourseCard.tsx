import { useState } from "react";
import Button from "./Button";

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  img: string;
}

export const CourseCard = ({
  title,
  description,
  instructor,
  img,
}: CourseCardProps) => {
  const [inscription, setInscription] = useState("Inscrever-se");

  const handleCourseInscription = () => {
    setInscription("Inscrito!");
  };

  return (
    <div className="bg-gray800 shadow-lg rounded-lg">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray100 mb-2">{title}</h3>
        <p className="text-gray300 mb-4">{description}</p>
        <span className="font-medium">Instrutor: {instructor}</span>
        <div className="flex justify-between gap-3 mt-5">
          <Button variant="outline">Detalhes</Button>
          <Button
            onClick={handleCourseInscription}
            disabled={inscription === "Inscrito!"}
          >
            {inscription}
          </Button>
        </div>
      </div>
    </div>
  );
};
