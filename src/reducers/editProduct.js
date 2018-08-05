import * as types from './../actions/actionTypes'


var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_PRODUCT:
            return action.payload;
        default:
            return state;
    }
}

export default myReducer;