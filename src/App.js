import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  // useCallback() でButtonコンポーネント関数が実行されないように
  // useCallback()は関数を保持して再生成させないようにする
  const toggleParagraphHandler = useCallback(() => {
    // dependenceの配列にallowToggleを入れないと変化を受け取れない
    console.log(allowToggle);
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);
  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
