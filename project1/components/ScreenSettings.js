import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppContext } from "../AppContext";

export default class ScreenSettings extends React.Component {
  static contextType = AppContext;
  static navigationOptions = {
    tabBarIcon: ({ tintColour }) => (
      <Ionicons name={"md-settings"} size={25} color={tintColour} />
    ),
  };

  state = {
    textInputWorkSecs : this.context.workSecs,
    textInputRestSecs : this.context.restSecs,
    isValid: false,
  };

  validate = () => {
    if (
      +this.state.textInputWorkSecs >= 0 &&
      +this.state.textInputRestSecs >= 0 
    ) {
      this.setState({ isValid: true })
    } else {
      this.setState({ isValid: false })
    }
  }

  updateTextInputWorkSecs = (secs) => {
    this.setState({textInputWorkSecs: secs});
  }

  updateTextInputRestSecs = (secs) => {
    this.setState({textInputRestSecs: secs});
  }


  componentDidMount() {
    this.setState({textInputWorkSecs: this.context.workSecs})
    this.setState({textInputRestSecs: this.context.restSecs})
    this.validate()
  }

  save = () => {
    this.context.updateWorkSecs(Number(this.state.textInputWorkSecs))
    this.context.updateRestSecs(Number(this.state.textInputRestSecs))
    this.context.toggleResetNeeded()
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Settings</Text>
        <View style={styles.row}>
          <Text style={styles.titleText}>Work Seconds</Text>
          <TextInput
            style={styles.input}
            value={`${this.state.textInputWorkSecs}`}
            onChangeText={(secs) => this.updateTextInputWorkSecs(Number(secs))}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Rest Seconds</Text>
          <TextInput
            style={styles.input}
            value={`${this.state.textInputRestSecs}`}
            onChangeText={(secs) => this.updateTextInputRestSecs(Number(secs))}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Button
            title="Save"
            onPress={this.save}
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
