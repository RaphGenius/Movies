function TitleTrend({
  title,
  style = "text-white",
}: {
  title: string;
  style?: string;
}) {
  return <h2 className={`text-4xl font-bold ${style} `}>{title} </h2>;
}

export default TitleTrend;
