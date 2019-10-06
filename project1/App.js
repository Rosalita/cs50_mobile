import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Count extends React.Component{
  shouldComponentUpdate(nextProps){
    // check if timer is paused
    return !(nextProps.isPaused)
  }

  componentDidUpdate(){
    // check if timer reached 0
  }

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
      count: 1500,
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
  }

  toggleMode = () => {
    if (this.state.mode === "work"){
      this.setState(prevState => ({mode: "rest"}))
    } else {
      this.setState(prevState => ({mode: "work"}))
    }
  }

  render(){
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text> Current mode : {this.state.mode}</Text>
        <Count count={this.state.count} isPaused={this.state.isPaused} />
        <PauseButton togglePause={this.togglePause}/>
        <Button title="test - change mode" onPress={() => this.toggleMode()}/>
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
});

