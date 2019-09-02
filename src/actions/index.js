import * as types from './../constans/ActionTypes';

export const listComment = (data) => {
    return {
        type : types.LIST_COMMENT,
        data
    }
};

export const searchComments = (keyword) => {
    return {
        type : types.SEARCH_COMMENTS,
        keyword
    }
};
