import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { getMovieDetails } from "../API";
import MovieInfo from "./MovieInfo";
import MoviePoster from "./MoviePoster";

export default class Movie extends React.Component {
  state = {
    movieID: "",
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Production: "",
    Rated: "",
    Ratings: [],
    Released: "",
    Response: "",
    Runtime: "",
    Title: "",
    Type: "",
    Website: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: "",
  };

  componentDidMount() {
    this.setState({ movieID: this.props.navigation.getParam("MovieID", null) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movieID !== prevState.movieID) {
      this.lookupMovie(this.state.movieID);
    }
  }

  lookupMovie = async (movieID) => {
    const result = await getMovieDetails(`${movieID}`);
    this.setState({ ...result });
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <MoviePoster posterUrl={this.state.Poster} />
        <MovieInfo {...this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#AAAAAF",
    paddingTop: Constants.statusBarHeight,
  },
});
