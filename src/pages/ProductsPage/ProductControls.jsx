import { ButtonTemplate } from "../../components/ButtonTemplate";

export const ProductControls = ({ navigateToCart }) => {
  return (
    <div
      className="flex flex-col gap-2 mb-2 mt-2"
      onClick={(event) => event.stopPropagation()}
    >
      <ButtonTemplate children="Добавить в корзину" type="primary" />
      <ButtonTemplate children="Перейти в корзину" onClick={navigateToCart} />
    </div>
  );
};
