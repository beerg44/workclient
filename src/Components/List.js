import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  constructor(){
    super();
    this.state = {posters: []};
  }

  componentDidMount() {
    fetch('http://localhost:9000/test')
      .then(res => {
          return res.json()
       })
      .then(posters => { 
          this.setState({ posters })
       });
   }

  render() {
    return (
      <div className="App">
        <h1>Posters</h1>
        {this.state.posters.map(poster =>
        <div key={poster.ID}>Poster: {poster.ImdbNo} Image: {poster.Image}</div>
        )}
      </div>
    )
  }
}

export default List;