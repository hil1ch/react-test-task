import { useState, useMemo } from "react";
import APP_PATHS from "../../constants/paths";
import { CheckboxTemplate } from "../../components/CheckboxTemplate";
import { InputNumberQuantity } from "../../components/InputNumberQuantity";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteInCart,
  selectorCart,
  setQuantity,
} from "../../store/slices/cartSlice";

export const CartProductItem = ({ item, onChange, selectedItems }) => {
  const dispatch = useDispatch();
  const cartKeysStore = useSelector(selectorCart);

  const quantitiesMap = useMemo(() => {
    return cartKeysStore.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
  }, [cartKeysStore]);

  const { id, brand, name, price, type } = item;

  const quantity = quantitiesMap[id] ?? 1;
  const totalPrice = quantity * price;

  const handleToggleItem = () => {
    onChange((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const isCheckedItems = selectedItems.includes(id);

  return (
    <li className="flex flex-wrap p-5 bg-white relative justify-center md:justify-between items-center gap-5 rounded-2xl border">
      <div className="absolute top-1 left-2">
        <CheckboxTemplate
          checked={isCheckedItems}
          onChange={handleToggleItem}
        />
      </div>

      <div>
        <img alt={name} />
      </div>

      <div className="flex flex-wrap items-center justify-between flex-1">
        <div className="mb-3 md:mb-5 2xl:mb-0">
          <div className="inline-flex flex-col">
            <p className="text-lg">{name}</p>
            <span className="text-gray-400">{brand}</span>
          </div>
        </div>

        <div className="flex gap-5 items-center justify-between lg:flex-0 mr-7">
          <InputNumberQuantity
            onChange={(value) => {
              dispatch(setQuantity({ id, quantity: Number(value ?? 1) }));
            }}
            value={quantity}
          />
          <div className="text-nowrap text-base md:text-xl font-medium">
            {totalPrice.toFixed(2)} ₽
          </div>
        </div>
      </div>

      <div className="absolute top-1 right-0">
        <ButtonTemplate
          type="default"
          className="!border-none hover:!bg-transparent hover:!text-red-500 !shadow-none"
          onClick={() => dispatch(deleteInCart(id))}
          //   icon={<Icons.BasketClean width="18" height="18" />}
          children="Удалить"
        />
      </div>
    </li>
  );
};
