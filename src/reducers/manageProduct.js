import * as types from './../actions/actionTypes'


var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT:
            return action.payload;
        case types.ADD_PRODUCT:
            console.log(action.payload)
            return [...state, action.payload];
        case types.DELETE_PRODUCT:
            return state.filter((product)=>product._id!==action.payload);
        default:
            return state;
    }
}

export default myReducer;