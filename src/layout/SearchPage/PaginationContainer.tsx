import {
  BsArrowLeft as FlecheGauche,
  BsArrowRight as FlecheDroite,
} from "react-icons/bs";
import SwitchPageButton from "../../components/buttons/SwitchPageButton";
type Props = {
  currentPage: number;
  totalPage: number;
  switchPageFn: (value: number) => void;
};

function PaginationContainer({ currentPage, totalPage, switchPageFn }: Props) {
  const forwardPage = () => switchPageFn(currentPage + 1);
  const backwardPage = () => switchPageFn(currentPage - 1);

  return (
    <div className="flex justify-center gap-4">
      {currentPage > 1 && (
        <SwitchPageButton
          label="Page précédente"
          switchPageFn={backwardPage}
          title={<FlecheGauche />}
        />
      )}
      {currentPage}
      {currentPage !== totalPage && (
        <SwitchPageButton
          label="Page Suivante"
          switchPageFn={forwardPage}
          title={<FlecheDroite />}
        />
      )}
    </div>
  );
}

export default PaginationContainer;
