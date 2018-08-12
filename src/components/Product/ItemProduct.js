import React, { Component } from 'react';
import MdEditProduct from '../Modal/MdEditProduct';
import { deleteProduct } from '../../reducers/manageFetchData'
import { connect } from 'react-redux'


class ItemProduct extends Component {
    Delete() {
        if (window.confirm('Do you want to delete it ?') === true) {
            this.props.dispatch(deleteProduct(this.props.pid))
            this.props.loadpage()
        }
    }
    render() {
        var cleanDataProductType = this.props.allProductType.filter((ptype) => {
            if (ptype._id) {
                return ptype
            }
        })

        var nameCategory = cleanDataProductType.find((ptype) => {
            return ptype._id === this.props.productType
        })
        return (
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">{this.props.price}</td>
                <td className="text-center">{this.props.description}</td>
                <td className="text-center">{this.props.brand}</td>
                <td className="text-center">{this.props.producer}</td>
                <td className="text-center">{nameCategory ? nameCategory.name : 'N/A'}</td>
                <td className="text-center">
                    <img
                        style={{ width: 100, height: 100 }}
                        src={this.props.imageUrl ? this.props.imageUrl : "http://via.placeholder.com/100x100"} className="img-responsive" alt="Image" />
                </td>
                <td>
                    <MdEditProduct
                        pid={this.props.pid}
                        name={this.props.name}
                        price={this.props.price}
                        description={this.props.description}
                        brand={this.props.brand}
                        producer={this.props.producer}
                        imageUrl={this.props.imageUrl}
                        productType={this.props.productType}
                        allProductType={this.props.allProductType}
                    />
                    <button
                        style={{ width: '100%' }}
                        type="button"
                        className="btn btn-primary mainColor"
                        data-toggle="modal"
                        data-target={'#' + this.props.pid}
                    ><span className="glyphicon glyphicon-edit" /> Edit</button> &nbsp;
                    <button
                        style={{ width: '100%' }}
                        type="button"
                        className="btn btn-danger mainColor"
                        onClick={this.Delete.bind(this)}
                    ><span className="glyphicon glyphicon-remove" /> Remove</button>
                </td>
            </tr>
        );
    }
}

export default connect()(ItemProduct);