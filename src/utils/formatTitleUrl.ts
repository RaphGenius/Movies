export const formatTitleUrl = (title: string) => {
  const regex = /\s\d/g;

  return title.replace(regex, "-");
};
