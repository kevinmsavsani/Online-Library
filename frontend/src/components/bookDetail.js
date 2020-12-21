import React, { Component } from 'react';
import axios from 'axios';

export default class BookDetail extends Component {
  constructor(props) {
    super(props);


    this.state = {
        title: '',
        author:{}
    };
  }

  componentDidMount() {
    axios.get('https://www.googleapis.com/books/v1/volumes/' + this.props.match.params.id)
      .then(response => {
        console.log(response.data.volumeInfo)
        this.setState({ title: response.data.volumeInfo.title ,
                        author: response.data.volumeInfo.authors});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
          <h1>{this.state.title}</h1>
      </div>
    )
  }
}
