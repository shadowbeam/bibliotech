import React, { Component } from 'react';
import Book from '../model/Book.model';
import './book.component.less';
import axios  from 'axios';


export default class BookComponent extends Component {

    book: Book;
    image: string;

    constructor(props) {
        super(props);
        this.book = props.book;
        this.fetchBook();
    }

    fetchBook() {

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${this.book.isbn}`)
            .then(this.success)
            .catch(function(error) {
                console.log(error);
            });

    }

    success = response => {
        console.log(response);
        let id = response.data.items[0].id;
        this.image = `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&source=gbs_api`;
        this.forceUpdate();

    };

    upVoteBook = ev => {
        this.book.upVote()
        this.forceUpdate();
    };


    render() {
        return (
            <div className='book-wrapper col-xs-6 col-sm-3 col-md-3 col-lg-2' >
            <div  className='book' onClick= { this.upVoteBook } >
                <div className='spine' > </div>
                    < div className= 'cover' >
                        <img src={ this.image } />

                            < /div>
                            < /div>
                            < /div>
          )
    }
}

/*  < !--span className= 'title' > { this.book.title } < /span-->
      < span className= 'votes' > { this.book.votes } < /span>*/
