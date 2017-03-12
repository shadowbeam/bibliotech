import React, { Component } from 'react';
import Book from '../model/Book.model';

export default class BookComponent extends Component {

    book: Book;

    constructor(props) {
        super(props);
        this.book = props.book;
    }


    render() {
        return (
            <div className='book' >
            {this.book.toString()}
        < /div>
          )
    }
}
