import React, { Component } from 'react';
import myData from './../Product/data.json'
import Product from '../Product/Product';

class Detail extends Component {
    format_currency = (price) => {
        var value = String(price)
        return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var id = this.props.match.params.index - 1
        return (
            <div>
                {myData.map((product, index) => {
                    if (index === id) {
                        return <div key={index} className="container">
                            <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h3 className="panel-title">Product</h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="col-xs-4">
                                            <img style={{ maxWidth: '100%' }} src={product.image} />
                                        </div>
                                        <div className="col-xs-8">
                                            <div className="panel-body">
                                            <h1>{product.name}</h1>
                                            <h1>Price: {this.format_currency(product.price)} VND</h1>
                                            <h1>Description:</h1>
                                            <h4>{product.info}</h4>
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

export default Detail;