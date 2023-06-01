import HeroSection from "../layout/Hero/HeroSection";
import TrendCaroussel from "../layout/trendCaroussel/TrendCaroussel";

export default function Home() {
  return (
    <main className="min-h-[200vh]  ">
      <HeroSection />
      <section className="p-4 max-w-screen-xl mx-auto">
        <TrendCaroussel title="Les filmes du moment" mediaType="movie" />
      </section>
    </main>
  );
}
