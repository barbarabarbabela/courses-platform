import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import Input from "./ui/Input";
import { useMenu } from "../hooks/use-menu";
import { Link } from "react-router-dom";

export const Header = () => {
  const { selected, items, handleSelect } = useMenu();

  return (
    <header className="p-4 bg-gray800 flex flex-col md:flex-row items-center w-full justify-around">
      <div className="flex items-center gap-3 md:gap-5">
        <img width="50" height="50" src={logo} alt="education" />
        <h1 className="text-xl font-bold">Courses Platform</h1>
      </div>

      <div className="flex text-lg gap-5 md:gap-10 mt-2 md:mt-0">
        {items.map((item) => (
          <span
            key={item.label}
            onClick={() => handleSelect(item.label)}
            className={`cursor-pointer hover:text-green500 ${
              selected === item.label ? "border-b-4 border-green500" : ""
            }`}
          >
            <Link to={item.path}>{item.label}</Link>
          </span>
        ))}
      </div>

      <div className="w-full md:w-auto mt-5 md:mt-0 flex justify-center ">
        <Input placeholder="O que você está buscando?" icon={<FaSearch />} />
      </div>
    </header>
  );
};
