import { ButtonTemplate } from "./ButtonTemplate";
import { InputNumberQuantityTemplate } from "./InputNumberQuantityTemplate";
import classNames from "classnames";

const sharedProps = {
  min: 1,
  max: 100,
  defaultValue: 1,
  style: { width: 50 },
};

const wrapperClass =
  "inline-flex w-[95px] items-center rounded-lg bg-[#f5f5f5] px-2 py-1 transition-colors duration-200 dark:bg-dark";
const buttonClass =
  "!flex items-end justify-center !bg-transparent !text-[26px] font-light !leading-none hover:!bg-transparent";
const inputClass =
  "!border-none !bg-transparent !shadow-none hover:!bg-transparent [&_.ant-input-number-input]:text-center [&_.ant-input-number-input]:text-sm [&_.ant-input-number-input]:font-medium";

export const InputNumberQuantity = ({
  value,
  onChange,
  className,
  min = sharedProps.min,
  max = sharedProps.max,
  ...rest
}) => {
  const currentValue = Number(
    value ?? rest.defaultValue ?? sharedProps.defaultValue,
  );
  const minValue = Number(min);
  const maxValue = Number(max);

  const handleChange = (nextValue) => {
    if (nextValue < minValue || nextValue > maxValue) {
      return;
    }

    onChange?.(nextValue);
  };

  return (
    <div className={classNames(wrapperClass, className)}>
      <ButtonTemplate
        className={buttonClass}
        size="small"
        type="text"
        disabled={currentValue <= minValue}
        onClick={() => handleChange(currentValue - 1)}
      >
        -
      </ButtonTemplate>
      <InputNumberQuantityTemplate
        className={inputClass}
        controls={false}
        {...sharedProps}
        {...rest}
        min={min}
        max={max}
        variant="filled"
        size="small"
        value={value}
        onChange={onChange}
      />
      <ButtonTemplate
        className={buttonClass}
        size="small"
        type="text"
        disabled={currentValue >= maxValue}
        onClick={() => handleChange(currentValue + 1)}
      >
        +
      </ButtonTemplate>
    </div>
  );
};
