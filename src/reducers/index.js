import {combineReducers} from'redux'
import allProduct from './showAllProduct';
import searchProduct from './searchProduct'
import manageProduct from './manageProduct'
import editProduct from './editProduct'
import searchProductByPrice from './searchProductByPrice'
import manageProductType from './manageProductType'
import editProductType from './editProductType'


const allReducers =  combineReducers({
    allProduct,
    searchProduct,
    manageProduct,
    editProduct,
    searchProductByPrice,
    manageProductType,
    editProductType

})
export default allReducers;