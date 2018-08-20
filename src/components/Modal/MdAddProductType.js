import React, { Component } from 'react';
import {addProductType } from '../../reducers/manageFetchData';
import { connect } from 'react-redux'

class MdAddProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }
    
    onChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    clearForm() {
        this.setState({
            name: ""
        })
    }
    submitForm = (e) =>{
        e.preventDefault();
        this.props.dispatch(addProductType(this.state))
        alert(`Add successful: ${this.state.name}`)
        this.clearForm();
    }
    closeForm(){
        this.clearForm();
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="AddModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title ">Add New Product Type</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={this.submitForm}>
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
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary mainColor"
                                                    // data-dismiss="modal"
                                                    // onClick={this.submitForm.bind(this)}
                                                ><span className="glyphicon glyphicon-plus"/> Add</button>
                                                <button
                                                    type="button"
                                                    className="btn btn-danger mainColor"
                                                    style={{ marginLeft: 10 }}
                                                    data-dismiss="modal"
                                                    onClick={this.closeForm.bind(this)}
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

export default connect()(MdAddProductType);