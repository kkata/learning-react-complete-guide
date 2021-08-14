import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
  isValidInput: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched,
      isValidInput: state.isValidInput,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
      isValidInput: state.isValidInput,
    };
  }
  if (action.type === "VALIDATE") {
    return {
      value: state.value,
      isTouched: state.isTouched,
      isValidInput: action.isValidInput,
    };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  return initialInputState;
};

const useInputGeneral = (validateFn) => {
  const [state, dispatch] = useReducer(inputStateReducer, initialInputState);

  // const [value, setValue] = useState("");
  // const [isValidInput, setIsValidInput] = useState(false);
  // const [isTouched, setTouched] = useState(false);
  const isErrorInput = state.isTouched && !state.isValidInput;

  const handleInputBlur = () => {
    dispatch({ type: "BLUR" });
    // setTouched(true);
  };

  const handleInputChange = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    dispatch({
      type: "VALIDATE",
      isValidInput: validateFn(event.target.value),
    });
    // setValue(event.target.value);
    // setIsValidInput(validateFn(event.target.value));
  };

  const reset = () => {
    dispatch({ type: "RESET" });
    // setValue("");
    // setIsValidInput(false);
    // setTouched(false);
  };

  return {
    value: state.value,
    isValidInput: state.isValidInput,
    isErrorInput,
    handleInputBlur,
    handleInputChange,
    reset,
  };
};

export default useInputGeneral;
