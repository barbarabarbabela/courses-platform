interface CourseDescriptionProps {
  course: {
    description: string;
    category: string;
    duration: string;
  };
}

export const CourseDescription = ({ course }: CourseDescriptionProps) => {
  return (
    <div className="flex flex-col gap-5 mb-10">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Descrição do Curso</h2>
        <p className="text-2xl ">{course.description}</p>
      </div>

      <div>
        <span className="text-lg font-bold">Categoria: </span>
        <a className="hover:text-green300" href="https://google.com">
          {" "}
          {course.category}
        </a>
      </div>

      <div>
        <span className="text-lg font-bold">Duração: {""}</span>
        <span>{course.duration}</span>
      </div>
    </div>
  );
};
