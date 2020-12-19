import React, {Component} from 'react';
import './booksList.css';

export default class BooksList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.books);
        return (
            <div className='book-list'>
                {
                    this.props.books.map( (book, pos) => {
                        const authors = (book.volumeInfo.authors && book.volumeInfo.authors.length) ? 
                                        book.volumeInfo.authors.join(', ') : 'UnKnown Author';
                        return (
                            <div className={'book-item'}>
                            <span>{`Title: ${book.volumeInfo.title}`}</span>
                                <span>{`Author: ${authors} `}</span>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}