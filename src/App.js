import Sidebar from "./components/sidebar/sidebar";
import { Routes, Route } from "react-router-dom";
import Mainscreen from "./pages/mainscreen/mainscreen";
import "./App.css";
import FilterPage from "./pages/filterPage/filterPage";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Mainscreen />} />
        <Route path="filter" element={<FilterPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
