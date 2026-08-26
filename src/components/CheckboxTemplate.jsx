import { Checkbox } from "antd";

export const CheckboxTemplate = ({
  checked,
  className,
  onChange,
  label,
  children,
  ...rest
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      {...rest}
      className={className}
    >
      {label || children}
    </Checkbox>
  );
};
