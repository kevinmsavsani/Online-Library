import React , {Component} from 'react';

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
                <input 
                    name="author"
                    type="text"
                    value={this.state.author}
                    onChange={this.changeHandler}/>
                <input 
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.changeHandler}/>

            </div>
        );
    }
}