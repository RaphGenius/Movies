import HeroSection from "../layout/Hero/HeroSection";
import Trailers from "../layout/trailer/Trailers";
import TrendCaroussel from "../layout/trendCaroussel/TrendCaroussel";

export default function Home() {
  return (
    <main className=" ">
      <HeroSection />
      <section className="p-4 max-w-screen-xl mx-auto">
        <TrendCaroussel title="Filmes du moment" mediaType="movie" />
        <Trailers />
        <TrendCaroussel title="Serie du moment" mediaType="tv" />
      </section>
    </main>
  );
}
