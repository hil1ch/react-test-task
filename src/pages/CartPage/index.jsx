import { useMemo, useState, useEffect } from "react";
import { CartProductsList } from "./CartProductsList";
import CartSummary from "./CartSummary";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { APP_PATHS } from "../../constants/paths";
import { useSelector } from "react-redux";
import { selectorCart } from "../../store/slices/cartSlice";
import { getTotalCartPrice } from "../../utils/getTotalCartPrice";
import { getDeclension } from "../../utils/getDeclension";
import { WORD_DECLENSIONS } from "../../constants/declensions";
import { getProducts } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

export const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const productsInCart = useSelector(selectorCart);
  const keysProductsInCart = productsInCart.map((product) => product.id);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при получении товаров:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const quantitiesMap = useMemo(() => {
    return productsInCart.reduce((acc, item) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {});
  }, [productsInCart]);

  const productsInCarts = useMemo(
    () => products.filter((product) => keysProductsInCart.includes(product.id)),
    [products, keysProductsInCart],
  );

  const totalPrice = useMemo(
    () => getTotalCartPrice(productsInCarts, quantitiesMap),
    [productsInCarts, quantitiesMap],
  );

  const isEmptyCarts = productsInCarts.length === 0;
  const quantityProductInCarts = productsInCarts.length;
  const headerCart = isEmptyCarts ? "Корзина пустая" : "Корзина";

  return (
    <div>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <div className="min-h-[60vh] container">
          <div className="flex gap-5 items-center">
            <h2 className="text-3xl">{headerCart}</h2>
            <p className="text-gray-400">
              {quantityProductInCarts}{" "}
              {getDeclension(quantityProductInCarts, WORD_DECLENSIONS)}
            </p>
          </div>
          {isEmptyCarts && (
            <div className="mt-10">
              <ButtonTemplate
                onClick={() => navigate(`${APP_PATHS.route.home}`)}
                children="Перейти к покупкам"
              />
            </div>
          )}
          {!isEmptyCarts && (
            <div className="lg:flex gap-6">
              <CartProductsList items={productsInCarts} />
              <CartSummary totalPrice={totalPrice} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
