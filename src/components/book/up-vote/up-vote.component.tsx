import * as React from 'react';
import { Component } from 'react';
import Book from '../../model/Book.model';
import './up-vote.component.less';

export default class UpVoteComponent extends Component {

    book: Book;

    constructor(props) {
        super(props);
        this.book = props.book;
        this.state = {
            hover: false,
            liked: false
        };
    }

    upVoteBook = ev => {
        if (!this.state.liked) {
            this.setState({ liked: true });
            this.book.upVote()
            this.forceUpdate();
        }
    };

    mouseOver = () => {
        this.setState({ hover: true });
    }

    mouseOut = () => {
        this.setState({ hover: false });
    }

    render() {

        return (
            <div className= 'up-vote' >
            <div className='button' onMouseEnter= { this.mouseOver.bind(this) } onMouseLeave= { this.mouseOut.bind(this) }  onClick= { this.upVoteBook } >

                <div className='votes' > { this.book.votes } </div>

        {
            this.state.hover || this.state.liked ? (<i className='fa fa-heart' />) :<span/>
        }

        </div>
            </div>
          )
    }
}
