import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Constants from 'expo-constants'
import { getMovieDetails } from "../API";


export default class movie extends React.Component {
    static navigationOptions = {
        title: "Movie Details",
        headerTitleStyle: { color: "#AAAAAF", }
    };

    state = {
        movieID: "",
        actors: "",
        awards: "",
        boxOffice: "",
        country: "",
        dvd: "",
        director: "",
        genre: "",
        language: "",
        metascore: "",
        plot: "",
        poster: "",
        production: "",
        rated: "",
        ratings: [],
        released: "",
        runtime: "",
        title: "",
        type: "",
        website: "",
        writer: "",
        year: "",
        imdbID: "",
        imdbRating: "",
        imdbVotes: "",
    };

    componentDidMount() {
        this.setState({ movieID: this.props.navigation.getParam('MovieID', null) })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.movieID !== prevState.movieID) {
            this.lookupMovie(this.state.movieID)
        }
    }

    lookupMovie = async (movieID) => {
        const result = await getMovieDetails(`${movieID}`)
        console.log(result)

        if (result["Actors"] !== undefined) {
            this.setState({ actors: result["Actors"] })
        }
        if (result["Awards"] !== undefined) {
            this.setState({ awards: result["Awards"] })
        }
        if (result["BoxOffice"] !== undefined) {
            this.setState({ boxOffice: result["BoxOffice"] })
        }
        if (result["Country"] !== undefined) {
            this.setState({ country: result["Country"] })
        }
        if (result["DVD"] !== undefined) {
            this.setState({ dvd: result["DVD"] })
        }
        if (result["Director"] !== undefined) {
            this.setState({ director: result["Director"] })
        }
        if (result["Genre"] !== undefined) {
            this.setState({ genre: result["Genre"] })
        }
        if (result["Language"] !== undefined) {
            this.setState({ language: result["Language"] })
        }
        if (result["Metascore"] !== undefined) {
            this.setState({ metascore: result["Metascore"] })
        }
        if (result["Plot"] !== undefined) {
            this.setState({ plot: result["Plot"] })
        }
        if (result["Poster"] !== undefined) {
            this.setState({ poster: result["Poster"] })
        }
        if (result["Production"] !== undefined) {
            this.setState({ production: result["Production"] })
        }
        if (result["Rated"] !== undefined) {
            this.setState({ rated: result["Rated"] })
        }
        if (result["Released"] !== undefined) {
            this.setState({ released: result["Released"] })
        }
        if (result["Runtime"] !== undefined) {
            this.setState({ runtime: result["Runtime"] })
        }
        if (result["Title"] !== undefined) {
            this.setState({ title: result["Title"] })
        }
        if (result["Type"] !== undefined) {
            this.setState({ type: result["Type"] })
        }
        if (result["Website"] !== undefined) {
            this.setState({ website: result["Website"] })
        }
        if (result["Writer"] !== undefined) {
            this.setState({ writer: result["Writer"] })
        }
        if (result["Year"] !== undefined) {
            this.setState({ year: result["Year"] })
        }
        if (result["imdbID"] !== undefined) {
            this.setState({ imdbID: result["imdbID"] })
        }
        if (result["imdbRating"] !== undefined) {
            this.setState({ imdbRating: result["imdbRating"] })
        }
        if (result["imdbVotes"] !== undefined) {
            this.setState({ imdbVotes: result["imdbVotes"] })
        }
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <Text>Poster: {this.state.poster}</Text>
                <Text>Title: {this.state.title} </Text>
                <Text>Year: {this.state.year}</Text>
                <Text>Genre: {this.state.genre}</Text>
                <Text>Rated:{this.state.rated}</Text>
                <Text>Type: {this.state.type}</Text>
                <Text>Runtime: {this.state.runtime}</Text>
                <Text>Country: {this.state.country}</Text>
                <Text>Language: {this.state.language}</Text>
                <Text>Released: {this.state.released}</Text>
                <Text>DVD: {this.state.dvd}</Text>
                <Text>BoxOffice: {this.state.boxOffice}</Text>
                <Text>Awards: {this.state.awards}</Text>
                <Text>Metascore: {this.state.metascore}</Text>
                <Text>IMDB ID:{this.state.imdbID} </Text>
                <Text>IMDB Rating: {this.state.imdbRating}</Text>
                <Text>IMDB Votes: {this.state.imdbVotes}</Text>
                <Text>Writer: {this.state.writer}</Text>
                <Text>Director {this.state.director}</Text>
                <Text>Actors: {this.state.actors}</Text>
                <Text>Plot: {this.state.plot}</Text>
                <Text>Production: {this.state.production}</Text>
                <Text>Website: {this.state.website}</Text>
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
