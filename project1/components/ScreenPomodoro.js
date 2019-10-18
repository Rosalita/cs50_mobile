import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { vibrate } from "../utils";
import Ionicons from "react-native-vector-icons/Ionicons";

class Count extends React.Component {
  render() {
    return <Text style={styles.count}>{this.props.count}</Text>;
  }
}

class PauseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "stop",
      color: "#9c0000",
    };
  }

  render() {
    return (
      <Button
        title={this.state.text}
        color={this.state.color}
        onPress={() => this.onPress()}
      />
    );
  }

  onPress = () => {
    if (this.state.text === "start") {
      this.setState(() => ({ text: "stop" }));
      this.setState(() => ({ color: "#9c0000" }));
    } else {
      this.setState(() => ({ text: "start" }));
      this.setState(() => ({ color: "#004a00" }));
    }
    this.props.togglePause();
  };
}

export default class ScreenPomodoro extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-hourglass"} size={25} color={tintColour} />
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      mode: "Work",
      isPaused: false,
      count: 1500,
      workSeconds: 1500,
      restSeconds: 300,
    };
  }

  togglePause = () => {
    this.setState((prevState) => ({ isPaused: !prevState.isPaused }));
  };

  componentDidMount() {
    setInterval(this.decrementCount, 1000);
  }

  decrementCount = () => {
    if (this.state.isPaused === false) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
    if (this.state.count === 0) {
      this.toggleMode();
    }
  };

  toggleMode = () => {
    vibrate();
    if (this.state.mode === "Work") {
      this.setState(() => ({ mode: "Rest" }));
      this.setState(() => ({ count: this.state.restSeconds }));
    } else {
      this.setState(() => ({ mode: "Work" }));
      this.setState(() => ({ count: this.state.workSeconds }));
    }
  };

  resetCount = () => {
    if (this.state.mode === "Work") {
      this.setState(() => ({ count: this.state.workSeconds }));
    } else {
      this.setState(() => ({ count: this.state.restSeconds }));
    }
  };

  secondsToTimeString = (seconds) => {
    const secs = seconds % 60;
    const mins = (seconds - secs) / 60;

    let strSecs = secs.toString();
    let strMins = mins.toString();

    if (secs < 10) {
      strSecs = "0" + strSecs;
    }
    if (mins < 10) {
      strMins = "0" + strMins;
    }

    return strMins + ":" + strSecs;
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Pomodoro Timer</Text>
        <Text style={styles.modeText}> Current mode : {this.state.mode}</Text>
        <Count
          count={this.secondsToTimeString(this.state.count)}
          isPaused={this.state.isPaused}
        />
        <View style={styles.row}>
          <PauseButton togglePause={this.togglePause} />
          <Button
            title="reset"
            color="#00096b"
            onPress={() => this.resetCount()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    color: "white",
  },
  modeText: {
    fontSize: 16,
    color: "white",
  },
  count: {
    fontSize: 48,
    color: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  input: {
    backgroundColor: "white",
    minWidth: 100,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
