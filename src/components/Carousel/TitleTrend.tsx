function TitleTrend({
  title,
  style = "text-white",
}: {
  title: string;
  style?: string;
}) {
  return (
    <h2 className={`lg:text-4xl md:text-3xl text-2xl font-bold ${style} `}>
      {title}{" "}
    </h2>
  );
}

export default TitleTrend;
