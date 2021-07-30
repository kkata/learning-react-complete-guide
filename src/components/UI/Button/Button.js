import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  console.log("Button is running");
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// memo() is not work as I expected, because...
// 親のAppコンポーネントのsetShowParagraph()の処理が走るため（関数はオブジェクトで、プティミティブではない）
export default React.memo(Button);
