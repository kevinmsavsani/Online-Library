import React, {Component} from 'react';
import './booksList.css';
import {Link} from "react-router-dom";

export default class BooksList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='book-list'>
                {
                    this.props.books.map( (book, pos) => {
                        const authors = (book.volumeInfo.authors && book.volumeInfo.authors.length) ? 
                                        book.volumeInfo.authors.join(', ') : 'UnKnown Author';
                        return (
                            <div className={'book-item'}>
                                <Link to={"/book/"+book.id}>
                                <span>{`Title: ${book.volumeInfo.title}`}</span>
                                <span>{`Author: ${authors} `}</span>
                                </Link> 
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}