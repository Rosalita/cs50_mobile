import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#AAAAAF",
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    padding: 20,
  },
  listText: {
    color: "blue",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "black",
    minWidth: 200,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  imageWrapper: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 300,
  },
  scroll: {
    marginTop: 10,
    marginBottom: 10,
  },
});
