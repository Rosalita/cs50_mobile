import React from "react";
import vibrate from "./utils/vibrate";

export const AppContext = React.createContext(null);

export default class AppProvider extends React.Component {
  state = {
    mode: "Work",
    workSecs: 1500,
    restSecs: 300,
  };

  toggleMode = () => {
    vibrate();
    if (this.state.mode === "Work") {
      this.setState(() => ({ mode: "Rest" }));
    } else {
      this.setState(() => ({ mode: "Work" }));
    }
  };

  updateWorkSecs = (secs) => {
    console.log(secs);
    this.setState({ workSecs: secs });
  };

  updateRestSecs = (secs) => {
    console.log(secs);
    this.setState({ restSecs: secs });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          toggleMode: this.toggleMode,
          updateWorkSecs: this.updateWorkSecs,
          updateRestSecs: this.updateRestSecs,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
