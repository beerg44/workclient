import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="content">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
