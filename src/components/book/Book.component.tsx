import React, { Component } from 'react';
import Book from '../model/Book.model';
import './book.component.less';

export default class BookComponent extends Component {

    book: Book;

    constructor(props) {
        super(props);
        this.book = props.book;
    }


    render() {
        return (
            <div className='col-xs-6 col-sm-3 col-md-3 col-lg-2' >
            <div  className='book' >
                <div className='spine' />
                    <div className='cover' > { this.book.title } < /div>
                        < /div>
                        < /div>
          )
    }
}
