import { ProductItem } from "./ProductItem";

export const ProductsList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 ml-auto">
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.colors[0].images[0]}
          price={product.colors.map((el) => el.price)}
          {...product}
        />
      ))}
    </div>
  );
};
