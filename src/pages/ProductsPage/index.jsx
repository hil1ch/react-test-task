import { useState, useEffect } from "react";
import { Search } from "../../components/Search";
import { FiltersMenu } from "./FiltersMenu";
import { ProductsList } from "./ProductsList";
import Sorting from "./Sorting";

import { getProducts } from "../../services/api";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <div className="flex">
        <FiltersMenu />

        {isLoading ? (
          <div>Загрузка товаров...</div>
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </div>
  );
};
