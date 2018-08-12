import React from 'react'
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Navigation />
            <RouterURL/>
          <Footer />
        </div>
      </Router>
    )
  }
}