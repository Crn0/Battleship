export const getOcean = (id: string) => {
  const ocean = document.getElementById(`${id}-ocean`);

  if (!ocean) {
    throw new Error("Ocean does not exist");
  }

  return ocean;
};
