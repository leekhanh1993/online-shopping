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

export const fetchProduct = (products) => {
    return{
        type: types.FETCH_PRODUCT,
        payload: products
    }
}
export const editProduct = (product) => {
    return{
        type: types.FETCH_PRODUCT,
        payload: product
    }
}