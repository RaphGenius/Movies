export function getPosterPathImage(path: string) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export const getProfilImagePath = (imageUrl: string) => {
  return `https://www.themoviedb.org/t/p/w66_and_h66_face${imageUrl}`;
};

export const getBigProfilImage = (imageUrl: string) => {
  return `https://www.themoviedb.org/t/p/w300_and_h450_face${imageUrl}`;
};
