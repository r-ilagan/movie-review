export const isObjEmpty = (obj) => {
  for (const i in obj) return false;
  return true;
};
