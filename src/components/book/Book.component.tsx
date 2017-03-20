import * as React from 'react';
import { Component } from 'react';
import Book from '../model/Book.model';
import './book.component.less';
import UpVoteComponent from './up-vote/up-vote.component';
import axios  from 'axios';
import BookService from '../service/book.service';


export default class BookComponent extends Component {

    book: Book;
    image: string;
    // amazon http://images.amazon.com/images/P/1491956259.01._PE99_SCLZZZZZZZ_.jpg
    //openLib http://covers.openlibrary.org/b/isbn/9780385533225-S.jpg
    bookService: BookService;

    constructor(props) {
        super(props);
        this.book = props.book;
        BookService.getInstance().fetchBook(this.book.isbn, this.success);
    }

    success = response => {
        let id = response.data.items[0].id;
        this.image = `http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&source=gbs_api&zoom=1`;
        // this.image = `http://covers.openlibrary.org/b/isbn/${this.book.isbn}-S.jpg`;
        // this.image = `http://images.amazon.com/images/P/${this.book.isbn}.01._PE99_SCLZZZZZZZ_.jpg`;

        this.forceUpdate();
    };

    render() {
        let cover, spine;
        if (this.image) {
            cover = <img src={ this.image } />;
        } else {
            cover = <h2 className='title' > { this.book.title } </h2>;
            spine = <div className='spine' > </div>;

        }

        return (
            <div className='book-wrapper col-xs-6 col-sm-3 col-md-3 col-lg-3' >
            <div className='book' >
                { spine }
                <div className= 'cover' > { cover } </div>
                    <UpVoteComponent book= { this.book } />
                        </div></div>
          )
    }
}
