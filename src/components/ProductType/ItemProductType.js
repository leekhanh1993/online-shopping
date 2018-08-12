import React, { Component } from 'react';
import { deleteProductType } from '../../reducers/manageFetchData'
import { connect } from 'react-redux'
import MdEditProductType from '../Modal/MdEditProductType';

class ItemProductType extends Component {
    Delete() {
        if (window.confirm('Do you want to delete it ?') === true) {
            this.props.dispatch(deleteProductType(this.props.pid))
            this.props.loadpage()
        }
    }

    render() {
        return (
            <tr>
                <td className="text-center">{this.props.index + 1}</td>
                <td className="text-center">{this.props.pid}</td>
                <td className="text-center">{this.props.name}</td>
                <td className="text-center">
                    <MdEditProductType
                        pid={this.props.pid}
                        name={this.props.name}
                    />
                    <button
                        type="button"
                        className="btn btn-primary mainColor"
                        data-toggle="modal"
                        data-target={'#'+this.props.pid}
                    ><span className="glyphicon glyphicon-edit" /> Edit</button> &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger mainColor"
                        onClick={this.Delete.bind(this)}
                    ><span className="glyphicon glyphicon-remove" /> Remove</button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        allProductType: state.manageProductType
    }
}

export default connect(mapStateToProps, null)(ItemProductType);