import Button from "./Button";

export const CourseCard = () => {
  return (
    <div className="bg-gray800 shadow-lg rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="JavaScript Avançado"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray100 mb-2">
          JavaScript Avançado
        </h3>
        <p className="text-gray300 mb-4">
          Aprenda a criar aplicações web modernas com JavaScript.
        </p>
        <span className="text-green300 font-medium">
          Instrutor: Pedro Silva
        </span>
        <div className="flex justify-between gap-3 mt-5">
          <Button variant="outline">Detalhes</Button>
          <Button>Inscrever-se</Button>
        </div>
      </div>
    </div>
  );
};
