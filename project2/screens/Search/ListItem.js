import React from "react";
import { useNavigation } from "react-navigation-hooks";
import { Text, TouchableOpacity, View } from "react-native";
import s from "../../Styles";

const SearchListItem = ({ id, title }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigate("Movie", { id })}>
      <View style={s.row}>
        <Text style={s.listText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchListItem;
