import CircleProgressBar from "../Carousel/CircleProgressBar";

type Props = {
  rate: number;
};

export default function CircularButton({ rate }: Props) {
  return (
    <div className="w-20 hover:scale-110 transition will-change-transform cursor-pointer ">
      {" "}
      <CircleProgressBar size="30px" rate={rate} />
    </div>
  );
}
