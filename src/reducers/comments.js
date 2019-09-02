import * as types from './../constans/ActionTypes';

var initialState = {
  listComment: [],
};

const comments = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_COMMENT:
      return {
        ...state,
        listComment: action.data
      }
    default: return {...state};
  }
};

export default comments;

