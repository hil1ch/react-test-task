import { Button } from "antd";

export const ButtonTemplate = ({ children, type, onClick, ...rest }) => {
  return (
    <Button type={type} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
};
