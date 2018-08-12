import React, { Component } from 'react';
import { updateProductType } from '../../reducers/manageFetchData'
import { connect } from 'react-redux'

class MdEditProductType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:''
        }
    }

   componentWillMount(){
       this.setState({
           name: this.props.name
       })
   }
    onChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
    }
    editProductType(){
        var {name} = this.state
        var id = this.props.pid
        var changeProductType = { 
            _id: id,
            name
        }
        this.props.dispatch(updateProductType(changeProductType))
    }
    render() {
        return (
            <div>
                <div className="modal fade" id={this.props.pid} role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title ">Edit Product Type</h4>
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
                                        </div>
                                        <div className="text-center">
                                            <button
                                                type="button"
                                                className="btn btn-primary mainColor"
                                                data-dismiss="modal"
                                                onClick={this.editProductType.bind(this)}
                                            ><span className="glyphicon glyphicon-plus" /> Update</button>
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


export default connect()(MdEditProductType);