import { createContext, useState, ReactNode } from "react";
import { Course } from "../types";

type InscriptionContextProps = {
  inscriptions: Course[];
  handleCourseInscription: (course: Course) => void;
  isCourseInscribed: (courseId: number) => boolean;
};

export const InscriptionContext = createContext<
  InscriptionContextProps | undefined
>(undefined);

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
