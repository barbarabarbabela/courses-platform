import { createContext, useState, ReactNode } from "react";
import { PiBooks, PiStar } from "react-icons/pi";

type MenuItem = {
  label: "Todos os cursos" | "Inscrições";
  icon: JSX.Element;
  path: string;
};

type MenuContextProps = {
  selectedMenuItem: MenuItem["label"];
  items: MenuItem[];
  handleSelect: (item: MenuItem["label"]) => void;
};

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMenuItem, setSelectedMenuItem] =
    useState<MenuItem["label"]>("Todos os cursos");

  const items: MenuItem[] = [
    { label: "Todos os cursos", icon: <PiBooks />, path: "/" },
    { label: "Inscrições", icon: <PiStar />, path: "/inscricoes" },
  ];

  const handleSelect = (item: MenuItem["label"]) => {
    setSelectedMenuItem(item);
  };

  console.log(selectedMenuItem);

  return (
    <MenuContext.Provider value={{ selectedMenuItem, items, handleSelect }}>
      {children}
    </MenuContext.Provider>
  );
};

export { MenuProvider, MenuContext };
