import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import APP_PATHS from "../../constants/paths";
import CheckboxTemplate from "../../components/CheckboxTemplate";
import { InputNumberQuantity } from "../../components/InputNumberQuantity";
import { ButtonTemplate } from "../../components/ButtonTemplate";

export const CartProductItem = ({ item, onChange, selectedItems }) => {
//   const [isOpenModal, setIsModalOpen] = useState(false);
  //   const dispatch = useDispatch();
  //   const cartKeysStore = useSelector(selectorCart);

  //   const quantitiesMap = useMemo(() => {
  //     return cartKeysStore.reduce((acc, item) => {
  //       acc[item.id] = item.quantity;
  //       return acc;
  //     }, {});
  //   }, [cartKeysStore]);

  const { id, fullDesignation, name, price, category, type } = item;

  //   const quantity = quantitiesMap[id] ?? 1;
  //   const totalPrice = quantity * price;

  const handleToggleItem = () => {
    onChange((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

  const isCheckedItems = selectedItems.includes(id);

//   const productLink = `${APP_PATHS.route.catalog}/${encodeURIComponent(
//     category?.slug,
//   )}/${encodeURIComponent(type?.slug)}/${encodeURIComponent(id)}`;

  return (
    <li className="flex flex-wrap p-5 bg-white relative justify-center md:justify-between items-center gap-5 rounded-2xl">
      <div className="absolute top-1 left-1">
        {/* <CheckboxTemplate
          checked={isCheckedItems}
          onChange={handleToggleItem}
        /> */}
      </div>

      <div>
        <img alt="" />
      </div>

      <div className="flex flex-wrap items-center justify-between flex-1">
        <div className="mb-3 md:mb-5 2xl:mb-0">
          <div className="flex flex-col md:flex-row md:items-center text-xs md:text-sm m-0 gap-0 md:gap-1">
            <p className="m-0 -mb-2 md:mb-0">Артикул товара:</p>
            <div className="flex items-center gap-1">
              <span className="text-primary">{id}</span>
              {/* <CopyButton id={id} value={id} /> */}
            </div>
          </div>
          <Link to={""} className="inline-flex flex-col">
            <p className="m-0 text-sm md:text-base">{name} Название товара</p>
            <span className="block text-sm md:text-base">
              {fullDesignation} Название бренда
            </span>
          </Link>
        </div>

        <div className="flex gap-5 items-center justify-between flex-1 lg:flex-0 mr-7">
          <InputNumberQuantity
            onChange={(value) => {
              //   dispatch(setQuantity({ id, quantity: Number(value ?? 1) }));
            }}
            // value={quantity}
          />
          <div className="text-nowrap text-base md:text-xl font-medium">
            {/* {totalPrice.toFixed(2)} ₽ */} цена
          </div>
        </div>
      </div>

      <div className="absolute top-1 right-0">
        <ButtonTemplate
          type="default"
          className="!border-none hover:!bg-transparent hover:!text-red-500 !shadow-none"
        //   onClick={handleOpenModal}
        //   icon={<Icons.BasketClean width="18" height="18" />}
        />
      </div>
      {/* <CustomModal
        title="Вы уверены?"
        description={
          <span className="text-center block">
            Это действие не может быть отменено. Вы действительно хотите удалить
            артикул: <span className="font-bold">{`"${name}"`} ?</span>
          </span>
        }
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isOpenModal}
        footer={
          <ActionsModal
            handleApprove={() => {
              dispatch(deleteInCart(id));
              setIsModalOpen(false);
            }}
            handleCancel={() => setIsModalOpen(false)}
          />
        }
      /> */}
    </li>
  );
};
