import React, { Component } from 'react';
import './App.less';
import MostPopularShelf from './most-popular-shelf/MostPopularShelf.component';
import SearchComponent from './search/search.component';

export default class App extends Component {
    render() {
        return (
            <div className='App' >
            <SearchComponent></SearchComponent>
            <MostPopularShelf></MostPopularShelf>
            < /div>
    );
    }
}
