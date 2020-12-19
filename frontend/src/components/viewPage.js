import React, {Component} from 'react';
import BookSearch from './bookSearch';
import BooksList from './booksList';

class ViewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: []
        }
        this.notifyBooksList = this.notifyBooksList.bind(this);
        
    }

    notifyBooksList(data){
        this.setState({
            books: data
        })
    }

    render(){
        return (
            <div>
                <BookSearch notifyBooksList = {this.notifyBooksList} />
                <BooksList books={this.state.books}/>
            </div>
        );
    }
}

export default ViewPage;