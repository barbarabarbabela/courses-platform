import { useState } from "react";
import { PiBooks, PiStar } from "react-icons/pi";

type SidebarItem = {
  label: "Todos os cursos" | "Inscrições";
  icon: JSX.Element;
};

export const useSidebar = () => {
  const [selected, setSelected] = useState("Todos os cursos");

  const items: SidebarItem[] = [
    { label: "Todos os cursos", icon: <PiBooks /> },
    { label: "Inscrições", icon: <PiStar /> },
  ];

  const handleSelect = (item: SidebarItem["label"]) => {
    setSelected(item);
  };

  return {
    selected,
    items,
    handleSelect,
  };
};
