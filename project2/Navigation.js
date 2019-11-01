import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./screens/Search";
import MovieScreen from "./screens/Movie";

const stackNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Movie: MovieScreen,
  },
  {
    initialRouteName: "Search",
  }
);
export default createAppContainer(stackNavigator);
