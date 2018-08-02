import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/Products" component={} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}

export default RouterURL;