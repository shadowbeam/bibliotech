import React, { Component } from 'react';
import Book from '../model/Book.model';
import BookComponent from '../book/Book.component';

export default class MostPopularShelfComponent extends Component {

    books: Book[];

    constructor(props) {
        super(props);
        this.books = [
            new Book('50 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 1),
            new Book('51 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 2),
            new Book('52 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 30),
            new Book('53 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 4),
            new Book('54 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 5),
            new Book('55 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 6),
            new Book('React For Dummies', 'Ms JS', '0123456788', 'JS Publishers', ['js', 'web'], 'o610281', 10)
        ];

        this.books.sort(function(a, b) {
            return b.votes - a.votes;
        });
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
