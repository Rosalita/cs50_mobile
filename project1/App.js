import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {vibrate} from './utils'

const workTime = 1500
const restTime = 300

class Count extends React.Component{
  render(){
    return(
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

class PauseButton extends React.Component{
   constructor(props){
    super(props)
    this.state = {
      text: "stop",
      color: "#9c0000"
    }
  }
  
  render(){
    return(
        <Button title={this.state.text} color={this.state.color} onPress={() => this.onPress()}/>
    )
  }

  onPress = () => {
    if (this.state.text === "start"){
      this.setState(prevState => ({text: "stop"}))
      this.setState(prevState => ({color: "#9c0000"}))
    } else {
      this.setState(prevState => ({text: "start"}))
      this.setState(prevState => ({color: "#004a00"}))
    }
    this.props.togglePause()
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      mode: "Work",
      isPaused: false,
      count: workTime,
    }
  }

  togglePause = () => {
    if (this.state.isPaused === false){
      this.setState(prevState => ({isPaused: true}))
    } else {
      this.setState(prevState => ({isPaused: false}))
    }
  }

  componentDidMount(){
    setInterval(this.decrementCount, 1000)
  }

  decrementCount = () => {
    if (this.state.isPaused === false){
      this.setState(prevState => ({count: prevState.count -1}))
    }
    if (this.state.count === 0){
      this.toggleMode()
    }
  }

  toggleMode = () => {
    vibrate()
    if (this.state.mode === "Work"){
      this.setState(prevState => ({mode: "Rest"}))
      this.setState(prevState => ({count: restTime}))
    } else {
      this.setState(prevState => ({mode: "Work"}))
      this.setState(prevState => ({count: workTime}))
    }
  }

  resetCount = () => {
    if (this.state.mode === "Work"){
       this.setState(prevState => ({count: workTime}))
    } else {
       this.setState(prevState => ({count: restTime}))
    }
  }

secondsToTimeString = (seconds) => {
    const secs = seconds % 60
    const mins = (seconds - secs) / 60
   
    let strSecs = secs.toString()
    let strMins = mins.toString()

    if (secs < 10) {
    strSecs = "0" + strSecs
    }
    if (mins < 10) {
    strMins = "0" + strMins
    }

    return strMins + ":" + strSecs
}

  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text style={styles.modeText}> Current mode : {this.state.mode}</Text>
        <Count count={this.secondsToTimeString(this.state.count)} isPaused={this.state.isPaused} />
        <View style={styles.buttons}> 
          <PauseButton togglePause={this.togglePause}/> 
          <Button title="reset" color="#00096b" onPress={() => this.resetCount()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  appContainer: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
      fontSize: 24,
       color: 'white',
  },
  modeText:{
    fontSize: 16,
    color: 'white',
  },
  count: {
    fontSize: 48,
    color: 'white',
  },
  buttons: {
    flexDirection: "row",
  },
});
