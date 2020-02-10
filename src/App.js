import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    if (this.state.counter >0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }


  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }

}

export default App;
