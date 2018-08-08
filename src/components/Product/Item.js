import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { deleteProduct } from '../../reducers/manageFetchData'
import { connect } from 'react-redux'
import { getProduct } from './../../reducers/manageFetchData'

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
    return (
      // <div
      //   className={this.props.gridView ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}
      // >
      //   <div className="thumbnail">


      //     <h3 className="text-center">
      //       <span className="label label-info">{this.props.name}</span>
      //     </h3>
      //     <div className="text-center">
      //       <img
      //         alt=''
      //         src={this.props.imageUrl === "" ? "http://via.placeholder.com/300x300" : this.props.imageUrl}
      //         style={{ width: 300, height: 300 }}
      //       />
      //     </div>
      //     <div className="caption">
      //       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: 20 }}>
      //         <h3 className="text-center">{this.format_currency(this.props.price)} VND</h3>
      //       </div>
      //       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: 20 }}>
      //         <Link
      //           className="btn btn-primary btn-product"
      //           to={"detail/" + (this.props.pid) + "/" + this.to_slug(this.props.name) + ".html"}
      //         ><span className="glyphicon glyphicon-th-list" /> More details</Link>
      //         <a className="btn btn-success btn-product pull-right"><span className="glyphicon glyphicon-shopping-cart" /> Buy</a>
      //       </div>
      //       <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ marginBottom: 20 }}>
      //         <Link
      //           className="btn btn-primary btn-product"
      //           // onClick={this.getAProduct.bind(this)}
      //           to={"edit/" + (this.props.pid) + "/" + this.to_slug(this.props.name) + ".html"}
      //         ><span className="glyphicon glyphicon-edit" /> Edit</Link>
      //         <a
      //           className="btn btn-danger pull-right"
      //           onClick={() => this.buttonDelete()}
      //         ><span className="glyphicon glyphicon-floppy-remove" /> Remove</a>
      //       </div>
      //     </div>

      //   </div>
      // </div>

      <div className={this.props.gridView ? "col-sm-6 col-md-4" : 'col-sm-6 col-md-12'}>
        <div className="thumbnail">
          <h4 className="text-center">
            <span className="label label-info">{this.props.name ? this.props.name : 'N/A'}</span>
          </h4>
          <img
            src={this.props.imageUrl === "" ? "http://via.placeholder.com/300x300" : this.props.imageUrl}
            className="img-responsive"
            style={{ width: 300, height: 300 }}
             />
          <div className="caption">
            <div className="row">
              <div className="col-md-12 col-xs-6 price">
                <h3>
                  <label>{this.props.price ? this.format_currency(this.props.price) : 'N/A' } đ</label>
                </h3>
              </div>
            </div>
            <h4>{this.props.description ? this.props.description : 'N/A'}</h4>
            <div className="row mt-10">
              <div className={this.props.gridView ? "col-md-6" : 'col-md-2'}>
                <Link
                  // className={this.props.gridView ? "btn btn-primary btn-product" : 'btn btn-primary pull-right'}
                  className="btn btn-primary btn-product"
                  to={"detail/" + (this.props.pid) + ".html"}
                ><span className="glyphicon glyphicon-th-list" /> More detail</Link>
              </div>
              <div className={this.props.gridView ? "col-md-6" : 'col-md-2'}>
                <a
                // className={this.props.gridView ? "btn btn-success btn-product" : 'btn btn-success pull-left'}
                className="btn btn-success btn-product"
                >
                  <span className="glyphicon glyphicon-shopping-cart" /> Add to cart</a>
              </div>
            </div>
            <hr />
            <div className="row mt-10">
              <div className={this.props.gridView ? "col-md-6" : 'col-md-2'}>
                <Link
                  // className={this.props.gridView ? "btn btn-primary btn-product" : 'btn btn-primary pull-right'}
                  className="btn btn-primary btn-product"
                  to={"edit/" + (this.props.pid) + ".html"}
                ><span className="glyphicon glyphicon-edit" /> Edit</Link>
              </div>
              <div className={this.props.gridView ? "col-md-6" : 'col-md-2'}>
                <a
                  // className={this.props.gridView ? "btn btn-danger btn-product" : 'btn btn-danger pull-left'}
                  className="btn btn-danger btn-product"
                  onClick={() => this.buttonDelete()}
                ><span className="glyphicon glyphicon-remove" /> Remove</a>
              </div>
            </div>
            <p> </p>
          </div>
        </div>
      </div>


      // <div
      //   className={this.props.gridView ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
      //   <div className="thumbnail">
      //     <h4 className="text-center"><span className="label label-info">{this.props.name}</span></h4>
      //     <img alt=""
      //       src={this.props.imageUrl === "" ? "http://via.placeholder.com/300x300" : this.props.imageUrl}
      //       className="img-responsive"
      //       style={{ width: 300, height: 300 }} />
      //     <div className="caption">
      //       <div className="row">
      //         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //           <h3 className="text-center">
      //             <span className="label label-success">{this.format_currency(this.props.price)} đ</span></h3>
      //           {/* <h3>
      //             <label>Price: {this.format_currency(this.props.price)} VND</label></h3> */}
      //         </div>
      //         {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      //           <h4>Description:</h4>
      //           <p>{this.props.description}</p>
      //         </div> */}
      //       </div>
      //       <div className="row">
      //         <hr />
      //         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //           <Link
      //             className="btn btn-primary btn-product"
      //             to={"detail/" + (this.props.pid) + "/" + this.to_slug(this.props.name) + ".html"}
      //           ><span className="glyphicon glyphicon-th-list" /> More details</Link>

      //         </div>
      //         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //           <a className="btn btn-success btn-product"><span className="glyphicon glyphicon-shopping-cart" /> Add to cart</a></div>
      //       </div>
      //       <div className="row">
      //         <hr />
      //         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //           <Link
      //             className="btn btn-primary btn-product"
      //             // onClick={this.getAProduct.bind(this)}
      //             to={"edit/" + (this.props.pid) + "/" + this.to_slug(this.props.name) + ".html"}
      //           ><span className="glyphicon glyphicon-edit" /> Edit</Link>
      //         </div>
      //         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //           <a
      //             className="btn btn-danger  btn-product"
      //             onClick={() => this.buttonDelete()}
      //           ><span className="glyphicon glyphicon-remove" /> Remove</a></div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default connect()(Item);