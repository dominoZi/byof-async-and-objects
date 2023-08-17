import { Outlet } from "react-router-dom";
import { Aside } from "./components";

function App() {
  return (
    <div className="flex min-h-[100vh]">
      <Aside />
      <main className="ml-4 p-2">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
