import { useDispatch } from "react-redux";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { addToCart } from "../../store/slices/cartSlice";
import { useState } from "react";

export const ProductControls = ({ navigateToCart, id }) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, quantity: 1 }));
    setIsInCart(true);
  };

  return (
    <div
      className="flex flex-col gap-2 mb-2 mt-2"
      onClick={(event) => event.stopPropagation()}
    >
      <ButtonTemplate type="primary" onClick={handleAddToCart}>
        {isInCart ? "В корзине" : "Добавить в корзину"}
      </ButtonTemplate>
      <ButtonTemplate children="Перейти в корзину" onClick={navigateToCart} />
    </div>
  );
};
