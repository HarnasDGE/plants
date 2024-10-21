export const sordByDate = (array) => {
  return array.sort((a, b) => new Date(a.date) - new Date(b.date));
};
