import React, { Component } from 'react';
import './search.component.less';


export default class SearchComponent extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className='search'>
            <i className='fa fa-search'/>
<input placeholder='Search for books...'></input>
            </div>

          )
    }
}
