import React, { Component } from 'react';
import { updateProduct } from './../../reducers/manageFetchData'
import { connect } from 'react-redux'

class MdEditProduct extends Component {
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
    componentWillMount(){
        var {name, price, description, brand, producer, imageUrl, productType} = this.props;
        this.setState({
            name: name ? name : 'N/A',
            price: price ? price : 'N/A',
            description: description ? description : 'N/A',
            brand: brand ? brand : 'N/A',
            producer: producer ? producer : 'N/A',
            imageUrl: imageUrl ? imageUrl : 'N/A',
            productType: productType ? productType : 'N/A'
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
    editProduct(){
        var {name, price, description, brand, producer, imageUrl, productType} = this.state
        var id = this.props.pid
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
        var cleanData = this.props.allProductType.filter((ptype)=>{
            if(ptype._id){
                return ptype
            }
        })
        var listProductType = cleanData.map((ptype, index)=>{
            if(ptype._id === this.props.productType){
                return <option key={index} selected value={ptype._id}>{ptype.name}</option>
            }else{
                return <option key={index} value={ptype._id}>{ptype.name}</option>
            }
            
        })
        return (
            <div>
                <div className="modal fade" id={this.props.pid} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title ">Edit Product</h4>
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
                                                <label htmlFor="inputproductType">Type Product</label>
                                                <select 
                                                name="productType" 
                                                id="inputproductType" 
                                                className="form-control" 
                                                required="required"
                                                onChange={this.onChange.bind(this)}
                                                >
                                                    {listProductType}
                                                </select>
                                                {/* <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder=""
                                                    name="productType"
                                                    value={this.state.productType}
                                                    onChange={this.onChange.bind(this)}
                                                /> */}
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
                                            className="btn btn-primary mainColor"
                                            data-dismiss="modal"
                                            onClick={this.editProduct.bind(this)}
                                        ><span className="glyphicon glyphicon-edit" /> Update</button>
                                        <button
                                            type="button"
                                            className="btn btn-danger mainColor"
                                            style={{ marginLeft: 10 }}
                                            data-dismiss="modal"
                                        ><span className="glyphicon glyphicon-log-out" /> Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(MdEditProduct);