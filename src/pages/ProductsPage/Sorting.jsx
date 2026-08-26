import { SelectTemplate } from "../../components/SelectTemplate";
// import { SortPriceValue } from "@/utils/getSortingProducts.ts";

const options = [
  {
    label: <span>Сортировка по цене</span>,
    title: "price",
    options: [
      { label: <span>Сначала дороже</span>, value: "decs" },
      { label: <span>Сначала дешевле</span>, value: "asc" },
    ],
  },
];

const Sorting = ({ setSorting, sorting }) => {
  return (
    <>
      <SelectTemplate
        // onChange={(value: SortPriceValue) => setSorting({ price: value })}
        // value={sorting.price}
        placeholder="Сортировка"
        options={options}
        size="medium"
        className="w-[250px] dark:bg-darkLight"
      />
    </>
  );
};

export default Sorting;
