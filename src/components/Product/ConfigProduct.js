import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateProduct,getProduct} from './../../reducers/manageFetchData'
import { Redirect } from "react-router-dom";

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
    componentWillMount(){
        this.props.allProduct.map((product)=>{
            if(product._id === this.props.match.params.pid){
                this.setState({
                    name: product.name===null?'':product.name,
                    price: product.price===null?'':product.price,
                    description: product.description===null?'':product.description,
                    brand: product.brand===null?'':product.brand,
                    producer: product.producer===null?'':product.producer,
                    imageUrl: product.imageUrl===null?'':product.imageUrl,
                    productType: product.productType===null?'':product.productType,
                })
            }
        })
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    clearForm() {
        this.setState({
            name: "",
            price: "",
            description: "",
            brand: "",
            producer: "",
            imageUrl: "",
            productType: ""
        })
    }
    onCancel(){
        this.setState({
            isRedirect: true
        })
    }
    editProduct(){
        var {name, price, description, brand, producer, imageUrl, productType} = this.state
        var id = this.props.match.params.pid
        var changeProduct = { 
            _id: id,
            name,
            price,
            description,
            brand,
            producer,
            imageUrl,
            productType
        }
        this.props.dispatch(updateProduct(changeProduct))
        this.setState({
            isRedirect: true
        })

    }
    render() {
        if(this.state.isRedirect){
            return(
                <Redirect to="/product"/>
            )
        }
        return (
            <div className='container'>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Edit Product</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Product Type</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="productType"
                                        value={this.state.productType}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Producer</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="producer"
                                        value={this.state.producer}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Brand</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="brand"
                                        value={this.state.brand}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Price</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="imageUrl"
                                        value={this.state.imageUrl}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="form-group">
                                    <label htmlFor="true">Description</label>

                                    <textarea
                                        name="description"
                                        value={this.state.description}
                                        className="form-control"
                                        rows="3"
                                        onChange={this.onChange.bind(this)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.editProduct.bind(this)}
                            ><span className="glyphicon glyphicon-edit" /> Update</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                style={{ marginLeft: 10 }}
                                onClick={this.onCancel.bind(this)}
                            ><span className="glyphicon glyphicon-log-out" /> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        editProduct: state.editProduct,
        allProduct: state.manageProduct
    }
}

export default connect(mapStateToProps,null)(ConfigProduct);