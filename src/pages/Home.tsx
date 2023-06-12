import HeroSection from "../layout/Hero/HeroSection";
import Trailers from "../layout/trailer/Trailers";
import TrendCaroussel from "../layout/trendCaroussel/TrendCaroussel";

export default function Home() {
  return (
    <main className="flex-1 ">
      <HeroSection />
      <div className="p-4 max-w-bigScreen mx-auto flex flex-col gap-8 ">
        <TrendCaroussel title="Filmes du moment" mediaType="movie" />
        <Trailers />
        <TrendCaroussel title="Serie du moment" mediaType="tv" />
      </div>
    </main>
  );
}
