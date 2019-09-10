import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Count } from './Count.js'

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Pomodoro Timer</Text>
  
        <Timer />
  
        <Button title="Start" />
        <Button title="Stop" />
        <Button title="Pause" />
      </View>
    );
  }
  
}

class Timer extends React.Component {

  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }
  render() {
    return (
      <View>
        <Text style={styles.timer}>I'm a timer: {this.state.count}</Text>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    fontSize: 30,
  }
});
