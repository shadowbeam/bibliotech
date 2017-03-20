import * as React from 'react';
import { Component } from 'react';
import './App.less';
import MostPopularShelf from './most-popular-shelf/most-popular-shelf.component';
import NavComponent from './nav/nav.component';

export default class App extends Component {
    render() {
        return (
            <div className='App' >
            <NavComponent/>
            <MostPopularShelf/>
            </div>
    );
    }
}
