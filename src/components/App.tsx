import React, { Component } from 'react';
import './App.less';
import MostPopularShelf from './most-popular-shelf/MostPopularShelf';

export default class App extends Component {
    render() {
        return (
            <div className="App" >
            <MostPopularShelf></MostPopularShelf>
            < /div>
    );
    }
}
