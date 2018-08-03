import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container" id="contact">
                    <div className="container">
                        <div className="well well-sm">
                            <h3><strong>Contact Us</strong></h3>
                        </div>
                        <div className="row">
                            <div className="col-md-7">
                                <iframe src="https://maps.google.com/maps?q=rmit&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={500} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                            </div>
                            <div className="col-md-5">
                                <h4><strong>Get in Touch</strong></h4>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" className="form-control" placeholder="Phone" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                    </div>
                                    <button className="btn btn-default" type="submit" name="button">
                                        <i className="fa fa-paper-plane-o" aria-hidden="true" /> Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;