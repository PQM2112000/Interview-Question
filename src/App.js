import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import Mainscreen from "./pages/mainscreen/mainscreen";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Mainscreen />} />
      </Routes>
    </div>
  );
}

export default App;
