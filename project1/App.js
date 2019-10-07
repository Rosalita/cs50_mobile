import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


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
    }
  }
  
  render(){
    return(
        <Button title={this.state.text} onPress={() => this.onPress()}/>
    )
  }

  onPress = () => {
    if (this.state.text === "start"){
      this.setState(prevState => ({text: "stop"}))
    } else {
      this.setState(prevState => ({text: "start"}))
    }
    this.props.togglePause()
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      mode: "work",
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
    if (this.state.mode === "work"){
      this.setState(prevState => ({mode: "rest"}))
      this.setState(prevState => ({count: restTime}))
    } else {
      this.setState(prevState => ({mode: "work"}))
      this.setState(prevState => ({count: workTime}))
    }
  }

  resetCount = () => {
    if (this.state.mode === "work"){
       this.setState(prevState => ({count: workTime}))
    } else {
       this.setState(prevState => ({count: restTime}))
    }
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text> Current mode : {this.state.mode}</Text>
        <Count count={this.state.count} isPaused={this.state.isPaused} />
        <View style={styles.buttons}> 
         <PauseButton togglePause={this.togglePause}/> 
          <Button title="reset" onPress={() => this.resetCount()}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText:{
      fontSize: 24,
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: "row",
  },
});

