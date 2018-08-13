import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { deleteProduct } from '../../reducers/manageFetchData'
import { connect } from 'react-redux'
import { getProduct } from './../../reducers/manageFetchData'
import MdEditProduct from '../Modal/MdEditProduct';

class Item extends Component {

  // getAProduct(){
  //   this.props.dispatch(getProduct(this.props.pid))
  // }
  buttonDelete() {
    if (window.confirm('Do you want to delete?') === true) {
      this.props.dispatch(deleteProduct(this.props.pid))
      this.props.loadpage()
    }
  }
  format_currency = (price) => {
    var value = String(price)
    return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
  }
  render() {
    if (this.props.gridView) {
      return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail itemProduct">
            <Link
              to={"detail/" + (this.props.pid) + ".html"}
            >
              <img
                src={this.props.imageUrl === "" ? "http://via.placeholder.com/300x300" : this.props.imageUrl}
                alt=""
                className="img-responsive"
                style={{ width: 200, height: 200 }}
              />
            </Link>
            <div className="caption">
              <Link
                to={"detail/" + (this.props.pid) + ".html"}
                style={{ fontWeight: 'bold', color: 'black' }}
                className='tiitlePrice'
              >{this.props.name ? this.props.name : 'N/A'}</Link>
              <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>{this.props.price ? this.format_currency(this.props.price) : 'N/A'} $</p>
              <p>
                <a
                  className="btn btn-default mainColor"
                >
                  <span className="glyphicon glyphicon-shopping-cart" /> Add to cart</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 itemProductGrid' style={{ marginBottom: 20 }}>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Link
            to={"detail/" + (this.props.pid) + ".html"}
          >
            <img
              src={this.props.imageUrl === "" ? "http://via.placeholder.com/300x300" : this.props.imageUrl}
              alt=""
              className="img-responsive"
              style={{ width: 400, height: 400 , paddingTop: 10, paddingBottom: 10 }}
            />
          </Link>
        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="" style={{ paddingTop: 10 }}>
            <Link
              to={"detail/" + (this.props.pid) + ".html"}
              style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}
              className='tiitlePrice'
            >{this.props.name ? this.props.name : 'N/A'}</Link>
            <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Brand: {this.props.brand ? this.format_currency(this.props.brand) : 'N/A'}</p>
            <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Producer: {this.props.producer ? this.format_currency(this.props.producer) : 'N/A'}</p>
            <p style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Description:</p>
            <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>{this.props.description ? this.format_currency(this.props.description) : 'N/A'}</p>

          </div>

        </div>

        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 pull-right">
          <div style={{ paddingRight: 10, paddingTop: 10 }}>
            <div className="row">
              <p
                className="pull-right"
                style={{ fontSize: 18, fontWeight: 'bold', marginTop: 10 }}
              >{this.props.price ? this.format_currency(this.props.price) : 'N/A'} $</p>
            </div>
            <div className="row">
              <a
                // className={this.props.gridView ? "btn btn-success btn-product" : 'btn btn-success pull-left'}
                className="btn btn-default mainColor pull-right"
              >
                <span className="glyphicon glyphicon-shopping-cart" /> Add to cart</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Item);