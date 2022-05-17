import { useState, useEffect, useRef } from "react";

export function RefExample() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  console.log(inputValue);
  console.log(previousInputValue.current);
  console.log("a");
  useEffect(() => {
    console.log(inputValue);
    console.log(previousInputValue.current);
    console.log("b");
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}
