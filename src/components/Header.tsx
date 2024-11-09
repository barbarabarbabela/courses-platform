import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Input } from "./Input";
import { useMenu, useSearchContext } from "../hooks";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface FormProps {
  inputData: string;
}

export const Header = () => {
  const { selected, items, handleSelect } = useMenu();
  const { setSearchTerm } = useSearchContext();
  const { handleSubmit, register, reset } = useForm<FormProps>();

  const submitForm = (data: FormProps) => {
    setSearchTerm(data.inputData.toLowerCase());
    reset();
  };

  return (
    <header className="p-4 bg-gray800 flex flex-col md:flex-row items-center w-full justify-around">
      <div className="flex items-center gap-3 md:gap-5">
        <img width="50" height="50" src={logo} alt="education" />
        <h1 className="text-2xl font-bold">Courses Platform</h1>
      </div>

      <div className="flex text-lg gap-5 md:gap-10 mt-2 md:mt-0">
        {items.map((item) => (
          <Link key={item.label} to={item.path}>
            <span
              onClick={() => handleSelect(item.label)}
              className={`cursor-pointer hover:text-green500 ${
                selected === item.label ? "border-b-4 border-green500" : ""
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="w-full md:w-auto mt-5 md:mt-0 flex justify-center ">
        <form onSubmit={handleSubmit(submitForm)} className="flex gap-3">
          <Input
            placeholder="O que você está buscando?"
            {...register("inputData")}
          />
          <button type="submit">
            <FaSearch size={20} />
          </button>
        </form>
      </div>
    </header>
  );
};
