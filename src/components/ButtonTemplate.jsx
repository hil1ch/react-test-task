import { Button } from "antd";

export const ButtonTemplate = ({ children, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};
