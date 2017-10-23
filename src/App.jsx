import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form ,FormControl,Button } from 'react-bootstrap';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
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
      <Clock
        deadline ={this.state.deadline}
      />
    <Form inline>
    <FormControl
        className = "input-deadline"
        onChange = {event => this.setState({newDeadline:event.target.value})}
        placeholder="Enter date" />
      <Button onClick = {() => this.changeDeadline() }>Submit</Button></Form>
    </div>
    )
  }
}

export default App;
