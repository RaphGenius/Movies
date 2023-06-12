export const formatTitleUrl = (title: string) => {
  if (!title) return;
  const regex = /\s\d/g;

  return title.replace(regex, "-");
};
