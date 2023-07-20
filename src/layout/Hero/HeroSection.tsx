import HeroSearchbar from "./components/HeroSearchbar";
function HeroSection() {
  return (
    <section
      className=" h-[300px] bg-hero-image   bg-center 
     overflow-x-hidden z-20  "
    >
      <div className="w-full h-full p-4 lg:p-8 flex flex-col justify-between  ">
        <div className="text-white font-mono text-2xl ">
          <h2>Bienvenue,</h2>
          <h2>Des millions de films, émissions télévisées et artistes...</h2>
        </div>
        <HeroSearchbar />
      </div>
    </section>
  );
}

export default HeroSection;
