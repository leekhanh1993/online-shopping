import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'
import MdAddProduct from '../Modal/MdAddProduct'
import SearchByPrice from '../Product/SearchByPrice';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
      listView: false,
      keyword: '',
      filterByPrice: ''
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
      <div>
        {this.props.editControl ? (<MdAddProduct />) : ''}
        <div className="row" style={{paddingBottom: 10 }}>
          {/* {this.props.editControl ? <SearchByPrice/> : ''} */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
              <input
                type="text"
                value={this.state.keyword}
                name="keyword"
                className="form-control"
                placeholder="Search by Name"
                onChange={this.onChange.bind(this)}
              />
              <span className="input-group-btn mainColor">
                <button
                  type="button"
                  className="btn btn-default mainColor"
                  onClick={() => this.onSearch()}
                >Search</button>
              </span>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="pull-right">
              <a
                type="button"
                className={this.state.gridView ? 'btn btn-default btnView' : 'btn btn-default'}
                style={{ marginLeft: 10 }}
                onClick={() => this.showGrid()}
              >Grid<span 
              className="glyphicon glyphicon-th" 
              style={{ paddingLeft: 5, paddingRight: 5}}
              ></span></a>
              <a
                type="button"
                className={this.state.listView ? 'btn btn-default btnView' : 'btn btn-default'}
                style={{ marginLeft: 10 }}
                onClick={() => this.showList()}
              >List<span 
              className="glyphicon glyphicon-th-list" 
              style={{ paddingLeft: 5, paddingRight: 5 }}
              ></span></a>
            </div>
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