import { useDispatch, useSelector } from "react-redux";
import { statusChanged, colorChanged } from "../redux/filters/actions";
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
console.log(filters)
const {status, colors}= filters
const todoRemaining =  todo.filter(singleTodo => !singleTodo.completed).length


const handleStatus = (status)=> {
dispatch(statusChanged(status))
}

const handleColor = (color) => {
    if(colors.includes(color)){
       dispatch(colorChanged(color, "removed")) 
    }
    else{
        dispatch(colorChanged(color, "added"))
    }
    
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
            onClick={()=> handleColor("green")}
                className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500   rounded-full cursor-pointer ${colors.includes("green") && "bg-green-500"} `}
            ></li>
            <li
               onClick={()=> handleColor("red")}
                className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes("red") && "bg-red-500"}`}
            ></li>
            <li
            onClick={handleColor("yellow")}
                className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes("yellow") && "bg-yellow-500"} `}
            ></li>
        </ul>
    </div>
    );
};

export default Footer;