import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      mode: "work",
      count: 1500,
    }
  }

  componentDidMount(){
    setInterval(this.decrementCount, 1000)
  }

  decrementCount = () => {
    this.setState(prevState => ({count: prevState.count -1}))
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
        <Text style={styles.count}>{this.state.count}</Text>
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