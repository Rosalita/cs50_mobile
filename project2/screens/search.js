import React from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Constants from 'expo-constants'
import searchMovies from "../API";


const Row = props => (
    <View style={styles.row}>
        <Text>{props.title}</Text>
    </View>
)
const renderItem = obj => <Row {...obj.item}/>


export default class search extends React.Component {
    static navigationOptions = {
        title: "Search",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    state = {
        searchString: "",
        movies: "",
    };

    // TODO
    // when clicked navigate to movie screen and pass it the imdb number
    // movie screen to make another api call to omdbAPI to get the movie details


    getMovies = async (searchString) => {
        const results = await searchMovies(`${searchString}`)
        console.log(results)

        if (results !== undefined) {
            this.setState({ movies: results })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchString !== prevState.searchString) {
            this.getMovies(this.state.searchString)
        }
    }

    updateSearch = searchString => {
        this.setState({ searchString })
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <Text>Find a movie</Text>
                <TextInput
                    style={styles.searchInput}
                    value={this.state.searchString}
                    onChangeText={this.updateSearch}
                />

                <FlatList
                    data={this.state.movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

                {/* <Button
                    title="Movie"
                    onPress={() => this.props.navigation.navigate("Movie")}
                /> */}
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: "#AAAAAF",
        paddingTop: Constants.statusBarHeight,
        alignItems: "center"
    },
    searchInput: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: 'black',
        minWidth: 200,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    row: { padding: 20 },
});
