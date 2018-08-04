import * as types from './../actions/actionTypes'
import myData from './../components/Product/data.json'

// fetch('./../Product/data.json')
// .then(res => res.json())
// .then((products) => products ? initialState = products : initialState = [])
var initialState = myData;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ALL_PRODUCT:
            return [...state]
        default:
            return state;
    }
}

export default myReducer;