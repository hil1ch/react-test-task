import { ProductControls } from "./ProductControls";

export const ProductDescription = ({ brand, navigateToCart, price, id }) => {
  return (
    <>
      <p>{brand}</p>
      <span className="text-red-600 font-semibold text-lg">
        {Math.min(...price).toFixed(2)} RUB
      </span>
      <ProductControls navigateToCart={navigateToCart} id={id} />
    </>
  );
};
