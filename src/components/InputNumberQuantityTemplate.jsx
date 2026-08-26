import { InputNumber } from "antd";

const sharedProps = {
  mode: "spinner",
  style: { width: 120 },
};

const mainClass = "";

export const InputNumberQuantityTemplate = ({
  value,
  onChange,
  className: secondaryClass,
  controls,
  ...rest
}) => {
  return (
    <InputNumber
      className={(mainClass, secondaryClass)}
      {...sharedProps}
      {...rest}
      controls={controls}
      variant="filled"
      size="small"
      value={value}
      onChange={onChange}
    />
  );
};
