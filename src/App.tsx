import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./layout/navbar/Navbar";
import SearchNavbar from "./layout/navbar/components/SearchNavbar";
import SearchBarProvider from "./context/SearchbarContext.tsx";
import Search from "./pages/Search.tsx";
function App() {
  return (
    <div className="min-h-screen bg-gray-300 relative">
      <SearchBarProvider>
        <Navbar />
        <SearchNavbar />
      </SearchBarProvider>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="search" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
