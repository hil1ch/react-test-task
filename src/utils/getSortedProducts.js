export const getSortedProducts = (products, sortingValue) => {
  const { price } = sortingValue;

  if (price === null) return [...products];

  return [...products].sort((productA, productB) => {
    const priceA = Math.min(...productA.colors.map((color) => color.price));
    const priceB = Math.min(...productB.colors.map((color) => color.price));

    if (priceA == null && priceB == null) return 0;
    if (priceA == null) return 1;
    if (priceB == null) return -1;

    if (price === "asc") {
      return priceA - priceB;
    }

    if (price === "decs") {
      return priceB - priceA;
    }

    return 0;
  });
};
