import React, { Component } from 'react';
import ControlView from '../ControlView/ControlView';
import Item from './Item';
import { connect } from 'react-redux'
import { fetchProduct, fetchProductType } from '../../reducers/manageFetchData'
import ByCategory from '../Filter/ByCategory';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
      editControl: false,
      editCategoryID: '',
      isfilterPrice: '',
      collapseCate: false,
      collapsePrice: false,
      currentPage: 1,
      itemsPerPage: 9,
      hidePage: 1,

    }

  }
  setButtonUpDownPrice() {
    this.setState({
      collapsePrice: !this.state.collapsePrice
    })
  }
  setButtonUpDownCate() {
    this.setState({
      collapseCate: !this.state.collapseCate
    })
  }
  showGridView(grid) {
    this.setState({ gridView: grid })
  }


  editNameProduct(id, name) {
    var { products } = this.state;
    products[id].name = name;
    this.setState({ products })
  }
  componentDidMount() {
    this.load()
  }
  load() {
    this.props.dispatch(fetchProduct())
    this.props.dispatch(fetchProductType())
  }
  filterCategory(editCategoryID) {
    this.setState({
      editCategoryID
    })
  }
  filterPrice(price) {
    this.setState({
      isfilterPrice: price
    })
  }
  returnCurrentItems(returnCurrentItems) {
    this.setState({
      returnCurrentItems
    })
  }
  onClick(currentPage) {
    this.setState({
        currentPage,
        hidePage: currentPage
    });
  }


  render() {
    var { keyword, allproduct, allProductType } = this.props;
    // search
    allproduct = allproduct.filter((product) => {
      return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })
    // filter by category
    if (this.state.editCategoryID !== '') {
      if (this.state.editCategoryID === '-1') {
        allproduct = allproduct.filter((product) => {
          return product
        })
      } else {
        allproduct = allproduct.filter((product) => {
          return product.productType === this.state.editCategoryID
        })
      }

    }
    // filter by price
    if (this.state.isfilterPrice !== '') {
      if (this.state.isfilterPrice === '-1') {
        allproduct = allproduct.sort((a, b) => {
          if (parseInt(a.price) > parseInt(b.price)) { return -1 }
          else if (parseInt(a.price) < parseInt(b.price)) { return 1 }
          else return 0;
        })
      }
      if (this.state.isfilterPrice === '1') {
        allproduct = allproduct.sort((a, b) => {
          if (parseInt(a.price) > parseInt(b.price)) { return 1 }
          else if (parseInt(a.price) < parseInt(b.price)) { return -1 }
          else return 0;
        })
      }

    }

    var cleanDataPType = allProductType.filter((ptype) => {
      if (ptype._id) {
        return ptype
      }
    })
    var listCataName = cleanDataPType.map((ptype, index) => {
      return <ByCategory
        key={index}
        name={ptype.name}
        id={ptype._id}
        filterCategory={(editCategoryID) => this.filterCategory(editCategoryID)}
      />
    })

    //load item via pagination
    var { currentPage, itemsPerPage, hidePage } = this.state;
    var totalPage = Math.ceil(allproduct.length / itemsPerPage)
    // Logic for displaying page numbers
    var pageNumbers = [];
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }

    if('123'.includes(hidePage)){
      pageNumbers = pageNumbers.slice(0,5)
      var loadPageNumbers = pageNumbers.map(number => {
        return (
          <li className={hidePage === number ? 'active' : ''} key={number}>
            <a
              onClick={this.onClick.bind(this, number)}
            >{number}</a>
          </li>
        );
      });
    }else{
      pageNumbers = pageNumbers.slice((hidePage-3),(hidePage+2))
      var loadPageNumbers = pageNumbers.map(number => {
        return (
          <li className={hidePage === number ? 'active' : ''} key={number}>
            <a
              onClick={this.onClick.bind(this, number)}
            >{number}</a>
          </li>
        );
      });
    }
    // Logic for displaying current items
    var indexOfLastItem = currentPage * itemsPerPage;
    var indexOfFirstItem = indexOfLastItem - itemsPerPage;
    allproduct = allproduct.slice(indexOfFirstItem, indexOfLastItem);


    var listProducts = allproduct.map((product, index) => {
      return <Item
        index={index}
        pid={product._id}
        key={index}
        name={product.name}
        price={product.price}
        imageUrl={product.imageUrl}
        description={product.description}
        brand={product.brand}
        producer={product.producer}
        productType={product.productType}
        edit={(id, name) => this.editNameProduct(id, name)}
        loadpage={() => this.load()}
        gridView={(this.state.gridView)}
        editControl={this.state.editControl}
        allProductType={this.props.allProductType}
      ></Item>
    })
    return (
      <div className="ptop-50">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 filterpanel" >
            <div className="panel panel-default" >
              <div className="panel-heading mainColor">
                <h3 className="panel-title">Filter</h3>
              </div>
              <div className="panel-body">
                {/* Filter Catagory */}
                <div className="panel-group">
                  <div className="panel panel-default">
                    <div className="panel-heading mainColor">
                      <h4 className="panel-title ">
                        <a
                          onClick={this.setButtonUpDownCate.bind(this)}
                          data-toggle="collapse"
                          href="#collapseCate">Catagory<span
                            className={this.state.collapseCate ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                          ></span></a>
                      </h4>
                    </div>
                    <div id="collapseCate" className="panel-collapse collapse collapseSty">
                      <ul className="list-group text-center ">
                        {/* className */}
                        <ByCategory
                          name='-1'
                          id='-1'
                          filterCategory={(editCategoryID) => this.filterCategory(editCategoryID)}
                        />
                        {listCataName}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Filter by Price */}
                <div className="panel-group">
                  <div className="panel panel-default">
                    <div className="panel-heading mainColor">
                      <h4 className="panel-title ">
                        <a
                          onClick={this.setButtonUpDownPrice.bind(this)}
                          data-toggle="collapse"
                          href="#collapsePrice"
                        >Price<span
                          className={this.state.collapsePrice ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                        ></span></a>
                      </h4>
                    </div>
                    <div id="collapsePrice" className="panel-collapse collapse">
                      <ul className="list-group text-center ">
                        <li className="list-group-item">
                          <a
                            className='buttonCate'
                            onClick={() => this.filterPrice('1')}>Low To High
                        </a></li>
                        <li className="list-group-item">
                          <a
                            className='buttonCate'
                            onClick={() => this.filterPrice('-1')}>High To Low
                        </a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
            <div className="row">
              <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                <ControlView
                  gridView={(grid) => this.showGridView(grid)}
                  editControl={this.state.editControl}
                  filterPrice={(key) => this.filterPrice(key)}
                />
              </div>
            </div>
            <div className="row">
              {listProducts}
            </div>
            <div className="row text-center">
              {/* <Pagination
              allproduct={allproduct}
              // returnCurrentItems={(data)=>this.returnCurrentItems(data)}
              /> */}
              <div className="pagination pagination-lg">
                <li>
                  <a
                    onClick={this.onClick.bind(this, 1)}
                  >{'<<'}</a></li>
                {loadPageNumbers}
                <li>
                  <a
                    onClick={this.onClick.bind(this, totalPage)}
                  >{'>>'}</a></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.searchProduct,
    allproduct: state.manageProduct,
    allProductType: state.manageProductType
  }
}

export default connect(mapStateToProps, null)(Product);