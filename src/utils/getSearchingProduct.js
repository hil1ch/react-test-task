const normalize = (str) => str.toLowerCase().trim();

export const getSearchingProduct = (items, query) => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) return items;

  return items.filter((item) => normalize(item.name).includes(normalizedQuery));
};
