import { createContext, useState, ReactNode } from "react";
import { Course } from "../types";

type InscriptionContextProps = {
  inscriptions: Course[];
  handleCourseInscription: (course: Course) => void;
  isCourseInscribed: (courseId: number) => boolean;
  inscriptionButtonText: InscriptionTextType;
  handleRemoveCourseInscription: (courseId: number) => void;
};

type InscriptionTextType = "Inscrever-se" | "Inscrito";

export const InscriptionContext = createContext<
  InscriptionContextProps | undefined
>(undefined);

export const InscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [inscriptions, setInscriptions] = useState<Course[]>([]);
  const [inscriptionButtonText, setInscriptionButtonText] =
    useState<InscriptionTextType>("Inscrever-se");

  const handleCourseInscription = (course: Course) => {
    setInscriptions((prev) => [...prev, course]);
    setInscriptionButtonText("Inscrito");
  };

  const handleRemoveCourseInscription = (courseId: number) => {
    setInscriptions((prev) =>
      prev.filter((inscription) => inscription.id !== courseId)
    );
    setInscriptionButtonText("Inscrever-se");
  };

  const isCourseInscribed = (courseId: number): boolean => {
    return inscriptions.some((inscription) => inscription.id === courseId);
  };

  return (
    <InscriptionContext.Provider
      value={{
        inscriptions,
        handleCourseInscription,
        isCourseInscribed,
        inscriptionButtonText,
        handleRemoveCourseInscription,
      }}
    >
      {children}
    </InscriptionContext.Provider>
  );
};
