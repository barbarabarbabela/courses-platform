import { createContext, useContext, useState, ReactNode } from "react";
import { Course } from "../interfaces/course";

type InscriptionContextProps = {
  inscriptions: Course[];
  handleCourseInscription: (course: Course) => void;
  isCourseInscribed: (courseId: number) => boolean;
};

const InscriptionContext = createContext<InscriptionContextProps | undefined>(
  undefined
);

export const InscriptionProvider = ({ children }: { children: ReactNode }) => {
  const [inscriptions, setInscriptions] = useState<Course[]>([]);

  const handleCourseInscription = (course: Course) => {
    setInscriptions((prev) => [...prev, course]);
  };

  const isCourseInscribed = (courseId: number): boolean => {
    return inscriptions.some((inscription) => inscription.id === courseId);
  };

  return (
    <InscriptionContext.Provider
      value={{ inscriptions, handleCourseInscription, isCourseInscribed }}
    >
      {children}
    </InscriptionContext.Provider>
  );
};

export const useInscription = () => {
  const context = useContext(InscriptionContext);
  if (!context) {
    throw new Error("useInscription must be used within a InscriptionProvider");
  }
  return context;
};
