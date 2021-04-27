import { types } from "../types/types"




export const uiStartLoading = () => {
    return {
        type: types.startLoading
    }
} 

export const uifinishLoading = () => {
    return{
        type: types.finishLoading
    }
} 