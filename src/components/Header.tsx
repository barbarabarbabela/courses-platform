import logo from '../assets/logo.png'

export const Header = () => {
  return (
    <header className="bg-gray800 p-8 flex justify-center items-center gap-5">
      <img width="50" height="50" src={logo} alt="education" />
      <h1 className="text-xl font-bold">Courses Platform</h1>
    </header>
  )
}
