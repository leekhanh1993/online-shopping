import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Product from '../Product/Product';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import Contact from '../Contact/Contact';
import MngProduct from '../Product/MngProduct';
import ConfigProductType from '../ProductType/ConfigProductType';
import Admin from '../AdminPage/Admin';
import ConfigProduct from '../Product/ConfigProduct';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/manageproduct" component={ConfigProduct} />
                    <Route path="/manage-type-product" component={ConfigProductType} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/detail/:pid.html" component={Detail} />
                    <Route component={Home} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;