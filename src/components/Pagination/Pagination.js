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
    componentDidMount() {
        this.props.returnCurrentItems(this.geCurrentItems())
    }
    geCurrentItems() {
        const { totalItems, currentPage, itemsPerPage } = this.state;
        // Logic for displaying current todos
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = totalItems.slice(indexOfFirstItem, indexOfLastItem);
        return currentItems
    }
    onClick(e) {
        var target = e.target
        var currentPage =  Number(target.id)
        this.setState({
            currentPage
        });
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

        const loadPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    myid={number}
                    onClick={this.onClick.bind(this)}
                >
                    {number}
                </li>
            );
        });
        return (
            <div className="pagination pagination-lg">
                <li><a
                    myid={(1)}
                    onClick={this.onClick.bind(this)}
                >{'<<'}</a></li>
                {loadPageNumbers}
                <li><a
                    myid={(1)}
                    onClick={this.onClick.bind(this)}
                >{'>>'}</a></li>
            </div>
        );
    }
}

export default Pagination;