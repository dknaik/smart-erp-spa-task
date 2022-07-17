import * as searchType from "../types/searchType";
const INITIAL_STATE = {
  searchData: "",
};   

const searchReducer = (state = INITIAL_STATE, action) => {
  console.log("searchreducer",action.payload);

  switch (action.type) {
    case searchType.SEARCH:
      return {
        
       searchData: action.payload
      }

    default:
      return state;
  }
};
export default searchReducer