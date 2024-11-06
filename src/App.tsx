import { CourseList } from "./components/CourseList";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <div className="bg-gray800 flex-1 h-screen">
        <Header />
        <Sidebar />
      </div>
      <div>
        <CourseList />
      </div>
    </div>
  );
}

export default App;
