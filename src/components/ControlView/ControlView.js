import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import { Link } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
      listView: false,
      keyword: ''
    }
  }

  showGrid() {
    this.props.gridView(true)
    this.setState({
      gridView: true,
      listView: false
    })
  }
  showList() {
    this.props.gridView(false)
    this.setState({
      gridView: false,
      listView: true
    })
  }
  onSearch() {
    this.props.onSearch(this.state.keyword)
  }
  onChange(event) {
    var target = event.target;
    var name = target.name;
    var value = target.value
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="container-fluid">
      <div>
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">New Product</h4>
              </div>
              <div className="modal-body">
                <AddProduct/>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <a
              className="btn btn-primary"
              data-toggle="modal" 
              data-target="#myModal"
            ><span className="glyphicon glyphicon-plus" /> New Product</a>
            {/* <Link
              className="btn btn-primary"
              to="/add-product"
            ><span className="glyphicon glyphicon-plus" /> New Product</Link> */}
          </div>
        </div>
        <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input
                type="text"
                value={this.state.keyword}
                name="keyword"
                className="form-control"
                placeholder="Search"
                onChange={this.onChange.bind(this)}
              />
              <span className="input-group-btn">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => this.onSearch()}
                >Search</button>
              </span>
            </div>

          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
            <button
              type="button"
              className={this.state.gridView ? 'btn btn-success' : 'btn btn-default'}
              style={{ marginLeft: 10 }}
              onClick={() => this.showGrid()}
            >Grid View</button>
            <button
              type="button"
              className={this.state.listView ? 'btn btn-success' : 'btn btn-default'}
              style={{ marginLeft: 10 }}
              onClick={() => this.showList()}
            >List View</button>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      (
        dispatch(actions.searchProduct(keyword))
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlView);