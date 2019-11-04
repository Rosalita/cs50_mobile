import React from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { searchMovies, getMoviePage } from "../API";
import SearchListItem from "./Search/ListItem";
import s from "../Styles";

const Search = () => {
  const [searchString, setSearchString] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [totalResults, setTotalResults] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [nextPage, setNextPage] = React.useState(0);

  React.useEffect(() => {
    const getMovies = async () => {
      const { result, totalResults, totalPages } = await searchMovies(
        searchString
      );

      if (result) {
        setMovies(result);
        setTotalResults(totalResults);
        setTotalPages(totalPages);

        if (totalPages > 1) {
          setNextPage(2);
        }
      }
    };

    if (searchString !== "") {
      getMovies();
    }
  }, [searchString]);

  const displayMore = async () => {
    if (totalPages > 1 || nextPage < totalPages) {
      const results = await getMoviePage(searchString, nextPage);

      if (Array.isArray(results)) {
        setMovies([...movies, ...results]);
      }

      if (nextPage < totalPages) {
        setNextPage(nextPage + 1);
      }
    }
  };

  return (
    <View style={s.appContainer}>
      <Text>Find a movie</Text>
      <TextInput
        style={s.searchInput}
        value={searchString}
        onChangeText={setSearchString}
      />

      <Text>Results found: {totalResults}</Text>
      <FlatList
        onEndReached={displayMore}
        data={movies}
        renderItem={({ item }) => (
          <SearchListItem id={item.id} title={item.title} />
        )}
        keyExtractor={(item, i) => `${item.id}-${i}`}
      />
    </View>
  );
};

export default Search;
