import React from 'react';
import { Alert } from 'react-bootstrap';

class Stopwatch extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0,
      check:0,
      message:''
    }
  }

  componentWillMount(){
    console.log("now");
    this.setState({hours: this.props.hours,minutes: this.props.minutes,seconds: this.props.seconds,message: ''})

  }

  componentDidMount(){
    setInterval(() => this.changeStopwatch(),1000);

  }

  changeStopwatch(){
    if(this.props.check !== this.state.check){
      this.setState({hours: this.props.hours,minutes: this.props.minutes,seconds: this.props.seconds,check: this.props.check,message: ''})
    }

    let hours = this.state.hours;
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;

     console.log(hours," hourstop ",minutes," minutes ",seconds," seconds");

    if(seconds == 0 && minutes == 0 && hours == 0){
      this.setState({message: " Time's Up "})
      clearInterval();
    }else if(seconds === 0 && minutes!==0 ){
       minutes = minutes - 1;
       seconds = 59;
    }else if(hours >= 0 && seconds == 0 && minutes == 0 ){
       hours = hours - 1;
       minutes = 59;
       seconds = 59;
    }else {
      seconds = seconds - 1;
      console.log("else");
    }

    this.setState({hours:hours,minutes:minutes,seconds:seconds});
  }

  getLeading0(num){
      return num < 10 ? '0'+num : num;
  }

  render(){

    return(

        <div>
          <Alert bsStyle="warning">
            <strong>{this.state.message}</strong>
          </Alert>
          <div className="Clock-hours">{this.getLeading0(this.state.hours)} hours</div>
          <div className="Clock-minutes">{this.getLeading0(this.state.minutes)} minutes</div>
          <div className="Clock-seconds">{this.getLeading0(this.state.seconds)} seconds </div>
        </div>
    )
  };

  }

  export default Stopwatch;
