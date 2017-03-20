import * as React from 'react';
import { Component } from 'react';
import Book from '../model/Book.model';
import BookComponent from '../book/Book.component';
import './most-popular-shelf.component.less';

export default class MostPopularShelfComponent extends Component {

    books: Book[];

    constructor(props) {
        super(props);
        this.books = [
            new Book('Electrical Engineering:Principles and Applications, International Edition', 'Allan R Hambley', '9780273793250', 'Pearson (Intl)', ['engineering'], 'o610281', 1),
            new Book('Microservice Architecture: Aligning Principles, Practices, and Culture', 'Irakli Nadareishvili ', '1491956259', 'O′Reilly', ['filth', 'kinky'], 'o610281', 2),
            new Book('50 Shades of grey', 'Mr Grey', '9788490322178', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 30),
            new Book('Coverless Book', 'Mr Grey', '1', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 4),
            new Book('54 Shades of grey', 'Mr Grey', '1593275846', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 5),
            new Book('55 Shades of grey', 'Mr Grey', '0123456789', 'Kinky Publishers', ['filth', 'kinky'], 'o610281', 6),
            new Book('React For Dummies', 'Ms JS', '0470665416', 'JS Publishers', ['js', 'web'], 'o610281', 10)
        ];

        this.books.sort(function(a, b) {
            return b.votes - a.votes;
        });
    }


    render() {
        return (
            <div className='most-popular-shelf' >
        {
            this.books.map((book, index) =>
                <BookComponent key={ index } book= { book }/>
            )

        }
        </div>
          )
    }
}
