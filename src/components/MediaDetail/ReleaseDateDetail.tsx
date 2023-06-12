import { formatDateNumbers } from "../../utils/formatDateNumbers";

function ReleaseDateDetail({ release_date }: { release_date: string }) {
  return (
    <span className="text-center"> {formatDateNumbers(release_date)} </span>
  );
}

export default ReleaseDateDetail;
