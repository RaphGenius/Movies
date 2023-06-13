import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, Search, MoviePage, TvPage } from "./pages/index.ts";
import Navbar from "./layout/navbar/Navbar";
import SearchNavbar from "./layout/navbar/components/SearchNavbar";
import SearchBarProvider from "./context/SearchbarContext.tsx";
import Footer from "./layout/footer/Footer.tsx";
import { useAppSelector } from "./hooks/useRedux.ts";
import { getVideoId } from "./features/video/videoSlice.ts";

function App() {
  const currentTheme = useAppSelector((state) => state.theme.theme);
  const { videoId } = useAppSelector(getVideoId);
  console.log("VIDEOOOOOOOOOOOOOO", videoId);

  return (
    <div className={` ${currentTheme} `}>
      <div
        className={`min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gradient-to-bl dark:from-gray-900 dark:to-slate-950  dark:text-white relative  ${currentTheme} `}
      >
        <SearchBarProvider>
          <Navbar />
          <SearchNavbar />
        </SearchBarProvider>

        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/movie/:id/:titleMedia?" element={<MoviePage />} />
          <Route path="/tv/:id/:titleMedia?" element={<TvPage />} />
          <Route path="search" element={<Search />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
