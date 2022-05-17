import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import { DemoComponent } from "./DemoComponent";
import { RefExample } from "./RefExample";
import Todos from "./Todo";

const expensiveCalculation = (num: number) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([]);
  const calculation = expensiveCalculation(count);

  // const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  // const addTodo = useCallback(() => {
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <RefExample />
    </>
  );
}

export default App;
