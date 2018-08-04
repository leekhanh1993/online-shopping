import React, { Component } from 'react';
import {connect} from 'react-redux'

class Detail extends Component {
    format_currency = (price) => {
        var value = String(price)
        return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
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
                                        <div className="col-xs-4">
                                            <img style={{ maxWidth: '100%' }} src={product.imageUrl} alt=''/>
                                        </div>
                                        <div className="col-xs-8">
                                            <div className="panel-body">
                                            <h1>{product.name}</h1>
                                            <h3>Price: {this.format_currency(product.price)} VND</h3>
                                            <h3>Description:</h3>
                                            <p>{product.description}</p>
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
    return{
      allProduct: state.allProduct,
    }
  }

export default connect(mapStateToProps,null)(Detail);
