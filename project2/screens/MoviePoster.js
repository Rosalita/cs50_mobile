import React from "react";
import { Image, StyleSheet, View } from "react-native";

const MoviePoster = ({ posterUrl }) => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={{ uri: posterUrl }} />
  </View>
);

const styles = StyleSheet.create({
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
});

export default MoviePoster;
