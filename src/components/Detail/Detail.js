import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }
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
        var id = this.props.match.params.pid
        return (
            <div>
                {this.props.allProduct.map((product, index) => {
                    if (product._id === id) {
                        return <div key={index} className="container">
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Product</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div class="row">
                                            <div className="col-xs-4">
                                                <img style={{ maxWidth: '100%' }} src={product.imageUrl ? product.imageUrl : 'http://via.placeholder.com/350x350'} alt='' />
                                            </div>
                                            <div className="col-xs-8">
                                                <div className="panel-body">
                                                    <h1>{product.name}</h1>
                                                    <h3>Brand: {product.brand ? product.brand : 'N/A'}</h3>
                                                    <h3>Price: {product.price ? this.format_currency(product.price) : 'N/A'} đ</h3>
                                                    <h3>Producer: {product.producer ? product.producer : 'N/A'}</h3>
                                                    <h3>Description:</h3>
                                                    <p>{product.description ? product.description : 'N/A'}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger pull-right"
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
    }
}

export default connect(mapStateToProps, null)(Detail);
