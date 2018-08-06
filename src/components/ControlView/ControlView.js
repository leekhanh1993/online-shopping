import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import AddProduct from '../Product/AddProduct'

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
      <AddProduct/>
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