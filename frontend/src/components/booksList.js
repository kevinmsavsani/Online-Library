import React, {Component} from 'react';

export default class BooksList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.books);
        return (
            <div>
                    {
                        this.props.books.map( (book, pos) => {
                            const authors = (book.volumeInfo.authors && book.volumeInfo.authors.length) ? 
                                            book.volumeInfo.authors.join(',') : 'UnKnown Author';
                            return (
                                <p>
                                    {book.volumeInfo.title} 
                                    {book.volumeInfo.description}
                                    {authors} 
                                </p>
                            )
                        })
                    }
            </div>
        );
    }
}