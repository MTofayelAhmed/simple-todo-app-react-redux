import { COLORCHANGED, STATUSCHANGED } from './actionTypes';
import initialState from './initialState'



const reducer = (state = initialState, action)=> {

    switch (action.type) {
        case STATUSCHANGED:
 return {
    ...state,
    status: action.payload
 }
 case COLORCHANGED: 
       
switch (action.payload.changeType) {
    case "added":
        return {
            ...state, 
            color: [
                ...state.color,
                action.payload.color
            ]
        }
    case "removed":
        return {
            ...state,
            color: state.color.filter (existingColor => existingColor !== action.payload.color)
        }
        
      default:
        return state;

}
default: 
return state
   
 
}

             
         
    }



export default reducer