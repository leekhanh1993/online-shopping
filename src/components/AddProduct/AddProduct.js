import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { addProduct } from './../../reducers/manageFetchData'

class AddProduct extends Component {
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
    addNewProduct() {
        this.props.dispatch(addProduct(this.state))
        this.clearForm()
    }
    onCancel(){
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
                        <h3 className="panel-title">Add New Product</h3>
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
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="true">Description</label>
                                    
                                    <textarea 
                                    name="description" 
                                    value={this.state.description}
                                    className="form-control" 
                                    rows="3"
                                    onChange={this.onChange.bind(this)}
                                    ></textarea>
                                    
                                    {/* <input
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange.bind(this)}
                                    /> */}
                                </div>
                            </div>
                        </div>


                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.addNewProduct.bind(this)}
                            ><span className="glyphicon glyphicon-plus" /> Add</button>
                            <button
                                type="button"
                                className="btn btn-primary"
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

export default connect()(AddProduct);