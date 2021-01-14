export const isObjEmpty = (obj) => {
  for (const i in obj) return false;
  return true;
};

export const getImageURL = (size, imagePath) => {
  const SIZE = { SMALL: 'w92', MEDIUM: 'w154', LARGE: 'w342' };
  const imageURL = `https://image.tmdb.org/t/p/${SIZE[size]}${imagePath}`;

  return imageURL;
};
