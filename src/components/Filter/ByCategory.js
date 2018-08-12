import React, { Component } from 'react';

class ByCategory extends Component {
    onClick(){
        this.props.filterCategory(this.props.id)
    }
    render() {
        return (
            <li className="list-group-item"><a className='buttonCate' onClick={this.onClick.bind(this)}>{this.props.name === '-1' ? 'All Category' : this.props.name}</a></li>
        );
    }
}

export default ByCategory;