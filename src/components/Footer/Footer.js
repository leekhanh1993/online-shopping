import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="container-fluid text-center">
                    <p>Online Store Copyright</p>
                    <form className="form-inline">Get deals:
            <input type="email" className="form-control" size={50} placeholder="Email Address" />
                        <a type="button" className="btn btn-danger btnView">Sign Up</a>
                    </form>
                </footer>
            </div>
        );
    }
}

export default Footer;