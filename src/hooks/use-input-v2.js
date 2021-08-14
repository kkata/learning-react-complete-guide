import { useState } from "react";

const useInputGeneral = (validateFn) => {
  const [value, setValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [isTouched, setTouched] = useState(false);
  const isErrorInput = isTouched && !isValidInput;

  const handleInputBlur = () => {
    setTouched(true);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setIsValidInput(validateFn(event.target.value));
  };

  const reset = () => {
    setValue("");
    setIsValidInput(false);
    setTouched(false);
  };

  return {
    value,
    isValidInput,
    isErrorInput,
    handleInputBlur,
    handleInputChange,
    reset,
  };
};

export default useInputGeneral;
