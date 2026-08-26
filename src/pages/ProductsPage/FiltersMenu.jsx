import { Menu } from "antd";
import { CheckboxTemplate } from "../../components/CheckboxTemplate";

const items = [
  {
    key: "sub1",
    label: "Фильтры",
    children: [
      {
        key: "g1",
        type: "group",
        children: [
          { key: "1", label: <CheckboxTemplate>В наличии</CheckboxTemplate> },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
];

export const FiltersMenu = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, position: "absolute" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
      multiple
    />
  );
};
