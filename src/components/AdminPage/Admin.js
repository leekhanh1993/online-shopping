import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Admin extends Component {
    render() {
        return (
            <div className='container'>
                <div className="panel panel-default">
                    <div className="panel-heading mainColor">
                        <h1 className="panel-title text-center">Admin Control</h1>
                    </div>
                    <div className="panel-body text-center">
                        <Link
                            className="btn btn-lg btn-default mr-10"
                            to='/manageproduct'
                        ><span className="glyphicon glyphicon-th-list" /> Manage Product</Link>

                        <Link
                            className="btn btn-lg btn-default mr-10"
                            to='/manage-type-product'
                        ><span className="glyphicon glyphicon-th-list" /> Manage Product Type</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin;