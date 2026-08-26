import { useState, useEffect } from "react";
import { Search } from "../../components/Search";
import { FiltersMenu } from "./FiltersMenu";
import { ProductsList } from "./ProductsList";
import Sorting from "./Sorting";
import { Spin } from "antd";

import { getProducts } from "../../services/api";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Search />
        <Sorting />
      </div>
      <div className="flex gap-10">
        <FiltersMenu />

        <div className="flex-1">
          {isLoading ? (
            <div className="flex h-full w-full items-center justify-center">
              <Spin size="large" />
            </div>
          ) : (
            <ProductsList products={products} />
          )}
        </div>
      </div>
    </div>
  );
};
