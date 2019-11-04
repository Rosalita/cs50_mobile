import React from "react";
import { View } from "react-native";
import { useNavigationParam } from "react-navigation-hooks";
import { getMovieDetails } from "../API";
import MovieInfo from "./Movie/Info";
import MoviePoster from "./Movie/Poster";
import s from "../Styles";

const initialMovieState = {
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

const Movie = () => {
  const id = useNavigationParam("id");
  const [movieDetails, setMovieDetails] = React.useState(initialMovieState);

  React.useEffect(() => {
    const lookupMovie = async () => {
      const result = await getMovieDetails(id);
      setMovieDetails({ ...movieDetails, ...result });
    };

    lookupMovie();
  }, []);

  return (
    <View style={s.appContainer}>
      <MoviePoster posterUrl={movieDetails.Poster} />
      <MovieInfo {...movieDetails} />
    </View>
  );
};

export default Movie;
