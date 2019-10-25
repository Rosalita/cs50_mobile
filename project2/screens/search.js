import React from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Constants from 'expo-constants'
import { searchMovies, getMoviePage } from "../API";


const Row = props => (
    <View style={styles.row}>
        <Text>{props.title}</Text>
    </View>
)
const renderItem = obj => <Row {...obj.item} />

export default class search extends React.Component {
    static navigationOptions = {
        title: "Search",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    state = {
        searchString: "",
        movies: "",
        totalResults: 0,
        totalPages: 0,
        nextPage: 0,
    };

    // TODO
    // when clicked navigate to movie screen and pass it the imdb number
    // movie screen to make another api call to omdbAPI to get the movie details

    getMovies = async (searchString) => {
        const results = await searchMovies(`${searchString}`)
        console.log(results)

        if (results !== undefined) {
            this.setState({ movies: results["result"] })
            this.setState({ totalResults: results["totalResults"] })
            this.setState({ totalPages: results["totalPages"] })

            if (results["totalPages"] > 1) {
                this.setState({ nextPage: 2 })
            }

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchString !== prevState.searchString) {
            this.getMovies(this.state.searchString)
        }
    }

    updateSearch = searchString => {
        this.setState({
            searchString: searchString,
            movies: "",
            totalResults: 0,
            totalPages: 0,
            nextPage: 0
        })
    }

    displayMore = async () => {
        if (this.state.totalPages === 1) return
        if (this.state.nextPage === this.state.totalPages) return

        const results = await getMoviePage(this.state.searchString, this.state.nextPage)

        if (results !== undefined) {
            this.setState(prevState => ({ movies: [...prevState.movies, ...results] }));

            if (this.state.nextPage < this.state.totalPages) {
                this.setState({ nextPage: this.state.nextPage++ })
            }
        }
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

                <Text>Results found: {this.state.totalResults}</Text>
                <FlatList
                    data={this.state.movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    onEndReached={this.displayMore}
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
