import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editting: false,
    }
  }
  buttonEdit() {
    this.setState({ editting: true })
  }
  buttonSave() {
    this.setState({ editting: false })
    this.props.edit(this.props.index, this.txtName.value);
  }
  buttonDelete() {
    this.props.delete(this.props.index)
  }

  renderNormal() {
    return <div className="row">
      <hr />
      <div className="col-md-6">
        <a
          className="btn btn-primary"
          onClick={() => this.buttonEdit()}
        ><span className="glyphicon glyphicon-edit" /> Edit</a>
      </div>
      <div className="col-md-6">
        <a
          className="btn btn-danger"
          onClick={() => this.buttonDelete()}
        ><span className="glyphicon glyphicon-floppy-remove" /> Remove</a></div>
    </div>
  }
  renderForm() {
    return <div className="row text-center">
      <hr />
      <div className="form-group">
        <input
          ref={(input) => { this.txtName = input }}
          type="text"
          className="form-control"
          defaultValue={this.props.name}
        />
      </div>
      <a
        className="btn btn-success"
        onClick={() => this.buttonSave()}
      ><span className="glyphicon glyphicon-floppy-saved" /> Save</a></div>
  }
  showButton() {
    if (this.state.editting === false) {
      return this.renderNormal();
    } else {
      return this.renderForm();
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
      <div
        className={this.props.gridView ? "col-sm-6 col-md-4" : ''}>
        <div className="thumbnail">
          <h4 className="text-center"><span className="label label-info">{this.props.name}</span></h4>
          <img alt="image" src={this.props.image} className="img-responsive" style={{ width: 400, height: 400 }} />
          <div className="caption">
            <div className="row">
              <div className="col-md-6 col-xs-6">
                <h3>{this.props.name}</h3>
              </div>
              <div className="col-md-6 col-xs-6 price">
                <h3>
                  <label>Price: {this.format_currency(this.props.price)} VND</label></h3>
              </div>
            </div>
            <p>{this.props.info}</p>
            <div className="row">
              <div className="col-md-6">
     
              <Link
                  className="btn btn-primary btn-product"
                  to={"detail/" + (this.props.index + 1) + "/" + this.to_slug(this.props.name) + ".html"}
                ><span className="glyphicon glyphicon-th-list" /> More details</Link>
                
              </div>
              <div className="col-md-6">
                <a href="#" className="btn btn-success btn-product"><span className="glyphicon glyphicon-shopping-cart" /> Buy</a></div>
            </div>
            {this.showButton()}
          </div>
        </div>
      </div>
    );
  }
}

export default Item;