import { createContext, useState, ReactNode } from "react";
import { PiBooks, PiStar } from "react-icons/pi";

type MenuItem = {
  label: "Todos os cursos" | "Inscrições";
  icon: JSX.Element;
  path: string;
};

type MenuContextProps = {
  selected: MenuItem["label"];
  items: MenuItem[];
  handleSelect: (item: MenuItem["label"]) => void;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] =
    useState<MenuItem["label"]>("Todos os cursos");

  const items: MenuItem[] = [
    { label: "Todos os cursos", icon: <PiBooks />, path: "/" },
    { label: "Inscrições", icon: <PiStar />, path: "/inscricoes" },
  ];

  const handleSelect = (item: MenuItem["label"]) => {
    setSelected(item);
  };

  return (
    <MenuContext.Provider value={{ selected, items, handleSelect }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
