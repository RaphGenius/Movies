type Props = {
  title: string;
};
export const writeMetaDocument = ({ title }: Props) => {
  if (!title) return (document.title = "Movie");
  document.title = title;
};
