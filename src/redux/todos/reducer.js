import {
  ADDED,
  DELETED,
  TOGGLED,
  ALLCOMPLETED,
  COLORSELECTED,
  CLEARCOMPLETED,
} from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todo) => {
  const maxId = todo.reduce(
    (maxId, todoObject) => Math.max(todoObject.id, maxId),
    -1
  );
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
        },
      ];
    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return{
            ...todo,
            completed: !todo.completed
        }
      });
    case COLORSELECTED:
  
     return state.map((todo) => {
       if(todo.id !== action.payload.todoId) {
        return todo
       }
       return {
        ...todo,
        color: action.payload.color
       }
     })

     case DELETED: 
     return state.filter((todo)=> todo.id !== action.payload)

     case ALLCOMPLETED: 
     return state.map((todo)=> {
        return {
            ...todo,
            completed: true
        }
     })

     case CLEARCOMPLETED: 
     return  state.filter (todo => !todo.completed)

  default:
    return state
  }
};

export default reducer;
