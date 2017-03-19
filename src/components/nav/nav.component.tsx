import * as React from 'react';
import { Component } from 'react';
import './nav.component.less';
import SearchComponent from '../search/search.component';


export default class NavComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='nav'>
              <div className='logo'>biblio<span className='brand'>Tech</span></div>
              <SearchComponent/>
            </div>

          )
    }
}
