import * as React from 'react';
import { Component } from 'react';
import './search.component.less';
import BookService from '../service/book.service';
import * as _ from 'underscore';


export default class SearchComponent extends Component {

    bookService: BookService;

    constructor(props) {
        super(props);
      this.bookService =  BookService.getInstance();
      this.updateInputValue = this.updateInputValue.bind(this);
      this.searchForBook = _.debounce(this.searchForBook,350);
      this.clearResults = this.clearResults.bind(this);

        this.state = {
            results: [],
            value: ''
        };
    }

    updateInputValue(event:any) {
      const inputValue = event.target.value;
      this.setState({value: inputValue});
      this.searchForBook(inputValue);
    }

    searchForBook(query:string){
      if(query.length > 4 ){
         this.bookService.search(query, this.success);
      }else if(query.length == 0){
        this.clearResults();
      }
    }

    clearResults(){
      this.setState({ results: [] });
    }

    public success = (response:string) => {
      console.log(response);
      this.setState({ results: response.data.items });
    }

    render() {
        return (
            <div className='search'>
            <i className='fa fa-search'/>
                <input value={this.state.value} onChange={this.updateInputValue} onBlur={this.clearResults} placeholder='Search for books...'></input>
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
