import "./App.css";
import "react-tooltip/dist/react-tooltip.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Search,
  MoviePage,
  TvPage,
  CastPage,
  PersonPage,
  ErrorPage,
  MovieListPage,
  TvListPage,
} from "./pages/index.ts";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./layout/navbar/Navbar";
import SearchNavbar from "./layout/navbar/components/SearchNavbar";
import SearchBarProvider from "./context/SearchbarContext.tsx";
import Footer from "./layout/footer/Footer.tsx";
import { useAppSelector } from "./hooks/useRedux.ts";

function App() {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <div className={` ${currentTheme} `}>
      <div
        className={`min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gradient-to-bl dark:from-gray-800 dark:to-slate-950 
         dark:text-white relative  ${currentTheme} `}
      >
        <SearchBarProvider>
          <Navbar />
          <SearchNavbar />
        </SearchBarProvider>

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/movie/:section?" element={<MovieListPage />} />
          <Route path="/tv" element={<TvListPage />} />
          <Route path="/movie/:id/:titleMedia" element={<MoviePage />} />
          <Route path="/tv/:id/:titleMedia?" element={<TvPage />} />
          <Route path="/person/:id/:titleMedia?" element={<PersonPage />} />

          <Route
            path="/:mediaType/:id/:titleMedia/cast"
            element={<CastPage />}
          />
          <Route path="search/:query" element={<Search />}></Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
