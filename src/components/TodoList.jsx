import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todo.map((singleTodo) => (
        <Todo singleTodo={singleTodo} key={singleTodo.id}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
