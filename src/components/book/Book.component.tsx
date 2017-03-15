import React, { Component } from 'react';
import Book from '../model/Book.model';
import './book.component.less';

export default class BookComponent extends Component {

    book: Book;

    constructor(props) {
        super(props);
        this.book = props.book;
    }

    upVoteBook = ev => {
        this.book.upVote()
        this.forceUpdate();
    };


    render() {
        return (
            <div className='col-xs-6 col-sm-3 col-md-3 col-lg-2' >
            <div  className='book' onClick= { this.upVoteBook } >
                <div className='spine' > </div>
                    < div className= 'cover' >
                        <span className='title' > { this.book.title } < /span>
                            < span className= 'votes' > { this.book.votes } < /span>
                                < /div>
                                < /div>
                                < /div>
          )
    }
}
