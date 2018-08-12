import * as types from './../actions/actionTypes'


var initialState = {};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_PRODUCT_BY_PRICE:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default myReducer;