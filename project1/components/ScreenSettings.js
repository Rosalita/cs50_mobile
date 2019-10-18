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
    isValid: false,
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.titleText}>Settings</Text>
        <View style={styles.row}>
          <Text style={styles.titleText}>Work Seconds</Text>
          <TextInput
            style={styles.input}
            value={`${this.context.workSecs}`}
            onChangeText={(secs) => this.context.updateWorkSecs(Number(secs))}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.titleText}>Rest Seconds</Text>
          <TextInput
            style={styles.input}
            value={`${this.context.restSecs}`}
            onChangeText={(secs) => this.context.updateRestSecs(Number(secs))}
            placeholder="Seconds"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Button
            title="Save"
            onPress={() => void 0}
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
