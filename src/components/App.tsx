import React, { Component } from 'react';
import './App.less';
import MostPopularShelf from './most-popular-shelf/MostPopularShelf.component';
import NavComponent from './nav/nav.component';

export default class App extends Component {
    render() {
        return (
            <div className='App' >
            <NavComponent/>
            <MostPopularShelf/>
            < /div>
    );
    }
}
