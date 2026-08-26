import { APP_PATHS } from "../../constants/paths";

import { ButtonTemplate } from "../../components/ButtonTemplate";
import { Input } from "antd";
// import { CheckboxTemplate } from "../../components/CheckboxTemplate";

const CartSummary = ({
  totalPrice,
  variant = "carts",
  cartProducts,
  cartItems,
  activeTab,
  isConsent,
  loading,
  // setIsConsent,
}) => {
  const isOrderVariant = variant === "order";

  return (
    <div className="w-full lg:max-w-[40%]">
      <div className="bg-white p-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <h2>Итог: </h2>
          <p className="text-xl text-gray-400">
            {totalPrice ? totalPrice.toFixed(2) : 0} ₽
          </p>
        </div>
        {isOrderVariant && (
          <div className="flex justify-between items-center">
            <h2>{cartProducts?.length ?? 0} товара</h2>
          </div>
        )}
        <div className="flex flex-col mt-10 mb-5 gap-2">
          <ButtonTemplate
            // loading={loading}
            // disabled={isOrderVariant ? !isConsent : false}
            // htmlType={isOrderVariant ? "submit" : undefined}
            // form={isOrderVariant ? `form-${activeTab}` : undefined}
            // isLink={!isOrderVariant}
            // href={
            //   !isOrderVariant ? APP_PATHS.route.order : APP_PATHS.route.success
            // }
            // block
            // name={isOrderVariant ? "Оформить заказ" : "Перейти к оформлению"}
            type="primary"
            children={
              isOrderVariant ? "Оформить заказ" : "Перейти к оформлению"
            }
          />
          <ButtonTemplate
            // block
            // isLink
            // href={APP_PATHS.route.catalog}
            // typeCustom="black"
            // name="Перейти к покупкам"
            children="Перейти к покупкам"
          />

          {/* {isOrderVariant && (
            <CheckboxTemplate
              checked={isConsent}
              onChange={() => setIsConsent?.(!isConsent)}
            >
              Согласие на обработку персональных данных
            </CheckboxTemplate>
          )} */}
        </div>
        <p className="text-left text-gray-400 mb-2 text-sm">Есть промокод?</p>
        <div className="flex flex-col gap-2">
          <Input placeholder="Введите промокод" />
          <ButtonTemplate children="Применить" type="primary" disabled />
        </div>
        {/* <div className="mt-5">
          <h3>{isOrderVariant ? "Состав заказа:" : "Способы получения:"}</h3>
          {!isOrderVariant ? (
            <DeliveryMethods />
          ) : (
            <OrderListProducts
              cartProducts={cartProducts}
              cartItems={cartItems}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default CartSummary;
