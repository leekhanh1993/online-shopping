import React, { Component } from 'react';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editting: false
        }
    }
    buttonEdit(){
        this.setState({editting: true})
    }
    buttonSave(){
        this.setState({editting: false})
        this.props.edit(this.props.index, this.txtName.value);
    }
    buttonDelete(){
        this.props.delete(this.props.index)
    }

    renderNormal(){
        return <div className="row">
            <hr />
            <div className="col-md-6">
                <a 
                className="btn btn-primary"
                onClick={() => this.buttonEdit()}
                ><span className="glyphicon glyphicon-th-list" /> Edit</a>
            </div>
            <div className="col-md-6">
                <a 
                className="btn btn-danger"
                onClick={() => this.buttonDelete()}
                ><span className="glyphicon glyphicon-shopping-cart" /> Remove</a></div>

        </div>
    }
    renderForm(){
        return <div className="row text-center">
            <hr />
            <div className="form-group">
                <input 
                ref={(input)=>{this.txtName = input}}
                type="text" 
                className="form-control" 
                defaultValue={this.props.name}
                />
            </div>
            <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => this.buttonSave()}
            >Save</button>
        </div>
    }
    showButton(){
        if (this.state.editting === false) {
            return this.renderNormal();
        } else {
            return this.renderForm();
        }
    }
    render() {
        return (
            
            
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <h4 className="text-center"><span className="label label-info">{this.props.name}</span></h4>
                    <img src={this.props.image} className="img-responsive" style={{width: 400, height: 400}}/>
                    <div className="caption">
                        <div className="row">
                            <div className="col-md-6 col-xs-6">
                                <h3>{this.props.name}</h3>
                            </div>
                            <div className="col-md-6 col-xs-6 price">
                                <h3>
                                    <label>Price: {this.props.price} VND</label></h3>
                            </div>
                        </div>
                        <p>{this.props.info}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <a className="btn btn-primary btn-product"><span className="glyphicon glyphicon-th-list" /> More details</a>
                            </div>
                            <div className="col-md-6">
                                <a href="#" className="btn btn-success btn-product"><span className="glyphicon glyphicon-shopping-cart" /> Buy</a></div>
                        </div>
                        {this.showButton()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;