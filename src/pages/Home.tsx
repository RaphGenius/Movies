import { useEffect } from "react";
import HeroSection from "../layout/Hero/HeroSection";
import Trailers from "../layout/trailer/Trailers";
import TrendCaroussel from "../layout/trendCaroussel/TrendCaroussel";

export default function Home() {
  useEffect(() => {
    document.title = "Movie";
  }, []);

  return (
    <main className="flex-1 ">
      <HeroSection />
      <div className="p-4 max-w-bigScreen mx-auto flex flex-col gap-8 ">
        <TrendCaroussel title="Films du moment" mediaType="movie" />
        <Trailers />
        <TrendCaroussel title="Series du moment" mediaType="tv" />
      </div>
    </main>
  );
}
