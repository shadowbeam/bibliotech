import React, { Component } from 'react';
import Book from '../model/Book.model';
import './book.component.less';
import UpVoteComponent from './up-vote/up-vote.component';
import axios  from 'axios';


export default class BookComponent extends Component {

    book: Book;
    image: string;
    // amazon http://images.amazon.com/images/P/1491956259.01._PE99_SCLZZZZZZZ_.jpg
    //openLib http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg

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

    render() {
        let cover, spine;
        if (this.image) {
            cover = <img src={ this.image } />;
        } else {
            cover = <h2 className='title' > { this.book.title } < /h2>;
            spine = <div className='spine' > </div>;

        }

        return (
            <div className='book-wrapper col-xs-6 col-sm-3 col-md-3 col-lg-3' >
            <div  className='book' >
                { spine }
                < div className= 'cover' > { cover } < /div>
                <UpVoteComponent book= { this.book } />

                            < /div>
                            < /div>
          )
    }
}
