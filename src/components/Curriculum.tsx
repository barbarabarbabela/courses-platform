interface CurriculumProps {
  curriculum: string[];
}

export const Curriculum = ({ curriculum }: CurriculumProps) => {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-semibold mb-5">
        O que você vai aprender neste curso:
      </h2>
      <ul className="text-xl flex flex-col gap-4">
        {curriculum.map((topic) => (
          <li key={topic}>👉 {topic}</li>
        ))}
      </ul>
    </div>
  );
};
