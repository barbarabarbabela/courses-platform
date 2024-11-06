import logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header className="p-2 flex items-center gap-5 mt-5">
      <img width="50" height="50" src={logo} alt="education" />
      <h1 className="text-xl font-bold">Courses Platform</h1>
    </header>
  );
};
