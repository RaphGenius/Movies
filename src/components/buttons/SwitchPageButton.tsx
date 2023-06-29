type Props = {
  label: string;
  switchPageFn: () => void;
  title: JSX.Element;
};
function SwitchPageButton({ label, switchPageFn, title }: Props) {
  return (
    <button onClick={switchPageFn} aria-label={label}>
      {title}
    </button>
  );
}

export default SwitchPageButton;
