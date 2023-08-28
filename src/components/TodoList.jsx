import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todo = useSelector((state) => state.todo);
const filters = useSelector((state)=> state.filter)
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todo
      .filter(singleTodo => {
        const {status}= filters
        switch (status) {
          case "Incomplete":
            return !singleTodo.completed
          case "complete":
            return singleTodo.completed
           
         
        
          default:
          return true
        }
      })
      
      
      
      
      .map((singleTodo) => (
        <Todo singleTodo={singleTodo} key={singleTodo.id}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
