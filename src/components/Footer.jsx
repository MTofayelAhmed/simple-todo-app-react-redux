import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/actions";
const numberOfTodo = (No_Of_Todo)=> {
    switch (No_Of_Todo) {
        case 0:
            
           return "No Task"
    
       case 1: 
       return "1 task"

       default:
        return `${No_Of_Todo} tasks left`
    }
}
const Footer = () => {
    const dispatch = useDispatch()
const todo = useSelector((state)=> state.todo)
const filters = useSelector((state)=> state.filter)
const {status, color}= filters
const todoRemaining =  todo.filter(singleTodo => !singleTodo.completed).length


const handleStatus = (status)=> {
dispatch(statusChanged(status))
}




    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTodo(todoRemaining) }</p>
        <ul className="flex space-x-1 items-center text-xs">
            <li onClick={()=> handleStatus("All")} className={`cursor-pointer ${status==="All" &&  "font-bold"}`}>All</li>
            <li>|</li>
            <li onClick={()=> handleStatus("Incomplete")}className={`cursor-pointer ${status==="Incomplete" &&  "font-bold"}`}>Incomplete</li>
            <li>|</li>
            <li onClick={()=> handleStatus("Complete")} className={`cursor-pointer ${status==="Complete" &&  "font-bold"}`}>Complete</li>
            <li></li>
            <li></li>
            <li
                className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"
            ></li>
            <li
                className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"
            ></li>
            <li
                className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"
            ></li>
        </ul>
    </div>
    );
};

export default Footer;