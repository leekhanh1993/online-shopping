import * as types from './../actions/actionTypes'
var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_PRODUCT:
            return [...state]
        default:
            return state;
    }
}

export default myReducer;