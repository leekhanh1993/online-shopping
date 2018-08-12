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
export const fetchProductType = (productType) => {
    return{
        type: types.FETCH_PRODUCT_TYPE,
        payload: productType
    }
}

export const editProductType = (productType) => {
    return{
        type: types.EDIT_PRODUCT_TYPE,
        payload: productType
    }
}

export const editProduct = (product) => {
    return{
        type: types.EDIT_PRODUCT,
        payload: product
    }
}
export const searchProductByPrice = (minprice, maxprice) => {
    return{
        type: types.SEARCH_PRODUCT_BY_PRICE,
        payload: {
            minprice,
            maxprice
        }
    }
}