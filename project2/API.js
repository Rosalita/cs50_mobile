const URLPrefix = "http://www.omdbapi.com/";
const URLSuffix = "&apikey=29be7072";

// get movie details
// http://www.omdbapi.com/?i=tt1058014&apikey=29be7072

export const getMovieDetails = async (movieID) => {
  const URL = `${URLPrefix}?i=${movieID}${URLSuffix}`;
  const response = await fetch(URL);
  const details = await response.json();
  return details;
};

const processMovie = (raw) => ({
  id: `${raw.imdbID}`,
  title: `${raw.Title}`,
});

export const searchMovies = async (searchString) => {
  const URL = `${URLPrefix}?s=${searchString}${URLSuffix}`;
  const response = await fetch(URL);
  const results = await response.json();

  console.log(results["totalResults"]);

  if (results["Response"] !== "False") {
    const totalResults = results["totalResults"];
    const totalPages = Math.ceil(totalResults / 10);
    const search = results["Search"];
    const processedResults = search.map(processMovie);
    return {
      totalResults: totalResults,
      totalPages: totalPages,
      result: processedResults,
    };
  }
};

export const getMoviePage = async (searchString, pageNum) => {
  const URL = `${URLPrefix}?s=${searchString}${URLSuffix}&page=${pageNum}`;
  const response = await fetch(URL);
  const results = await response.json();
  const search = results["Search"];
  return search.map(processMovie);
};
