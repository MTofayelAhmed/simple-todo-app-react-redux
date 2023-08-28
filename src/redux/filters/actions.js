import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (colors, changeType)=> {
    return {
        type: COLORCHANGED,
        payload: {
            colors,
            changeType
        }
    }
}
export const statusChanged = (status)=> {
    return {
        type: STATUSCHANGED,
        payload: status
        
    }
}