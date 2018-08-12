import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { fetchProductType } from "./../../reducers/manageFetchData"

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            isRedirect: false
        }
    }
    componentDidMount(){
        this.props.dispatch(fetchProductType())
    }

    format_currency = (price) => {
        var value = String(price)
        return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    onBack() {
        this.setState({
            isRedirect: true
        })
    }
    render() {
        if (this.state.isRedirect) {
            return (
                <Redirect to="/product" />
            )
        }
        var selectedProduct = this.props.allProduct.find((product) =>{
            if(product._id === this.props.match.params.pid){
                return product
            } 
        })
        var selectedProductType = this.props.allProductType.find((ptype)=>{
            if(ptype._id === selectedProduct.productType){
                return ptype
            }
        })
        console.log(selectedProductType!==undefined ?selectedProductType.name : 'KhongCo')
        return (
            <div>
                {this.props.allProduct.map((product, index) => {
                    if (product._id === this.props.match.params.pid) {
                        return <div key={index} className="container">
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Product Detail</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <img
                                                src={product.imageUrl ? product.imageUrl : 'http://via.placeholder.com/350x350'} 
                                                alt='' 
                                                className="img-responsive"
                                                style={{ width: 350, height: 350 }}
                                                />
                                            </div>
                                            <div className="col-xs-8">
                                                <div className="panel-body">
                                                    <h1>{product.name ? product.name : 'N/A'}</h1>
                                                    <h3>Price: {product.price ? this.format_currency(product.price) : 'N/A'} $</h3>
                                                    <h3>Brand: {product.brand ? product.brand : 'N/A'}</h3>
                                                    <h3>Producer: {product.producer ? product.producer : 'N/A'}</h3>
                                                    <h3>ProductType: {selectedProductType!==undefined ? selectedProductType.name : 'N/A'}</h3>
                                                    <h3>Description:</h3>
                                                    <p>{product.description ? product.description : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button
                                                    type="button"
                                                    className="btn pull-right mainColor"
                                                    // style={{ marginLeft: 10 }}
                                                    onClick={this.onBack.bind(this)}
                                                ><span className="glyphicon glyphicon-log-out" /> Back</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allProduct: state.manageProduct,
        allProductType: state.manageProductType
    }
}

export default connect(mapStateToProps, null)(Detail);
