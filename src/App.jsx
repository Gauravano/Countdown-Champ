import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      deadline: '31st December,2017',
      newDeadline: ' '
    }
  }

  changeDeadline(){
    this.setState({deadline : this.state.newDeadline })
  }

  render(){
    return(
      <div className="App">
      <div className="App-title"> {this.state.deadline} </div>
      <Clock />
        <input
        onChange = {event => this.setState({newDeadline:event.target.value})}
        placeholder="Enter date" />
        <button onClick = {() => this.changeDeadline() }>Submit</button>
    </div>
    )
  }
}

export default App;
