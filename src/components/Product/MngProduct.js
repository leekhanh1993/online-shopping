import React, { Component } from 'react';
import ControlView from '../ControlView/ControlView';
import Item from './Item';
import { connect } from 'react-redux'
import { fetchProduct } from '../../reducers/manageFetchData'

class MngProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
      editControl: true,
      isfilterPrice: ''
    }

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
  }
  filterPrice(key) {
    this.setState({
      isfilterPrice: key
    })
  }

  render() {
    var { keyword, allproduct } = this.props;
    // search
    allproduct = allproduct.filter((product) => {
      return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    })

    // filter by price
    if (this.state.isfilterPrice !== '') {
      if (this.state.isfilterPrice === '-1') {
        allproduct = allproduct.sort((a, b) => {
          if (parseInt(a.price) > parseInt(b.price)) { return 1 }
          else if (parseInt(a.price) < parseInt(b.price)) { return -1 }
          else return 0;
        })
      }
      if (this.state.isfilterPrice === '1') {
        allproduct = allproduct.sort((a, b) => {
          if (parseInt(a.price) > parseInt(b.price)) { return -1 }
          else if (parseInt(a.price) < parseInt(b.price)) { return 1 }
          else return 0;
        })
      }

    }


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
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ControlView
                gridView={(grid) => this.showGridView(grid)}
                editControl={this.state.editControl}
                filterPrice={(key) => this.filterPrice(key)}
              />
              {listProducts}
            </div>
          </div>
        </div><br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    keyword: state.searchProduct,
    allproduct: state.manageProduct,
    searchProductByPrice: state.searchProductByPrice
  }
}

export default connect(mapStateToProps, null)(MngProduct);