import { ReactNode } from "react";
import { MenuProvider, SearchProvider, InscriptionProvider } from "../contexts";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MenuProvider>
      <SearchProvider>
        <InscriptionProvider>{children}</InscriptionProvider>
      </SearchProvider>
    </MenuProvider>
  );
};
