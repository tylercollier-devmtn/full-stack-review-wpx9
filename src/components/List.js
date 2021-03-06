import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {
  constructor() {
    super()
    this.state = {
      quoteList: null
    }
  }

  componentDidMount() {
    this.fetchQuotes();
  }

  fetchQuotes = () => {
    axios.get('/api/quotes').then(response => {
      this.setState({ quoteList: response.data });
    });
  }

  render() {
    // if (!quoteList) {
    //   return <div>Loading...</div>
    // }
    const { quoteList } = this.state;

    return (
      <div>
        {quoteList
          ? quoteList.map(quote => {
              return <div>{quote.phrase}</div>
            })
          : <div>Loading...</div>
        }
      </div>
    )
  }
}