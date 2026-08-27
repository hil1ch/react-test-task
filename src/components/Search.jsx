import { Input } from "antd";

export const Search = ({ inputValue, onInputChange }) => {
  return (
    <Input.Search
      placeholder="Найти товар"
      value={inputValue}
      onChange={onInputChange}
    ></Input.Search>
  );
};
