import React , {Component} from 'react';
import './bookSearch.css';

export default class BookSearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            author : '',
            title : ''
        }
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
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
                
            </div>
        );
    }
}