import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form ,FormControl,Button } from 'react-bootstrap';
import Stopwatch from './Stopwatch';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      deadline: '',
      newDeadline: ' ',
      hours:0,
      minutes: 5,
      seconds: 45,
      newHours:' ',
      newMinutes:' ',
      newSeconds:' ',
      check:0
    }
  }

  changeDeadline(){
    this.setState({deadline : this.state.newDeadline })
  }

  changeStopwatch(){
    this.setState({hours: this.state.newHours,minutes: this.state.newMinutes,seconds: this.state.newSeconds})
    this.setState({check:(this.state.check+1)})
  }

  render(){
    return(
      <div className="App">
      <div className="DeadlineClock">
      <div className="App-title"> {this.state.deadline} </div>
        <Clock
          deadline = { this.state.deadline}
        />
    <Form inline>
    <FormControl
        className = "input-deadline"
        onChange = {event => this.setState({newDeadline:event.target.value})}
        placeholder="Enter date" />
      <Button onClick = {() => this.changeDeadline() }>Submit</Button></Form>
    </div>
    <div className="DeadlineClock">
      <Stopwatch
        hours = {this.state.hours}
        minutes = {this.state.minutes}
        seconds = {this.state.seconds}
        check = {this.state.check}
      />
    <Form inline>
    <FormControl
        className = "input-hours"
        onChange = {event => this.setState({newHours:event.target.value})}
     />
     <FormControl
         className = "input-minutes"
         onChange = {event => this.setState({newMinutes:event.target.value})}
      />
      <FormControl
          className = "input-seconds"
          onChange = {event => this.setState({newSeconds:event.target.value})}
       />
     <Button onClick = {() => this.changeStopwatch() }>Submit</Button></Form>
    </div>
  </div>
    )
  }
}

export default App;
