import * as types from './../actions/actionTypes'


var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_TYPE:
            return action.payload;
        case types.ADD_PRODUCT_TYPE:
            return [...state, action.payload];
        case types.DELETE_PRODUCT_TYPE:
            return state.filter((productType) => productType._id !== action.payload);
        default:
            return state;
    }
}
export default myReducer;