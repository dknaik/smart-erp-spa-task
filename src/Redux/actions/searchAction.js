import * as searchType from '../types/searchType'
export const searchData = (data) => {
  return {
    type: searchType.SEARCH,
    payload: {
      data: data,
    },
  };
};
