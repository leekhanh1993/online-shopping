import * as types from './actionTypes'

//all action
export const showAllProduct = () => {
    return{
        type: types.ALL_PRODUCT
    }
}

export const searchProduct = (keyword) => {
    return{
        type: types.SEARCH_PRODUCT,
        keyword
    }
}