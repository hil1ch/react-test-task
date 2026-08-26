import { CartProductsList } from "./CartProductsList";
import CartSummary from "./CartSummary";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { APP_PATHS } from "../../constants/paths";

export const CartPage = () => {
  //   const quantitiesMap = useMemo(() => {
  //     return productsInCart.reduce<Record<string, number>>((acc, item) => {
  //       acc[item.id] = item.quantity;
  //       return acc;
  //     }, {});
  //   }, [productsInCart]);

  //   const productsInCarts = useMemo(
  //     () =>
  //       dataProducts.filter((product) => keysProductsInCart.includes(product.id)),
  //     [dataProducts, keysProductsInCart],
  //   );

  //   const totalPrice = useMemo(
  //     () => getTotalCartPrice(productsInCarts, quantitiesMap),
  //     [productsInCarts, quantitiesMap],
  //   );

  //   const isEmptyCarts = productsInCarts.length === 0;
  //   const quantityProductInCarts = productsInCarts.length;
  //   const headerCart = isEmptyCarts ? "Корзина пустая" : "Корзина";

  return (
    <div>
      <div className="min-h-[60vh] container">
        <div className="flex gap-5 items-center">
          <h2 className="text-3xl">headerCart</h2>
          <p className="text-gray-400">
            {/* {quantityProductInCarts}{" "}
            {getDeclension(quantityProductInCarts, WORD_DECLENSIONS)} */}
            0 товаров
          </p>
        </div>
        {/* {isEmptyCarts && (
          <div className="mt-10">
            <ButtonTemplate
              isLink
              href={APP_PATHS.route.catalog}
              typeCustom="black"
              name="Перейти к покупкам"
            />
          </div>
        )} */}

        <div className="mt-10">
          <ButtonTemplate
            isLink
            href={APP_PATHS.route.catalog}
            typeCustom="black"
            name="Перейти к покупкам"
          />
        </div>

        {/* {!isEmptyCarts && (
          <div className="lg:flex gap-6">
            <CartProductsList items={productsInCarts} />
            <CartSummary totalPrice={totalPrice} />
          </div>
        )} */}

        <div className="lg:flex gap-6">
          <CartProductsList items={[1, 2, 3, 4]} />
          <CartSummary />
        </div>
      </div>
    </div>
  );
};
