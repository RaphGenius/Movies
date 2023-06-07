import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Search } from "./pages/index.ts";
import Navbar from "./layout/navbar/Navbar";
import SearchNavbar from "./layout/navbar/components/SearchNavbar";
import SearchBarProvider from "./context/SearchbarContext.tsx";
import Footer from "./layout/footer/Footer.tsx";
import { useAppSelector } from "./hooks/useRedux.ts";

function App() {
  const currentTheme = useAppSelector((state) => state.theme.theme);

  return (
    <div className={`min-h-screen bg-gray-100 relative  ${currentTheme} `}>
      <SearchBarProvider>
        <Navbar />
        <SearchNavbar />
      </SearchBarProvider>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="search" element={<Search />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
