import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct, fetchProductType } from './../../reducers/manageFetchData'
import { Redirect } from "react-router-dom";
import MdAddProduct from '../Modal/MdAddProduct';
import ItemProduct from './ItemProduct';

class ConfigProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: "",
            description: "",
            brand: "",
            producer: "",
            imageUrl: "",
            productType: "",
            isRedirect: false
        }
    }
    componentDidMount() {
        this.load()
    }
    load() {
        this.props.dispatch(fetchProduct())
        this.props.dispatch(fetchProductType())
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onBack() {
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }

    render() {
        if(this.state.isRedirect){
            return <Redirect to="/admin"/>
        }
        var listallProduct = this.props.allProduct.map((product, index) => {
            return <ItemProduct
                key={index}
                index={index}
                pid={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                brand={product.brand}
                producer={product.producer}
                imageUrl={product.imageUrl}
                productType={product.productType}
                allProductType={this.props.allProductType}
                loadpage={() => this.load()}
            />
        })
        return (
            <div className="container">
                <div className="row">
                    <a
                        className="btn btn-default btnView ml-10"
                        onClick={this.onBack.bind(this)}
                    >
                        <span className="glyphicon glyphicon-log-out" /> Back to Admin</a>
                </div>
                <div className="row">
                    <h2 className="text-center">Manage Product</h2>
                    <div className="ml-10">
                    <MdAddProduct/>
                    </div>
                    <div className="mt-10 container">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Name</th>
                                    <th className="text-center">Price</th>
                                    <th className="text-center">Description</th>
                                    <th className="text-center">Brand</th>
                                    <th className="text-center">Producer</th>
                                    <th className="text-center">Type</th>
                                    <th className="text-center">ImageUrl</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listallProduct}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allProduct: state.manageProduct,
        allProductType: state.manageProductType
    }
}

export default connect(mapStateToProps)(ConfigProduct);