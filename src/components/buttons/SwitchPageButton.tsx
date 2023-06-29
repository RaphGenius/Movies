type Props = {
  label: string;
  switchPageFn: () => void;
  title: JSX.Element | number;
};
function SwitchPageButton({ label, switchPageFn, title }: Props) {
  return (
    <button className="" onClick={switchPageFn} aria-label={label}>
      {title}
    </button>
  );
}

export default SwitchPageButton;
