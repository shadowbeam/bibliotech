import React, { Component } from 'react';
import Book from '../model/Book';

export default class MostPopularShelf extends Component {

    books: Book[];

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='most-popular-shelf' > Books < /div>
          )
    }
}
