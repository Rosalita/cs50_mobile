import React from "react";
import { Image, View } from "react-native";
import s from "../../Styles";

const MoviePoster = ({ posterUrl }) => (
  <View style={s.imageWrapper}>
    <Image style={s.image} source={{ uri: posterUrl }} />
  </View>
);

export default MoviePoster;
