import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import searchScreen from "./screens/search";
import movieScreen from "./screens/movie";

const stackNavigator = createStackNavigator(
    {
        "Search": searchScreen,
        "Movie": movieScreen,
    },
    {
        initialRouteName: "Search",
    }
)
export default createAppContainer(stackNavigator);