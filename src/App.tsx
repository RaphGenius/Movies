import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/navbar/Navbar";
function App() {
  return (
    <div className="min-h-screen bg-gray-300 relative">
      <Navbar />
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
