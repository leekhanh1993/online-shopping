import React from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Products from '../Product/Products';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Macbook Pro 2017',
          price: '30000000',
          image: 'https://cdn.tgdd.vn/Products/Images/44/111226/apple-macbook-pro-mpxr2sa-a-450x300-450x300-h2-450x300.jpg',
          info: 'Storage 256gb'
        },
        {
          name: 'Iphon X',
          price: '25000000',
          image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
          info: 'Storage 64gb'
        },
        {
          name: 'Oppo Neo 9',
          price: '10000000',
          image: 'https://cdn.tgdd.vn/Products/Images/42/76014/oppo-a37-hero-400x466-400x466copy-400x466.png',
          info: 'Storage 200gb'
        },
        {
          name: 'Macbook Air 2017',
          price: '20000000',
          image: 'https://cdn.tgdd.vn/Products/Images/44/80468/apple-macbook-air-2015-mmgg2zp-a-i5-5250u-8gb-256g-bac-450x300-450x300.jpg',
          info: 'Storage 128gb'
        },
        {
          name: 'Samsung Galaxy S8',
          price: '30000000',
          image: 'https://cdn.tgdd.vn/Files/2017/03/23/964086/samsung-galaxy-s8-1_600x628.jpg',
          info: 'Storage 500gb'
        },
        {
          name: 'Mouse Logitech M75',
          price: '160000',
          image: 'https://cdn2.tgdd.vn/Products/Images/86/111402/chuot-khong-day-logitech-b175-1-300x300.jpg',
          info: 'made in VN'
        },
      ]
    }

  }

  deleteProduct(id) {
    var {products} = this.state;
    products.splice(id, 1)
    this.setState({products})
  }
  editNameProduct(id, name) {
    var {products} = this.state;
    products[id].name = name;
    this.setState({products})
  }

  render() {
    var listProducts = this.state.products.map((product, index) => {
      return <Products
        index={index}
        key={index}
        name={product.name}
        price={product.price}
        image={product.image}
        info={product.info}
        edit={(id, name) => this.editNameProduct(id, name)}
        delete={(id) => this.deleteProduct(id)}
      ></Products>
    })
    return (
      <div>
        <Header />
        <Navigation />
        <div className="container-fluid">
          {listProducts}


        </div><br /><br />
        <Footer />
      </div>
    )
  }
}