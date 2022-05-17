import { memo } from "react";
interface ITodo {
  todos: string[];
  addTodo: any;
}
const Todos: React.FC<ITodo> = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

// export default Todos;
export default memo(Todos);
