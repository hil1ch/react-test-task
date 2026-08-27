import { useState } from "react";

export const useInputChange = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return { inputValue, setInputValue, handleInputChange };
};
