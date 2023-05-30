import { useGetAnythingQuery } from "../features/multi/multiSlice";
import HeroSection from "../layout/Hero/HeroSection";

export default function Home() {
  const { data } = useGetAnythingQuery("harry potter");
  const resultats = data?.results;

  const truc = resultats?.reduce((acc: any, curr) => {
    if (!acc[curr.media_type]) {
      acc[curr.media_type] = 1;
    } else {
      acc[curr.media_type] = acc[curr.media_type] + 1;
    }
    return acc;
  }, {});
  console.log(truc);

  return (
    <main className="min-h-[200vh]  ">
      <HeroSection />
    </main>
  );
}
