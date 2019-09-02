import * as types from './../constans/ActionTypes';

export const listComment = (data) => {
    return {
        type : types.LIST_COMMENT,
        data
    }
};
