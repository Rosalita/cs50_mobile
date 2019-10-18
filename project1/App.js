import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { vibrate } from './utils'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



class ScreenPomodoro extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      mode: "Work",
      isPaused: false,
      count: 1500,
      workSeconds: 1500,
      restSeconds: 300,
    }
  }

  togglePause = () => {
    this.setState(prevState => ({ isPaused: !prevState.isPaused }))
  }

  componentDidMount() {
    setInterval(this.decrementCount, 1000)
  }

  decrementCount = () => {
    if (this.state.isPaused === false) {
      this.setState(prevState => ({ count: prevState.count - 1 }))
    }
    if (this.state.count === 0) {
      this.toggleMode()
    }
  }

  toggleMode = () => {
    vibrate()
    if (this.state.mode === "Work") {
      this.setState(() => ({ mode: "Rest" }))
      this.setState(() => ({ count: this.state.restSeconds }))
    } else {
      this.setState(() => ({ mode: "Work" }))
      this.setState(() => ({ count: this.state.workSeconds }))
    }
  }

  resetCount = () => {
    if (this.state.mode === "Work") {
      this.setState(() => ({ count: this.state.workSeconds }))
    } else {
      this.setState(() => ({ count: this.state.restSeconds }))
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

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text style={styles.modeText}> Current mode : {this.state.mode}</Text>
        <Count count={this.secondsToTimeString(this.state.count)} isPaused={this.state.isPaused} />
        <View style={styles.row}>
          <PauseButton togglePause={this.togglePause} />
          <Button title="reset" color="#00096b" onPress={() => this.resetCount()} />
        </View>
      </View>
    )
  }
}

ScreenPomodoro.navigationOptions = {
  tabBarIcon: ({ tintColour }) => (
    <Ionicons
      name={'md-hourglass'}
      size={25}
      color={tintColour}
    />
  )
}

class ScreenSettings extends React.Component {
  state = {
    workMins: '25',
    workSecs: '0',
    restMins: '300',
    restSecs: '0',
    isValid: false,
  }
  // settings needs to take a function that knows how to update state on pomodoro

  handleWorkMinsChange = mins => {
    this.setState({ workMins: mins })
  }

  handleWorkSecsChange = secs => {
    this.setState({ workSecs: secs })
  }

  handleRestMinsChange = mins => {
    this.setState({ restMins: mins })
  }

  handleRestSecsChange = secs => {
    this.setState({ restSecs: secs })
  }

  validate = () => {
    if (
      +this.state.workMins >= 0 &&
      this.state.workMins.length > 0 &&
      +this.state.workSecs >= 0 &&
      this.state.workSecs.length > 0 &&
      +this.state.restMins >= 0 &&
      this.state.restMins.length > 0 &&
      +this.state.restSecs >= 0 &&
      this.state.restSecs.length > 0
    ) {
      this.setState({ isValid: true })
    } else {
      this.setState({ isValid: false })
    }
  }

  handleSave = () => {
    this.props.onSubmit(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.workMins !== prevState.workMins ||
      this.state.workSecs !== prevState.workSecs ||
      this.state.restMins !== prevState.restMins ||
      this.state.restSecs !== prevState.restSecs
    ) {
      this.validate()
    }
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Settings</Text>
        <View style={styles.row}>
          <Text style={styles.titleText}>Work Minutes</Text>
          <TextInput
            style={styles.input}
            value={this.state.workMins}
            onChangeText={this.handleWorkMinsChange}
            placeholder="Minutes"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Work Seconds</Text>
          <TextInput
            style={styles.input}
            value={this.state.workSecs}
            onChangeText={this.handleWorkSecsChange}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Rest Minutes</Text>
          <TextInput
            style={styles.input}
            value={this.state.restMins}
            onChangeText={this.handleRestMinsChange}
            placeholder="Minutes"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Rest Seconds</Text>
          <TextInput
            style={styles.input}
            value={this.state.restSecs}
            onChangeText={this.handleRestSecsChange}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Button title="Save" onPress={this.handleSave} disabled={!this.state.isValid} />
        </View>
      </View>
    )
  }
}

ScreenSettings.navigationOptions = {
  tabBarIcon: ({ tintColour }) => (
    <Ionicons
      name={'md-settings'}
      size={25}
      color={tintColour}
    />
  )
}

const TabNavigator = createBottomTabNavigator(
  {
    "Pomodoro": ScreenPomodoro,
    "Settings": ScreenSettings,
  },
  {
    tabBarOptions: {
      activeTintColor: '#FF1493',
    },
  }
)

const AppNavigation = createAppContainer(TabNavigator);

export default class App extends React.Component {

  render() {
    return (
      <AppNavigation />
    );
  }
}

class Count extends React.Component {
  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

class PauseButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "stop",
      color: "#9c0000"
    }
  }

  render() {
    return (
      <Button title={this.state.text} color={this.state.color} onPress={() => this.onPress()} />
    )
  }

  onPress = () => {
    if (this.state.text === "start") {
      this.setState(() => ({ text: "stop" }))
      this.setState(() => ({ color: "#9c0000" }))
    } else {
      this.setState(() => ({ text: "start" }))
      this.setState(() => ({ color: "#004a00" }))
    }
    this.props.togglePause()
  }
}

const styles = StyleSheet.create({

  appContainer: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    color: 'white',
  },
  modeText: {
    fontSize: 16,
    color: 'white',
  },
  count: {
    fontSize: 48,
    color: 'white',
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    minWidth: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
