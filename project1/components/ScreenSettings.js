import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class ScreenSettings extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-settings"} size={25} color={tintColour} />
    ),
  };

  state = {
    workMins: "25",
    workSecs: "0",
    restMins: "300",
    restSecs: "0",
    isValid: false,
  };
  // settings needs to take a function that knows how to update state on pomodoro

  handleWorkMinsChange = (mins) => {
    this.setState({ workMins: mins });
  };

  handleWorkSecsChange = (secs) => {
    this.setState({ workSecs: secs });
  };

  handleRestMinsChange = (mins) => {
    this.setState({ restMins: mins });
  };

  handleRestSecsChange = (secs) => {
    this.setState({ restSecs: secs });
  };

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
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  };

  handleSave = () => {
    this.props.onSubmit(this.state);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.workMins !== prevState.workMins ||
      this.state.workSecs !== prevState.workSecs ||
      this.state.restMins !== prevState.restMins ||
      this.state.restSecs !== prevState.restSecs
    ) {
      this.validate();
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
          <Button
            title="Save"
            onPress={this.handleSave}
            disabled={!this.state.isValid}
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
