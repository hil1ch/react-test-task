import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import { CartProductItem } from "./CartProductItem";
import { CheckboxTemplate } from "../../components/CheckboxTemplate";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { deleteMultipleFromCart } from "../../store/slices/cartSlice";
import classNames from "classnames";

export const CartProductsList = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();

  const keysItemsInCart = useMemo(() => items.map((item) => item.id), [items]);

  const isNothingSelected = selectedItems.length === 0;
  const isAllSelected =
    items.length > 0 && selectedItems.length === items.length;

  const handleChange = () => {
    setSelectedItems(isAllSelected ? [] : keysItemsInCart);
  };

  useEffect(() => {
    setSelectedItems((prev) =>
      prev.filter((id) => keysItemsInCart.includes(id)),
    );
  }, [keysItemsInCart]);

  return (
    <div className="mt-5 w-full lg:w-[65%]">
      <div className="mb-5 flex items-center justify-between">
        <CheckboxTemplate
          className="!text-lg"
          onChange={handleChange}
          checked={isAllSelected}
        >
          Выбрать все
        </CheckboxTemplate>

        <ButtonTemplate
          disabled={isNothingSelected}
          onClick={() => dispatch(deleteMultipleFromCart(selectedItems))}
          className={classNames({
            "hover:!text-red-500": !isNothingSelected,
          })}
          type="text"
          //   iconEnd={<Icons.BasketClean />}
          // name="Удалить выбранное"
          children="Удалить выбранное"
        />
      </div>
      <ul className="flex flex-col gap-5">
        {items.map((product) => (
          <CartProductItem
            selectedItems={selectedItems}
            onChange={setSelectedItems}
            key={product.id}
            item={product}
          />
        ))}
      </ul>
    </div>
  );
};
