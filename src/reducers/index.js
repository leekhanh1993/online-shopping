import {combineReducers} from'redux'
import allProduct from './showAllProduct';
import searchProduct from './searchProduct'
import manageProduct from './manageProduct'
import editProduct from './editProduct'


const allReducers =  combineReducers({
    allProduct,
    searchProduct,
    manageProduct,
    editProduct
})
export default allReducers;