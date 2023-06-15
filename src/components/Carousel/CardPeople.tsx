import { getPosterPathImage } from "../../utils/getPosterPathImage";

type Props = {
  imageUrl: string;
  name: string;
  role: string;
};

function CardPeople({ imageUrl, name, role }: Props) {
  return (
    <article className=" shadow-lg border-gray-300 border cursor-pointer relative rounded-xl  w-48 flex flex-col flex-shrink-0 bg-white  ">
      <div className=" h-3/4 max-h-[200px] w-full relative  ">
        <img
          loading="lazy"
          className="w-full h-full object-top  object-cover rounded-t-lg     "
          src={getPosterPathImage(imageUrl)}
          alt={`image de ${name}`}
        />
      </div>
      <div className="  h-1/4 pl-2 p-4">
        <h3 className="font-bold text-lg  ">{name}</h3>
        <span className="text-gray-500">{role} </span>
      </div>
    </article>
  );
}

export default CardPeople;
