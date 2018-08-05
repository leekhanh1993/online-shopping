import React, { Component } from 'react';
import ControlView from '../ControlView/ControlView';
import Item from './Item';
import {connect} from 'react-redux'
import { fetchProduct } from '../../reducers/manageFetchData'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
          gridView: true
        }
    
      }
      showGridView(grid){
        this.setState({gridView: grid})
      }
    
      // loadProductAgain() {
      //   console.log('Load Page')
      // }
      editNameProduct(id, name) {
        var { products } = this.state;
        products[id].name = name;
        this.setState({ products })
      }
      componentDidMount(){
        this.load()
      }
      load(){
        console.log('load')
        this.props.dispatch(fetchProduct())
      }
    
      render() {
        var {keyword, allproduct} = this.props;
        console.log(allproduct)
        // search
        allproduct = allproduct.filter((product) =>{
          return product.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        var listProducts = allproduct.map((product, index) => {
          return <Item
            index={index}
            pid={product._id}
            key={index}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            description={product.description}
            edit={(id, name) => this.editNameProduct(id, name)}
            loadpage={() => this.load()}
            gridView={(this.state.gridView)}
          ></Item>
        })
        return (
          <div>
            <div className="container-fluid">
            <ControlView
            gridView={(grid) => this.showGridView(grid)}
            />
              {listProducts}
            </div><br /><br />
          </div>
        )
      }
}

const mapStateToProps = (state) => {
  return{
    keyword: state.searchProduct,
    allproduct: state.manageProduct
  }
}

export default connect(mapStateToProps,null)(Product);