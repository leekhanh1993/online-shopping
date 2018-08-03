import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import Contact from '../Contact/Contact';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/detail/:index/:slug.html" component={Detail} />
                    <Route component={Home} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;