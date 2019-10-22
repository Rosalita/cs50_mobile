import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from 'expo-constants'
import searchMovies from "../API";

export default class search extends React.Component {
    static navigationOptions = {
        title: "Search",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    state = {
        movies: "",
    };

    // TODO Add text input box to get the search string into the API query
    // Write a function that takes a search object and returns the name and imdb numbers of the movies
    // display a list of all movie names
    // when clicked navigate to movie screen and pass it the imdb number
    // movie screen to make another api call to omdbAPI to get the movie details


    getMovies = async () => {
        const results = await searchMovies("starwars")
        console.log("@@@")
        console.log(results["Search"][0].Title)
        this.setState({movies: results})

    }

    componentDidMount(){
        this.getMovies()
    }

    
    render() {
        return (
            <View style={styles.appContainer}>
                <Button
                    title="Movie"
                    onPress={() => this.props.navigation.navigate("Movie")}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#AAAAAF",
        paddingTop: Constants.statusBarHeight,
    },
});
