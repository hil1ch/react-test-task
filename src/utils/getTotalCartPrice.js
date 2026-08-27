export const getTotalCartPrice = (cartList, quantitiesMap) => {
  return cartList.reduce((acc, item) => {
    const quantity = quantitiesMap[item.id] ?? 1;
    return acc + item.price * quantity;
  }, 0);
};
