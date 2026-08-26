import { Checkbox } from "antd";

export const CheckboxTemplate = ({
  checked,
  className,
  onChange,
  label,
  children,
  ...restProps
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      {...restProps}
      className={className}
    >
      {label || children}
    </Checkbox>
  );
};
