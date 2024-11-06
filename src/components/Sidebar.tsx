import { useSidebar } from "../hooks/use-sidebar";

export const Sidebar = () => {
  const { selected, items, handleSelect } = useSidebar();

  return (
    <aside className="h-screen text-xl p-8 flex flex-col gap-4">
      {items.map((item) => (
        <span
          key={item.label}
          onClick={() => handleSelect(item.label)}
          className={`flex items-center gap-2 cursor-pointer hover:text-green500 ${
            selected === item.label
              ? "border-l-4 border-green500 pl-2 font-bold"
              : ""
          }`}
        >
          {item.icon}
          {item.label}
        </span>
      ))}
    </aside>
  );
};
