import * as types from './../constans/ActionTypes';

var initialState = {
  listComment: [],
  keyword: {},
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_COMMENT:
      return {
        ...state,
        listComment: action.data
      }
    case types.SEARCH_COMMENTS:
      return {
        ...state,
        keyword: action.keyword
      }
    default: return {...state};
  }
};

export default comments;

