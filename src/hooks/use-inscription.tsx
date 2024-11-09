import { useContext } from "react";
import { InscriptionContext } from "../contexts";

export const useInscription = () => {
  const context = useContext(InscriptionContext);
  if (!context) {
    throw new Error("useInscription must be used within a InscriptionProvider");
  }
  return context;
};
