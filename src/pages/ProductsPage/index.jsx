import { useState, useEffect, useMemo, useDeferredValue } from "react";
import { Search } from "../../components/Search";
import { FiltersMenu } from "./FiltersMenu";
import { ProductsList } from "./ProductsList";
import Sorting from "./Sorting";
import { Spin } from "antd";

import { getProducts } from "../../services/api";
import { getSortedProducts } from "../../utils/getSortedProducts";
import { getFilteredProducts } from "../../utils/getFilteredProducts";
import { useInputChange } from "../../hooks/useInputChange";
import { getSearchingProduct } from "../../utils/getSearchingProduct";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sorting, setSorting] = useState({ price: null });
  const [filter, setFilter] = useState(false);
  const { inputValue, handleInputChange } = useInputChange();
  const defferedValue = useDeferredValue(inputValue);

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

  const displayedProducts = useMemo(() => {
    const searchingProducts = getSearchingProduct(products, inputValue);
    const filteredProducts = getFilteredProducts(searchingProducts, filter);

    return getSortedProducts(filteredProducts, sorting);
  }, [products, filter, inputValue, sorting]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-4">
        <Search inputValue={defferedValue} onInputChange={handleInputChange} />
        <Sorting setSorting={setSorting} sorting={sorting} />
      </div>
      <div className="flex gap-10">
        <FiltersMenu filter={filter} setFilter={setFilter} />

        <div className="flex-1">
          {isLoading ? (
            <div className="flex h-full w-full items-center justify-center">
              <Spin size="large" />
            </div>
          ) : (
            <ProductsList products={displayedProducts} />
          )}
        </div>
      </div>
    </div>
  );
};
