import { PropsWithChildren } from "react";

type Props = {
  imageUrl: string;
};

function SumGroup({ children, imageUrl }: PropsWithChildren<Props>) {
  const BASE_URL_IMAGE =
    "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces";

  return (
    <section
      style={{
        backgroundImage: ` linear-gradient(to bottom right, rgb(15, 32, 42, 1), rgb(15, 32, 42, 0.2)), url(${
          BASE_URL_IMAGE + imageUrl
        })   `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left calc((52vw - 170px) - 340px) top",
        backgroundSize: "cover",
      }}
      className="h-full bg-slate-900 flex flex-col relative  w-full "
    >
      <div
        style={{
          backgroundImage: ` linear-gradient(to bottom right, rgb(15, 32, 42, 1), rgb(15, 32, 42, 0.2))   `,
        }}
        className=" w-full h-full text-white "
      >
        <div className=" w-full flex max-w-screen-xl mx-auto p-8 gap-8 h-full">
          {children}{" "}
        </div>
      </div>
    </section>
  );
}

export default SumGroup;
