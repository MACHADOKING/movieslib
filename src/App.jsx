// CSS
import "./App.css";
// Hooks
import { Outlet } from "react-router-dom";
// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
