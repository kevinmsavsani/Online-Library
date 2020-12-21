import React, { Component } from 'react';
import axios from 'axios';
import getData from '../services/apiWrapper';
import './bookDetail.css';

export default class BookDetail extends Component {
  constructor(props) {
    super(props);


    this.state = {
        title: '',
        author:'',
        description: '',
        image:'',
        buylink:'',
        language:'',
        publisher:'',
        publishedDate:'',
        pageCount:''
    };
  }

  componentDidMount() {
    let Url = 'http://localhost:5000/bookDetail?id=' + this.props.match.params.id;
    getData("GET",Url,{}).then(data => {
        console.log(data);
        this.setState({ title: data.volumeInfo.title ,
                        language: data.volumeInfo.language,
                        author: data.volumeInfo.authors,
                        publisher: data.volumeInfo.publisher,
                        description:data.volumeInfo.description,
                        image: data.volumeInfo.imageLinks.thumbnail,
                        buylink:data.saleInfo.buyLink,
                        publishedDate: data.volumeInfo.publishedDate,
                        pageCount:data.volumeInfo.pageCount});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    const authorList = (this.state.author && this.state.author.length) ? this.state.author.join(', ') : '';
    console.log(this.state.buylink);
    return (
      <div class="container-fluid">
      <div class="row">
        <div class="main">
            <h1>{this.state.title}</h1>
            <br />
            <h2>{authorList}</h2>
            <br />
            <br />
            <p dangerouslySetInnerHTML={{__html: this.state.description}} />
        </div>
        <div class="side">
          <a href= {this.state.image}>
            <img src={this.state.image} />
          </a>
          {typeof this.state.buylink == "undefined" ? <p></p> : <div><br /><a href={this.state.buylink}>Buy Now</a></div>}
          
          <hr />
          <br />
          <p>Bibliographic info</p>
          <hr />
          <div className='bibliographic'>
          <small>TITLE</small>
          <br />
          <small>{this.state.title}</small>
          <br />
          <br />
          <small>AUTHOR</small>
          <br />
          <small>{authorList}</small>
          <br />
          <br />
          <small>PUBLISHER</small>
          <br />
          <small>{this.state.publisher}</small>
          <br />
          <br />
          <small>PUBLISHED DATA</small>
          <br />
          <small>{this.state.publishedDate}</small>
          <br />
          <br />
          <small>PAGE COUNT</small>
          <br />
          <small>{this.state.pageCount}</small>
          <br />
          <br />
          <small>LANGUAGE</small>
          <br />
          <small>{this.state.language}</small>
          <br />
          <br />
          </div>

        </div>
      </div>
      </div>
    )
  }
}
