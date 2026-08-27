export const getFilteredProducts = (products, filterValue) => {
  if (!filterValue) return products;

  return products.filter((product) =>
    product.colors.some((color) => color.sizes.length > 0),
  );
};
