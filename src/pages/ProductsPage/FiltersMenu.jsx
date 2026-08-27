import { Menu } from "antd";
import { CheckboxTemplate } from "../../components/CheckboxTemplate";

const items = (filter, setFilter) => [
  {
    key: "sub1",
    label: "Фильтры",
    children: [
      {
        key: "g1",
        type: "group",
        children: [
          {
            key: "1",
            label: (
              <CheckboxTemplate
                checked={filter}
                onChange={(event) => setFilter(event.target.checked)}
              >
                В наличии
              </CheckboxTemplate>
            ),
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
];

export const FiltersMenu = ({ filter, setFilter }) => {
  return (
    <Menu
      style={{ width: 256, maxHeight: 0, fontSize: 16 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items(filter, setFilter)}
      multiple
      value={filter}
    />
  );
};
