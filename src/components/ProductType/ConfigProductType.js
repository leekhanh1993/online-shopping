import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProductType, addProductType } from '../../reducers/manageFetchData';
import ItemProductType from './ItemProductType';
import MdAddProductType from '../Modal/MdAddProductType';
import { Redirect } from "react-router-dom";

class ConfigProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isRedirect: false
        }
    }

    componentDidMount() {
        this.load()
    }
    load() {
        this.props.dispatch(fetchProductType())
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
            name: ""
        })
    }
    submitForm() {
        this.clearForm();
        this.props.dispatch(addProductType(this.state))
    }
    onBack(){
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    render() {
        if(this.state.isRedirect){
            return <Redirect to="/admin"/>
        }
        var { allProductType } = this.props;
        var listAllProductType = allProductType.map((e, index) => {
            return <ItemProductType
                key={index}
                name={e.name}
                pid={e._id}
                index={index}
                loadpage={() => this.load()}
            />
        })
        return (
            <div className="container">
                <div className="row">
                    <a
                        className="btn btn-default btnView"
                        onClick={this.onBack.bind(this)}
                    >
                        <span className="glyphicon glyphicon-log-out" /> Back to Admin</a>
                </div>
                <div className="row">
                    <h2 className="text-center">Manage Type Product</h2>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* Add Modal */}
                            <button
                                type="button"
                                className="btn btn-primary btnView"
                                data-toggle="modal"
                                data-target="#AddModal"
                            ><span className="glyphicon glyphicon-plus" /> Add New</button>
                            <MdAddProductType />
                        </div>
                    </div>
                    <div className="row mt-10">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">ID</th>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listAllProductType}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allProductType: state.manageProductType
    }
}

export default connect(mapStateToProps, null)(ConfigProductType);