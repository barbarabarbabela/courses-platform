interface CourseCoverProps {
  course: {
    title: string;
    image: string;
  };
}

export const CourseCover = ({ course }: CourseCoverProps) => {
  return (
    <div className="relative border">
      <img
        src={course.image}
        className="w-full h-96 object-cover"
        alt={`Imagem de capa do curso ${course.title}`}
      />
      <h1 className="absolute bottom-5 left-5 text-6xl font-bold text-white bg-black/50 px-4 py-2 rounded-md">
        {course.title}
      </h1>
    </div>
  );
};
