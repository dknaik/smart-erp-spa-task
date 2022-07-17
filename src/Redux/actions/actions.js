import * as actionTypes from "../types/types";

export const addData=(data)=>{
    return {
        type:actionTypes.CONTENT,
        payload:{
         data:data
        }
    }
}

