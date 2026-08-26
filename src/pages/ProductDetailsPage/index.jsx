import { useParams } from "react-router-dom";
import { ButtonTemplate } from "../../components/ButtonTemplate";
import { Segmented } from "antd";

export const ProductDetailsPage = () => {
  const { productId } = useParams();

  //   const category = useMemo(
  //     () => categories.find((id) => product.categoryId === id),
  //     [product.categoryId],
  //   );

  //   const productItem = useMemo(
  //     () => products.find((product) => String(product.id) === String(productId)),
  //     [id, products],
  //   );

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex w-full gap-4 items-start text-left">
          <img alt="" />
          <div className="w-full">
            <div className="flex w-full items-start justify-between mb-10">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">Название товара</span>
                <span className="text-gray-400">Название бренда</span>
              </div>
              <span className="text-red-500 text-2xl font-semibold">
                Цена RUB
              </span>
            </div>
            <span>Категория: категория</span>
            <div className="flex items-start my-10 gap-8">
              <span>
                Размер:
                <div className="flex gap-2">
                  <Segmented options={["1", "2", "3"]} />
                </div>
              </span>
              <span>
                Цвет:
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-ful border" />
                  <button className="w-8 h-8 rounded-ful border" />
                  <button className="w-8 h-8 rounded-ful border" />
                </div>
              </span>
            </div>
            <div className="flex gap-2">
              <ButtonTemplate children="Добавить в корзину" type="primary" />
              <ButtonTemplate children="Перейти в корзину" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
