import {combineReducers} from'redux'
import allProduct from './showAllProduct';
import searchProduct from './searchProduct'


const allReducers =  combineReducers({
    allProduct,
    searchProduct
})
export default allReducers;