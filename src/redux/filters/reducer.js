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
            colors: [
                ...state.colors,
                action.payload.colors
            ]
        }
    case "removed":
        return {
            ...state,
            colors: state.colors.filter (existingColor => existingColor !== action.payload.colors)
        }
        
      default:
        return state;

}
default: 
return state
   
 
}

             
         
    }



export default reducer