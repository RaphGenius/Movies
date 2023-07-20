import CircleProgressBar from "../Carousel/CircleProgressBar";

type Props = {
  rate: number;
};

export default function CircularButton({ rate }: Props) {
  return (
    <div
      className="  lg:w-auto max-w-[50px] hover:scale-110 transition 
     will-change-transform cursor-pointer flex items-center gap-2 shrink "
    >
      <CircleProgressBar size="30px" rate={rate} />
      {/* <span className="  sm:text-sm text-lg ">Note des utilisateurs</span> */}
    </div>
  );
}
