import { BiPlay } from "react-icons/bi";

type Props = {
  id: number;
  setVideoID: React.Dispatch<React.SetStateAction<number | null>>;
};
function TrailerButton({ id, setVideoID }: Props) {
  return (
    <button
      onClick={() => setVideoID(id)}
      className="flex items-center text-xl hover:opacity-80 transition "
    >
      <BiPlay /> Bande Annonce
    </button>
  );
}

export default TrailerButton;
