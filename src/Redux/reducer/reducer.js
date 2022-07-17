import * as actionTypes from "../types/types"

const INITIAL_STATE = {
  data: [
 
  ]
};   
//test case when both form field and search has data
const reducer=(state=INITIAL_STATE,action)=>{
    console.log("action")
    
    switch(action.type){
        case actionTypes.CONTENT:
            return {
                ...state,
                 data:[...state.data,action.payload]
            }
            // case actionTypes.SEARCH:  
            //                 console.log("actionnnnnnn",state,action.payload);
            //                 // const filt = state?.data?.filter(
            //                 //   (val) =>
            //                 //     val?.title?.slice(0, 2)?.toLowerCase() ===
            //                 //       action?.payload.toLowerCase() ||
            //                 //     val?.title?.toLowerCase() ===
            //                 //       action?.payload?.toLowerCase()
            //                 // );
            //                 // console.log("filterrrrrr",filt)
            //                 const filt = state?.data?.map(
            //                   (val) => val.includes(action.payload)
            //                   // val?.title?.slice(0, 2)?.toLowerCase() ===
            //                   //   action?.payload.toLowerCase() ||
            //                   // val?.title?.toLowerCase() ===
            //                   //   action?.payload?.toLowerCase()
            //                 );
              
            //     return{
                    
            //         ...state,
            //         filt
            //     }
            default:
                return state
    }
}
export default reducer