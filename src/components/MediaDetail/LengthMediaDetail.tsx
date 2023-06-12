import { getRunTime } from "../../utils/getRunTime";

type Props = {
  lengthMedia: number;
};
function LengthMediaDetail({ lengthMedia }: Props) {
  const { hours, minutes } = getRunTime(lengthMedia);
  return <span>{`${hours}h ${minutes}m`} </span>;
}

export default LengthMediaDetail;
