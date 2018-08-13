import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItems: [],
            currentPage: 1,
            itemsPerPage: 3
        }
    }
    componentWillMount() {
        this.setState({
            totalItems: this.props.allproduct
        })
    }
    // componentDidMount() {
    //     this.props.returnCurrentItems(this.getCurrentItems())
    // }
 
    onClick(e) {
        var target = e.target
        var currentPage =  Number(target.id)
        console.log(currentPage)
        // this.setState({
        //     currentPage
        // });
    }
    render() {
        const { totalItems, currentPage, itemsPerPage } = this.state;
        // Logic for displaying current todos
        // const indexOfLastItem = currentPage * itemsPerPage;
        // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        // const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);

        // const listItems = currentItems.map((item, index) => {
        //   return <li key={index}>{todo}</li>;
        // });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalItems.length / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
        console.log(pageNumbers)
        const loadPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number}>
                    <a
                    id={number}
                    onClick={this.onClick}
                    >{number}</a>
                </li>
            );
        });
        return (
            <div className="pagination pagination-lg">
                <li>
                <a
                    id='1'
                    onClick={this.onClick}
                >{'<<'}</a></li>
                {loadPageNumbers}
                <li>
                <a
                    id='1'
                    onClick={this.onClick}
                >{'>>'}</a></li>
            </div>
        );
    }
}

export default Pagination;