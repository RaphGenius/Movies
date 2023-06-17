type Props = {
  isFetching: boolean;
  children: React.ReactNode;
};

function Carousel({ isFetching, children }: Props) {
  return (
    <div
      className={`flex overflow-x-auto overflow-y-hidden snap-x   snap-center
       gap-6 flex-nowrap transition-all duration-500 py-4   ${
         isFetching && "blur-sm"
       } `}
    >
      {children}
    </div>
  );
}

export default Carousel;
