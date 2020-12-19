import React , {Component} from 'react';
import './bookSearch.css';
import getData from '../services/apiWrapper';

export default class BookSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            author : '',
            title : ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.notifySearchResult = props.notifyBooksList;
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    getBookList(names,title) {
        let Url = 'http://localhost:5000/booklist?';
        Url += `names=${names}&title=${title}`;
        getData("GET",Url,{}).then((data) => { 
            this.setState(this.notifySearchResult(data.items));
        });
    }
    

    submitSearch = () => {
        this.getBookList(this.state.author,this.state.title);
    }

    render(){
        return (
            <div className="form">
                <div className="form-section">
                    <label>Enter Author name:</label>
                    <input 
                        name="author"
                        type="text"
                        value={this.state.author}
                        onChange={this.changeHandler}/>
                </div>
                <div className="form-section">
                    <label>Enter Title:</label>
                    <input 
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.changeHandler}/>
                </div>
                <input type="submit" onClick={this.submitSearch}/>
            </div>
        );
    }
}