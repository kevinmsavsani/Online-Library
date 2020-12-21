import React, { Component } from 'react';
import axios from 'axios';
import getData from '../services/apiWrapper';

export default class BookDetail extends Component {
  constructor(props) {
    super(props);


    this.state = {
        title: '',
        author:{}
    };
  }

  componentDidMount() {
    let Url = 'http://localhost:5000/bookDetail?id=' + this.props.match.params.id;
    getData("GET",Url,{}).then(data => {
        this.setState({ title: data.volumeInfo.title ,
                        author: data.volumeInfo.authors});
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
