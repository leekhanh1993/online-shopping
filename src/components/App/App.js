import React from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Product from '../Product/Product';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="container-fluid">
         <Product/>
        </div>
        <Footer />
      </div>
    )
  }
}