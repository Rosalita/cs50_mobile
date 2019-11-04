import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Row = (props) => (
  <TouchableOpacity onPress={() => props.selected(props.id)}>
    <View style={styles.row}>
      <Text style={styles.listText}>{props.title}</Text>
    </View>
  </TouchableOpacity>
);

const renderItem = (selected) => (obj) => (
  <Row selected={selected} {...obj.item} />
);

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
  listText: {
    color: "blue",
  },
});

export default renderItem;
