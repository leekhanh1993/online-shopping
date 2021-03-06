import React, { Component } from 'react';
import { connect } from 'react-redux'
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
            productType: ""
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
    submitForm() {
        this.clearForm();
        this.props.dispatch(addProduct(this.state))

    }

    render() {

        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title">New Product</h4>
                            </div>
                            <div className="modal-body">
                                <form>
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
                                            data-dismiss="modal"
                                            onClick={this.submitForm.bind(this)}
                                        ><span className="glyphicon glyphicon-plus" /> Add</button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            style={{ marginLeft: 10 }}
                                            data-dismiss="modal"
                                        ><span className="glyphicon glyphicon-log-out" /> Cancel</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#myModal"
                        ><span className="glyphicon glyphicon-plus" /> New Product</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(AddProduct);