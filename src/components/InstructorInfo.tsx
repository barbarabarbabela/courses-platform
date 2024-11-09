interface InstructorInfoProps {
  instructor: {
    name: string;
    image: string;
  };
}

export const InstructorInfo = ({ instructor }: InstructorInfoProps) => {
  return (
    <div className="flex items-center gap-4">
      <img
        src={instructor.image}
        className="w-28 h-28 rounded-full object-cover border-2 border-green500"
        alt={`Foto do instrutor ${instructor.name}`}
      />
      <div>
        <span className="text-2xl font-semibold">{instructor.name}</span>
        <p className="text-green500">Instrutor(a)</p>
      </div>
    </div>
  );
};
