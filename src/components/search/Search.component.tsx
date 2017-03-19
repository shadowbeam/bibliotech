import * as React from 'react';
import { Component } from 'react';
import './search.component.less';
import BookService from '../service/book.service';


export default class SearchComponent extends Component {

    bookService: BookService;

    constructor(props) {
        super(props);
      this.bookService =  BookService.getInstance();

        this.state = {
            results: [],
            inputValue: ''
        };
    }

    public updateInputValue = (evt:any) => {

     this.setState({
       inputValue: evt.target.value
     });

if(this.state.inputValue.length > 4 ){
   this.bookService.search(this.state.inputValue, this.success);
}
 }


    public success = (response:string) => {
      console.log(response);
      this.setState({ results: response.data.items });
    }

    render() {
        return (
            <div className='search'>
            <i className='fa fa-search'/>
                <input value={this.state.inputValue} onChange={this.updateInputValue} placeholder='Search for books...'></input>
<div className='results'>
{
    this.state.results.map((book, index) =>
        <div className='result' key={ index }>
        <img src={book.volumeInfo.imageLinks.smallThumbnail}/>

        <span className='title'>{book.volumeInfo.title}</span>
        <span className='author'>{book.volumeInfo.authors[0]}</span>
        <div className='clearfix'/>
        </div>
    )

}
</div>
            </div>


          )
    }
}
