import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./screens/Search";
import MovieScreen from "./screens/Movie";

const stackNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        title: "Search",
      },
    },
    Movie: {
      screen: MovieScreen,
      navigationOptions: {
        title: "Movie Details",
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: { color: "#AAAAAF" },
    },
    initialRouteName: "Search",
  }
);
export default createAppContainer(stackNavigator);
