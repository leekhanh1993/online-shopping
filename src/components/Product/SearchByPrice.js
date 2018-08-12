import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../../actions/index'

class SearchByPrice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minprice: '',
            maxprice: ''
        }
    }
    onChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSearch(){
        this.props.onSearchByPrice(this.state.minprice, this.state.maxprice)
    }
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12col-md-12 col-lg-12">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <input
                type="text"
                value={this.state.minprice}
                name="minprice"
                className="form-control"
                placeholder="Min price"
                onChange={this.onChange.bind(this)}
              />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <input
                type="text"
                value={this.state.maxprice}
                name="maxprice"
                className="form-control"
                placeholder="Max price"
                onChange={this.onChange.bind(this)}
              />
            </div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <button
                type="button"
                className="btn btn-default"
                onClick={() => this.onSearch()}
              >Search By Price</button>
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
      onSearchByPrice: (minprice, maxprice) => {
        dispatch(actions.searchProductByPrice(minprice, maxprice))
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps )(SearchByPrice);