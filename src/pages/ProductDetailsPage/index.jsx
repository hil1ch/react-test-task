import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { Segmented } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { APP_PATHS } from "../../constants/paths";
import { getProduct, getCategory } from "../../services/api";
import { getColorsByHex } from "../../utils/getColorsByHex";

export const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct(productId);
        setProduct(data);
      } catch (error) {
        console.error("Ошибка при получении товаров:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [productId]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategory(product.categoryId);
        setCategory(data);
      } catch (error) {
        console.error("Ошибка при получении категории:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategory();
  }, [product.categoryId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsInCart(true);
  };

  const colors = useMemo(
    () => product.colors?.map((color) => color.name),
    [product.colors],
  );

  const sizes = useMemo(() => {
    if (!product.colors) return [];
    const allSizes = product.colors.flatMap((color) => {
      if (typeof color.sizes === "string") {
        return color.sizes.split(/[,\s]+/).filter(Boolean);
      }
      return color.sizes;
    });
    return [...new Set(allSizes)];
  }, [product.colors]);

  const allAvailableSizes = useMemo(() => {
    return sizes.filter((size) => sizes.includes(size.id));
  }, [sizes]);

  return (
    <div className="w-full">
      <div className="flex justify-center ">
        {sizes.length === 0 ? (
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-semibold">Товар не найден</h1>
            <ButtonTemplate
              type="primary"
              onClick={() => navigate(`${APP_PATHS.route.home}`)}
            >
              Вернуться назад
            </ButtonTemplate>
          </div>
        ) : (
          <div className="flex w-full gap-20 items-start text-left border rounded-3xl p-20">
            <img
              alt={product.name}
              src={product?.colors?.[0]?.images?.[0]}
              className="w-56 h-auto object-cover rounded-xl"
            />
            <div className="w-full">
              <div className="flex w-full items-start justify-between mb-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-semibold">{product.name}</span>
                  <span className="text-gray-400">{product.brand}</span>
                </div>
                <span className="text-red-500 text-2xl font-semibold">
                  {} RUB
                </span>
              </div>
              <span>Категория: {category.name}</span>
              <div className="flex items-start my-10 gap-10">
                <span>
                  Размер:
                  <div className="flex gap-2">
                    <Segmented options={sizes} />
                  </div>
                </span>
                <span>
                  Цвет:
                  <div className="flex gap-2">
                    {colors?.map((color) => (
                      <button
                        style={{ backgroundColor: getColorsByHex(color) }}
                        className="w-8 h-8 rounded-full border"
                      />
                    ))}
                  </div>
                </span>
              </div>
              <div className="flex gap-2">
                <ButtonTemplate type="primary" onClick={handleAddToCart}>
                  {isInCart ? "В корзине" : "Добавить в корзину"}
                </ButtonTemplate>
                <ButtonTemplate
                  children="Перейти в корзину"
                  onClick={() => navigate(`${APP_PATHS.route.cart}`)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
