import React, { Component } from 'react';
import Book from '../model/Book.model';
import BookComponent from '../book/Book.component';

export default class MostPopularShelfComponent extends Component {

    books: Book[];

    constructor(props) {
        super(props);
        this.books = [
            new Book('50 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281'),
            new Book('React For Dummies', 'Ms JS', '0123456788', 'JS Publishers', ['js', 'web'], 'o610281')
        ];
    }


    render() {
        return (
            <div className='most-popular-shelf' >
            <h2>Most Popular Books< /h2>
        {
            this.books.map((book, index) =>
                <BookComponent key={ index } book= { book } />
            )

        }

        < /div>
          )
    }
}
