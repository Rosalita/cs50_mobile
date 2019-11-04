import React from "react";
import { ScrollView, Text } from "react-native";
import s from "../../Styles";

const MovieInfo = (props) => (
  <ScrollView style={s.scroll}>
    <Text>Title: {props.Title}</Text>
    <Text>Year: {props.Year}</Text>
    <Text>Genre: {props.Genre}</Text>
    <Text>Rated: {props.Rated}</Text>
    <Text>Type: {props.Type}</Text>
    <Text>Runtime: {props.Runtime}</Text>
    <Text>Country: {props.Country}</Text>
    <Text>Language: {props.Language}</Text>
    <Text>Released: {props.Released}</Text>
    <Text>DVD: {props.DVD}</Text>
    <Text>BoxOffice: {props.BoxOffice}</Text>
    <Text>Awards: {props.Awards}</Text>
    <Text>Metascore: {props.Metascore}</Text>
    <Text>IMDB ID: {props.imdbID}</Text>
    <Text>IMDB Rating: {props.imdbRating}</Text>
    <Text>IMDB Votes: {props.imdbVotes}</Text>
    <Text>Writer: {props.Writer}</Text>
    <Text>Director: {props.Director}</Text>
    <Text>Actors: {props.Actors}</Text>
    <Text>Plot: {props.Plot}</Text>
    <Text>Production: {props.Production}</Text>
    <Text>Website: {props.Website}</Text>
  </ScrollView>
);

export default MovieInfo;
