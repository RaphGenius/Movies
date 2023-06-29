import {
  MdKeyboardDoubleArrowLeft as DoubleFlecheGauche,
  MdKeyboardDoubleArrowRight as DoubleFlechDroite,
} from "react-icons/md";
import SwitchPageButton from "../../components/buttons/SwitchPageButton";
type Props = {
  currentPage: number;
  totalPage: number;
  switchPageFn: (value: number) => void;
};

function PaginationContainer({ currentPage, totalPage, switchPageFn }: Props) {
  const forwardPage = () => switchPageFn(currentPage + 1);
  const backwardPage = () => switchPageFn(currentPage - 1);
  const firstPage = () => switchPageFn(1);
  const lastPage = () => switchPageFn(totalPage);

  return (
    <div className="flex items-center justify-center gap-4">
      {currentPage > 1 && (
        <>
          <SwitchPageButton
            label="Allez à la première page"
            switchPageFn={firstPage}
            title={<DoubleFlecheGauche />}
          />

          <SwitchPageButton
            label="Page précédente"
            switchPageFn={backwardPage}
            title={currentPage - 1}
          />
        </>
      )}
      <span className="font-semibold text-xl">{currentPage}</span>
      {currentPage !== totalPage && (
        <>
          <SwitchPageButton
            label="Page Suivante"
            switchPageFn={forwardPage}
            title={currentPage + 1}
          />
          <SwitchPageButton
            label="Allez à la dernière page"
            switchPageFn={lastPage}
            title={<DoubleFlechDroite />}
          />
        </>
      )}
    </div>
  );
}

export default PaginationContainer;
